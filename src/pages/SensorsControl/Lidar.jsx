import React from 'react';

const Lidar = () => {
    return (
        <div className="doc-section" style={{ animationDelay: '0s', opacity: 1 }}>
            <h2>Lidar Setup</h2>
            <div className="sub-section">
                <h3>RTX Lidar</h3>
                <p>
                    Configure the RTX Lidar sensor and publish scan data to ROS 2.
                </p>
            </div>
        </div>
    );
};

export default Lidar;
