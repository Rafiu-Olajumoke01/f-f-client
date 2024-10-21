import React, { useEffect, useState } from 'react'
import TypedText from "./../components/TypedText"
import Navbar from "./../components/Navbar"
import Props from './../components/Props'
import axios from 'axios';
import Footer from "./../components/Footer"
import { Link, useNavigate } from "react-router-dom"
import "./Travel.css"


function Travel() {

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

    axios.get(`http://localhost:8000/allposts/travel`,)
      .then((res) => setarticles(res.data))
      .catch((err) => console.log(err))

  }, [])


  const strings = ['Hello', 'This is a world travel blog featuring beautiful destinations', 'New experiences and hidden places around the globe', 'Please Tag Along!.']

  useEffect(() => {

    axios.get(`http://localhost:8000/allposts/`,)
      .then((res) => setarticles(res.data))
      .catch((err) => console.log(err))

  }, [])
  return (
    <div className='container_all'>
      <Navbar />
      <div className="container-fluid travel_image mt-5">
        <div className="row mt-5">
          <div className="col mt-5">
            <h1 className='travel_imagetext fw-bold display-3 mt-5 text-center'>EXPLORE. DREAM. DISCOVER.</h1>

            <h2 className='mt-5 fw-bold display-5 animate'>
              <TypedText strings={strings} />
            </h2>


            <Link
              type="button"
              className="btn btn-primary btn-lg mt-5 ms-3 m-auto"
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
      </div>


      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-8">

            <div className="card">
              <img src={require("./../images/travelimages/sahara desert.jpg")} className="card-img-top" alt="..." />
              <div className="card-body">
                <div className='card-title mt-3'>
                  <Link className='fw-bold display-3'>SAHARA DESERT</Link>
                </div>
                <p className="card-text">
                  The Sahara Desert is the largest hot desert in the world, and the third largest overall after the Antarctica and the Arctic. The Sahara Desert covers an incredible 9.2 million km², which is almost the same size as China, and a total of 8% of the earth's land area.
                </p>
                <Link className='Readmore fw-bold'>Read More...</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src={require("./../images/travelimages/krugger2.jpg")} className="card-img-top img-fluid" alt="..." />
              <div className="card-body">
                <div className='krugger mt-1'>
                  <Link className='fw-bold display-6 '>KRUGGER NATIONAL PARK</Link>
                </div>
                <p className="card-text mt-4">
                  Firstly, did you know that the Kruger National Park is the largest game reserves in Africa? It spans across 19,633 square kilometers. That's just smaller than the size of Belgium! The Kruger National Park is home to over 12,000 elephants, 27,000 African Buffalo, 1,000 leopards and lots of other wonderful wildlife.
                  Firstly, did you know that the Kruger National Park is the largest game reserves in Africa? It spans across 19,633 square kilometers. That's just smaller than the size of Belgium! The Kruger National Park is home to over 12,000 elephants, 27,000 African Buffalo, 1,000 leopards and lots of other wonderful wildlife.
                  e autem fuga. Assumenda, soluta doloremque!
                  Lorem ipsum dolor sit amet.jjdkklldkdldhello ipsum dolor sit amet.
                </p>
                <Link className='Readmore fw-bold'>Read More...</Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="container desert mb-5">
        <div className="row">
           {
          articles?.map((row) =>(
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

      <div className="stories">
        <h4 className='text-center mt-5 mb-5'>Stories from Africa.....Around The World</h4>
      </div>


      <div className="container d-flex justify-content-center align-items-center mb-5">
        <div className="row">
          <div className="col">
            <img src="https://thumbs.dreamstime.com/b/map-africa-6049221.jpg" alt="" className='img-fluid' />
          </div>
        </div>
      </div>

      <div className='popular_places'>
        <h2 className='fw-bold mb-5'>Recent Budget Travel Post</h2>
      </div>

      <div className="container desert mb-5">
        <div className="row">
        
          <div className="col-md-4">
            <div className="card">
              <img src={require("./../images/travelimages/budget7.jpeg")} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bold">Budget Friendly Destination For Nigerian Travellers</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi rem incidunt libero molestias id qui repudiandae magni molestiae iste modi beatae eius, consectetur perferendis sed voluptatum vero omnis corporis alias!
                </p>
                <Link className='Readmore fw-bold'>Read More...</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src="https://wisconsinskydivingcenter.com/wp-content/uploads/2019/05/32953512668_855bee5bf6_h.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bold">Nigeria to Kenya - Travel Costs and Trip Breakdown</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi rem incidunt libero molestias id qui repudiandae magni molestiae iste modi beatae eius, consectetur perferendis sed voluptatum vero omnis corporis alias!
                </p>
                <Link className='Readmore fw-bold'>Read More...</Link>
              </div>
            </div>
          </div>


        </div>
      </div>


      <h2 className='container travel_on_ig mt-5 fw-bold'>Travel with me on Instagram</h2>


      <Footer />
    </div>

  )
}

export default Travel