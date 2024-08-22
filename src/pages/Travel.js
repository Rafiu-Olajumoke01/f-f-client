import React, { useEffect, useState } from 'react'
import "./Travel.css"
import { Link } from "react-router-dom"
import Navbar from "./../components/Navbar"
import sahara from "./../images/travelimages/sahara desert.jpg"
import krugger from "./../images/travelimages/krugger2.jpg"
import beauty from "./../images/travelimages/beauty of africa.jpg"
import Props from './../components/Props'
import axios from 'axios';
import Footer from "./../components/Footer"



function Travel() {
  const [photos, setPhotos] = useState(null)

  useEffect(() => {

    axios.get("https://graph.instagram.com/me/media?fields=id,media_url&access_token=IGQWROcFF6RVNJcGk5X2RMd1FyUWNIX255WUt2b25mUHJpel9yZA1RBb0Y5eEFGQnBQYUp0emc5SnFuWEphNDZAFRE5FR0E3eGwxS0w2QmpaUWpNdml0MHFSaEVwTVlZAR2hTcEkzQVRpSEFDTDNIemZAWbEVHeE5lN0kZD")
      .then((res) => setPhotos(res.data.data))
      .catch((err) => console.log(err))

  }, [])
  return (
    <div className=''>
      <Navbar />
      <div id='hero-slider' className='carousel slide'>
        <div className="carousel-inner">
          <div className="carousel-item text-center bg-cover vh-100 active slide-1">
            <div className="container h-100 d-flex align-items-center justify-content-center">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <h3 className="display-4 fw-bold text-white"><Link className='' to="/explore">101 BEST PLACES TO VISIT IN AFRICA</Link></h3>
                  <h5 className='text-white mt-4'>Africa, the second largest continent (after Asia), covering about one-fifth of the total land surface of Earth</h5>
                  <Link to="/explore" class="btn btn-brand">Explore</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item text-center bg-cover vh-100 slide-2">
            <div className="container h-100 d-flex align-items-center justify-content-center">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <h3 className="display-4 text-white fw-bold"><Link className='' to="/travel">Summited Africa's Second Highest Mountain</Link></h3>
                  <h5 className='text-white mt-4'>There are many words to describe how i feel writing this article, but the overwhelming feeling is pride.</h5>
                </div>
              </div>
            </div>

          </div>


          <div className="carousel-item text-center bg-cover vh-100 slide-3">
            <div className="container h-100 d-flex align-items-center justify-content-center">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <h3 className="display-4 text-white fw-bold"><Link className='' to="/travel">2023: The Year In Review</Link></h3>
                  <h5 className='text-white mt-4'>There are many words to describe how i feel writing this article, but the overwhelming feeling is pride.</h5>
                </div>
              </div>
            </div>

          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#hero-slider" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#hero-slider" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </div>

      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <img src={sahara} className="card-img-top" alt="..." />
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
              <img src={krugger} className="card-img-top img-fluid" alt="..." />
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
          <div className="col-md-4">
            <div className="card">
              <img src="https://media.cnn.com/api/v1/images/stellar/prod/200317140716-04-egypt-white-desert-restricted.jpg?q=w_1110,c_fill" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bold display-6">HELLO! AFRICA</h5>
                <p className="card-text">
                  It is the second largest continent of the world. ...
                  There are 54 countries in Africa. ...
                  Africa has the world's largest desert – sort of! ...
                  It is home to the world's longest river, The Nile. ...
                  Most of the world's diamonds come from Africa.
                </p>
                <Link className='Readmore fw-bold'>Read More...</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src="https://media.cnn.com/api/v1/images/stellar/prod/200317140716-04-egypt-white-desert-restricted.jpg?q=w_1110,c_fill" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bold display-6">HELLO! NAMIBIA</h5>
                <p className="card-text">
                  It has the world's tallest sand dune. ...
                  Fish River Canyon is second-only to the Grand Canyon. ...
                  The food is surprisingly good. ...
                  More cheetah live here than anywhere else. ...
                  It gets cold sometimes. ...
                  There are very few people here. ...

                </p>
                <Link className='Readmore fw-bold'>Read More...</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src="https://media.cnn.com/api/v1/images/stellar/prod/200317140716-04-egypt-white-desert-restricted.jpg?q=w_1110,c_fill" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bold display-6">HELLO! Kenya</h5>
                <p className="card-text">
                  Official Name: United States of America.
                  Population: 324, 057, 300.
                  Form of Government: Constitution-based federal republic.
                  Capital: Washington, D.C.
                  Area: 9, 826, 630 square kilometres.
                  Area: 9, 826, 630 square kilometres.
                </p>
                <Link className='Readmore fw-bold'>Read More...</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='insider'>
        <h4 className='text-center m-5 insider_text fw-bold display-6'>Become an insider</h4>
      </div>

      <div className="container mb-5 d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-md-4 ">
            <input type="text" placeholder='Enter Your Email' className='form-control' />
          </div>

          <div className="col-md-4">
            <input type="text" placeholder='Enter Your Username' className='form-control' />
          </div>

          <div className="col-md-4 subscribe mt-2">
            <Link className='fw-bold'>SUBSCRIBE</Link>
          </div>
        </div>
      </div>

      <div className="stories">
        <h4 className='text-center mt-5 mb-5'>Stories from Africa.....Around The World</h4>
      </div>


      <div className="container d-flex justify-content-center align-items-center mb-5">
        <div className="row">
          <div className="col">
            <img src="https://thumbs.dreamstime.com/b/map-africa-6049221.jpg" alt="" />
          </div>
        </div>
      </div>

      <div className="container-fluid mb-5 h-100 d-flex align-items-center justify-content-center">
        <div className="row justify-content-center">
          <div className="col justify-content-center">
            <div className="banner img-fluid">
              <h1 className='banner_text text-white fw-bold position-relative display-4 '>DESTINATION THAT INSPIRE</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <div className='featured '>
              <h2 className='fw-bold mb-5'>Featured Categories</h2>
            </div>
          </div>
        </div>
      </div>


      <div className="container categories mb-5">
        <div className="row">
          <div className="col-md-4">
            <Link to="/explore"><img src={require("./../images/travelimages/Africa image.jpg")} alt="" className='img-fluid' /></Link>
          </div>

          <div className="col-md-4">
            <Link><img src={require("./../images/travelimages/Asia images.jpg")} alt="" className='img-fluid' /></Link>
          </div>

          <div className="col-md-4">
            <Link><img src={require("./../images/travelimages/Europe images.jpg")} alt="" className='img-fluid' /></Link>
          </div>

          <div className="col-md-4 mt-4">
            <Link><img src={require("./../images/travelimages/Kenya.jpg")} alt="" className='img-fluid' /></Link>
          </div>

          <div className="col-md-4 mt-4">
            <Link><img src={require("./../images/travelimages/nigeria.jpg")} alt="" className='img-fluid' /></Link>
          </div>

          <div className="col-md-4 mt-4">
            <Link><img src={require("./../images/travelimages/North America Image.jpg")} alt="" className='img-fluid' /></Link>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <div className='popular_places'>
              <h2 className='fw-bold mb-5'>Recent Budget Travel Post</h2>
            </div>

          </div>
        </div>
      </div>

      <div className="container desert mb-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src={require("./../images/travelimages/forestlodge.jpg")} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bold">Camping & Hiking at Castle Forest Lodge</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi rem incidunt libero molestias id qui repudiandae magni molestiae iste modi beatae eius, consectetur perferendis sed voluptatum vero omnis corporis alias!
                </p>
                <Link className='Readmore fw-bold'>Read More...</Link>
              </div>
            </div>
          </div>


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


      <div className="container-fluid">
        <div className="row">

          {photos == null && <h1 className='m-auto'>Loading....</h1>}

          {
            photos?.length == 0 ?
              <h1>No Photos Found</h1>
              :

              photos?.map((photo) => (
                <div className="col-md-3">
                  <Props image={photo?.media_url} text={"hello"} />
                </div>
              ))
          }

        </div>
      </div>

      <Footer/>
    </div>

  )
}

export default Travel