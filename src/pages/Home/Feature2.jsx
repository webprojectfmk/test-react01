import React from 'react'

const Feature2 = () => {
  return (
    <>
        <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    
                        <div className="chart-container">
                            <canvas className="my-chart"></canvas>
                        </div>
                    
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <h4 className="section-title">Why Choose Us!</h4>
                    <h1 className="display-5 mb-4">Why You Should Trust Us? Learn More About Us!</h1>
                   
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="d-flex align-items-start">
                                <img className="flex-shrink-0" src="img/icons/icon-2.png" alt="Icon"/>
                                <div className="ms-4">
                                    <h3>Design Approach</h3>
                                    <p className="mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="d-flex align-items-start">
                                <img className="flex-shrink-0" src="img/icons/icon-3.png" alt="Icon"/>
                                <div className="ms-4">
                                    <h3>Innovative Solutions</h3>
                                    <p className="mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="d-flex align-items-start">
                                <img className="flex-shrink-0" src="img/icons/icon-4.png" alt="Icon"/>
                                <div className="ms-4">
                                    <h3>Project Management</h3>
                                    <p className="mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Feature2