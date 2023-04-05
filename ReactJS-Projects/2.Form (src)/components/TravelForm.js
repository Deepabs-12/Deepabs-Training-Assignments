import React, { useState } from 'react';

function TravelForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [dietaryRestrictions, setDietaryRestrictions] = useState([]);

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    if (name === 'fullName') {
      setFullName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'phone') {
      setPhone(value);
    } else if (name === 'gender') {
      setGender(value);
    } else if (name === 'destination') {
      setDestination(value);
    } else if (name === 'departureDate') {
      setDepartureDate(value);
    } else if (name === 'returnDate') {
      setReturnDate(value);
    } else if (name === 'dietaryRestrictions') {
      if (target.checked) {
        setDietaryRestrictions([...dietaryRestrictions, value]);
      } else {
        setDietaryRestrictions(dietaryRestrictions.filter((restriction) => restriction !== value));
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Gender:', gender);
    console.log('Destination:', destination);
    console.log('Departure Date:', departureDate);
    console.log('Return Date:', returnDate);
    console.log('Dietary Restrictions:', dietaryRestrictions);
  };

  return (
    <div className="container">
      <h1>Travel Form</h1><br></br>
      <section>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" className="form-control" id="fullName" name="fullName" value={fullName} onChange={handleInputChange} required /><br></br>
        </div>
        <div className="form-group"><br></br>
          <label htmlFor="email">Email:</label>
          <input type="email" className="form-control" id="email" name="email" value={email} onChange={handleInputChange} required />
        </div><br></br>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" className="form-control" id="phone" name="phone" value={phone} onChange={handleInputChange} required />
          </div><br></br>
        
      
        <div className="form-group">
           <label htmlFor="destination">Destination:</label>
           <select className="form-control" id="destination" name="destination" value={destination} onChange={handleInputChange} required>
           <option value="">Choose your destination</option>
           <option value="Coorg">Coorg, Karnataka</option>
           <option value="Munnar">Munnar, Kerala</option>
           <option value="Coimbatore">Coimbatore, Tamil Nadu</option>
           </select>
        </div><br></br>
        <div className="form-group">
            <label htmlFor="departureDate">Departure Date:</label>
            <input type="date" className="form-control" id="departureDate" name="departureDate" value={departureDate} onChange={handleInputChange} required />
</div><br></br>
<div className="form-group">
<label htmlFor="returnDate">Return Date:</label>
<input type="date" className="form-control" id="returnDate" name="returnDate" value={returnDate} onChange={handleInputChange} required />
</div><br></br>

<button type="submit" className="btn btn-primary">Submit</button>
</form>
</section>
</div>

);
}

export default TravelForm;
