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
//import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Excited to travel??

        </h1>
		
	</header>	
    
		<section class="destinations">
<div>
      <div class="container">
        <h2>Destinations</h2>

            <div>
              <h4>Paro</h4>
              <a href="https://en.wikipedia.org/wiki/Paro,_Bhutan">
              <img src="https://hblimg.mmtcdn.com/content/hubble/img/paro/mmt/destination/m_paro-landscape_l_400_640.jpg" alt="Image 1" />
              <button onclick="displayMessage()">See More</button>
              </a>
            </div>
            <div>
              <h4>Bali</h4>
              <a href="https://en.wikipedia.org/wiki/Bali">
              <img src="https://hblimg.mmtcdn.com/content/hubble/img/bali/mmt/destination/m_bali_l_393_629.jpg" alt="Bali" />                
              <button onclick="displayMessage()">See More</button>
              </a>
            </div>
            {/*<div>   
              <h4>Abu Dhabi</h4>
              <a href="https://en.wikipedia.org/wiki/Abu_Dhabi">
              <img src="https://hblimg.mmtcdn.com/content/hubble/img/abu_dhabi/mmt/destination/m_Abu%20Dhabi_p_560_560.jpg" alt="Abu Dhabi" />                  
              <button onclick="displayMessage()">See More</button>
              </a>
            </div>*/}
            <div>
              <h4>Bentota</h4>
              <a href="https://en.wikipedia.org/wiki/Bentota">
              <img src="https://hblimg.mmtcdn.com/content/hubble/img/bentota/mmt/destination/m_bentota-landscape_l_400_640.jpg" alt="Bentota" />
              <button onclick="displayMessage()">See More</button>
              </a>
              </div>
            <div> 
              <h4>Hanoi</h4>
              <a href="https://en.wikipedia.org/wiki/Hanoi">
              <img src="https://hblimg.mmtcdn.com/content/hubble/img/hanoi/mmt/destination/m_destination_hanoi_landscape_l_341_546.jpg" alt="Hanoi" />
              <button onclick="displayMessage()">See More</button>
              </a>
            </div>
            {/*<div>
              <h4>Maldives</h4>
              <a href="https://en.wikipedia.org/wiki/Maldives">
              <img src="https://hblimg.mmtcdn.com/content/hubble/img/maldives/mmt/destination/m_Maldives_l_400_640.jpg" alt="Maldives" />
              <button onclick="displayMessage()">See More</button>
              </a>
            </div>*/}
             
            </div>
          
      </div>

		</section>

		<section id="packages">
			<h2>Packages</h2>
			<p>Check out the travel packages:</p>
            <table>
				<thead>
					<tr>
						<th>Package</th>
						<th>Price /day</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Paro</td>
						<td>Rs 1500 - Rs 2000/day approx</td>
					</tr>
					<tr>
						<td>Bali</td>
						<td>Rs 2000 - Rs 2500/day approx</td>
					</tr>
					<tr>
						<td>Abu Dhabi</td>
						<td>Rs 1800 - Rs 2500/day approx</td>
					</tr>
					<tr>
						<td>Bentota</td>
						<td>Rs 1100 - Rs 1500/day approx</td>
					</tr>
					<tr>
						<td>Hanoi</td>
						<td>Rs 2000 - Rs 3500/day approx</td>
					</tr>
				</tbody>
			</table>
		</section>

		<section id="contact">
			<h2>Contact</h2>
			<p>You can contact us using the following information:</p>
				<p>Email: explore@travel.com</p>
				<p>Phone: +91 8097543887</p>
				<p>Address: 108 2nd street, Moholla, Mysore.</p>
		</section>

	<footer>
		<p>Copyright &copy; 2023</p>
	</footer>
      
    </div>
  );
}

export default App;
