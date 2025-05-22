import React from 'react'

const Carousel = () => {
  return (
    <>
    <div className="container-fluid p-0 pb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="owl-carousel header-carousel position-relative">
            <div className="owl-carousel-item position-relative" data-dot="<img src='img/carousel-1.jpg'>">
                <img className="img-fluid" src="img/carousel-1.jpg" alt=""/>
                <div className="owl-carousel-inner">
                    <div className="container">
                        <div className="row justify-content-start">
                            <div className="col-10 col-lg-8">
                                <h1 className="display-1 text-white animated slideInDown">SPESIALIS PENGEMBANG PROPERTI DAN INFRASTRUKTUR</h1>
                                <p className="fs-5 fw-medium text-white mb-4 pb-3">Hunian terjangkau di komunitas berkembang</p>
                                <a href="" className="btn btn-primary py-3 px-5 animated slideInLeft">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="owl-carousel-item position-relative" data-dot="<img src='img/carousel-2.jpg'>">
                <img className="img-fluid" src="img/carousel-2.jpg" alt=""/>
                <div className="owl-carousel-inner">
                    <div className="container">
                        <div className="row justify-content-start">
                            <div className="col-10 col-lg-8">
                                <h1 className="display-1 text-white animated slideInDown">PROYEK HUNIAN</h1>
                                <p className="fs-5 fw-medium text-white mb-4 pb-3">Membangun 500 unit hunian terjangkau dalam 5 tahun. Mengembangkan area hunian di dekat pusat kota. Merancang proyek berdasarkan kebutuhan profesional dan keluarga muda.</p>
                                <a href="" className="btn btn-primary py-3 px-5 animated slideInLeft">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="owl-carousel-item position-relative" data-dot="<img src='img/carousel-3.jpg'>">
                <img className="img-fluid" src="img/carousel-3.jpg" alt=""/>
                <div className="owl-carousel-inner">
                    <div className="container">
                        <div className="row justify-content-start">
                            <div className="col-10 col-lg-8">
                                <h1 className="display-1 text-white animated slideInDown">PENGEMBANGAN KOMERSIAL</h1>
                                <p className="fs-5 fw-medium text-white mb-4 pb-3">Membuat area komersial seluas 46.000 meter persegi di area tersebut. Menyediakan ruang ritel yang mudah diakses oleh penghuni sekitar. Menyediakan arena untuk pejalan kaki.</p>
                                <a href="" className="btn btn-primary py-3 px-5 animated slideInLeft">Read More</a>
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

export default Carousel