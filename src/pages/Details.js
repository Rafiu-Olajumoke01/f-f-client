import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from "./../components/Navbar"
import "./Details.css"
import axios from 'axios'

function Details() {

    const { id } = useParams()

    const [article,setarticle] = useState(null)

    useEffect(() => {

        axios.get(`http://localhost:8000/details/${id}`)
        .then((res) => setarticle(res.data))
        .catch((err) => console.log(err))

    }, [])

    return (
        <div className=''>
            <Navbar />
            <div className="container mt-5">
              {article == null ?
                <div className="spinner-border"></div>
                :
                <div className="row mt-5">
                <div className="col-md-10 mt-5">
                    <h2 className='fw-bold'>{article.title}</h2>
                    <h6 className='text-danger fw-bold'>By: Rafiu Olajumoke</h6>
                    <hr />

                    <p><span className='fw-bold'>{article.title}:</span> {article.description}  </p>

                    <div className='post_img'>
                     {article?.images?.map((row) =>(
                        <img src={`http://localhost:8000/${row?.image}`} alt="" className='img-fluid' />
                        
                     ))}   
                    </div>

                    <p><span className='fw-bold'>{article.title}:</span> {article.description}  </p>

                </div>
            </div>  
            }
            </div>
        </div>
    )
}

export default Details