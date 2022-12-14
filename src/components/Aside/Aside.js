
import user from '../../user.png'
import React, { useEffect, useState } from 'react';
import './Aside.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let totalTime = 0;
const Aside = (props) => {

    // Toast

    let liveToast = () =>{
        toast.success("Congratulations ! you have completed your task.",{
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
           
        });
    }

    let [time,setTime] = useState();
    let [breakingTime,setBreakingTime] = useState(); 
   
    

    let spendingTime = props.exploreTime;

    

    if(time && typeof time == 'string' && time.includes('.')){

       
            let splitTime = time.split('.');
        let [hour,minute] = splitTime;
    
        let sliceMin = minute.slice(0, minute.length - 1);
        
        if(sliceMin.length === 2){

            let min =  ((minute.slice(0, minute.length - 1)) / 100) * 60;
            minute = Number(Math.round(min));
        }else if(sliceMin.length === 1){
            let min =  ((minute.slice(0, minute.length - 1)) / 10) * 60;
            minute = Number(Math.round(min));
        }
        setTime(hour + 'h' + ' '+ minute + 'm')
    
        
    }


useEffect( () =>{

    if(typeof spendingTime == 'string'){
       
            if(spendingTime.endsWith('m')){
            let sliceTime = Number(spendingTime.slice(0, spendingTime.length - 1));
    
            totalTime += sliceTime;
           
            if(totalTime < 60){

                setTime(totalTime + 'm')
            }else if(totalTime >= 60){
                let fixedTime = (totalTime/60).toFixed(2);
                setTime(fixedTime + 'h');
            }
           
            }
            
            else if(spendingTime.endsWith('h')){
            let sliceTime = Number(spendingTime.slice(0, spendingTime.length - 1));

   
            if(spendingTime.includes('.')){

                let splitTime = spendingTime.split('.');
                let [hour,minute] = splitTime;

                hour = Number(hour) * 60;
                minute =  Number(minute.slice(0, minute.length - 1)) * 6;
                totalTime += (hour + minute);
                let fixedTime = (totalTime/60).toFixed(2);
                setTime(fixedTime + 'h');
            }else{

                totalTime += (sliceTime * 60);
               
    
                let fixedTime = (totalTime/60).toFixed(2);
                setTime(fixedTime + 'h');
                
            }
            
            }
        }
    }, [props,spendingTime])

    


  let buttons = document.querySelectorAll('#restTime > button');

  
   
    useEffect( () =>{
        
        // get stored time

        let getStoredTime = localStorage.getItem('Breaking Time');
        if(getStoredTime){
            setBreakingTime(JSON.parse(getStoredTime));
            
        }

        // btn onclick event
        buttons.forEach(btn => {

            btn.addEventListener('click', e => {
                let btnText = e.target.innerText;
                setBreakingTime(btnText);
                // console.log(btnText)

                // Set to local storage
                localStorage.setItem('Breaking Time',JSON.stringify(btnText));
                // localStorage.setItem('')
            })
            
        })
              
        
    },[buttons])
   

    return (
        <section className='p-5 position-relative'>
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
        <div id='restTime' className='breaking-time bg-secondary bg-opacity-10 rounded-4 mt-4 p-4 d-flex justify-content-between'>
            <button className='breakingTime'>2m</button>
            <button className='breakingTime'>5m</button>
            <button className='breakingTime'>10m</button>
            <button className='breakingTime'>15m</button>
            <button className='breakingTime'>30m</button>
        </div>
        {/* Explore */}
        <h3 className='mt-5'>Let's Explore</h3>
        <div className='bg-secondary bg-opacity-10 rounded-4 mt-4 p-3 d-flex justify-content-around'>
        <span className='mb-0 fs-5 fw-semibold'>Countdown time</span>
        <span className='fs-5 text-secondary text-opacity-50 fw-semibold'>{time ? time : "00 m/h"}</span>
        </div>
        <div className='bg-secondary bg-opacity-10 rounded-4 mt-4 p-3 d-flex justify-content-around'>
        <span className='mb-0 fs-5 fw-semibold'>Break time</span>
        <span id='breakTime' className='fs-5 text-secondary text-opacity-50 fw-semibold'>{breakingTime? breakingTime:"00 m"}</span>
        </div>
        <button  onClick={liveToast} className='btn btn-primary w-100 mt-4 py-2 fs-5'>Activity Completed</button>

        <ToastContainer />

        
        </section>
    );
};

export default Aside;

