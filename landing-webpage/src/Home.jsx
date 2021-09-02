import React from 'react'
import {NavLink} from 'react-router-dom'
const Home = () => {
    return (
       <>
           <section id="header" className="">
               <div className="container-fluid nav_bg">
                   <div className="row">
                       <div className="col-10 mx-auto">
                           <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                                <h1>Grow your business with <strong className="brand-name">TechnicalShiv3</strong></h1>
                                <h2 className="my-3">
                                    We are team of talented developer making websites
                                </h2>
                                <div className="mt-3">
                                    <NavLink to="" className="btn-get-started">Get Started</NavLink>
                                </div>

                           </div>
                       </div>
                   </div>
               </div>
           </section>
       </>
    )
}

export default Home
