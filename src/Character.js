import {React,useState} from 'react'

const Character=()=>{
    const[theme,setTheme]=useState("white")
    const[num,setNum]=useState(0)
    const[text,setText]=useState("")

      function mode() {
     if (theme === "white") {
       setTheme("dark");
     } else {
       setTheme("white");
    }
  }
  function Change(e){
    setText(e.target.value)
  }
  
 
return(
    <div> 
        
        <h>Live Character Counting</h><br/>

        <button onClick={mode}>theme</button>
        <button >Get Number</button>
         <input type="text" value={text} onChange={Change} placeholder="Type" />
         <p>Characters: {text.length}
            <button>value</button>
         </p>
    </div>
)
}
export default Character;




















































