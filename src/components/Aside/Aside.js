
import user from '../../user.png'
import React from 'react';
import './Aside.css'

const Aside = () => {
    return (
        <section className='p-5'>
            {/* user image */}
            <div className='d-flex align-items-center justify-content-center gap-3'>
                <img className='user' src={user} alt="" />
                <div>
                    <h3 className='mb-0'>Sajid Sorker</h3>
                    <span className='text-secondary fw-semibold'><i className="bi bi-geo-alt-fill  me-2"></i>Gazipur, Bangladesh</span>
                </div>
            </div>
            {/* user-info */}
            <div className='d-flex justify-content-evenly bg-secondary bg-opacity-10 rounded-4 my-5 py-3'>
                <div>
                    <span className='fw-bold fs-4'>65</span><span className='text-secondary'>Kg</span><br />
                    <span className='text-secondary fw-semibold'>Weight</span>
                </div>
                <div>
                <span className='fw-bold fs-4'>5.6</span><span className='text-secondary'>ft</span><br />
                    <span className='text-secondary fw-semibold'>Height</span>
                </div>
                <div>
                <span className='fw-bold fs-4'>22</span><span className='text-secondary'>year</span><br />
                    <span className='text-secondary fw-semibold'>Age</span>
                </div>
            </div>
            {/* Breaking Time */}
        <h3>Add a break</h3>
        <div className='breaking-time bg-secondary bg-opacity-10 rounded-4 mt-4 p-4 d-flex justify-content-between'>
            <button>2m</button>
            <button>5m</button>
            <button>10m</button>
            <button>15m</button>
            <button>30m</button>
        </div>
        {/* Explore */}
        <h3 className='mt-5'>Let's Explore</h3>
        <div className='bg-secondary bg-opacity-10 rounded-4 mt-4 p-3 d-flex justify-content-around'>
        <span className='mb-0 fs-5 fw-semibold'>Countdown time</span>
        <span className='fs-5 text-secondary text-opacity-50 fw-semibold'>1.5 hour</span>
        </div>
        <div className='bg-secondary bg-opacity-10 rounded-4 mt-4 p-3 d-flex justify-content-around'>
        <span className='mb-0 fs-5 fw-semibold'>Break time</span>
        <span className='fs-5 text-secondary text-opacity-50 fw-semibold'>20 minute</span>
        </div>
        <button className='btn btn-primary w-100 mt-4 py-2 fs-5'>Activity Completed</button>
        </section>
    );
};

export default Aside;