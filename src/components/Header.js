import React from 'react'
import Logo from '../images/logo.png'
import { FaBars, FaSearch, FaShoppingCart, FaUserPlus } from 'react-icons/fa'

const Header = () => {
  return (
    <header className="header flex items-center justify-between py-3 xl:mx-20">
      <div className="menu-btn flex">
        <div className="mx-4">
          <FaBars />
        </div>
        <div>
          <FaSearch />
        </div>
      </div>

      <div className="logo">
        <div>
          <img src={Logo} alt="Microsoft" />
        </div>

        <ul>
          <li>Microsoft 365</li>
          <li>Office</li>
          <li>Windows</li>
          <li>Surface</li>
          <li>Xbox</li>
          <li>Deals</li>
          <li>Support</li>
        </ul>
      </div>

      <div className="cart flex">
        <div>
          <FaShoppingCart />
        </div>
        <div className="mx-4">
          <FaUserPlus />
        </div>
      </div>

      <div className="sign-in">
        <ul>
          <li>All Microsoft</li>
          <li>Search</li>
          <li>Cart</li>
          <li>Sign In</li>
        </ul>
      </div>
    </header>
  )
}

export default Header
