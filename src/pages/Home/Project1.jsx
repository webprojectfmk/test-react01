import React from 'react'

const Project1 = () => {
  return (
    <>
    <div className="container-xxl project py-5">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
                <h4 className="section-title">Our Projects</h4>
                <h1 className="display-5 mb-4">Visit Our Latest Projects And Our Innovative Works</h1>
            </div>
            <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
                
                <div className="col-lg-8">
                    <div className="tab-content w-100">
                        <div className="tab-pane fade show active" id="">
                            {/* <!-- HTML Video --> */}
                            <div className="video-wrapper">
                                <video id="player" playsinline controls>
                                    <source src="resources/video.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <h1 className="mb-3">25 Years Of Experience In Architecture Industry</h1>
                                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                    <p><i className="fa fa-check text-primary me-3"></i>Design Approach</p>
                                    <p><i className="fa fa-check text-primary me-3"></i>Innovative Solutions</p>
                                    <p><i className="fa fa-check text-primary me-3"></i>Project Management</p>
                                    <a href="" className="btn btn-primary py-3 px-5 mt-3">Read More</a>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Project1