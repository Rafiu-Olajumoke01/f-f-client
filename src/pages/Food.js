import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from "./../components/Navbar"
import images from "./../images/Group 2.png"
import Footer from "./../components/Footer";
import "./Food.css";


function Food() {

  const navigate = useNavigate()

  const [status, setstatus] = useState(false)

  const [articles, setarticles] = useState([])




  function handlePost(e) {

    let category = window.location.href.split("/").pop()

    e.preventDefault()

    setstatus(true)

    let id = localStorage.getItem("id")

    let data = new FormData(e.currentTarget)
    data.append("category", category)

    axios.post(`http://localhost:8000/create/${id}`, data)
      .then((res) => {
        alert("Post created")
        navigate("/")
      })

      .catch((err) => {
        // for(let key in err.response.data) {
        //   alert(`${key}: ${err.response.data[key]}`)
        // }
        console.log(err);

      })
      .finally(() => setstatus(false))

  }

  useEffect(() => {

    axios.get(`http://localhost:8000/allposts/food`,)
      .then((res) => setarticles(res.data))
      .catch((err) => console.log(err))



  }, [])



  return (
    <div className=''>
      <Navbar />
      <div className='container mt-5 food_banner'>
        <div className='row mt-5'>
          <div className='col-md-6 mt-5'>
            <div className=" py-5 ">
              <h1 className="display-6 fw-bold food_text mt-5"> <span>My Name Is</span> Olajumoke</h1>
              <p className="mt-3 mb-5">
                Welcome to my food blog. food & faraway features Nigerian food recipes, health and cooking tips. I hope to inspire other home cooks like myself to make wonderful dishes. Explore, leave a comment if you have any question

                Follow Food&Faraway on instagram for daily tips, tricks and recipes.

                Looking for healthy Nigerian Recipes for weight loss? – Visit Lose It Nigerian.
                A food blog with hundreds of quick and easy recipes. Classics done right, incredible one pot recipes. Asian takeout at home and holiday feasting
              </p>
              <Link to='/' className=" btn mt-5">Explore Recipes</Link>

              {/* Modal trigger button */}
              <Link
                type="button"
                className="btn btn-primary btn-lg mt-5 ms-3"
                data-bs-toggle="modal"
                data-bs-target="#modalId"
              >
                {status && <div className="spinner-grow"></div>}
                Post
              </Link>

              {/* Modal Body */}
              {/* if you want to close by clicking outside the modal, delete the last endpoint:data-bs-backdrop and data-bs-keyboard */}
              <div
                className="modal fade"
                id="modalId"
                tabindex="-1"
                data-bs-backdrop="static"
                data-bs-keyboard="false"

                role="dialog"
                aria-labelledby="modalTitleId"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-md"
                  role="document"
                >
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="modalTitleId">
                        Post Here
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <form onSubmit={handlePost} id='form'>

                        <div>
                          <label htmlFor="" className='form-label'>Title</label>
                          <input name='title' type="text" className='form-control' />

                        </div>


                        <div>
                          <label htmlFor="" className='form-label'>Description</label>
                          <textarea name="description" className='form-control' id=""></textarea>
                        </div>

                        <div>
                          <label htmlFor="" className='form-label'>Photos</label>
                          <input type="file" name='images' multiple className='form-control' />
                        </div>

                        <button className='btn btn-dark' type='submit'>
                          {status === true && <div className="spinner-border"></div>}
                          Post
                        </button>

                      </form>


                    </div>
                  </div>
                </div>
              </div>

              {/* Optional: Place to the bottom of scripts */}


            </div>
          </div>

          <div className='col-lg-6 col-md-6 col-sm-12 mt-5 food_imgfirst'>
            <img src={images} className='img-fluid mt-3' alt='' />
          </div>
        </div>
      </div>

      <div className="container mt-5 most_popular_recipes mb-5">
        <h3 className='fw-bold'>MOST <span className='popular'>POPULAR</span> RECIPES</h3>
        <div className="row">
          {
            articles?.map((row) => (
              <div className="col-md-3">

                <Link className='' to={`http://localhost:3000/details/${row?.id}`}>
                  <img src={`http://localhost:8000/${row?.images[0]?.image}`} alt="" className='img-fluid' />
                  <h5> {row?.title}</h5>
                 
                </Link>
              </div>
            ))
          }



        </div>
      </div>



      <h3 className='fw-bold text-center'>Lose It Nigerian</h3>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={require("./../images/foodimages/LIN-Flyer-600x776.jpg")} alt="" className='img-fluid' />
          </div>

          <div className="col-md-6">
            <img src={require("./../images/foodimages/LIN-Dress-Down-Cover2-600x472.jpg")} alt="" className='img-fluid' />

          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Food