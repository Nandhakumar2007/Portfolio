import {React,useState} from 'react'


const Project=()=>{
    const[form,setForm]=useState(
        {
          id:0,
          name:"",
          age:0,
          dept:"",
          mark:0


        }
    )
    const[value,setValue]=useState( {
        id:1,
        name:"nandha",
        age:20,
        dept:"it",
        mark:90
    })
   
    
    function change(event){
        setValue({
            ...value,
            [event.target.name]:event.target.value
        })
    
    }
    function submit(event){
        event.preventDefault();
        setForm({
            ...value,
            name:value.name,
            age:value.age,
            dept:value.dept,
            mark:value.mark,
        })
             
    }

    return(
        <div>
            {form.name}
            {form.age}
            {form.dept}
            {form.mark}

        <form onSubmit={submit}>
        
            Name:<input onChange={change} name={"name"} placeholder="Enter your name"></input>< br/>
            Age:<input> onChange={change} name={"age"}</input><br/>
            dept:<input></input><br/>
            mark:<input></input><br/>
            <button type="submit">submit</button>
        </form>
        </div>
        

        
    )
}
export default Project;