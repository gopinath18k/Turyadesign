import React from 'react'
import "./Clocks.css"
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Clocks IMAGES

import AlchemistClock from './Clocks_Images/Alchemist.webp'
import FlowofTime from './Clocks_Images/Flow.webp'
import OreoClock from './Clocks_Images/Oreo.webp'
import TheBigClock from './Clocks_Images/The.webp'

// NEXT ARROW IMAGES

import NextArrow from './Clocks_Images/right-arrow.png'


export const Clocks = () => {
    return (
        <div className='turyadesign-Clocks-container'>

            {/* First Row Container - Clocks SECTIONS */}

            <div className="row turyaClocks-Clocks-Firstrow-container">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaClocks-Clocks-Firstcolumn">
                    <div className="turyaClocks-Clocks-Heading">
                        <h1>CLOCKS</h1>
                    </div>
                    <div className="turyaClocks-Clocks-first-one">
                        <LazyLoadImage src={AlchemistClock} alt="" loading='lazy' />
                    </div>
                    <div className="turyaClocks-Clocks-first-two">
                        <LazyLoadImage src={FlowofTime} alt="" loading='lazy' />
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaClocks-Clocks-Secondcolumn">
                    <div className="turyaClocks-Clocks-second-one">
                        <LazyLoadImage src={OreoClock} alt="" loading='lazy' />
                    </div>
                    <div className="turyaClocks-Clocks-second-two">
                        <LazyLoadImage src={TheBigClock} alt="" loading='lazy' />
                    </div>
                </div>
            </div>

            
            {/* Next Arrow Container */}


            <div className="turyaClocks-Clocks-NextArrow-container">
                <h1 className='turyaClocks-Clocks-Next-Heading'>NEXT</h1>
                <LazyLoadImage className='turyaClocks-Clocks-Next-Arrow-img' src={NextArrow} alt="" loading='lazy' />
            </div>



        </div>
    )
}