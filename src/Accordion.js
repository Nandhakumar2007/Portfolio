import {React,useState} from 'react'
import './Accordion.css'
const Accordion=()=>{
    const[open,setOpen]=useState(null)
    
    const accor=[
        {id:1,title:"accordian 1",para:"I am a developer"},
        {id:2,title:"accordian 2",para:"According to data analytics"}

        
        ]
        function handleId(id){
            console.log(id)
            //setOpen(id)
            setOpen(open===id?null:id)
        }

    return(
        <>
        {
            accor.map((res)=>{
                return(
                    <>
                    
                    <p className='head' onClick={()=>handleId(res.id)}>{res.title}</p>
                        {open==res.id ? <p>{res.para}</p>:""}
                        </>
                )
            })
        }
          
        </>
    )
}
export default Accordion