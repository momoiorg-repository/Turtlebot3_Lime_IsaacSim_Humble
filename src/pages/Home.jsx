import React from 'react';

const Home = () => {
    return (
        <div className="doc-section" style={{ animationDelay: '0s', opacity: 1 }}>
            <h2>Welcome to the Isaac Sim Guide</h2>
            <div className="sub-section">
                <h3>Introduction</h3>
                <p>
                    This documentation provides a comprehensive tutorial on importing and manipulating the Turtlebot3 Lime in NVIDIA Isaac Sim.
                    Explore the sections to learn how to set up action graphs for movement, sensors, and integrate with ROS 2 stacks like MoveIt 2 and Nav2.
                </p>
            </div>
        </div>
    );
};

export default Home;
