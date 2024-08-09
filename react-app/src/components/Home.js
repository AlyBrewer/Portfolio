// src/components/Home.js
import React from 'react';
import '../styles/App.css';

const Home = () => (
    <main className="main">
            <h3>Hey! My name is Alyssa</h3>
            <div className="card">
                <h3>Experience</h3>
                <div className="card-item">
                <h4>Student Engineering Trainee - NASA Glenn Research Center <span className="date">Jan 2023 - Present</span></h4>
                <ul>
                    <li>Tested Licklider Transmission Protocol (LTP) using network delay emulation software to configure and interpret project parameters in a variety of delay scenarios. </li>
                    <li>Assisted with preparation of NASA Procedural Requirement (NPR) 7150.2 software requirements and analyzed the Request for Comments (RFC) for Bundle Protocol version 6 and 7, as well as LTP.</li>
                    <li>Developed integrated test scripts for the project’s GitHub using C++.</li>
                    <li>Assisted with the implementation of graphical and functional updates to project GUI using React.js.</li>
                </ul>
                <h4>Student Engagement Intern - Purdue For Life Foundation <span className="date">May 2023 - 08/2024</span></h4>
                <ul>
                    <li>Serve as point of contact for over 35,000 students, families, alumni, and guests to Purdue University.</li>
                    <li>Distribute membership kits to over 3,000 members of the student foundation organization. </li>
                    <li>Recruit alumni and guests to a variety of volunteer opportunities through Purdue University.</li>
                </ul>
                </div>
            </div>
            <div className="card">
                <h3>Education</h3>
                <div className="card-item">
                <h4>Purdue University <span className="date">2021 - Present</span></h4>
                <ul>
                    <li>BS in Computer Engineering with a concentration in Software Engineering</li>
                    <li>Minors in Global Engineering Studies and Japanese</li>
                    <li>Member of the Global Engineering Alliance for Research and Eeducation (GEARE) Program</li>
                </ul>
                </div>
            </div>
            <div className="card">
                <h3>Projects</h3>
                <div className="card-item">
                <h4>Development and Testing of Ram Air Turbine in a 1x1 Wind Tunnel using Arduino<span className="date">07/2024-08/2024</span></h4>
                <ul>
                    <li>Designed and implemented electrical circuits to interface sensors with Arduino microcontroller for real-time monitoring of drag, motor RPM, and electrical output.</li>
                    <li>Programmed Arduino for automated data collection and display, integrating an emergency shutoff interface with the wind tunnel.</li>
                    <li>Collaborated with team members to troubleshoot and resolve technical issues, ensuring accurate experimental results.</li>
                </ul>
                </div>
            </div>
            <h3>To see more projects, checkout my GitHub <a href="https://github.com/AlyBrewer?tab=repositories">here</a>!</h3>

    </main>

);

export default Home;