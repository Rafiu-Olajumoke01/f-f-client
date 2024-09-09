import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { login } from "./../redux/userslice"
import image from "./../images/Nigeria delicacy.png"
import Footer from "./../components/Footer"
import "./Login.css"

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    function handleSubmit(e) {
        e.preventDefault()

        let form = new FormData(e.currentTarget)

        let email = (form.get("email"))
        let password = (form.get("password"))

        dispatch(login({
            email,
            password
        }))

        navigate("/")
    }
    return (
       <div className=''>
         <div className="container mt-5">
            <div className="row justify-content-center">

            <div className='col-md-6'>
                    <img src='https://img.freepik.com/free-photo/world-food-day-celebration-with-world-ball-globe-surrounded-by-food_23-2151794107.jpg?t=st=1724276843~exp=1724280443~hmac=7d25422f2441f958c4d898ed62f812772c85882a9897f319069ad998a3a53411&w=826' alt="" className='img-fluid'/>
                </div>


                <div className="col-md-6">
                    <form onSubmit={handleSubmit} className=''>
                        <h2 className='fw-bold welcome'>WELCOME BACK</h2>
                        <div className='input-box'>
                            <label htmlFor="" className="form-label">Email</label>
                            {/* <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" /> */}
                            <input name='email' type="email" className="form-control" />
                        </div>

                        <div className='my-2'>
                            <label htmlFor="" className="form-label">Password</label>
                            {/* <input type="password" className="form-control" /> */}
                            <input name='password' type="password" className="form-control" />
                        </div>

                       <button className='login mt-4'>LOGIN</button>
                    </form>

                   <h6 className='mt-4 '>Don't have an account? <Link className='signup' to="/signup">SIGN UP</Link></h6>
                </div>

                
            </div>
        
        </div>
       </div>
    )
}

export default Login