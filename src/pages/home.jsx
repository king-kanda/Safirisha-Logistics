import React from 'react'
import { p1, p2 , Western , Deliveroo , DHL ,Fedex ,Star} from '../assets'
import { FaBeer } from 'react-icons/fa';
import { Navbar , Footer } from '../components'
import { BsTruck } from "react-icons/bs";
import { IoAirplaneOutline } from "react-icons/io5";
import { RiShipLine } from "react-icons/ri";
import '../styles/home.scss'

const Home = () => {

  return (
    <>
      
      <main>
        <div  className='hero-container  '>
        <Navbar textColor="text-white" btnStyles='bg-sfblue p-4 text-white' loginColor="text-white " /> 

          <div className='Hero-cont container'>
              <div className="hc-main">
              
                  <div className="hero-text font-bold ">
                    <h1 id='create'> You Deal <span>,</span> <br></br> We deliver <span>.</span></h1>
                    {/* <p className='text-bold text-5xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p> */}
                  </div>
                  <div className="hero-txt">
                    <p>
                    From where to there ,the best way ,we carry clearness to inticacy , separating basic subsities from profound data to make modern direct arragments.
                    </p>
                  </div>

                  <div className="hero-btns ">
                    <button className='hover:bg-white hover:text-orange font-semibold bg-orange p-5 text-white'>
                      Explore More
                    </button>
                    <button className='font-semibold  hover:bg-white p-5 text-white hover:text-orange underline'>
                      Get Quote
                    </button>
                  </div>
              </div>
          </div>

        </div>
        {/*  */}
        <div className='container'>
              {/* margins top - cont */}
            <div className="mt">
              <div className="grid grid-cols-2 gap-0">
                <div className="cols col-1  py-6 px-12 bg-white">
                  <h2 className='flex font-bold text-orange p-2 items-center'> 
                      <FaBeer />
                      Transport Solutions
                  </h2>
                  <p className=''>
                  From where to there ,the best way data to make modern direct arragments.
                  </p>

                  <div className="btn">
                      <button className='p-2 my-3 font-semibold text-orange underline'>
                          Read More
                      </button>
                  </div>
                </div>
                <div className="cols col-2 py-6 px-12 bg-sfteal">
                <h2 className='flex font-bold text-white p-2 items-center'> 
                      <FaBeer />
                      Warehousing Solutions
                  </h2>
                  <p className='text-white '>
                  From where to there ,the best way data to make modern direct arragments.
                  </p>

                  <div className="btn">
                      <button className='p-2 my-3 font-semibold text-orange underline'>
                          Read More
                      </button>
                  </div>
                </div>
              </div>
            </div>
            
        </div>
        {/*  */}
        <div className='container mt-24' >
              <div className="grid grid-cols-2 gap-4">
                  <div className="sec1">
                  <h2 className='font-bold'>
                      Safirisha Logistics <br /> Around 
                      <span className='text-orange'>  The world</span> .
                  </h2>
                  <p className='mt-6'>
                  Our global transportation network and overseas logistics partners all for trouble free shipping of all commodities, including dangerous goods, temperature control, and vehicles. We also provide charter vessels or aircraft for very large and specialty cargo.
                  When you need a shipment delivered domestically or internationally, feel confident knowing that our team will take care of every step until your cargo arrives at its final destination.
                  </p>

                  <div className="btn mt-4">
                      <button className="bg-grey p-5 font-semibold text-sfteal">
                          Explore More
                      </button>
                  </div>

                  </div>
                  <div className="sec2 p-3">
                      {/* image sections */}
                      <div className="img-cont">
                          <img src={p1} alt="" className='p1'/>
                          <img src={p2} alt="" className='p2' />
                      </div>
                  </div>
                </div>
            </div>
            {/*  */}
            <div background="logos" > 
              <div className="bg-grey">
                  <div className='container'>
                      <div className="logo-cont  p-6">
                          <div className="logo">
                            <img  className='logo-img' src= {Western} alt="wester start trucks logo" />
                          </div>
                          <div className="logo">
                            <img  className='logo-img' src= {Star} alt="start truckers logo" />
                          </div>
                          <div className="logo">
                            <img  className='logo-img' src= {DHL} alt="DHL logo" />
                          </div>
                          <div className="logo">
                            <img  className='logo-img' src= {Fedex} alt="Fedex logo" />
                          </div>
                          <div className="logo">
                            <img  className='logo-img' src= {Deliveroo} alt="Deliveroo logo" />
                          </div>
                      </div>    
                      </div>
                </div>
            </div>
            {/*  */}
            <div className='container p-6 mt-6'>
        <div className="heading-tt flex items-center justify-around">
            <div className="title">
                <h3 className='tt text-midblacK my-5'>
                    Explore Our <span className='text-orange'>Services </span>
                </h3>
                <p className='text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ab quam, impedit hic explicabo nemo molestiae! Autem corporis ipsum libero aut rerum placeat sit nulla.
                </p>
            </div>
            <div className="btn-tt">
                <button className="bg-sfteal text-white font-semibold px-6 py-4">
                    Explore More.
                </button>
            </div>
        </div>


        {/* cards */}
       <div className="card-container">
           <div className="div-c">
           <div className="cards  p-6">
                <div className="grid grid-cols-3 gap-4">

                        <div className="card p-8 group">
                            <span className="icon text-orange 1xl group-hover:text-white" >
                            <BsTruck/> 
                            </span>
                            <h3 className='font-semibold py-3 group-hover:text-white' >
                                Land Transport
                            </h3>
                            <p className='py-1 group-hover:text-white'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            </p>
                        
                            <div className='mx-4 group-hover:text-white'>
                                <li className='group-hover:text-white'>
                                    Part & Pull goods
                                </li>
                                <li className='group-hover:text-white'>
                                    MultiModal Solutions
                                </li>
                                <li className='group-hover:text-white'>
                                    Intermodal Solutions
                                </li>
                            </div>
                        </div>

                        <div className="card p-8 group">
                            <span className="icon text-orange 1xl group-hover:text-white" >
                            <IoAirplaneOutline/>
                            </span>
                            <h3 className='font-semibold py-3 group-hover:text-white' >
                                Air Freight
                            </h3>
                            <p className='py-1 group-hover:text-white'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            </p>
                        
                            <div className='mx-4 group-hover:text-white'>
                                <li className='group-hover:text-white'>
                                    Part & Pull goods
                                </li>
                                <li className='group-hover:text-white'>
                                    MultiModal Solutions
                                </li>
                                <li className='group-hover:text-white'>
                                    Intermodal Solutions
                                </li>
                            </div>
                        </div>

                        <div className="card p-10 group">
                            <span className="icon text-orange 1xl group-hover:text-white" >
                            < RiShipLine /> 
                            </span>
                            <h3 className='font-semibold py-3 group-hover:text-white' >
                                Ocean Freight
                            </h3>
                            <p className='py-1 group-hover:text-white'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            </p>
                        
                            <div className='mx-4 group-hover:text-white'>
                                <li className='group-hover:text-white'>
                                    Part & Pull goods
                                </li>
                                <li className='group-hover:text-white'>
                                    MultiModal Solutions
                                </li>
                                <li className='group-hover:text-white'>
                                    Intermodal Solutions
                                </li>
                            </div>
                        </div>


                </div>
            </div>
           </div>
        </div>

    </div>
      </main>
      <Footer/>
    </>
  )

}

export default Home