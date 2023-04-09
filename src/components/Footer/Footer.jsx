import React from 'react';
import { Link } from 'react-router-dom';
import "./footer.css"

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='text'>
                This has been Build as a part of Assignment for ClassForma
            </div>
            <div className='link'>
                <Link to="https://github.com/Amman30">Github   </Link>

                <Link to="https://www.linkedin.com/in/mohammad-amman/">   LinkedIn</Link>
            </div>
        </div>
    );
}

export default Footer;
