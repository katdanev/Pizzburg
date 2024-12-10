import React from 'react';
import './footer.css'; 
import './fonts.css'; 

function Footer() {
    return (
        <div className='greenFooterBox'>
            <div className="photoContainer">
                <a href="https://www.apple.com/ca/app-store/" target='_blank'>
                    <img src="/appstore.jpg" alt="appstore" width={98} height={33} className='footerImage' />
                </a>
                <a href="https://play.google.com/store/games" target='_blank'>
                    <img src="/googleplay.jpg" alt="googleplay" width={98} height={33} className='footerImage' />
                </a>
            </div>
            <div className="textContainer">
                <p className='textInFooter'>2023 Pizzburg. <span>All rights reserved.</span></p>
                <p className='textInFooter'>Design: Team 15</p>
            </div>
        </div>
    );
}

export default Footer;
