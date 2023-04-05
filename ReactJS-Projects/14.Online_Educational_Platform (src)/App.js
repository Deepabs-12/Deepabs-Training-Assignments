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

export default App;
*/

import React, { useState } from 'react';
import Course from './components/Course';

const courses = [
  { id: 1, title: 'HTML', description: 'Learn the basics of HTML', price: 10 },
  { id: 2, title: 'CSS', description: 'Learn how to style your webpages with CSS', price: 15 },
  { id: 3, title: 'JavaScript', description: 'Learn the fundamentals of JavaScript', price: 20 },
  { id: 4, title: 'ReactJS', description: 'Learn how to build web applications with ReactJS', price: 25 }
];

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  function handleSearch(query) {
    setSearchQuery(query);
  }

  function handleEnroll(courseId) {
    const course = courses.find(c => c.id === courseId);
    setEnrolledCourses(prevEnrolledCourses => [...prevEnrolledCourses, course]);
  }

  function handleCancel(courseId) {
    setEnrolledCourses(prevEnrolledCourses => prevEnrolledCourses.filter(c => c.id !== courseId));
  }

  const filteredCourses = courses.filter(course => course.title.toLowerCase().includes(searchQuery.toLowerCase()) || course.description.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div>
      <h1>Online Education Platform</h1>
      <input type="text" placeholder="Search for a course" onChange={e => handleSearch(e.target.value)} />
      {filteredCourses.map(course => (
        <Course
          key={course.id}
          course={course}
          onEnroll={() => handleEnroll(course.id)}
          onCancel={() => handleCancel(course.id)}
          enrolled={enrolledCourses.some(c => c.id === course.id)}
        />
      ))}
    </div>
  );
}

export default App;
