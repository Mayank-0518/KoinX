import React from 'react';
import logo from "../assets/1. KoinX Logo.png"

const Navbar = () => {
  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="" />
        <div className='flex items-center gap-10'>
          <div className='text-lg'>CryptoTaxes</div>
          <div className='text-lg'>Free Tools</div>
          <div className='text-lg'>Resource Centre</div>
          <button className='bg-blue-500 py-2 w-[150px] rounded-md text-white'>Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
