import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

function Footer() {
    return (
        <div>
            <div className="footer_background">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h3 className='heads_up fw-bold mt-5 mb-5'>Heads up!</h3>
                            <p className='heads_p'>Some of my post may contain affiliate links of products and services i use and can recommend. I may receive a small commission if you book or purchase a product or services through them, at no extra cost to you. Thank you for your support</p>
                        </div>

                        <div className="col-md-4 All_page">
                            <h3 className='pages fw-bold mt-5 mb-4'> All Pages</h3>
                            <p className='pages_p'><Link>Food</Link></p>
                            <p className='pages_p'><Link>Travel</Link></p>
                            <p className='pages_p'><Link>Destination</Link></p>
                            <p className='pages_p'><Link>About</Link></p>
                            <p className='pages_p'><Link>Contact</Link></p>
                        </div>

                        <div className="col-md-4 resources">
                            <h3 className='pages fw-bold mt-5 mb-4'>Resources</h3>
                            <p><Link>My Accomodation Booking Link</Link></p>
                            <p><Link>Find destination tour here</Link></p>
                            <div className='coffee_text d-flex justify-content-center align-items-center mt-5'>
                                <img src={require("./../images/travelimages/coffee-removebg-preview.png")}
                                    alt="" className='img-fluid coffee' />
                                <h4 className=''><Link>Buy Me a Coffee</Link></h4>
                            </div>

                        </div>
                    </div>


                    <p className='copyright'>COPYRIGHT @ 2024 TRAVEL WITH FOOD AND FARAWAY</p>
                </div>
            </div>

            {/* https://graph.instagram.com/me/media?fields=thumbnail_url&access_token=IGQWROcFF6RVNJcGk5X2RMd1FyUWNIX255WUt2b25mUHJpel9yZA1RBb0Y5eEFGQnBQYUp0emc5SnFuWEphNDZAFRE5FR0E3eGwxS0w2QmpaUWpNdml0MHFSaEVwTVlZAR2hTcEkzQVRpSEFDTDNIemZAWbEVHeE5lN0kZD */}
        </div>
    )
}

export default Footer