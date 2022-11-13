import { useEffect, useState } from "react";

export default function StopWatch(){
    const [timer,setTimer]=useState(0)
    const [reverse,setReverse]=useState(false)
    const [minutes,setMinutes]=useState(0)
    const [minuteStart,setMinutesStart]=useState(false)
    const [hoursStart,setHoursStart]=useState(false)
    const [hours,setHours]=useState(0)
    const [start,setStart]=useState(false)
    useEffect(()=>{
        let interval=null;
        if(start){
          interval=  setInterval(()=>{
                if(parseInt(timer)<59){
                    setTimer(prev=>prev+1)
                }
            },1000)
        }
        return () => {
            clearInterval(interval);
          };
    },[start])
    useEffect(()=>{
        if(parseInt(timer)===59){
            setMinutesStart(true)
            setTimer(0)
        }
        if(timer===0 || timer<0){
            setReverse(false)
            // setStart(false)
        }
    },[timer])
    useEffect(()=>{
        if(minuteStart){
            setMinutes(prevTime=>prevTime+1)
            setMinutesStart(false)
        }
        else{
            setTimer(0)
            setMinutes(minutes)
        }
    },[minuteStart])
    useEffect(()=>{
        if(parseInt(minutes)===59){
            setHoursStart(true)
            setMinutes(0)
        }
    },[setHours])
    useEffect(()=>{
        if(hoursStart){
            setHours(prevTime=>prevTime+1)
            setHoursStart(false)
        }
        else{
            console.log("minuteStart-- "+minuteStart)
            setTimer(0)
            setMinutes(0)
            setHours(hours)
        }
    },[hoursStart])
    useEffect(()=>{
        let interval=null;
        if(reverse){
          interval = setInterval(()=>{
                if(timer>0){
                    setTimer(prev=>prev-1)
                }
            },1000)
        }
        return () => {
            clearInterval(interval);
          };
    },[reverse])
    function reverseFunction(){
        setStart(false)
        setReverse(true)
    }
    return(
        <div>
            <h1>
                <span>{hours}</span>:
                <span>{minutes}</span>:
                <span>{timer}</span>
            </h1>
            <div>
                <button onClick={()=>setStart(true)}>Start</button>
                <button onClick={()=>{setStart(false);setReverse(false)}}>Stop</button>
                <button onClick={()=>{setStart(false);setTimer(0);setHours(0);setMinutes(0);}}>Reset</button>
                <button onClick={()=>{reverseFunction()}}>Reverse</button>
            </div>
        </div>
    )
}