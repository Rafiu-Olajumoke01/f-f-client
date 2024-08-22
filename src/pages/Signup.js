import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import api from '../api'
import { toast } from 'react-toastify'
import "./Signup.css"

function Signup() {

  const navigate = useNavigate()
 
  function handleSignup(e){
    e.preventDefault()

    let data = new FormData(e.currentTarget)

    api.post("/register/", data)
    .then((res) =>{
      toast.success("account create successfully")
      navigate("/login")
    })
    .catch((err) =>{
      for(let key in err.response.data){
        toast.error(`${key}: ${err.response.data[key]}`)
      }
    })
  }
  
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-6 image_part">
        <img src='https://img.freepik.com/premium-photo/people-gathering-picnic-serene-malaysian-beach-wi-neighbor-holiday-activities-background_1020495-238302.jpg?w=360' alt="" />
        </div>

        <div className="col-md-6">
          <h2 className='fw-bold mt-4'>Sign Up</h2>
          <form onSubmit={handleSignup}>

          <div className="input-box">
              <label htmlFor="" className='form-label'>First Name</label>
              <input type="text" name='first_name' className='form-control' />
            </div>

            <div className="input-box">
              <label htmlFor="" className='form-label'>Last Name</label>
              <input type="text" name='last_name' className='form-control' />
            </div>

            <div className="input-box">
              <label htmlFor="" className='form-label'>Email</label>
              <input type="text" name='email'  className='form-control' />
            </div>

            <div className="input-box mt-3">
              <label htmlFor="" className='form-label'>Password</label>
              <input type="password" name='password'  className='form-control' />
            </div>

            <button className='btn btn-dark mt-4'>Submit</button>

            <p className='mt-3'>Already have an account? <Link className='' to="/login">Login</Link></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup