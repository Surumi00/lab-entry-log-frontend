import React, { useState } from 'react'
import axios from 'axios'
import Navigationbar from './Navigationbar'
const Addcourse = () => {


    const[input,setinput]=useState({
         name: "",
        dept : "",
        sem : "",
        course : "",
        systemNumber : "",
        loginTime : "",
        logoutTime : "",
        date : ""

    })

    const inputHandler=(event)=>{
    setinput({...input,[event.target.name]:event.target.value})
 }

 const dataHandler=()=>{
        console.log(input);
        axios.post("http://localhost:3000/add-course",input).then(
            (res)=>{
                setinput(res.data)
                alert("data added")
            }
        ).catch(
            (error)=>{
                console.log(error.res.data);
                console.log(error.res.status);
                
            }
        )
        
 }


  return (
    <div>
        <Navigationbar/>
 <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <h1 className="text-center">Add LAB</h1>
                   <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label" > name:</label>
                        <input type="text"
                         className="form-control" required
                         name='name'
                         value={input.name}
                         onChange={inputHandler}

                        />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">dept :</label>
                        <input type="text"
                         className="form-control"
                          required
                          name='dept'
                          value={input.dept}
                          onChange={inputHandler}
                          />
                        
                    </div>
                     <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">semester:</label>
                        <input type="text"
                         className="form-control"
                          required
                          name='sem'
                          value={input.sem}
                          onChange={inputHandler}
                          />
                        
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">course:</label>
                         <input type="text"
                         className="form-control"
                          required
                          name='course'
                          value={input.course}
                          onChange={inputHandler}
                          />
                        
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">SystemNumber:</label>
                        <input type="text"
                         className="form-control"
                          required
                          name='systemNumber'
                          value={input.systemNumber}
                          onChange={inputHandler}
                          />
                       
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">login time:</label>
                        <input name="text" id=""
                         className="form-control"
                         name='loginTime'
                         value={input.loginTime}
                         onChange={inputHandler}
                         ></input>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">logoutTime:</label>
                        <input type="text" className="form-control"
                        name='logoutTime'
                         value={input.logoutTime}
                            onChange={inputHandler}
                        />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">Date:</label>
                        <input type="text" className="form-control" required
                        
                        name='date'
                         value={input.date}
                         onChange={inputHandler}
                        />
                    </div>
                    
                    
                    
                   </div>
                   <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <button className="btn btn-success" onClick={dataHandler}>submit</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Addcourse