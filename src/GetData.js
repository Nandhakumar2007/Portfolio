import {React,useState,useEffect} from 'react'
import axios from 'axios'
const GetData=()=>{
    const[data,setData]=useState([])

    useEffect(()=>{
        axios.get("https://dummyjson.com/c/eb0d-6835-4f0b-b727")
    .then((res)=>setData(res.data))
    },[])
    
    return(
        <>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>ID</th>

                    </tr>
                    </thead>

                    {data.map((i)=>{
                        return(
                            <>
                            <tbody>
                                <tr>
                                    <td>{i.Name}</td>
                                    <td>{i.email}</td>
                                    <td>{i.ID}</td>


                                </tr>
                            </tbody>
                              </> 
                        )
               })}
            
                </table>
              </>
)
}
export default GetData;