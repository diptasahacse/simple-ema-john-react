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
                            <a href="#" className='nav-link nav-link-hover'>Home</a>
                            <a href="#" className='nav-link nav-link-hover'>Order</a>
                            <a href="#" className='nav-link nav-link-hover'>Order Review</a>
                            <a href="#" className='nav-link nav-link-hover'>Manage Inventory</a>

                    </div>

                </div>

            </nav>
        </header>
    );
};

export default Header;