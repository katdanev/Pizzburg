// header.jsx
import React from 'react';
import './header.css'; // Add css file
import './fonts.css';
import {Link} from "react-router-dom"; // Add fonts css

function Header() {
    return (
        <div className='header'>
            <img src="/logo.png" alt="Logo" width={181} height={162} className={"logo-icon"}/>

            <div className="greenBox">
                <Link to="/" className='logoImage'/>
                <p className='textAfterImage'>the best pizza of our city</p>
            </div>
        </div>
    );
}

export default Header;
