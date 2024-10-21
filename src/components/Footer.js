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
                            <p className='pages_p'><Link className='' to="/food">Food</Link></p>
                            <p className='pages_p'><Link className='' to="/travel">Travel</Link></p>
                            <p className='pages_p'><Link className='' to="/destination">Destination</Link></p>
                            <p className='pages_p'><Link className='' to="/about">About</Link></p>
                            <p className='pages_p'><Link className='' to="/contact">Contact</Link></p>
                        </div>

                        <div className="col-md-4 resources">
                            <h3 className='pages fw-bold mt-5 mb-4'>Resources</h3>
                            <p><Link>My Accomodation Booking Link</Link></p>
                            <p><Link>Find destination tour here</Link></p>
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