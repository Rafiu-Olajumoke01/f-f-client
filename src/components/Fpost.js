import React from 'react'
import { Link } from 'react-router-dom'
import "./Fpost.css"

function Fpost({ image, text }) {
  return (
    <div className='container'>
      <div className="row">
        <div className="col">
          <div Name="card" />
          <img src={image} className='img-fluid'/>
          <div className="card-body">
            <Link className='' to='/FoodDescription'><h5 className="card-title food_text">{text}</h5></Link>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Fpost