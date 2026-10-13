import {React,useState,useEffect} from 'react'

const Counter=()=>{

    const [count,setCount] = useState(0)

    const btn ={
        backgroundColor:"violet",
        borderRadius:"7px",

        
    }

    //without dependencies - oru time tha varuvan
    useEffect(()=>{
        document.title="counter";
    },[])
    
    //with dependencies - dependency ku mattum varuvan
    // useEffect(()=>{
    //      console.log("button is pressed")
    // },[count])
    
    //empty dependencies - ellathukum varuvan
    // useEffect(()=>{
    //     setCount(42)
    // })
    
    //set time out
    function timeout(){
        setTimeout(()=>{
            console.log("test")
        },3000
    )
    }

    //SET INTERVAL
    function interval(){
        setInterval(()=>{
            console.log("interval test")
        },1000)
    }

    return(
        <>
        <div style={{textAlign:"center"}}>
            <h1>Count: {count}</h1>
            <button style={btn} onClick={()=>setCount(count-1)}>-</button><br/>
            <button style={btn} onClick={()=>setCount(0)}>Reset</button><br/>
            <button style={btn} onClick={()=>setCount(count+1)}>+</button><br/>

            <button style={btn}onClick={timeout}>TIMEOUT</button>
             <button style={btn}onClick={interval}>INTERVAL</button>

            
        </div>
        </>
    )
}

export default Counter