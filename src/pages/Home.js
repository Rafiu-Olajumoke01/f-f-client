import React, { useEffect, useState } from 'react'
import Props from './../components/Props'
import { Link } from "react-router-dom"
import Navbar from "./../components/Navbar"
import Banner from '../components/Banner'
import image1 from "./../images/foodslider.png"
import image2 from "./../images/newsslider.png"
import image3 from "./../images/travelslider1.png"
import props1 from "./../images/prop1.jpg"
import "./Home.css"
import Footer from '../components/Footer';
import axios from 'axios';

function Home() {

  const [photos, setPhotos] = useState(null)

  useEffect(() =>{

    axios.get("https://graph.instagram.com/me/media?fields=id,media_url&access_token=IGQWROcFF6RVNJcGk5X2RMd1FyUWNIX255WUt2b25mUHJpel9yZA1RBb0Y5eEFGQnBQYUp0emc5SnFuWEphNDZAFRE5FR0E3eGwxS0w2QmpaUWpNdml0MHFSaEVwTVlZAR2hTcEkzQVRpSEFDTDNIemZAWbEVHeE5lN0kZD")
    .then((res) => setPhotos(res.data.data))
    .catch((err) => console.log(err))

  }, [])

  return (
    <div className=''>
      <Navbar />
      <Banner />

      <h2 className='slider_text mt-5 text-center display-6 fw-bold'>LATEST FROM THE FIELD...</h2>

      {/* Begining Of Slider */}

      <div id='hero-slider' className='carousel slide'>
        <div className="carousel-inner">

          <div className="carousel-item text-center bg-cover vh-100 active slide-1">
            <div className="container h-100 d-flex align-items-center justify-content-center">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <h4 className="display-2 fw-bold text-white"><Link className='' to="/food">Fresh & Tasty Foods</Link></h4>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item text-center bg-cover vh-100 slide-2">
            <div className="container h-100 d-flex align-items-center justify-content-center">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <h4 className="display-2 text-white fw-bold"><Link className='' to="/travel">Where Culture Meet Adventure</Link></h4>
                </div>
              </div>
            </div>

          </div>

          <div className="carousel-item text-center bg-cover vh-100 slide-3">
            <div className="container h-100 d-flex align-items-center justify-content-center">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <h4 className="display-2 text-white fw-bold"><Link>News, Analysis and Insights</Link></h4>
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

      {/* End Of Slider */}

      

      {/* Begining of Props */}
      <h2 className='slider_text mt-2 text-center display-6 fw-bold'>THEN THERE IS MY INSTAGRAM</h2>

      <div className="container-fluid mb-5 instagram">
        <div className="row">
          
          
          {photos == null && <h1 className='m-auto'>Loading....</h1>}

          {
            photos?.length == 0 ?
            <h1>No Photos Found</h1>
            :

            photos?.map((photo) =>(
              <div className="col-md-3">
            <Props image={photo?.media_url} text={"hello"} />
          </div>
            ))
          }
         
        </div>
      </div>
      <Footer />
{/*
https://graph.instagram.com/me/media?fields=id,media_url&access_token=IGQWROcFF6RVNJcGk5X2RMd1FyUWNIX255WUt2b25mUHJpel9yZA1RBb0Y5eEFGQnBQYUp0emc5SnFuWEphNDZAFRE5FR0E3eGwxS0w2QmpaUWpNdml0MHFSaEVwTVlZAR2hTcEkzQVRpSEFDTDNIemZAWbEVHeE5lN0kZD
*/}
    </div>
  )
}

export default Home