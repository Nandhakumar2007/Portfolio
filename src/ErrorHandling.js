import React,{useState} from 'react'
function ErrorHandling(props){
    console.log(props.data)
        const[value,setValue]=useState(

    {
        name:"",
        email:"",
        mobile:""
    })
    const[error,setError]=useState({
        nameError:"",
        emailError:"",
        mobileError:""
         
    })

function change(event){
    setValue(
        {
            ...value,
            [event.target.name]:event.target.value
        }
    )
}
function handleSubmit(event){
    event.preventDefault();
    if(value.name==""){
        setError({
            ...error,
            nameError:"field is required"
        })
        console.log("field is empty");
    } 
    else if(value.name.length < 3){
        setError({
            ...error,
            nameError:"less than 3 letters"
        })
    }
}

    return(
        <div>
            <div classsName='container'></div>
            <div><h1 className="leftHead>">LEARN & DISCOVER</h1></div>

            <div>
            <form onSubmit={handleSubmit} >
                <input type="text" placeholder="Name" name="name" onChange={change}/><br/>
                <span style={{color:'red'}}>{error.nameError}</span><br/>
                <input type="email" placeholder="email" name="email" onChange={change}/><br/>
                <input type="number" placeholder="mobile" name="mobile" onChange={change}/><br/>
                <button>submit</button>


            </form>
        </div>
        </div>

    )
}
 export default ErrorHandling;