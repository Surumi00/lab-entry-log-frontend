import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
const ViewLab = () => {
    const [data,setdata]=useState([])

        const fetchData=()=>{


          axios.get("http://localhost:3000/view-all ").then(
            (res)=>{
              setdata(res.data)
            }
          ).catch()

        }

        useEffect(()=>{
          fetchData()
        },[])
  return (
    <div>
        <div className="container mt-4">
        <h2 className="text-center mb-4">View All course</h2>

        <table className="table table-striped">
          <thead>
            <tr>
              
              <th>name</th>
              <th>dept</th>
              <th>sem</th>
              <th>course</th>
              <th>systemNumber</th>
                <th>loginTime</th>
              <th>logoutTime</th>
                <th>date</th>
              
              
            </tr>
          </thead>

          <tbody>
            {data.map(
                (value,index)=>{
                    return(
                         <tr>
                        <td>{value.name}</td>
                        <td>{value.dept}</td>
                        <td>{value.sem}</td>
                        <td>{value.course}</td>
                        <td>{value.systemNumber}</td>
                        <td>{value.logoutTime}</td>
                        <td>{value.loginTime}</td>
                         <td>{value.date}</td>
                        </tr>
                    )
                }
            )
                
            }
           
             </tbody>
        </table>
      </div>
    </div>
  )
}

export default ViewLab