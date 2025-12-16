import React from 'react';

const ImportGuide = () => {
    return (
        <div className="doc-section" style={{ animationDelay: '0s', opacity: 1 }}>
            <h2 id="import-guide">Import Guide</h2>
            <div className="sub-section">
                <h3 id="urdf-import">URDF Import & Basic Setup</h3>
                <p>
                    Follow these steps to import the Turtlebot3 Lime into Isaac Sim:
                </p>
                <ol>
                    <li>
                        <strong>Clone Repository:</strong>
                        <pre><code>git clone -b $ROS_DISTRO https://github.com/ROBOTIS-GIT/turtlebot3.git turtlebot3</code></pre>
                    </li>
                    <li>
                        <strong>Pre-process URDF:</strong>
                        Navigate to <code>turtlebot3/turtlebot3_description/urdf</code> and run:
                        <pre><code>namespace="" xacro ./turtlebot3_burger.urdf "namespace:=${'{'}namespace:+$namespace/{'}'}" &gt; tb3_burger_processed.urdf</code></pre>
                    </li>
                    <li>
                        <strong>Import to Isaac Sim:</strong>
                        <ul>
                            <li>Open Isaac Sim and load a stage (e.g., Simple Room).</li>
                            <li>Go to <strong>File &gt; Import</strong> and select <code>tb3_burger_processed.urdf</code>.</li>
                            <li>In the dialog, uncheck "Fix Base Link" (unless stationary).</li>
                            <li>Set <code>wheel_left_joint</code> and <code>wheel_right_joint</code> to <strong>Velocity</strong> drive.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Verify:</strong> Ensure the robot sits correctly on the ground plane.
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default ImportGuide;
