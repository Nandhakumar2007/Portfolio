import React from 'react'

const Student=()=>{
    const studentDetails=[
    {id:1, name:"nandha", dept:"IT", age:19, score:95},
    {id:2, name:"sathish", dept:"CSE", age:18, score:90},
    {id:3,name:"guru", dept:"ECE", age:20, score:95},
    {id:4,name:"niru", dept:"EEE", age:19, score:80},
    {id:5,name:"pandi", dept:"AIDS", age:18, score:85},
    {id:6,name:"sabari", dept:"BT", age:20, score:75},
    {id:7,name:"gopi", dept:"BM", age:21, score:70},
    {id:8,name:"selva", dept:"CSBS", age:19, score:90},
    {id:9,name:"vel", dept:"AIML", age:20, score:65},
    {id:10,name:"kumar", dept:"IT", age:18, score:50},

    ]
    const{id,name,dept,age,score,...remains}=studentDetails
    const updateStudentDetails={
        ...studentDetails,
    }
return(
    <>
    </>
)}


export default Student