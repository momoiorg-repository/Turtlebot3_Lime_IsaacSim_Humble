import React from 'react';

const Drive = () => {
    return (
        <div className="doc-section" style={{ animationDelay: '0s', opacity: 1 }}>
            <h2 id="drive-cmd-vel">Drive (Cmd Vel)</h2>
            <div className="sub-section">
                <h3 id="setting-up-differential-drive">Setting up Differential Drive</h3>
                <p>
                    To control the Turtlebot3 using ROS 2 `cmd_vel` messages, we need to convert vehicle speed to wheel speeds using Action Graphs.
                </p>
                <h4>Key Nodes Required:</h4>
                <ul>
                    <li><strong>ROS2 Subscriber (Twist):</strong> Subscribes to `/cmd_vel`.</li>
                    <li><strong>Scale To 3:</strong> Extracts linear (X) and angular (Z) velocities.</li>
                    <li><strong>Differential Controller:</strong> Converts linear/angular velocity to wheel speeds. Set <code>Wheel Distance</code> and <code>Wheel Radius</code> according to the robot model.</li>
                    <li><strong>Articulation Controller:</strong> Applies the calculated speeds to the robot's joints.</li>
                </ul>
                <h4>Graph Setup Steps:</h4>
                <ol>
                    <li>Open <strong>Window &gt; Visual Scripting &gt; Action Graph</strong>.</li>
                    <li>Add a <strong>On Playback Tick</strong> node to trigger execution.</li>
                    <li>Add <strong>ROS2 Subscriber</strong> (Type: <code>geometry_msgs/Twist</code>, Topic: <code>/cmd_vel</code>).</li>
                    <li>Connect output to <strong>Differential Controller</strong> inputs.</li>
                    <li>Connect Differential Controller outputs (Velocity) to <strong>Articulation Controller</strong>.</li>
                    <li>Assign the robot's wheel joints to the Articulation Controller target.</li>
                </ol>
            </div>
        </div>
    );
};

export default Drive;
