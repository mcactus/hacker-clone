import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='container'>
        <Link to='/' className='nav-link link-dark logo'>
          {/*<img  alt='HackerNews Clone' src='Assets/logo.png'/>*/}
          HackerNews
        </Link>
      </div>
    </header>
  )
};

export default Header;