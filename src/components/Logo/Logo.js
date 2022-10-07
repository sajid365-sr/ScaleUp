
import React from 'react';
import logo from '../../logo.png'


const Logo = () => {
    return (
        <div>

            <div className='d-flex align-items-center'>
                    <img src={logo} alt="logo" />
                    <p className='fs-3 fw-bold text-success'>ScaleUp</p>
            </div>
                    <small className='explore fw-bold fs-6'>Let's Explore</small>
        </div>
        
    );
};

export default Logo;