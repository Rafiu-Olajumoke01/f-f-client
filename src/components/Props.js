import React from 'react'
import "./Props.css"

function Props({ image, text }) {
    return (
        <div className="container instafeed mt-5">
            <div className="row">
                <div className="col-md-2">

                    <img src={image} className="card-img" alt="..." />

                </div>
            </div>
        </div>
    )
}

export default Props


{/* <div className='container-fluid mt-5 mb-2'>
<div className="row">
    <div className="col-md-2">
        <div className="card ">
            <img src={image} className="card-img" alt="..." />
            <div className="card-img-overlay">
                <p className="card-text">{text}</p>
            </div>
        </div>
    </div>
</div>


</div> */}