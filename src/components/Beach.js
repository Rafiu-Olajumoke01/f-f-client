import React from 'react'
import "./Beach.css"

function Beach({ title, image, text }) {
    return (
        <div className='container text-center beaches'>
            <div className='row'>
                <div className="col">
                    <h4 className=''>{title}</h4>
                    <img src={image} alt="" />
                    <p className=''>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default Beach