import React from 'react'
import "./Tables.css"
import { LazyLoadImage } from 'react-lazy-load-image-component';

// DINNING IMAGES

import BreakfastDinning from './Tables_Images/Dinning/Breakfast Dinning.webp'
import FallTabelDinning from './Tables_Images/Dinning/Fall Tabel Dinning_.webp'
import RedDinning from './Tables_Images/Dinning/Red Dinning.webp'
import MordenGridDinning from './Tables_Images/Dinning/Morden Grid Dinning.webp'
import CutieDinning from './Tables_Images/Dinning/Cutie Dinning.webp'
import lotusseat from './Tables_Images/Dinning/lotus seat.webp'


// SIDE TABLES IMAGES

import CarvedSideTable from './Tables_Images/Side Table/Carved Side Table.webp'
import ClassicSideTable from './Tables_Images/Side Table/Classic Side Table.webp'
import EtchedSideTable from './Tables_Images/Side Table/Etched Side Table.webp'
import ObsidianSideTable from './Tables_Images/Side Table/Obsidian Side Table.webp'
import OcticTable from './Tables_Images/Side Table/OcticTable.webp'
import OrnateSideTable from './Tables_Images/Side Table/Ornate Side Table.webp'
import TheClassicSideTable from './Tables_Images/Side Table/The Classic Side Table.webp'


// TABLES IMAGES


import TheClassicTable from './Tables_Images/Tables/The Classic Table.webp'
import ClassicTableTwo from './Tables_Images/Tables/Classic Table Two.webp'
import ClockTable from './Tables_Images/Tables/Clock Table.webp'
import CloverTable from './Tables_Images/Tables/Clover Table.webp'
import FallFloorTable from './Tables_Images/Tables/Fall Floor Table.webp'
import HandpaintedTable from './Tables_Images/Tables/Handpainted Table.webp'
import KajuTable from './Tables_Images/Tables/Kaju Table.webp'
import OceanSeriesTable from './Tables_Images/Tables/Ocean_Series_Table.webp'
import OctagonTable from './Tables_Images/Tables/Octagon Table.webp'
import PeranakanTable from './Tables_Images/Tables/Peranakan Table.webp'
import RoosterTable from './Tables_Images/Tables/Rooster Table.webp'
import TallDisplayTable from './Tables_Images/Tables/Tall Display Table.webp'
import TerracottaTable from './Tables_Images/Tables/Terracotta Table.webp'
import WinoUnitTable from './Tables_Images/Tables/Vino Unit Table.webp'


// TEAPOYS IMAGES


import AquaStool from './Tables_Images/Teapoy/Aqua Stool.webp'
import ArtDecoTeapoy from './Tables_Images/Teapoy/Art Deco Teapoy.webp'
import BlackMarbleTeapoy from './Tables_Images/Teapoy/Black Marble Teapoy.webp'
import ClassicTeapoy from './Tables_Images/Teapoy/Classic Teapoy.webp'
import CreamMarbleTeapoy from './Tables_Images/Teapoy/Cream Marble Teapoy.webp'
import GlassTeapoy from './Tables_Images/Teapoy/Glass Teapoy.webp'
import FloraTeapoy from './Tables_Images/Teapoy/Flora Teapoy.webp'
import Squareglassteapoy from './Tables_Images/Teapoy/Square glass teapoy.webp'
import FuturaSideTeapoy from './Tables_Images/Teapoy/Futura Side Teapoy.webp'
import GlassOrnateTeapoy from './Tables_Images/Teapoy/Glass Ornate Teapoy.webp'
import GrateTeapoy from './Tables_Images/Teapoy/Grate Teapoy.webp'
import MarbleTeapoy from './Tables_Images/Teapoy/Marble Teapoy.webp'
import OchreTeapoy from './Tables_Images/Teapoy/Ochre Teapoy.webp'
import PatternTeapoy from './Tables_Images/Teapoy/Pattern Teapoy.webp'
import PeranakanStool from './Tables_Images/Teapoy/Peranakan Stool.webp'
import RustCreamTable from './Tables_Images/Teapoy/RustCream Table.webp'
import SantoriniTeapoy from './Tables_Images/Teapoy/Santorini Teapoy.webp'
import SingleTileTeapoy from './Tables_Images/Teapoy/Single Tile Teapoy.webp'
import RoundMarbleteapoy from './Tables_Images/Teapoy/Round Marble teapoy.webp'
import TandavaGlassTeapoy from './Tables_Images/Teapoy/Tandava Glass Teapoy.webp'
import TileRoundTeapoy from './Tables_Images/Teapoy/Tile Round  Teapoy.webp'
import TrinityTable from './Tables_Images/Teapoy/Trinity Table.webp'
import TrinityTabletwo from './Tables_Images/Teapoy/Trinity Tabletwo.webp'
import TrinityTablethree from './Tables_Images/Teapoy/Trinity Tablethree.webp'
import TrinityTeapoy from './Tables_Images/Teapoy/Trinity Teapoy.webp'
import TripodTeapoy from './Tables_Images/Teapoy/Tripod Teapoy.webp'
import TripodRoundglassteapoy from './Tables_Images/Teapoy/Tripod Round glass teapoy.webp'




// NEXT ARROW IMAGES

import NextArrow from './Tables_Images/right-arrow.png'


export const Tables = () => {
    return (
        <div className='turyadesign-Tables-container'>

            {/* First Row Container - DINNING SECTIONS */}

            <div className="row turyaTables-Dinning-Firstrow-container">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaTables-Dinning-Firstcolumn">
                    <div className="turyaTables-Heading">
                        <h1>TABLES</h1>
                    </div>
                    <div className="turyaTables-Dinning-first-one">
                        <LazyLoadImage src={BreakfastDinning} alt="" loading='lazy' />
                    </div>
                    <div className="turyaTables-Dinning-first-two">
                        <LazyLoadImage src={RedDinning} alt="" loading='lazy' />
                    </div>
                    <div className="turyaTables-Dinning-first-three">
                        <LazyLoadImage src={MordenGridDinning} alt="" loading='lazy' />
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaTables-Dinning-Secondcolumn">
                    <div className="turyaTables-Dinning-second-one">
                        <LazyLoadImage src={FallTabelDinning} alt="" loading='lazy' />
                    </div>
                    <div className="turyaTables-Dinning-second-two">
                        <LazyLoadImage src={CutieDinning} alt="" loading='lazy' />
                    </div>
                    <div className="turyaTables-Dinning-second-three">
                        <LazyLoadImage src={lotusseat} alt="" loading='lazy' />
                    </div>
                </div>
            </div>

            {/* Second Row Container - SIDETABLE SECTIONS */}

            <div className="row turyaTables-SideTables-container">
                <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 turyaTables-SideTables-Firstcolumn">
                    <LazyLoadImage src={CarvedSideTable} alt="" loading='lazy' />
                </div>

                <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 turyaTables-SideTables-Secondcolumn">
                    <LazyLoadImage src={ClassicSideTable} alt="" loading='lazy' />
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 turyaTables-SideTables-Thirdcolumn">
                    <LazyLoadImage src={EtchedSideTable} alt="" loading='lazy' />
                </div>
            </div>

            <div className="row turyaTables-SideTables-container">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaTables-SideTables-Firstcolumns">
                    <div className="turyaTables-SideTables-first-one">
                        <LazyLoadImage src={ObsidianSideTable} alt="" loading='lazy' />
                    </div>
                    <div className="turyaTables-SideTables-first-two">
                        <LazyLoadImage src={OrnateSideTable} alt="" loading='lazy' />
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaTables-SideTables-Secondcolumns">
                    <div className="turyaTables-SideTables-second-one">
                        <LazyLoadImage src={OcticTable} alt="" loading='lazy' />
                    </div>
                    <div className="turyaTables-SideTables-second-two">
                        <LazyLoadImage src={TheClassicSideTable} alt="" loading='lazy' />
                    </div>
                </div>
            </div>

            {/* Third Row Container - TABLES FirstInner SECTIONS */}

            <div className="row turyaTables-Thirdrow-container">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaTables-ThirdRow-Firstcolumn">
                    <div className="turyaTables-Thirdrow-first-one">
                        <LazyLoadImage src={TheClassicTable} alt="" loading='lazy' />
                    </div>
                    <div className="turyaTables-Thirdrow-first-two">
                        <LazyLoadImage src={ClassicTableTwo} alt="" loading='lazy' />
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaTables-Thirdrow-Secondcolumn">
                    <div className="turyaTables-Thirdrow-second-one">
                        <LazyLoadImage src={ClockTable} alt="" loading='lazy' />
                    </div>
                    <div className="turyaTables-Thirdrow-second-two">
                        <LazyLoadImage src={CloverTable} alt="" loading='lazy' />
                    </div>
                    <div className="turyaTables-Thirdrow-second-three">
                        <LazyLoadImage src={FallFloorTable} alt="" loading='lazy' />
                    </div>
                </div>
            </div>  

            {/* Third Row Container - TABLES SecondInner SECTIONS */}

            <div className="row turyaTables-Thirdrows-container">
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaTables-ThirdRows-Firstcolumn">
                  
                  <div className="turyaTables-Thirdrows-first-one">
                      <LazyLoadImage  src={HandpaintedTable} alt="" loading='lazy'/>
                  </div>
                  <div className="turyaTables-Thirdrows-first-two">
                      <LazyLoadImage  src={KajuTable} alt="" loading='lazy'/>
                  </div>
                  <div className="turyaTables-Thirdrows-first-three">
                      <LazyLoadImage  src={OceanSeriesTable} alt="" loading='lazy'/>
                  </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaTables-Thirdrows-Secondcolumn">
                  <div className="turyaTables-Thirdrows-second-one">
                      <LazyLoadImage  src={OctagonTable} alt=""  loading='lazy'/>
                  </div>
                  <div className="turyaTables-Thirdrows-second-two">
                      <LazyLoadImage  src={PeranakanTable} alt=""  loading='lazy'/>
                  </div>
                  <div className="turyaTables-Thirdrows-second-three">
                       <LazyLoadImage  src={RoosterTable} alt=""  loading='lazy'/>
                  </div>
              </div>
            </div>

            {/* Third Row Container - TABLES ThirdInner SECTIONS */}

            <div className="row turyaTables-SideTables-container">
                <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 turyaTables-Tables-Firstcolumn">
                    <LazyLoadImage src={TallDisplayTable} alt="" loading='lazy' />
                </div>

                <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 turyaTables-Tables-Secondcolumn">
                    <LazyLoadImage src={TerracottaTable} alt="" loading='lazy' />
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 turyaTables-Tables-Thirdcolumn">
                    <LazyLoadImage src={WinoUnitTable} alt="" loading='lazy' />
                </div>
            </div>

            {/* Fourth Row Container - TEAPOY FirstInner SECTIONS */}

            <div className="row turyaTables-Teapoy1-Firstrow-container">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaTables-Teapoy1-Firstcolumn">
                    <div className="turyaTables-Teapoy1-first-one">
                        <LazyLoadImage src={AquaStool} alt="" loading='lazy' />
                    </div>
                    <div className="turyaTables-Teapoy1-first-two">
                        <LazyLoadImage src={ArtDecoTeapoy} alt="" loading='lazy' />
                    </div>
                    <div className="turyaTables-Teapoy1-first-three">
                        <LazyLoadImage src={BlackMarbleTeapoy} alt="" loading='lazy' />
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaTables-Teapoy1-Secondcolumn">
                    <div className="turyaTables-Teapoy1-second-one">
                        <LazyLoadImage src={ClassicTeapoy} alt="" loading='lazy' />
                    </div>
                    <div className="turyaTables-Teapoy1-second-two">
                        <LazyLoadImage src={CreamMarbleTeapoy} alt="" loading='lazy' />
                    </div>
                    <div className="turyaTables-Teapoy1-second-three">
                        <LazyLoadImage src={GlassTeapoy} alt="" loading='lazy' />
                    </div>
                </div>
            </div>

            {/* Fourth Row Container - TEAPOY SecondInner SECTIONS */}

            <div className="row turyaTables-Teapoy2-Firstrow-container">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaTables-Teapoy2-Firstcolumn">
                    <div className="turyaTables-Teapoy2-first-one">
                        <LazyLoadImage src={FloraTeapoy} alt="" loading='lazy' />
                    </div>
                    <div className="turyaTables-Teapoy2-first-two">
                        <LazyLoadImage src={Squareglassteapoy} alt="" loading='lazy' />
                    </div>
                    <div className="turyaTables-Teapoy2-first-three">
                        <LazyLoadImage src={FuturaSideTeapoy} alt="" loading='lazy' />
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaTables-Teapoy2-Secondcolumn">
                    <div className="turyaTables-Teapoy2-second-one">
                        <LazyLoadImage src={GlassOrnateTeapoy} alt="" loading='lazy' />
                    </div>
                    <div className="turyaTables-Teapoy2-second-two">
                        <LazyLoadImage src={GrateTeapoy} alt="" loading='lazy' />
                    </div>
                    <div className="turyaTables-Teapoy2-second-three">
                        <LazyLoadImage src={MarbleTeapoy} alt="" loading='lazy' />
                    </div>
                </div>
            </div>


            {/* Fourth Row Container - TEAPOY ThirdInner SECTIONS */}

            <div className="row turyaTables-Teapoy3-Firstrow-container">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaTables-Teapoy3-Firstcolumn">
                    <div className="turyaTables-Teapoy3-first-one">
                        <LazyLoadImage src={OchreTeapoy} alt="" loading='lazy' />
                    </div>
                    <div className="turyaTables-Teapoy3-first-two">
                        <LazyLoadImage src={PatternTeapoy} alt="" loading='lazy' />
                    </div>
                    <div className="turyaTables-Teapoy3-first-three">
                        <LazyLoadImage src={PeranakanStool} alt="" loading='lazy' />
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaTables-Teapoy3-Secondcolumn">
                    <div className="turyaTables-Teapoy3-second-one">
                        <LazyLoadImage src={RustCreamTable} alt="" loading='lazy' />
                    </div>
                    <div className="turyaTables-Teapoy3-second-two">
                        <LazyLoadImage src={SantoriniTeapoy} alt="" loading='lazy' />
                    </div>
                    <div className="turyaTables-Teapoy3-second-three">
                        <LazyLoadImage src={SingleTileTeapoy} alt="" loading='lazy' />
                    </div>
                </div>
            </div>

            {/* Fourth Row Container - TEAPOY FourthInner SECTIONS */}

            <div className="row turyaTables-Teapoy4-Firstrow-container">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaTables-Teapoy4-Firstcolumn">
                    <div className="turyaTables-Teapoy4-first-one">
                        <LazyLoadImage src={RoundMarbleteapoy} alt="" loading='lazy' />
                    </div>
                    <div className="turyaTables-Teapoy4-first-two">
                        <LazyLoadImage src={TandavaGlassTeapoy} alt="" loading='lazy' />
                    </div>
                    <div className="turyaTables-Teapoy4-first-three">
                        <LazyLoadImage src={TileRoundTeapoy} alt="" loading='lazy' />
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaTables-Teapoy4-Secondcolumn">
                    <div className="turyaTables-Teapoy4-second-one">
                        <LazyLoadImage src={TrinityTable} alt="" loading='lazy' />
                    </div>
                    <div className="turyaTables-Teapoy4-second-two">
                        <LazyLoadImage src={TrinityTabletwo} alt="" loading='lazy' />
                    </div>
                    <div className="turyaTables-Teapoy4-second-three">
                        <LazyLoadImage src={TrinityTablethree} alt="" loading='lazy' />
                    </div>
                </div>
            </div>

            {/* Fourth Row Container - TEAPOY FourthInner SECTIONS */}

            <div className="row turyaTables-Teapoy5-container">
                <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 turyaTables-Teapoy5-Firstcolumn">
                    <LazyLoadImage src={TrinityTeapoy} alt="" loading='lazy' />
                </div>

                <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 turyaTables-Teapoy5-Secondcolumn">
                    <LazyLoadImage src={TripodTeapoy} alt="" loading='lazy' />
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 turyaTables-Teapoy5-Thirdcolumn">
                    <LazyLoadImage src={TripodRoundglassteapoy} alt="" loading='lazy' />
                </div>
            </div>





           






            {/* Next Arrow Container */}


            <div className="turyaTables-NextArrow-container">
                <h1 className='turyaTables-Next-Heading'>NEXT</h1>
                <LazyLoadImage className='turyaTables-Next-Arrow-img' src={NextArrow} alt="" loading='lazy' />
            </div>



        </div>
    )
}