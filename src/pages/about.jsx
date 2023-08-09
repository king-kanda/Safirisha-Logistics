import React , { useState} from 'react';
import { Navbar , Footer } from '../components'
import { p1, p2 , Western , Deliveroo , DHL ,Fedex ,Star} from '../assets'
import { Ocean ,Train , AirT , Land } from '../assets';
import { BsFillPlayCircleFill } from "react-icons/bs";
import { BsArrowLeftCircleFill ,BsArrowRightCircleFill ,BsArrowRightCircle} from 'react-icons/bs';

import '../styles/about.scss'

const About = () => {

    const [displayIndex , setdisplayIndex] = useState(-1)

    const handleMouseOver = (index) => {
       
        setdisplayIndex(index)
    }

    const handleMouseOut = () => {
     
        setdisplayIndex(-1)
    }

    return (
        <>
            

            <main>
            <Navbar  color="bg-white" textColor="text-sfteal" btnStyles='bg-orange p-4 text-white' loginColor="text-sfblue"/>
            <div className='hero-container  '>
                <div className='Hero-cont container'>
                    <div className="hc-main">
                    
                        <div className="hero-text hero-about font-bold ">
                            <span className='abt '> Building a Better future</span>
                            <h1> We carry the world <br></br> to your door step </h1>
                            {/* <p className='text-bold text-5xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p> */}
                        </div>
                        <div className="hero-txt">
                            <p>
                            To stay ahead of the competition your business needs incentives solutions that solves for todays faced paced markets.
                            </p>
                        </div>

                        <div className="hero-btns flex items-center">

                            <button className='hover:bg-white hover:text-orange font-semibold bg-orange p-5 text-white'>
                            Let's Connect
                            </button>
                            <button className='play ont-semibold  hover:bg-white p-5 text-white hover:text-orange underline inline-flex items-center justify-between' >
                            {/* btn and text */}
                            <span className="btn-icon text-orange pr-4">
                                <BsFillPlayCircleFill/>
                            </span>

                            How We Work 
                            </button>

                        </div>
                    </div>
                </div>
            </div>

            <div background="bg-grey" > 
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

            {/* slider */}
            <div className='container'>
                <div className="slider-main p-4 mb-4 ">
                        <div className="slider-header p-4">
                                <div className="flex items-center justify-around">
                                    <div className="slider-tt">
                                        <h1 className='text-sfteal font-bold'>Explore <span className='text-orange'>Our Services </span></h1>
                                        <p className='w-3/5'>TransMax is the world's leading coordinator supplier , we uphold industry , and exchange the world  merchandise through land transport , air , ocean freight and Continental train  .</p>
                                    </div>
                                    <div className="slider-controls">
                                        <div className="flex items-center justify-around">
                                            {/* icons left and right */}
                                            
                                            <span className='left-controlls px-2 text-orange hover:text-sfteal '>
                                                <BsArrowLeftCircleFill />  
                                            </span>
                                            <span className='right-controlls px-2 text-sfblue hover:text-orange' >
                                                <BsArrowRightCircleFill />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                        </div>

                        <div className="slider-cont">
                            <div className="grid grid-cols-4 gap-3">

                                <div onMouseOver={() => handleMouseOver(0)} onMouseOut={handleMouseOut} className="card-1 slider-card shadow-2xl p-6 mb-5" style={{background:`url(${Land})` , backgroundPosition:'center center'}}>
                                <div className="card-text">
                                        <h3 className="card-tt text-sfblue">
                                            Land Transport 
                                        </h3>
                                        {/* check index */}
                                        {displayIndex === 0 && ( <div className="hover-text">
                                        <p className='text-white'>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium neque adipisci incidunt dignissimos sed impedit eligendi repellat. Exercitationem adipisci ipsum distinctio illo! Sunt, veniam eos.
                                            </p>
                                        </div>)}
                                        <div className="controller">
                                            <span className="go-to"> 
                                            < BsArrowRightCircle />
                                            </span>
                                        </div>
                                </div>
                                </div>

                                <div onMouseOver={() => handleMouseOver(1)} onMouseOut={handleMouseOut} className="card-2 slider-card shadow-2xl p-6 mb-5" style={{background:`url(${Ocean})`}} >
                                <div className="card-text">
                                <h3 className="card-tt text-white">
                                        Ocean Freight 
                                    </h3>
                                    { displayIndex === 1 && ( <div className="hover-text">
                                            <p className='text-white'>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium neque adipisci incidunt dignissimos sed impedit eligendi repellat. Exercitationem adipisci ipsum distinctio illo! Sunt, veniam eos.
                                            </p>
                                        </div>)}
                                    <div className="controller">
                                        <span className="go-to"> 
                                        < BsArrowRightCircle />
                                        </span>
                                    </div>
                                </div>
                                </div>

                                <div onMouseOver={() => handleMouseOver(2)} onMouseOut={handleMouseOut}  className="card-3 slider-card shadow-2xl p-6 mb-5" style={{background:`url(${AirT})`}} >
                                    <div className="card-text">
                                    <h3 className="card-tt text-sfblue ">
                                                Air Freight 
                                            </h3>
                                            { displayIndex === 2 && ( <div className="hover-text">
                                            <p className=''>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium neque adipisci incidunt dignissimos sed impedit eligendi repellat. Exercitationem adipisci ipsum distinctio illo! Sunt, veniam eos.
                                            </p>
                                        </div>)}
                                            <div className="controller">
                                                <span className="go-to"> 
                                                < BsArrowRightCircle />
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                <div  onMouseOver={() => handleMouseOver(3)} onMouseOut={handleMouseOut}  className="card-4  slider-card shadow-2xl p-6 mb-5" style={{background:`url(${Train})`}} >
                                    <div className="card-text">
                                        <h3 className="card-tt text-white">
                                            Continental Train  
                                        </h3>
                                        { displayIndex === 3 && ( <div className="hover-text">
                                            <p className='text-white'>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium neque adipisci incidunt dignissimos sed impedit eligendi repellat. Exercitationem adipisci ipsum distinctio illo! Sunt, veniam eos.
                                            </p>
                                        </div>)}
                                        <div className="controller">
                                            <span className="go-to"> 
                                            < BsArrowRightCircle />
                                            </span>
                                        </div>
                                    </div>
                                    </div>

                            </div>
                        </div>
                </div>
            </div>

            {/*  */}
            <div className="container text-center  stats-container p-6 my-5">
                <div className="grid grid-cols-4 gap-5">

                    <div className="stat-cont">
                    <h1 className="font-bold text-sfteal">
                        300+
                    </h1>
                    <p>
                        Warehouses Managed
                    </p>
                    </div>

                    <div className="stat-cont">
                    <h1 className="font-bold text-sfteal">
                        60+
                    </h1>
                    <p>
                        Supply Engineers
                    </p>
                    </div>

                    <div className="stat-cont">
                    <h1 className="font-bold text-sfteal">
                        60+
                    </h1>
                    <p>
                        Counties Covered
                    </p>
                    </div>

                    <div className="stat-cont">
                    <h1 className="font-bold text-sfteal">
                        600+
                    </h1>
                    <p>
                        Companies We Help
                    </p>
                    </div>
                </div>
            </div>

            </main>
            <Footer/>
        </>
    );
}

export default About;