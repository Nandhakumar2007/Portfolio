import {React,useState} from 'react'
function Header(){
    const[status,setStatus]=useState("");
    const Ctime=new Date().toLocaleTimeString();
    console.log(Ctime);
    if(Ctime>="4:06:05 pm" && status!="grey"){
        console.log("System is offline")
        
            setStatus("grey")
        
    }
    return(
        <>
        <div style={{width:"100%",height:"100vh",status}}/>
        Header
      {status}
      <button disabled = {status=="grey"?true:false}>test</button>
      </>
    )
}
export default Header;