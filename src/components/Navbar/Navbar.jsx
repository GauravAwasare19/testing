import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css" 


const Navbar = () => {

const [showDropdown, setShowDropdown] = useState(false);

const toggleDropdown= ()=>{
    setShowDropdown(!showDropdown);
}

  return (
    <div className='navbar'>
        <div className='navContainer'>
            
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
             <img className='logo' src="#"/>
            </Link>

            <div className='navItems'>
                <ul>
                    <li>
                        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                            Home
                        </Link>
                    </li>
                    <li onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                        <span to="/products" style={{ color: "inherit", textDecoration: "none" , cursor:'pointer'}}>
                            Products
                        </span>
                        {showDropdown &&
                        (<div className="dropdown">
                                   <Link to="/vegetables" style={{ color: "inherit", textDecoration: "none" }}>
                                       Vegetables
                                    </Link>
                                    <Link to="/fruits" style={{ color: "inherit", textDecoration: "none" }}>
                                       Fruits
                                    </Link>
                                    <Link to="/agro" style={{ color: "inherit", textDecoration: "none" }}>
                                       Agro Commodities
                                    </Link>
                        </div>)
                        }
                    </li>
                    <li>
                        <Link to="/gallery" style={{ color: "inherit", textDecoration: "none" }}>
                            Media Gallery
                        </Link>
                    </li>
                    <li>
                        <Link to="/faqs" style={{ color: "inherit", textDecoration: "none" }}>
                            FAQs
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" style={{ color: "inherit", textDecoration: "none" }}>
                            About us
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" style={{ color: "inherit", textDecoration: "none" }}>
                            Contact us
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar