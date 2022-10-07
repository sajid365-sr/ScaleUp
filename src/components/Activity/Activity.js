

import React, { useState,useEffect} from 'react';
import './Activity.css'
import ActivityCart from '../ActivityCart/ActivityCart';
import Aside from '../Aside/Aside';
import Logo from '../Logo/Logo';

const Activity = () => {

    let [activities,setActivity] = useState([]);
    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setActivity(data))
    },[]);


    
    let [time,setTime] = useState(true);


        function AddToCart(displayTime){
           
           setTime(displayTime);

        }

    
       

    return (
        <section className='main-container bg-secondary bg-opacity-10'>
            {/* aside left */}
            <div className='aside-left'>
            <Logo></Logo>
                
                <div className=' row row-cols-lg-3 row-cols-1 g-4  my-4'>
                    {
                        activities.map(activity => <ActivityCart 
                            key = {activity.list} 
                            activity = {activity}
                            addToCart = {AddToCart}

                            ></ActivityCart>)
                    }
                </div>
            </div>
            {/* aside right */}
    <div className='bg-white'>

            <button
             className="navbar-toggler"
             type="button" 
             data-bs-toggle="modal" 
             data-bs-target="#exampleModal">
                <i className='bi bi-list fs-2 fw-bold'></i>
            </button>

<div className="modal fade" id="exampleModal">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-body">
      <Aside></Aside>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<div className='responsive-sidebar'>
    <Aside time = {time}></Aside>
</div>
                
                
        
            </div>
        </section>
    );
};

export default Activity;