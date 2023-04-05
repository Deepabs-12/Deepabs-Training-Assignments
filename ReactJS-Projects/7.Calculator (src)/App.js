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
import React, { useState } from 'react';

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState('');

  // function to perform the calculation
  const calculate = () => {
    let num1 = parseFloat(input1);
    let num2 = parseFloat(input2);

    switch (operation) {
      case '+':
        setResult(num1 + num2);
        break;
      case '-':
        setResult(num1 - num2);
        break;
      case '*':
        setResult(num1 * num2);
        break;
      case '/':
        setResult(num1 / num2);
        break;
      default:
        setResult('');
    }
  };

  // function to handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'input1') {
      setInput1(value);
    } else if (name === 'input2') {
      setInput2(value);
    } else if (name === 'operation') {
      setOperation(value);
    }
  };

  // function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    calculate();
  };

  return (
    <div className="App">
      <h1>Calculator</h1><br></br>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="input1">Input 1:</label>
          <input type="number" className="form-control" id="input1" name="input1" value={input1} onChange={handleInputChange} required />
        </div><br></br>
        <div className="form-group">
          <label htmlFor="operation">Operation:</label>
          <select className="form-control" id="operation" name="operation" value={operation} onChange={handleInputChange}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
        </div><br></br>
        <div className="form-group">
          <label htmlFor="input2">Input 2:</label>
          <input type="number" className="form-control" id="input2" name="input2" value={input2} onChange={handleInputChange} required />
        </div><br></br>
        <button type="submit" className="btn btn-primary">Calculate</button>
      </form><br></br>
      {result && <h2>Result: {result}</h2>}
    </div>
  );
}

export default App;
