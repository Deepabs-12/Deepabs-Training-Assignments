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
      <header>
        <h1>Non-Profit Charity Organization</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Get Involved</a></li>
            <li><a href="#">Donate</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="hero">
          <img src="https://snacknation.com/wp-content/uploads/2022/05/charity-team-building-e1651509883636.png" alt="Charity Organization" />
          <h2>Help Us Make a Difference</h2>
          <p>We are a non-profit organization committed to helping those in need. Join us in our mission to make a difference in the world.</p>
          <button>Donate Now</button>
        </section>
        <section className="about">
          <h2>About Us</h2>
          <p>We are a non-profit charity organization dedicated to providing support and resources to those in need. Our mission is to make a difference in the world by helping one person at a time.</p>
        </section>
        <section className="get-involved">
          <h2>Get Involved</h2>
          <p>There are many ways to get involved with our organization. You can volunteer your time, donate money, or help us spread the word about our cause.</p>
        </section>
        <section className="donate">
          <h2>Donate</h2>
          <p>Your donation can make a difference in the lives of those in need. We accept donations of all sizes and every little bit helps. Thank you for your support.</p>
          <button>Donate Now</button>
        </section>
        <section className="contact">
          <h2>Contact Us</h2>
          <p>If you have any questions or would like to get involved with our organization, please contact us.</p>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Non-Profit Charity Organization. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

