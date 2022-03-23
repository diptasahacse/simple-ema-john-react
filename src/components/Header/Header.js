import React from 'react';
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
                            <a href="/home" className='nav-link nav-link-hover'>Home</a>
                            <a href="/order" className='nav-link nav-link-hover'>Order</a>
                            <a href="/review" className='nav-link nav-link-hover'>Order Review</a>
                            <a href="/inventory" className='nav-link nav-link-hover'>Manage Inventory</a>

                    </div>

                </div>

            </nav>
        </header>
    );
};

export default Header;