import { useState, useEffect } from 'react';
import axios from 'axios';
import './assets/css/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import { Link, Outlet } from 'react-router-dom';


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
    <header className="fixed top-0 left-0 right-0 bg-primary-light flex justify-between items-center p-4 text-customText-primary" >
      <div className='font-bold'>
        <h1 className="">Logo</h1>
      </div>

      <button onClick={() => setOpenNav(!openNav)}
        className='text-xl focus:outline-none lg:hidden'>
          <FontAwesomeIcon icon={openNav ? faXmark : faBars} />
      </button>






      <nav className={`absolute top-16 left-0 right-0 w-full lg-flex  `}>
        <ul className="">
          <li>
            <Link to="/login" onClick={() => handleNavClose(false)}>Login</Link>
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
