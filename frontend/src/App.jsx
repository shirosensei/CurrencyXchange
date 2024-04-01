import { useState } from 'react';
import './assets/css/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import { Link, Outlet } from 'react-router-dom';


function App() {
  const [openNav, setOpenNav] = useState(false);

  const handleNavClose = () => {
    setOpenNav(false);
  }


 

  return (
    // <div>

      <>
      <header className="fixed top-0 left-0 right-0 w-full bg-primary-light flex justify-between items-center  p-4 text-text-primary z-10">

        <div className='font-bold lg:'>
          <h1 className="">cX Logo</h1>
        </div>


        <nav className="p-4 ">
          <button onClick={() => setOpenNav(!openNav)}
            className='text-2xl focus:outline-none lg:hidden'>
            <FontAwesomeIcon icon={openNav ? faXmark : faBars} />
          </button>

          <ul className={`${openNav ? 'block' : 'hidden'} xs:bg-secondary absolute top-full left-0 right-0 w-full text-center lg:static lg:flex lg:bg-transparent lg:gap-x-8 lg:items-start `}>
            <li className='p-4 lg:p-0 hover:bg-disabled'>
              <Link to="/help" onClick={() => handleNavClose(false)}>Converter</Link>
            </li>

            <li className='p-4 lg:p-0 hover:bg-disabled hover:text-text-dark'>
              <Link to="/contact" onClick={() => handleNavClose(false)}>
                Tools
              </Link>
            </li>

            <li className="p-4 lg:p-0 hover:bg-disabled">
              <Link to="/login" onClick={() => handleNavClose(false)}>Login</Link>
            </li>
            <li className='p-4 lg:p-0 hover:bg-disabled'>
              <button className=' '>
                <Link to="/register" onClick={() => handleNavClose(false)}>Register</Link>
              </button>
            </li>

            <li className='p-4 lg:p-0 hover:bg-disabled'>
              <Link to="/about" onClick={() => handleNavClose(false)}>About</Link>
            </li>

          </ul>
        </nav>
      </header>
      <main className='pt-16'>
        <Outlet />
      </main></>
    // </div>
  );
}

export default App;
