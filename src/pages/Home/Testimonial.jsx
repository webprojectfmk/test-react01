import React from 'react'

const Testimonial = () => {
  return (
    <>
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
                <h4 className="section-title">Testimonial</h4>
                <h1 className="display-5 mb-4">Thousands Of Customers Who Trust Us And Our Services</h1>
            </div>
            <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                <div className="testimonial-item text-center" data-dot="<img className='img-fluid' src='img/testimonial-1.jpg' alt=''>">
                    <p className="fs-5">Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                    <h3>Client Name</h3>
                    <span className="text-primary">Profession</span>
                </div>
                <div className="testimonial-item text-center" data-dot="<img className='img-fluid' src='img/testimonial-2.jpg' alt=''>">
                    <p className="fs-5">Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                    <h3>Client Name</h3>
                    <span className="text-primary">Profession</span>
                </div>
                <div className="testimonial-item text-center" data-dot="<img className='img-fluid' src='img/testimonial-3.jpg' alt=''>">
                    <p className="fs-5">Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                    <h3>Client Name</h3>
                    <span className="text-primary">Profession</span>
                </div>
            </div>      
        </div>
    </div>
    </>
  )
}

export default Testimonial