import React, { Component } from 'react';  
import './Banner.scss'

class Banner extends Component {
    render(){
        return(
        <section className="banner-area relative">
          <div className="overlay overlay-bg">
           <div className="container">
                <div className="row fullscreen align-items-center justify-content-between">
                    <div className="col-lg-6 col-md-7 col-sm-8">
                        <div className="banner-content">
                        <h1>Hi, <br/> I am Sonu</h1>
                        <p>Living in today’s metropolitan world of cellular phones, mobile computers and other high-tech gadgets.</p>
		 				<a href="/" className="primary-btn">Get Started<span className="lnr lnr-arrow-right"></span></a>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-4">
						<img src="img/banner.png" alt="" className="img-fluid" />
					</div>
                </div>
           </div>
          </div>
        </section>

        )
    }
}

export default Banner;