import React from 'react';

const Lidar = () => {
    return (
        <div className="doc-section" style={{ animationDelay: '0s', opacity: 1 }}>
            <h2 id="lidar-setup">Lidar Setup</h2>
            <div className="sub-section">
                <h3 id="rtx-lidar">RTX Lidar</h3>
                <img src="/Turtlebot3_Lime_IsaacSim_Humble/assets/lidar_sim.png" alt="Lidar Simulation" className="doc-image" />
                <p>
                    Use the RTX Lidar for high-fidelity sensor simulation. It provides accurate ray-casting and interaction with materials in the scene.
                </p>
                <ol>
                    <li><strong>Add Sensor:</strong> Go to <code>Create &gt; Sensors &gt; RTX Lidar &gt; NVIDIA &gt; Example Rotary</code>.</li>
                    <li><strong>Place Sensor:</strong> Parent it to the robot (e.g., <code>base_scan</code> link) and zero out transforms.</li>
                    <li><strong>Action Graph Setup:</strong>
                        <ul>
                            <li><strong>Isaac Run One Simulation Frame:</strong> Initialize the render pipeline.</li>
                            <li><strong>Isaac Create Render Product:</strong> Select the RTX Lidar prim.</li>
                            <li><strong>ROS 2 RTX Lidar Helper:</strong>
                                <ul>
                                    <li>Input: Render Product Path.</li>
                                    <li>Type: <code>laser_scan</code> or <code>point_cloud</code>.</li>
                                    <li>Topic: <code>/scan</code> or <code>/point_cloud</code>.</li>
                                    <li>FrameId: <code>base_scan</code>.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default Lidar;
