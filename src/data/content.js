export const content = [
    {
        id: "intro",
        title: "1. Introduction",
        sections: [
            {
                subtitle: "1.1 Document Overview",
                text: "This document details the practical steps for integrating an existing TurtleBot3 Lime robot into the Isaac Sim environment. It covers environment setup, ROS2 integration, sensor simulation, 6-axis arm control, AI implementation, and reinforcement learning applications."
            },
            {
                subtitle: "1.2 Background and Purpose",
                text: "This guide aims to provide comprehensive coverage of robot development from both simulation and real-world perspectives, serving as an advanced application case study using NVIDIA technologies."
            },
            {
                subtitle: "1.3 Target Audience",
                text: "Designed for advanced users interested in the new era of ROS and simulation-based development."
            }
        ]
    },
    {
        id: "env-setup",
        title: "2. Environment Setup",
        sections: [
            {
                subtitle: "2.1 Software and Hardware Requirements",
                text: "Details on the necessary machine specs and software dependencies. *Make sure to check the Docker setup guide.*"
            },
            {
                subtitle: "2.2 Isaac Sim Installation",
                text: "Step-by-step guide to installing and setting up NVIDIA Isaac Sim."
            },
            {
                subtitle: "2.3 TurtleBot3 Lime Preparation",
                text: "Overview of the TurtleBot3 Lime hardware and initial preparation steps."
            }
        ]
    },
    {
        id: "isaac-import",
        title: "3. Importing to Isaac Sim",
        sections: [
            {
                subtitle: "3.1 Lime Import Process",
                text: "How to import the Lime robot model into Isaac Sim."
            },
            {
                subtitle: "3.2 URDF Design for Isaac Sim",
                text: "Best practices for designing and modifying URDF files for accurate simulation."
            }
        ]
    },
    {
        id: "movement",
        title: "4. Robot Movement in Isaac Sim",
        sections: [
            {
                subtitle: "4.1 Implementation Example",
                text: "A demonstration of basic robot movement within the simulator."
            },
            {
                subtitle: "4.2 ROS2 Action Graph Setup",
                text: "Configuring the Action Graph to enable ROS2 communication."
            },
            {
                subtitle: "4.3 Wheel Control",
                text: "Creating and explaining the Action Graph for differential drive wheel control."
            }
        ]
    },
    {
        id: "sensors",
        title: "5. Sensors & Peripherals",
        sections: [
            {
                subtitle: "5.1 Sensor Configuration",
                text: "Setting up LIDAR, cameras, and other sensors. Includes methods for saving data for reinforcement learning and imitation learning."
            },
            {
                subtitle: "5.2 Data Processing Workflow",
                text: "Workflow for acquiring and processing sensor data."
            },
            {
                subtitle: "5.3 Environment Integration",
                text: "How to link sensor data with the simulation environment."
            }
        ]
    },
    {
        id: "arm-control",
        title: "6. 6-Axis Arm Control",
        sections: [
            {
                subtitle: "6.1 Basic Configuration",
                text: "Understanding the structure and operation principles of the 6-axis arm."
            },
            {
                subtitle: "6.2 Control Algorithms",
                text: "Implementation examples using MoveIt2 and PID control."
            }
        ]
    },
    {
        id: "ai-vision",
        title: "7. AI Implementation: Vision",
        sections: [
            {
                subtitle: "7.1 Overview",
                text: "Introduction to image recognition technologies in robotics."
            },
            {
                subtitle: "7.2 Pre-trained Models",
                text: "Utilizing and customizing pre-trained models for specific tasks."
            },
            {
                subtitle: "7.3 System Integration",
                text: "Verifying system operation and managing resources."
            }
        ]
    },
    {
        id: "pick-place",
        title: "8. Pick and Place",
        sections: [
            {
                subtitle: "8.1 Implementation",
                text: "Implementing a complete Pick and Place task using the integrated arm and vision system."
            }
        ]
    },
    {
        id: "case-studies",
        title: "9. Case Studies",
        sections: [
            {
                subtitle: "9.1 Real Integration Examples",
                text: "Showcase of actual system integrations."
            },
            {
                subtitle: "9.2 Deployment Process",
                text: "Transitioning from development to real-world operation."
            },
            {
                subtitle: "9.3 Future Outlook",
                text: "Current challenges and future development directions."
            }
        ]
    },
    {
        id: "conclusion",
        title: "10. Conclusion",
        sections: [
            {
                subtitle: "10.1 Review",
                text: "Recap of the entire integration process."
            },
            {
                subtitle: "10.2 Key Takeaways",
                text: "Summary of the most important points."
            },
            {
                subtitle: "10.3 Next Steps",
                text: "Suggestions for further development."
            }
        ]
    },
    {
        id: "references",
        title: "11. References",
        sections: [
            {
                subtitle: "Links",
                text: "NVIDIA Documentation, CuMotion, and other related resources."
            }
        ]
    }
];
