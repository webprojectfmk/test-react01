import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
        <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
            <h1 className="text-primary m-0"><img className="me-3" src="img/icons/icon-1.png" alt="Icon"/>PT. BERDIKARI</h1>
        </a>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                <a href="index.html" className="nav-item nav-link active">Home</a>
                <a href="about.html" className="nav-item nav-link">About</a>
                <a href="service.html" className="nav-item nav-link">Services</a>
                <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div className="dropdown-menu border-0 m-0">
                        <a href="feature.html" className="dropdown-item">Our Features</a>
                        <a href="project.html" className="dropdown-item">Our Projects</a>
                        <a href="team.html" className="dropdown-item">Team Members</a>
                        <a href="appointment.html" className="dropdown-item">Appointment</a>
                        <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                        <a href="404.html" className="dropdown-item">404 Page</a>
                    </div>
                </div>
                <a href="contact.html" className="nav-item nav-link">Contact</a>
            </div>
            
        </div>
    </nav>
    </>
  )
}

export default Navbar