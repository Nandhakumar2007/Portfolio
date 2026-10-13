import {React,useState} from 'react'
import './ModalBox.css'

const ModalBox=()=>{
    const[Model,setModel]=useState(false)
    return(
        <>
        <div>ModalBox</div>
        {Model ? <div className="model">
            <span>Are you sure, Do you want to continue</span><br/>
            <button onClick={()=>setModel(false)}>OK</button>

        </div> : ""
        }
        <button onClick={()=>setModel(true)}>confirm</button>
        //overlay

        <div>
        <button className="xButton">X</button>
        <h1>Secure all your devices</h1>
        <p>Ensure your mobile phone, laptop and other<br/>
        devices are protected online</p>
        <button>Purchase Premium</button>
        </div>
        </>
    )
}
export default ModalBox