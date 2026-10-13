import {React,useState,useEffect} from 'react'
const Task1=()=>{
    const[dark,setDark]=useState(false)
    const[task,setTask]=useState([])
    const[name,setName]=useState("")
    const[userName,setUserName]=useState("")
    const[priority,setPriority]=useState("Low")
    const[completed,setCompleted]=useState([])


    function mode(){
        setDark(!dark);

    }
    function addTask(){
        if(name==="") return;
        setTask([...task,{name,priority}]);
        setName("");
        setPriority("Low");
    }
    function getData(event){
        setName(event.target.value);
    }
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(res=>res.json())
        .then(data=>setUserName(data.name))
        .catch(error=>console.log(error));
    },[])
return(
    <div className="dashboard" style={{backgroundColor:dark?"black":"white",
        color:dark?"white":"black",height:"100vh"
    }}>
        <span onClick={mode}> {dark?"☀️":"🌙"}</span>
        <h2> My Profile</h2>
        <p>{userName}</p>
        <p>Welcome to Task Management Dashboard</p>
        <input placeholder="Enter task" value={name} onChange={getData}/>
        <select value={priority} onChange={(event)=>setPriority(event.target.value)}> 
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
                </select>
                <p>Total:{task.length}</p>
                <p>pending:{task.length-completed.length}</p>
                <p>completed:{completed.length}</p>

            {task.map((item, index)=>(
                <p className={item.priority.toLowerCase()}> 
                {item.name}-{item.priority}
                <button onClick={()=>setCompleted([...completed, item])}>Complete</button>
                <button onClick={()=>setTask(task.filter((item,i)=>i !==index))}>Delete</button> </p>
            ))}
            <button onClick={addTask}>Add Task</button>
        </div>
)
}

export default Task1;