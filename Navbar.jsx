import React, { useState } from 'react';
import './Navbar.css';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [active, setActive] = useState('navBar');

    const showNav = () => {
        setActive('navBar activeNavbar');
    };

    const removeNavbar = () => {
        setActive('navBar ');
    };

    return (
        <section className='navBarsection'>
            <header className="header flex">
                <div className="logoDiv">
                    <Link to="/" className='logo flex'>
                        <h1><MdOutlineTravelExplore className="icon" />Sanchari</h1>
                    </Link>
                </div>
                <div className={active}>
                    <ul className='navLists flex'>
                        <li className='navItem'>
                            <Link to="/" className="navLink">Home</Link>
                        </li>
                        <li className='navItem'>
                            <Link to="#" className="navLink">Packages</Link>
                        </li>
                        
                        <li className='navItem'>
                            <Link to="#" className="navLink">About</Link>
                        </li>
                        <li className='navItem'>
                            <Link to="/adventure" className="navLink">Adventure</Link>
                        </li>
                        <li className='navItem'>
                            <Link to="/safety-legal" className="navLink">Legal Information</Link>
                        </li>
                        <li className='navItem'>
                            <Link to="#" className="navLink">Contact</Link>
                        </li>
                        <button className='btn'>
                            <Link to="#">BOOK NOW</Link>
                        </button>
                    </ul>
                </div>
                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className="icon" />
                </div>
            </header>
        </section>
    );
};

export default Navbar;
