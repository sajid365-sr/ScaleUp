

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


    
    let [time,setTime] = useState("00");


        let AddToCart = (displayTime) =>{
           
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

<div className='responsive-sidebar'>
    <Aside exploreTime = {time}></Aside>
</div>
                
                
        
            </div>
        </section>
    );
};

export default Activity;