import React, { Component } from 'react'; 


class About extends Component { render() { return (
<section className="pf-about">
    <div className="container">
        <div className="row">
            <div className="col-md-4">
             <div className="pf-photo">
				<img src={'./img/s.jpg'} className="img-fluid" alt=""/>
			  </div>
            </div>
            <div className="col-md-8 d-flex align-items-center">
                <div className="pf-about-content">
					<h2>About me</h2>
					<p>Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior. While men’s borderline-inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards – especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach.Small Towns and Big StatesFor </p>
					<a  className="primary-btn">Hire me<span className="lnr lnr-arrow-right"></span></a>
				</div>
            </div>
        </div>
    </div>
</section>
); } } export default About;