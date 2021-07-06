import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

class Header extends React.Component {
    render() {
        return (
            <header className='header'>
                <div className='header-wrapper'>
                    <nav className='navbar'>
                        <Link to='/' className='navbar-item'>Users</Link>
                        <Link to='add' className='navbar-item'>Add User</Link>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;