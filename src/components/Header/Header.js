import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <header className='navbar-custom '>
            <nav className='navbar navbar-expand-md '>
                <div className='container'>
                    <a href="#" className='navbar-brand'>
                        <img src={logo} alt="" />
                    </a>
                    
                    <div className='navbar-nav'>
                            <Link className='nav-link text-white' to='/'>Home</Link>
                            <Link className='nav-link  text-white' to='/shop'>Shop</Link>
                            <Link className='nav-link  text-white' to='/orders'>Order</Link>
                            <Link className='nav-link  text-white' to='/review'>Order Review</Link>
                            <Link className='nav-link  text-white' to='/inventory'>Manage Inventory</Link>

                    </div>

                </div>

            </nav>
        </header>
    );
};

export default Header;