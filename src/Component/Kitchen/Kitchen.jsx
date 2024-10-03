import React from 'react'
import "./Kitchen.css"
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Kitchen IMAGES

import RangoliKitchen from './Kitchen_Images/Kitchen.webp'





// NEXT ARROW IMAGES

import NextArrow from './Kitchen_Images/right-arrow.png'


export const Kitchen = () => {
    return (
        <div className='turyadesign-Kitchen-container'>

            {/* First Row First Container - Kitchen SECTIONS */}

            <div className="row turyaKitchen-Kitchen-Firstrow-container">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaKitchen-Kitchen-Firstcolumn">
                    <div className="turyaKitchen-Heading">
                        <h1>KITCHEN</h1>
                    </div>
                    <div className="turyaKitchen-Kitchen-first-one">
                        <LazyLoadImage src={RangoliKitchen} alt="" loading='lazy' />
                    </div>
                </div>
            </div>

            
          

           

            


            {/* Next Arrow Container */}


            <div className="turyaKitchen-NextArrow-container">
                <h1 className='turyaKitchen-Next-Heading'>NEXT</h1>
                <LazyLoadImage className='turyaKitchen-Next-Arrow-img' src={NextArrow} alt="" loading='lazy' />
            </div>



        </div>
    )
}