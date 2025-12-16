import React from 'react';
import { NavLink } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <>
            <nav className="sidebar">
                <h1>Isaac Sim<br />Docs</h1>
                <div className="nav-links">
                    <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                        Home
                    </NavLink>
                    <NavLink to="/import" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                        Import Guide
                    </NavLink>

                    <div className="nav-group-title" style={{ padding: '0.75rem 1rem', color: 'var(--primary)', fontWeight: 'bold', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '1rem' }}>
                        Sensors & Control
                    </div>
                    <NavLink to="/sensors/drive" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                        Drive (Cmd Vel)
                    </NavLink>
                    <NavLink to="/sensors/camera" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                        Camera
                    </NavLink>
                    <NavLink to="/sensors/lidar" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                        Lidar
                    </NavLink>

                    <div className="nav-group-title" style={{ padding: '0.75rem 1rem', color: 'var(--primary)', fontWeight: 'bold', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '1rem' }}>
                        Integration
                    </div>
                    <NavLink to="/integration/moveit2" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                        MoveIt 2
                    </NavLink>
                    <NavLink to="/integration/nav2" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                        Nav2
                    </NavLink>
                </div>
            </nav>

            <main className="main-content">
                {children}
            </main>
        </>
    );
};

export default Layout;
