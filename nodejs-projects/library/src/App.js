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

import React, { useState, useEffect } from "react";
import axios from "axios";
import LoginPage from "./components/LoginPage";

const App = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [users, setUsers] = useState([]);
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    axios.get("/api/books").then(response => {
      setBooks(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get("/api/authors").then(response => {
      setAuthors(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get("/api/users").then(response => {
      setUsers(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get("/api/borrowed_books").then(response => {
      setBorrowedBooks(response.data);
    });
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const renderBooks = () => {
    return (
      <div>
        <h2>Books</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Publisher</th>
              <th>Publish Date</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {books.map(book => (
              <tr key={book.book_id}>
                <td>{book.book_id}</td>
                <td>{book.title}</td>
                <td>{book.author_id}</td>
                <td>{book.publisher}</td>
                <td>{book.publish_date}</td>
                <td>{book.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const renderAuthors = () => {
    return (
      <div>
        <h2>Authors</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {authors.map(author => (
              <tr key={author.author_id}>
                <td>{author.author_id}</td>
                <td>{author.first_name}</td>
                <td>{author.last_name}</td>
                <td>{author.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const renderUsers = () => {
    return (
      <div>
        <h2>Users</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.user_id}>
                <td>{user.user_id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
 
  };
  const renderBorrowedBooks = () => {
    return (
      <div>
        <h2>Borrowed Books</h2>
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Book ID</th>
              <th>Borrow Date</th>
              <th>Return Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {borrowedBooks.map((borrowedBook) => (
              <tr key={`${borrowedBook.user_id}-${borrowedBook.book_id}`}>
                <td>{borrowedBook.user_id}</td>
                <td>{borrowedBook.book_id}</td>
                <td>{borrowedBook.borrow_date}</td>
                <td>{borrowedBook.return_date}</td>
                <td>{borrowedBook.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  

  
  if (!isLoggedIn) {
  return <LoginPage handleLogin={handleLogin} />;
  }
  
  return (
  <div>
  <h1>Library Management System</h1>
  {renderBooks()}
  {renderAuthors()}
  {renderUsers()}
  {renderBorrowedBooks()}
  </div>
  );
};
  
  export default App;