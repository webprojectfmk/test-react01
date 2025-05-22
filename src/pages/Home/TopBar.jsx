import React from 'react'

const TopBar = () => {
  return (
    <>
    <div classNameName="container-fluid bg-dark p-0 wow fadeIn" data-wow-delay="0.1s">
        <div classNameName="row gx-0 d-none d-lg-flex">
            <div classNameName="col-lg-7 px-5 text-start">
                <div classNameName="h-100 d-inline-flex align-items-center py-3 me-3">
                    <a classNameName="text-body px-2" href="tel:+0123456789"><i classNameName="fa fa-phone-alt text-primary me-2"></i>+012 345 6789</a>
                    <a classNameName="text-body px-2" href="mailto:info@example.com"><i classNameName="fa fa-envelope-open text-primary me-2"></i>info@example.com</a>
                </div>
            </div>
            <div classNameName="col-lg-5 px-5 text-end">
                <div classNameName="h-100 d-inline-flex align-items-center py-3 me-2">
                    <a classNameName="text-body px-2" href="">Terms</a>
                    <a classNameName="text-body px-2" href="">Privacy</a>
                </div>
                <div classNameName="h-100 d-inline-flex align-items-center">
                    <a classNameName="btn btn-sm-square btn-outline-body me-1" href=""><i classNameName="fab fa-facebook-f"></i></a>
                    <a classNameName="btn btn-sm-square btn-outline-body me-1" href=""><i classNameName="fab fa-twitter"></i></a>
                    <a classNameName="btn btn-sm-square btn-outline-body me-1" href=""><i classNameName="fab fa-linkedin-in"></i></a>
                    <a classNameName="btn btn-sm-square btn-outline-body me-0" href=""><i classNameName="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default TopBar