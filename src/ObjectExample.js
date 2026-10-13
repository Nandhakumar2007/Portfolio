import React from 'react'
const ObjectExample=()=>{
    const student=[{
      id:1,
       name:"Arun",
        ge:21,
        department:"MCA",
        marks:90
   },
   {
        id:12,
        name:"Supriya",
        age:27,
        department:"MCA",
        marks:99,
    }
]
 //pop,push,shift,unshift method
const n=[1,2,3,4,5,6];
console.log("pop",n.pop(),n)
console.log("push",n.push(4),n)
console.log("shift",n.shift(),n)
console.log("unshift",n.unshift(3),n)
//filter method
const filtered=n.filter(
    function(x){
        return x>5
    }

)
console.log(filtered);
//slice method
const names=["nandhu","supriya","lokesh","praveen"]
const result=names.slice(1,3)
console.log("result",result,names)
//splice method
const spliceresult=names.splice(1,2,"added")//start from 1 till the count 2 add the value   
console.log(names)
console.log(">>>>>",spliceresult)

const datamark=student.filter((i)=>i.marks>95)
console.log(datamark);
return(
         <>
            <table> 
                <thead>
                    <tr>
                    <th>Name </th>
                    <th>age </th>
                    <th>mark </th>
                    </tr>
                </thead>
                <tbody> 
                    <tr>
                        <td>Arun</td>
                        <td>21</td>
                        <td>90</td>

                    </tr>
                </tbody>
                
            </table>
    {datamark.map((i)=>{
        return(
            <>
            {i.name}</>
        )
    })}
    
    
            </>
)
}

        
    
    
  
export default ObjectExample