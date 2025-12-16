import React from 'react';

const Drive = () => {
    return (
        <div className="doc-section" style={{ animationDelay: '0s', opacity: 1 }}>
            <h2>Drive (Cmd Vel)</h2>
            <div className="sub-section">
                <h3>Setting up Differential Drive</h3>
                <p>
                    Configure the Action Graph to control the Turtlebot3 Lime using ROS 2 `cmd_vel` messages.
                </p>
            </div>
        </div>
    );
};

export default Drive;
