import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="./">APNA STORE.</a>
      </div>

      <div className="icons">
        <i className="fa-solid fa-user" onClick={toggleFormBox}></i>
        <i className="fa-solid fa-heart"></i>
        <i className="fa-solid fa-cart-shopping"></i>
     </div>
   </nav>
 );
};


export default Navbar;
