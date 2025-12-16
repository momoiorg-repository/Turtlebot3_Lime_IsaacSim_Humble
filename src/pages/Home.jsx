import React from 'react';

const Home = () => {
    return (
        <div className="doc-section" style={{ animationDelay: '0s', opacity: 1 }}>
            <h2 id="welcome">Welcome to the Isaac Sim Guide</h2>
            <div className="sub-section">
                <h3 id="introduction">Introduction</h3>
                <h2 id="overview">Overview</h2>
                <img src="/Turtlebot3_Lime_IsaacSim_Humble/assets/turtlebot_hero.png" alt="Turtlebot3 Isaac Sim" className="doc-image" />
                <p>
                    Welcome to the detailed guide on integrating <strong>Turtlebot3 Lime</strong> with <strong>NVIDIA Isaac Sim</strong>.
                    This documentation covers everything from importing your robot model to setting up advanced sensors and autonomous navigation with Nav2.
                </p>
                <p>
                    This documentation provides a comprehensive tutorial on importing and manipulating the Turtlebot3 Lime in NVIDIA Isaac Sim.
                    Explore the sections to learn how to set up action graphs for movement, sensors, and integrate with ROS 2 stacks like MoveIt 2 and Nav2.
                </p>
            </div>
        </div>
    );
};

export default Home;
