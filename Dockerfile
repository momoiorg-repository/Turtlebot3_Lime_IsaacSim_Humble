# Merged Dockerfile: Isaac Sim 4.5.0 + ROS 2 Humble + TurtleBot3 Lime workspace

# Base image: Isaac Sim 4.5.0 official container
FROM nvcr.io/nvidia/isaac-sim:4.5.0

# Use bash as default shell
SHELL ["/bin/bash", "-c"]

# Non-interactive apt and locale
ENV DEBIAN_FRONTEND=noninteractive
ENV LANG=C.UTF-8
ENV LC_ALL=C.UTF-8
ENV ROS_DISTRO=humble

# Timezone setup
RUN echo 'Etc/UTC' > /etc/timezone \
    && ln -sf /usr/share/zoneinfo/Etc/UTC /etc/localtime \
    && apt-get update \
    && apt-get install -qq -y --no-install-recommends tzdata \
    && rm -rf /var/lib/apt/lists/*

# Install basic tools, ROS apt key, and curl
RUN apt-get update \
    && apt-get install -qq -y --no-install-recommends \
       dirmngr gnupg2 curl \
    && rm -rf /var/lib/apt/lists/*

# Configure ROS 2 apt repository key
RUN set -eux; \
    key='C1CF6E31E6BADE8868B172B4F42ED6FBAB17C654'; \
    export GNUPGHOME="$(mktemp -d)"; \
    gpg --batch --keyserver keyserver.ubuntu.com --recv-keys "$key"; \
    mkdir -p /usr/share/keyrings; \
    gpg --batch --export "$key" > /usr/share/keyrings/ros2-latest-archive-keyring.gpg; \
    gpgconf --kill all; \
    rm -rf "$GNUPGHOME"

# Add ROS 2 repository
RUN echo "deb [signed-by=/usr/share/keyrings/ros2-latest-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu jammy main" \
    > /etc/apt/sources.list.d/ros2-latest.list

# Install ROS 2 core, Gazebo, GUI tools, CycloneDDS, TurtleBot3 Lime deps, and build tools
RUN apt-get update \
    && apt-get install -y --allow-downgrades --no-install-recommends \
       # ROS 2 core & base
       ros-humble-ros-core=0.10.0-1* \
       ros-humble-ros-base=0.10.0-1* \
       # Gazebo integration
       ros-humble-gazebo-* \
       # RMW implementation
       ros-humble-rmw-cyclonedds-cpp \
       # GUI tools
       ros-humble-rqt* ros-humble-rviz2 \
       # TurtleBot3 Lime dependencies
       ros-humble-dynamixel-sdk \
       ros-humble-ros2-control \
       ros-humble-cartographer ros-humble-cartographer-ros \
       ros-humble-navigation2 ros-humble-nav2-bringup \
       ros-humble-ros2-controllers ros-humble-gripper-controllers \
       ros-humble-moveit ros-humble-moveit-servo \
       ros-humble-realsense2-camera-msgs ros-humble-realsense2-description \
       # Allow downgrade for brotli
       libbrotli1=1.0.9-2build6 \
       # Build & Python tools
       build-essential git python3-colcon-common-extensions python3-colcon-mixin python3-rosdep python3-vcstool python3-pip \
    && rm -rf /var/lib/apt/lists/*

# Initialize rosdep
RUN rosdep init && rosdep update --rosdistro $ROS_DISTRO

# Configure colcon mixins & metadata
RUN colcon mixin add default \
      https://raw.githubusercontent.com/colcon/colcon-mixin-repository/master/index.yaml \
    && colcon mixin update \
    && colcon metadata add default \
      https://raw.githubusercontent.com/colcon/colcon-metadata-repository/master/index.yaml \
    && colcon metadata update

# Install Miniconda
RUN curl -sSL https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -o miniconda.sh \
    && bash miniconda.sh -b -p /opt/conda \
    && rm miniconda.sh \
    && /opt/conda/bin/conda clean --all --yes \
    && ln -s /opt/conda/etc/profile.d/conda.sh /etc/profile.d/conda.sh \
    && echo ". /opt/conda/etc/profile.d/conda.sh" >> ~/.bashrc \
    && echo "conda activate base" >> ~/.bashrc

# Make conda available in the current session
ENV PATH="/opt/conda/bin:${PATH}"

# Install Isaac lab
RUN apt-get update \
    && git clone https://github.com/umegan/IsaacLab_lime.git /IsaacLab \
    && cd /IsaacLab \
    && ln -s /isaac-sim _isaac_sim \
    && ./isaaclab.sh --conda lab \
    && . /opt/conda/etc/profile.d/conda.sh \
    && conda activate lab \
    && ./isaaclab.sh --install 


# Option 1: Clone your local TurtleBot3 Lime sources at runtime via -v
# Option 2: Uncomment below to fetch directly (adjust URL as needed)
# RUN git clone https://github.com/ROBOTIS-GIT/turtlebot3.git src/turtlebot3

# Install any missing dependencies via rosdep, then build the workspace
# RUN rosdep install --from-paths src --ignore-src -r -y \
#     && source /opt/ros/$ROS_DISTRO/setup.bash \
#     && colcon build --symlink-install


# Environment setup for runtime
RUN echo 'export RMW_IMPLEMENTATION=rmw_cyclonedds_cpp' >> ~/.bashrc \
    && echo 'export ROS_DOMAIN_ID=31' >> ~/.bashrc \
    && echo 'source /opt/ros/$ROS_DISTRO/setup.bash' >> ~/.bashrc \
    && echo 'export XDG_RUNTIME_DIR=/tmp/runtime-root' >> ~/.bashrc
    
# Default command
CMD ["/bin/bash"]
