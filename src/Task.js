import {React,useState} from 'react'
const Task=()=>{
    const[task,setTask]=useState([])
    const[completed,SetCompleted]=useState([])
    const[dark,setDark]=useState(false);
    const[name,setName]=useState("")
     function mode(){
        setDark(!dark);
     }
      function getData(event){
        setName(event.target.value);
      }
    return(
         <div className="dashboard" style={{backgroundColor:dark?"black":"white",
        color:dark?"white":"black",height:"100vh"
    }}>
         
        
            <h1>TASK MANAGER</h1>
            <input placeholder="Enter task"/>

            <span onClick={mode}> {dark?"☀️":"🌙"}</span>
                <p>Total:{task.length}</p>
                <p>pending:{task.length-completed.length}</p>
                <p>completed:{completed.length}</p>
            <button>Completed/Pending</button><br/>
            <button>Delete</button> 
        </div>

        
    )
}
export default Task;














