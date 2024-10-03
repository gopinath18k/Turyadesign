import React from 'react'
import "./Seating.css"
import { LazyLoadImage } from 'react-lazy-load-image-component';

// CHAIRS IMAGES

import MinimalistChair from './Seating_Images/Chair/Minimalist Chair.webp'
import BarChair from './Seating_Images/Chair/Bar Chair.webp'
import CelestialChair from './Seating_Images/Chair/Celestial Chair.webp'
import Chair1 from './Seating_Images/Chair/Chair1.webp'
import DeepChair from './Seating_Images/Chair/Deep Chair.webp'
import DiamondChair from './Seating_Images/Chair/Diamond Chair.webp'
import EmbellishedChair from './Seating_Images/Chair/Embellished Chair.webp'
import LinearChair from './Seating_Images/Chair/Linear Chair.webp'
import LowSeat from './Seating_Images/Chair/Low Seat.webp'
import OrnamentChair from './Seating_Images/Chair/Ornament Chair.webp'
import PatternedChair from './Seating_Images/Chair/Patterned Chair.webp'
import PlaidSingleSeater from './Seating_Images/Chair/Plaid Single Seater.webp'
import RoseWoodChai from './Seating_Images/Chair/Rose Wood Chair.webp'
import RustChair from './Seating_Images/Chair/Rust Chair.webp'
import StarChair from './Seating_Images/Chair/Star Chair.webp'
import TheCornerSeat from './Seating_Images/Chair/The Corner Seat.webp'
import CuruvedChair from './Seating_Images/Chair/Curuved Chair.webp'
import TheGrandadChair from './Seating_Images/Chair/TheGrandad Chair.webp'
import LoveBirdsChair from './Seating_Images/Chair/LoveBirds Chair.webp'
import OrnateChair from './Seating_Images/Chair/Ornate Chair.webp'
import TheRegalChair from './Seating_Images/Chair/TheRegal Chair.webp'
import TheStand from './Seating_Images/Chair/The Stand.webp'
import TheWavyChair from './Seating_Images/Chair/TheWavy Chair.webp'
import TreeOfLifeChair from './Seating_Images/Chair/TreeOfLife Chair.webp'
import WovenChair from './Seating_Images/Chair/Woven Chair.webp'
import ZenSeat from './Seating_Images/Chair/Zen Seat.webp'



// SOFAS IMAGES

import ClassicParkBench from './Seating_Images/Sofa/ClassicPark Bench.webp'
import FloraSofa from './Seating_Images/Sofa/Flora Sofa.webp'
import PolkaSofa from './Seating_Images/Sofa/Polka Sofa.webp'
import RoseOfTheBelleSofa from './Seating_Images/Sofa/RoseOfTheBelle Sofa.webp'
import SingleSeaterSofa from './Seating_Images/Sofa/Single Seater Sofa.webp'
import SwirlsSofa from './Seating_Images/Sofa/Swirls Sofa.webp'
import TheBenches from './Seating_Images/Sofa/TheBenches.webp'
import TheClassicSofa from './Seating_Images/Sofa/TheClassicSofa.webp'
import TheOrientalChair from './Seating_Images/Sofa/TheOriental Chair.webp'
import ThePlaySeat from './Seating_Images/Sofa/ThePlay Seat.webp'
import RenaissanceSofa from './Seating_Images/Sofa/Renaissance Sofa.webp'
import WickerSofa from './Seating_Images/Sofa/Wicker Sofa.webp'




// SWING IMAGES

import SWING from './Seating_Images/Swings.jpg'

// NEXT ARROW IMAGES

import NextArrow from './Seating_Images/right-arrow.png'


export const Seating = () => {
    return (
        <div className='turyadesign-Seating-container'>

            {/* First Row First Container - CHAIRS SECTIONS */}

            <div className="row turyaSeating-Chairs1-Firstrow-container">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaSeating-Chairs1-Firstcolumn">
                    <div className="turyaSeating-Heading">
                        <h1>SEATING</h1>
                    </div>
                    <div className="turyaSeating-Chairs1-first-one">
                        <LazyLoadImage src={MinimalistChair} alt="" loading='lazy' />
                    </div>
                    <div className="turyaSeating-Chairs1-first-two">
                        <LazyLoadImage src={BarChair} alt="" loading='lazy' />
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaSeating-Chairs1-Secondcolumn">
                    <div className="turyaSeating-Chairs1-second-one">
                        <LazyLoadImage src={CelestialChair} alt="" loading='lazy' />
                    </div>
                    <div className="turyaSeating-Chairs1-second-two">
                        <LazyLoadImage src={Chair1} alt="" loading='lazy' />
                    </div>
                    <div className="turyaSeating-Chairs1-second-three">
                        <LazyLoadImage src={DeepChair} alt="" loading='lazy' />
                    </div>
                </div>
            </div>

            {/* First Row Second Container - CHAIRS SECTIONS */}

            <div className="row turyaSeating-Chairs2-Firstrow-container">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaSeating-Chairs2-Firstcolumn">
                    
                    <div className="turyaSeating-Chairs2-first-one">
                        <LazyLoadImage src={DiamondChair} alt="" loading='lazy' />
                    </div>
                    <div className="turyaSeating-Chairs2-first-two">
                        <LazyLoadImage src={EmbellishedChair} alt="" loading='lazy' />
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaSeating-Chairs2-Secondcolumn">
                    <div className="turyaSeating-Chairs2-second-one">
                        <LazyLoadImage src={LinearChair} alt="" loading='lazy' />
                    </div>
                    <div className="turyaSeating-Chairs2-second-two">
                        <LazyLoadImage src={LowSeat} alt="" loading='lazy' />
                    </div>
                </div>
            </div>


            {/* First Row Third Container - CHAIRS SECTIONS */}

            <div className="row turyaSeating-Chairs3-Firstrow-container">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaSeating-Chairs3-Firstcolumn">
                    
                    <div className="turyaSeating-Chairs3-first-one">
                        <LazyLoadImage src={OrnamentChair} alt="" loading='lazy' />
                    </div>
                    <div className="turyaSeating-Chairs3-first-two">
                        <LazyLoadImage src={PatternedChair} alt="" loading='lazy' />
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaSeating-Chairs3-Secondcolumn">
                    <div className="turyaSeating-Chairs3-second-one">
                        <LazyLoadImage src={PlaidSingleSeater} alt="" loading='lazy' />
                    </div>
                    <div className="turyaSeating-Chairs3-second-two">
                        <LazyLoadImage src={RoseWoodChai} alt="" loading='lazy' />
                    </div>
                    <div className="turyaSeating-Chairs3-second-three">
                        <LazyLoadImage src={RustChair} alt="" loading='lazy' />
                    </div>
                </div>
            </div>



            {/* First Row Fourth Container - CHAIRS SECTIONS */}

            <div className="row turyaSeating-Chairs4-Firstrow-container">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaSeating-Chairs4-Firstcolumn">
                    
                    <div className="turyaSeating-Chairs4-first-one">
                        <LazyLoadImage src={StarChair} alt="" loading='lazy' />
                    </div>
                    <div className="turyaSeating-Chairs4-first-two">
                        <LazyLoadImage src={TheCornerSeat} alt="" loading='lazy' />
                    </div>
                    <div className="turyaSeating-Chairs4-first-three">
                        <LazyLoadImage src={CuruvedChair} alt="" loading='lazy' />
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaSeating-Chairs4-Secondcolumn">
                    <div className="turyaSeating-Chairs4-second-one">
                        <LazyLoadImage src={TheGrandadChair} alt="" loading='lazy' />
                    </div>
                    <div className="turyaSeating-Chairs4-second-two">
                        <LazyLoadImage src={LoveBirdsChair} alt="" loading='lazy' />
                    </div>
                    <div className="turyaSeating-Chairs4-second-three">
                        <LazyLoadImage src={OrnateChair} alt="" loading='lazy' />
                    </div>
                </div>
            </div>


            {/* First Row Fifth Container - CHAIRS SECTIONS */}

            <div className="row turyaSeating-Chairs5-Firstrow-container">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaSeating-Chairs5-Firstcolumn">
                    
                    <div className="turyaSeating-Chairs5-first-one">
                        <LazyLoadImage src={TheRegalChair} alt="" loading='lazy' />
                    </div>
                    <div className="turyaSeating-Chairs5-first-two">
                        <LazyLoadImage src={TheStand} alt="" loading='lazy' />
                    </div>
                    <div className="turyaSeating-Chairs5-first-three">
                        <LazyLoadImage src={TheWavyChair} alt="" loading='lazy' />
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaSeating-Chairs5-Secondcolumn">
                    <div className="turyaSeating-Chairs5-second-one">
                        <LazyLoadImage src={TreeOfLifeChair} alt="" loading='lazy' />
                    </div>
                    <div className="turyaSeating-Chairs5-second-two">
                        <LazyLoadImage src={WovenChair} alt="" loading='lazy' />
                    </div>
                    <div className="turyaSeating-Chairs5-second-three">
                        <LazyLoadImage src={ZenSeat} alt="" loading='lazy' />
                    </div>
                </div>
            </div>

           

            {/* Second Row Container - Sofas FirstInner SECTIONS */}

            <div className="row turyaSeating-Sofas1-container">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaSeating-Sofas1-Firstcolumn">
                    <div className="turyaSeating-Sofas1-first-one">
                        <LazyLoadImage src={ClassicParkBench} alt="" loading='lazy' />
                    </div>
                    <div className="turyaSeating-Sofas1-first-two">
                        <LazyLoadImage src={FloraSofa} alt="" loading='lazy' />
                    </div>
                    <div className="turyaSeating-Sofas1-first-three">
                        <LazyLoadImage src={PolkaSofa} alt="" loading='lazy' />
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaSeating-Sofas1-Secondcolumn">
                    <div className="turyaSeating-Sofas1-second-one">
                        <LazyLoadImage src={RoseOfTheBelleSofa} alt="" loading='lazy' />
                    </div>
                    <div className="turyaSeating-Sofas1-second-two">
                        <LazyLoadImage src={SingleSeaterSofa} alt="" loading='lazy' />
                    </div>
                    <div className="turyaSeating-Sofas1-second-three">
                        <LazyLoadImage src={SwirlsSofa} alt="" loading='lazy' />
                    </div>
                </div>
            </div>


            {/* Second Row Container - Sofas SecondInner SECTIONS */}

            <div className="row turyaSeating-Sofas2-container">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaSeating-Sofas2-Firstcolumn">
                    <div className="turyaSeating-Sofas2-first-one">
                        <LazyLoadImage src={TheBenches} alt="" loading='lazy' />
                    </div>
                    <div className="turyaSeating-Sofas2-first-two">
                        <LazyLoadImage src={TheClassicSofa} alt="" loading='lazy' />
                    </div>
                    <div className="turyaSeating-Sofas2-first-three">
                        <LazyLoadImage src={TheOrientalChair} alt="" loading='lazy' />
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaSeating-Sofas2-Secondcolumn">
                    <div className="turyaSeating-Sofas2-second-one">
                        <LazyLoadImage src={ThePlaySeat} alt="" loading='lazy' />
                    </div>
                    <div className="turyaSeating-Sofas2-second-two">
                        <LazyLoadImage src={RenaissanceSofa} alt="" loading='lazy' />
                    </div>
                    <div className="turyaSeating-Sofas2-second-three">
                        <LazyLoadImage src={WickerSofa} alt="" loading='lazy' />
                    </div>
                </div>
            </div>

           

            


            {/* Next Arrow Container */}


            <div className="turyaSeating-NextArrow-container">
                <h1 className='turyaSeating-Next-Heading'>NEXT</h1>
                <LazyLoadImage className='turyaSeating-Next-Arrow-img' src={NextArrow} alt="" loading='lazy' />
            </div>



        </div>
    )
}