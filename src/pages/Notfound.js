import React from 'react'
import "./Notfound.css"
import Image1 from "./../images/my404.jpg"
import { Link } from 'react-router-dom'

function Notfound() {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12 notfound">
          <img className='my404 img-fluid' src={Image1} alt=""  />
          <h2><span className='oops'>OOPS!</span> EXploring took a wrong turn to an unknwon page</h2>
          <Link className="btn btn_explore " to="/" >Go to Home</Link>
        </div>
      </div>
    </div>
  )
}

export default Notfound