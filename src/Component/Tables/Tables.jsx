import React from 'react'
import "./Tables.css"

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
      <div className='turyadesign-Accessories-container'>
  
          {/* First Row Container - TRAYS SECTIONS */}
  
          <div className="row turyaAccessories-Tray-Firstrow-container">
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaAccessories-Tray-Firstcolumn">
                  <div className="TuryaAccessories-Heading">
                      <h1>TABLES</h1>
                  </div>
                  <div className="TuryaAccessories-Tray-first-one">
                      <img  src={BreakfastDinning} alt=""/>
                  </div>
                  <div className="TuryaAccessories-Tray-first-two">
                      <img  src={RedDinning} alt=""/>
                  </div>
                  <div className="TuryaAccessories-Tray-first-three">
                      <img  src={MordenGridDinning} alt=""/>
                  </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaAccessories-Tray-Secondcolumn">
                  <div className="TuryaAccessories-Tray-second-one">
                      <img  src={FallTabelDinning} alt="" />
                  </div>
                  <div className="TuryaAccessories-Tray-second-two">
                      <img  src={CutieDinning} alt="" />
                  </div>
                  <div className="TuryaAccessories-Tray-second-three">
                       <img  src={lotusseat} alt="" />
                  </div>
              </div>
          </div>
  
          {/* <div className="row turyaAccessories-Tray-Secondrow-container">
              
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaAccessories-Tray-Secondcolumn">
                  <div className="TuryaAccessories-Tray-second-one">
                      <img  src={CheeseBoard} alt=""/>
                  </div>
                  <div className="TuryaAccessories-Tray-second-two">
                      <img  src={Theclassic} alt=""/>
                  </div>
                  
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaAccessories-Tray-Firstcolumn">
                  <div className="TuryaAccessories-Tray-first-oneplus">
                      <img  src={ContemporaryTray} alt=""/>
                  </div>
                  <div className="TuryaAccessories-Tray-first-two">
                      <img  src={CutieTray} alt=""/>
                  </div>
                  <div className="TuryaAccessories-Tray-first-three">
                      <img  src={TRITray} alt=""/>
                  </div>
                  
              </div>
          </div> */}
  
  
          {/* Second Row Container - TRAYS SECTIONS  */}
  
  
          {/* <div className="row turyaAccessories-Secondrow-container">
              <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 TuryaAccessories-Secondrow-Firstone-container">
                  <div className="TuryaAccessories-Firstone-inner-container">
                      <img src={BasicDressWallHook} alt="" />
                  </div>
                  <div className="TuryaAccessories-Firstone-inner-container">
                      <img src={CutoutEdgeHook} alt="" />
                  </div>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 TuryaAccessories-Secondrow-Second-container">
                  <div className="TuryaAccessories-secondone-inner-container">
                      <img src={DendriteHook} alt="" />
                  </div>
                  <div className="TuryaAccessories-secondone-inner-container">
                      <img  src={MetalRobeHook} alt="" />
                  </div>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 TuryaAccessories-Secondrow-Third-container">
                  <div className="TuryaAccessories-Thirdone-inner-container">
                      <img src={HookLedge} alt="" />
                  </div>
                  <div className="TuryaAccessories-Thirdone-inner-container">
                      <img src={MotifLedge} alt="" />
                  </div>
              </div>
          </div>
  
          <div className="row turyaAccessories-Secondrow-container">
              <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 TuryaAccessories-Secondrow-Firsttwo-container">
                  <div className="TuryaAccessories-Firstone-inner-container">
                      <img src={OrnateLedge} alt="" />
                  </div>
                  <div className="TuryaAccessories-Firstone-inner-container">
                      <img src={ScrewRobeHook} alt="" />
                  </div>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 TuryaAccessories-Secondrow-Second-container">
                  <div className="TuryaAccessories-secondone-inner-container">
                      <img src={SlantedHook} alt="" />
                  </div>
                  <div className="TuryaAccessories-secondone-inner-container">
                      <img  src={ClassicLedge} alt="" />
                  </div>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 TuryaAccessories-Secondrow-Third-container">
                  <div className="TuryaAccessories-Thirdone-inner-container">
                      <img src={TheOLedge} alt="" />
                  </div>
                  <div className="TuryaAccessories-Thirdone-inner-container">
                      <img src={PlumeriaHook  } alt="" />
                  </div>
              </div>
          </div>
   */}
  
          {/* Third Row Container - Accessories SECTIONS */}
  
          {/* <div className="row turyaAccessories-Thirdrow-container">
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaAccessories-ThirdRow-Firstcolumn">
                  
                  <div className="TuryaAccessories-Thirdrow-first-one">
                      <img  src={NatureCopperCoasters} alt=""/>
                  </div>
                  <div className="TuryaAccessories-Thirdrow-first-two">
                      <img  src={FlowerVase} alt=""/>
                  </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaAccessories-Thirdrow-Secondcolumn">
                  <div className="TuryaAccessories-Thirdrow-second-one">
                      <img  src={KeyHolder} alt="" />
                  </div>
                  <div className="TuryaAccessories-Thirdrow-second-two">
                      <img  src={MagazineStand} alt="" />
                  </div>
                  <div className="TuryaAccessories-Thirdrow-second-three">
                       <img  src={PencilHolder} alt="" />
                  </div>
              </div>
          </div>
  
          <div className="row turyaAccessories-Thirdrows-container">
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaAccessories-ThirdRows-Firstcolumn">
                  
                  <div className="TuryaAccessories-Thirdrows-first-one">
                      <img  src={PlanterStand} alt=""/>
                  </div>
                  <div className="TuryaAccessories-Thirdrows-first-two">
                      <img  src={Ringbowl} alt=""/>
                  </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaAccessories-Thirdrows-Secondcolumn">
                  <div className="TuryaAccessories-Thirdrows-second-one">
                      <img  src={Swirlsbowl} alt="" />
                  </div>
                  <div className="TuryaAccessories-Thirdrows-second-two">
                      <img  src={TheBookWorms} alt="" />
                  </div>
                  <div className="TuryaAccessories-Thirdrows-second-three">
                       <img  src={TheCrow} alt="" />
                  </div>
                  <div className="TuryaAccessories-Thirdrows-second-three">
                       <img  src={TraibleBowel} alt="" />
                  </div>
              </div>
          </div> */}
  
  
  
  
  
  
          {/* Next Arrow Container */}
  
  
          <div className="TuryaAccessories-NextArrow-container">
              <h1 className='TuryaAccessories-Next-Heading'>NEXT</h1>
              <img className='TuryaAccessories-Next-Arrow-img' src={NextArrow} alt="" />
          </div>
  
          
  
      </div>
    )
  }