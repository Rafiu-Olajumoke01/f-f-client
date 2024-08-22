import React from 'react'
import "./Explore.css"
import { Link } from "react-router-dom"
import Navbar from "./../components/Navbar"
import Beach from '../components/Beach'


function Explore() {
  return (
    <div className=''>
      <Navbar />
      <div className="container-fluid mb-5">
        <div className="explore_banner img-fluid position-relative ">
          <h1 className='text-center display-4 explore_text text-white fw-bold'>101 BEST PLACES TO VISIT IN AFRICA</h1>
        </div>
      </div>


      <div className="container explore_imgtext">
        <div className="row">
          <div className="col-md-2">
            <img src={require("./../images/travelimages/beautyofarica.jpg")} alt="" className='img-fluid' />
          </div>

          <div className="col-md-10">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsam dolor sequi velit quae atque voluptas assumenda non odit? Harum excepturi repudiandae, laboriosam autem, perferendis aliquam facere voluptatibus odit, ipsum veritatis officia aspernatur ex deserunt consequuntur. Vel labore animi ea, beatae atque nihil fuga, soluta impedit magnam doloremque temporibus quis velit provident, hic veritatis nesciunt. Ullam tempore nisi sit odio voluptas labore, alias aliquam suscipit incidunt. Laudantium rem, nesciunt aspernatur iusto cum incidunt quaerat omnis quas alias distinctio reiciendis quam, similique quo, doloribus asperiores amet nobis nisi veniam sint exercitationem odio! In odio, saepe repellat dolorem perspiciatis asperiores quibusdam ducimus?</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed laborum atque eaque totam, sapiente reiciendis unde eveniet pariatur molestiae nulla doloremque et exercitationem vel ipsum fuga quos beatae repellendus? Mollitia veniam quod, harum illo fugiat eum tempora sint? Numquam harum recusandae eligendi magni voluptatem enim fuga officia impedit commodi quod mollitia maxime fugiat amet dolorum velit, explicabo culpa quis soluta minus dolore sed quos officiis in. Repellendus, ullam numquam. Excepturi velit cumque facere eum, sit aperiam veritatis obcaecati rerum. Iure, labore ex voluptates doloribus illum quidem reiciendis rem ut deleniti dolorum quaerat provident aspernatur perspiciatis assumenda pariatur, autem magni aliquid.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste esse aliquam non alias dolor repudiandae ipsam dolorum facere itaque accusamus distinctio mollitia reiciendis quo quas ad ea iusto, expedita quidem magnam sunt sapiente impedit? Impedit, ullam. Ipsum provident ea consequatur tempora tenetur quibusdam animi, voluptatum minima doloremque nemo deserunt quisquam nam in molestias aut aspernatur eum sed. Recusandae modi velit dolores rem minima quod similique totam voluptate, deserunt doloremque, maxime error! Dignissimos ea sed temporibus. Animi, aspernatur. Deserunt officia tempora eveniet aspernatur quibusdam est ex laborum sunt ab, beatae perspiciatis, at laboriosam sint odit dolores adipisci aut aliquid vero necessitatibus!</p>

            <h4 className='interested fw-bold'>What are you Interested In? (select one)</h4>
            <hr />

            <div className="container mb-5">
              <div className="row">
                <div className="col-md-4 ">
                  <button className='adventrous fw-bold'>Adventrous Destinations</button>
                </div>

                <div className="col-md-4">
                  <button className='adventrous fw-bold'>Beaches</button>
                </div>

                <div className="col-md-4">
                  <button className='adventrous fw-bold'>Budget-Friendly-Destinations</button>
                </div>

                <div className="col-md-4 ">
                  <button className='adventrous mt-3 fw-bold'>Cities</button>
                </div>

                <div className="col-md-4 ">
                  <button className='adventrous mt-3 fw-bold'>Historical Destinations</button>
                </div>

                <div className="col-md-4 ">
                  <button className='adventrous mt-3 fw-bold'>Natural Landscape</button>
                </div>

                <div className="col-md-4 ">
                  <button className='adventrous mt-3 fw-bold'>Off The Beaten Path</button>
                </div>

                <div className="col-md-4 ">
                  <button className='adventrous mt-3 fw-bold'>Religious Travel</button>
                </div>

                <div className="col-md-4 ">
                  <button className='adventrous mt-3 fw-bold'>Wildlife</button>
                </div>
              </div>

              <h4 className='interested fw-bold mt-5'>What are you Interested In? (select one)</h4>
              <hr />

              <div className="container">
                <div className="row">
                  <div className="col-md-4 ">
                    <button className='adventrous mt-3 fw-bold'>North Africa</button>
                  </div>

                  <div className="col-md-4 ">
                    <button className='adventrous mt-3 fw-bold'>East Africa</button>
                  </div>

                  <div className="col-md-4 ">
                    <button className='adventrous mt-3 fw-bold'>West Africa</button>
                  </div>

                  <div className="col-md-4 ">
                    <button className='adventrous mt-3 fw-bold'>Central Africa</button>
                  </div>

                  <div className="col-md-4 ">
                    <button className='adventrous mt-3 fw-bold'>Southen  Africa</button>
                  </div>


                </div>
              </div>
            </div>



          </div>
        </div>
      </div>

      <div className="container mb-5 amarachi w-75">
        <div className="row">
          <div className="col-md-6">
            <img src={require("./../images/travelimages/amarachi.jpg")} alt="" className='img-fluid' />
          </div>

          <div className="col-md-6 mt-5 trip_part">
            <p className='fw-bold'>Trip Planning Resources</p>

            <h6 className='trip_resources fw-bold'>Book your flights: on <Link className='fw-bold link_resources'>Qatar Airways</Link></h6>

            <h6 className='trip_resources fw-bold mt-5'>Book your accomodation: <span className='tripsecond'>Find accomodation options for any budget on</span>  <Link className='fw-bold link_resources'>Booking.com</Link></h6>

            <h6 className='trip_resources fw-bold mt-5'>Purchase Travel Insurance: <span className='tripsecond'>I recommend   <Link className='fw-bold link_resources'>SafetyWing</Link> for both travel and visa<br />  <br />application needs</span></h6>

            <h6 className='trip_resources fw-bold mt-5'>Activities: <span className='tripsecond'>Find fun Activities and tours in your destination via    <Link className='fw-bold link_resources'>Get Your Guide. Viator</Link> </span><Link className='fw-bold link_resources'></Link></h6>

          </div>


        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className='text-center mt-3 mb-3'>Best Places to visit in Africa  for beach Lovers</h3>
          </div>
        </div>
      </div>


      <div className="container-fluid explore_beach_banner img-fluid">
        <div className="row">
          <div className="col">
            <h2 className='mt-5 text-center display-4 beach_text'><Link>Best beach destinations in Africa</Link></h2>
          </div>
        </div>
      </div>

      <div className="container text-center beaches">
        <div className="row">
          <div className="col">
            <Beach
              title={"Diani, Kenya"}
              image={require("./../images/Beaches/diani2.jpg")}
              text={"Daini Beach Kenya is often referred to as a collective term for a group of interconnected beaches  that adorns our beautiful beach is blindingly wh"}
            />

            <Beach
              title={"Hugada"}
              image={require("./../images/Beaches/hugada.jpg")}
              text={"Daini Beach Kenya is often referred to as a collective term for a group of interconnected beaches  that adorns our beautiful beach is blindingly wh"}
            />


            <Beach
              title={"La Digue"}
              image={require("./../images/Beaches/la digue.jpg")}
              text={"Daini Beach Kenya is often referred to as a collective term for a group of interconnected beaches  that adorns our beautiful beach is blindingly wh"}
            />

            <Beach
              title={"Pralin, Kenya"}
              image={require("./../images/Beaches/praslin.jpg")}
              text={"Daini Beach Kenya is often referred to as a collective term for a group of interconnected beaches  that adorns our beautiful beach is blindingly wh"}
            />

            <Beach
              title={"Sham El-Sheik"}
              image={require("./../images/Beaches/sham el-sheik.jpg")}
              text={"Daini Beach Kenya is often referred to as a collective term for a group of interconnected beaches  that adorns our beautiful beach is blindingly wh"}
            />

            <Beach
              title={"Shela Kenya"}
              image={require("./../images/Beaches/shela_kenya.jpg")}
              text={"Daini Beach Kenya is often referred to as a collective term for a group of interconnected beaches  that adorns our beautiful beach is blindingly wh"}
            />

            <Beach
              title={"Watamu, Kenya"}
              image={require("./../images/Beaches/watamu.jpg")}
              text={"Daini Beach Kenya is often referred to as a collective term for a group of interconnected beaches  that adorns our beautiful beach is blindingly wh"}
            />

            <Beach
              title={"Zanzibar Island"}
              image={require("./../images/Beaches/zanzibar island.jpg")}
              text={"Daini Beach Kenya is often referred to as a collective term for a group of interconnected beaches  that adorns our beautiful beach is blindingly wh"}
            />

            <Beach
              title={"Mahe Island"}
              image={require("./../images/Beaches/mahe island.jpg")}
              text={"Daini Beach Kenya is often referred to as a collective term for a group of interconnected beaches  that adorns our beautiful beach is blindingly wh"}
            />

            <Beach
              title={"Bohara"}
              image={require("./../images/Beaches/bohara new.jpg")}
              text={"Daini Beach Kenya is often referred to as a collective term for a group of interconnected beaches  that adorns our beautiful beach is blindingly wh"}
            />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore