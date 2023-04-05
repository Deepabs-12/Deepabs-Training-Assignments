/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/


import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>About Me</h1>
        <p>I am Deepa.B.S from Mysore. I'm pursuing my engineering at MIT,Mysore. I'm very flexible and adapt to new sitaution and make the best out of them which is required. My commitment towards the work that is being assigned is my strength.</p>
      </div>
      <section className="projects-section">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>Project Management System</h3>
          <p>It's a DBMS project regarding projects assigned in a college to the students.</p>
        
        </div>
        <div className="project-card">
          <h3>Medicine Database Application</h3>
          <p>It's an affordable system to solve the problems of patients by letting them know which medicine to be consumned at particular time of the day.</p>
   
        </div>
      </section>
      <section className="skills-section">
        <h2>Skills</h2>
        <ul>
          <li>C-Programming</li>
          <li>Java</li>
          <li>Basics of HTML and CSS</li>
       
        </ul>
      </section>
      <section className="resume-section">
        <h2>Resume</h2>
        <p>Add a link to your resume or embed it on the page.</p>
      </section>
      <footer className="contact-section">
        <h2>Contact</h2>
        <ul>
          <li>Email: deepasangal@gmail.com</li>
          <li>Phone: 9999988888</li>
          <li>LinkedIn: https://www.linked.in/com/deepa-b-sangal</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;


