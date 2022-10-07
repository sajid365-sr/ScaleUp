
import './ActivityCart.css'
import React from 'react';

const ActivityCart = (props) => {
    let {img, activity, description, ageLimit, spendingTime} = props.activity;
    let {addToCart} = props;
    
   
    return (
        
        <div className='col'>
            <div className="card">
                    <img src={img} className="card-img-top" style={{'height':'160px'}} alt=" "/>
                <div className="card-body">
                        <h5 className="card-title fw-bold">{activity}</h5>
                        <p className="card-text text-secondary" title={description}>{description.slice(0,80)}...</p>
                        <p className='mb-0 fw-semibold'>For Age: {ageLimit}</p>
                        <p className='mt-0 fw-semibold'>Time Required: {spendingTime}</p>
                        <button onClick={() =>{addToCart(spendingTime)}} className="btn btn-success w-100 fw-semibold">Add to List</button>
                </div>
        </div>
        </div>
        
    );
};

export default ActivityCart;