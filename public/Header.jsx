import React from 'react'
import { Helmet } from 'react-helmet'

const Header = () => {
  return (
    <>
    <Helmet>
        <title>PT. BERDIKARI</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
        <meta content="" name="keywords"/>
        <meta content="" name="description"/>

        {/* Favicon */}
        <link href="img/favicon.ico" rel="icon"/>

        {/* Google Web Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&family=Teko:wght@400;500;600&display=swap" rel="stylesheet"/>

        {/* Icon Font Stylesheet */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet"/>

        {/* Libraries Stylesheet */}
        <link href="lib/animate/animate.min.css" rel="stylesheet"/>
        <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet"/>
        <link href="lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />

        {/* Customized Bootstrap Stylesheet */}
        <link href="css/bootstrap.min.css" rel="stylesheet"/>

        {/* Template Stylesheet */}
        <link href="css/style.css" rel="stylesheet"/>
        {/* Videoplayer */}
        <link rel="stylesheet" href="https://cdn.plyr.io/3.7.8/plyr.css" />
        <script src="https://cdn.plyr.io/3.7.8/plyr.polyfilled.js"></script>

    </Helmet>

    </>
  )
}

export default Header