import React, { useEffect, useState } from 'react'
import TypedText from "./../components/TypedText"
import "./Travel.css"
import { Link } from "react-router-dom"
import Navbar from "./../components/Navbar"
// import beauty from "./../images/travelimages/beauty of africa.jpg"
import Props from './../components/Props'
import axios from 'axios';
import Footer from "./../components/Footer"



function Travel() {

  const strings = ['Hello', 'This is a world travel blog featuring beautiful destinations', 'New experiences and hidden places around the globe', 'Please Tag Along!.']

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
              <img src={require("./../images/forestlodge.jpg")} className="card-img-top" alt="..." />
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


      <Footer />
    </div>

  )
}

export default Travel