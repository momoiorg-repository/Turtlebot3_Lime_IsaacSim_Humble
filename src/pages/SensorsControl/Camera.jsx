import React from 'react';

const Camera = () => {
    return (
        <div className="doc-section" style={{ animationDelay: '0s', opacity: 1 }}>
            <h2 id="camera-setup">Camera Setup</h2>

            <div className="sub-section">
                <h3 id="rgb-camera">RGB Camera</h3>
                <img src="/Turtlebot3_Lime_IsaacSim_Humble/assets/camera_view.png" alt="Camera View" className="doc-image" />
                <p>
                    The RGB camera provides visual data for navigation and object detection.
                </p>
                <ol>
                    <li><strong>Add Sensor:</strong> Go to <code>Create &gt; Sensors &gt; Camera</code> and place it on the robot (e.g., linked to `base_link`).</li>
                    <li><strong>Create Action Graph:</strong>
                        <ul>
                            <li>Add <strong>Isaac Create Render Product</strong>: Set `cameraPrim` to your camera path.</li>
                            <li>Add <strong>ROS 2 Camera Helper</strong>:
                                <ul>
                                    <li>Connect `Render Product` output to Helper input.</li>
                                    <li>Set `type` to <code>rgb</code> (or <code>depth</code>).</li>
                                    <li>Set `topicName` (e.g., <code>/camera/rgb</code>).</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ol>
            </div>

            <div className="sub-section">
                <h3 id="camera-noise">Adding Noise</h3>
                <p>
                    Simulate real-world imperfections by adding noise using <strong>Replicator</strong> or custom OmniGraph nodes.
                </p>
                <ul>
                    <li><strong>Warp Kernel:</strong> Use <code>wp.rand_init</code> and <code>wp.randn</code> to generate Gaussian noise.</li>
                    <li><strong>Replicator:</strong> Register a new annotator with <code>rep.annotators.register</code> that applies the noise function to the RGB data before publishing.</li>
                </ul>
            </div>
        </div>
    );
};

export default Camera;
