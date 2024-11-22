import { useState, useEffect } from 'react';
import axios from 'axios';
import './assets/css/App.css';
import { Link, Outline }  from 'react-router-dom';


function App() {
  const [openNav, setOpenNav] = useState(false);


  const handleNavToggle = () => {
    setOpenNav(true);
}

const handleNavClose = () => {
  setOpenNav(false);
}


  // const [value, setValue] = useState('')
  // const [rates, setRates] = useState({})
  // const [currency, setCurrency] = useState(null)

  // useEffect(() => {
  //   console.log('effect run, currency is now', currency)

  //   // skip if currency is not defined
  //   if (currency) {
  //     console.log('fetching exchange rates.')
  //     axios
  //       .get(`https://open.er-api.com/v6/latest/${currency}`)
  //       .then(response => {
  //         setRates(response.data.rates)
  //       })
  //   }
  // }, [currency])

  // const handleChange = (event) => {
  //   setValue(event.target.value)
  // }

  // const onSearch = (event) => {
  //   event.preventDefault()
  //   setCurrency(value)
  // }


  return (
       <header className='bg-primary-dark flex'>
        <div>
          <h1>Logo</h1>
        </div>
     
     <nav className='flex'>
      <ul>
        <li>
          <Link to="/login"  onClick={() => handleNavClose(false)}>Login</Link> 
        </li>
        <li>
          <Link to="/register" onClick={() => handleNavClose(false)}>Register</Link>
        </li>
        <li>
          <Link to="/help" onClick={() => handleNavClose(false)}>Help</Link>
        </li>
        <li>
          <Link to="/about" onClick={() => handleNavClose(false)}>About</Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => handleNavClose(false)}>
          Contact
          </Link>
        </li>
      </ul>
     </nav>
    </header>
  );
}

export default App;
