import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import api from '../api'
import { toast } from 'react-toastify'
import "./Signup.css"

function Signup() {

  const navigate = useNavigate()
  const [status, setstatus] = useState(false)

  function handleSignup(e) {
    e.preventDefault()

    setstatus(true)

    let data = new FormData(e.currentTarget)

    api.post("/register/", data)
      .then((res) => {
        toast.success("account create successfully")
        navigate("/login")
      })
      .catch((err) => {
        for (let key in err.response.data) {
          toast.error(`${key}: ${err.response.data[key]}`)
        }
      })
      .finally(() => setstatus(false))
  }

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-6 image_part">
          <img src='https://img.freepik.com/premium-photo/people-gathering-picnic-serene-malaysian-beach-wi-neighbor-holiday-activities-background_1020495-238302.jpg?w=360' alt="" />
        </div>

        <div className="col-md-6">
          <h2 className='fw-bold mt-4 sign_text'>Sign Up</h2>
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
              <input type="text" name='email' className='form-control' />
            </div>

            <div className="input-box mt-3">
              <label htmlFor="" className='form-label'>Password</label>
              <input type="password" name='password' className='form-control' />
            </div>

            <button className='btn mt-4'>
              {status === true && <span className="spinner-border"></span> }
              Submit
              </button>

            <h6 className='mt-2 '>Already have an account? <Link className='login' to="/login">Login</Link></h6>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup