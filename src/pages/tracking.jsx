import React , {useState} from 'react'
import { Navbar , Footer } from '../components'
import styles from  '../styles/tracking.module.scss'
import {BiPackage , BiSearchAlt } from 'react-icons/bi'
import {GoLocation} from 'react-icons/go'
import { track , enroll } from '../assets'



const Tracking = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      console.log(index)
      console.log(toggleState)  
      setToggleState(index);
    };

  return (
    <>
        <Navbar textColor="white" btnStyles='bg-sfblue p-4 text-white'/>
            <main>
                <div className={` ${styles.heroCont}`}>
                        <div className={` ${styles.heroCont1} container`}>
                            <div className="hc-main">
                            
                                <div className={` ${styles.heroText} hero-about font-bold `}>
                                    
                                    <h1> Ship, manage, track, deliver<span className='text-orange'>.</span></h1>
                                   
                                </div>
                                <div className={` ${styles.heroTabs} text-center mt-24 `}>
                                <div className="inline-flex">
                                    <button 
                                    className={` ${toggleState === 1 ? 'bg-orange' : 'bg-sfteal text-white' } w-48  hover:bg-orange text-white font-bold py-4 px-6 rounded-l `}
                                    onClick={() => toggleTab(1)}
                                    >
                                       <span className='inline-flex items-center justify-space'> 
                                            <BiPackage/>
                                            <p>Track package</p>
                                        </span> 
                                    </button>
                                    <button className={` ${toggleState === 2 ? 'bg-orange' : 'bg-sfteal text-white' }  w-48  hover:bg-orange  hover:text-white font-bold py-2 px-4 mx-2 rounded-r`}
                                    onClick={() => toggleTab(2)}
                                    >
                                        <span className='inline-flex items-center justify-space'> 
                                            <GoLocation/>
                                            <p>Locations</p>
                                        </span> 
                                    </button>
                                    </div> 
                                </div>

                            {/* will oinly show when the tracking tab is active  */}
                            {/* well also hahve to  */}

                            <div className={` ${styles.Form} ${toggleState === 1 ? "content  active-content" : "hidden h-0"} `}  >
                                <form className="w-full  mt-12 text-center">
                                    <div className="flex items-center border-b border-sfteal py-2">
                                        <input className="w-96 appearance-none bg-transparent border-none w-full text-black mr-1 py-5 px-6 leading-tight focus:outline-none" type="text" placeholder="Jane Doe" aria-label="Full name"/>
                                        <button className="w-32 flex-shrink-0 bg-sfteal hover:bg-orange  text-sm  text-white py-4 px-6 " type="button">
                                        <span className='text-xl inline-flex items-center justify-space'> 
                                                <BiSearchAlt/>
                                                <p className='text-xl'>Track </p>
                                            </span> 
                                        </button>
                                    </div>
                                    <div className='w-full'>
                                        <p className='text-center text-white text-xl mt-12'> Need Help ? | Track Multiple Items . </p>
                                    </div>
                                </form>
                               
                           </div>

                           <div className={` ${styles.Form}   ${toggleState === 2 ? "content  active-content" : "hidden"}`} >
                            <form className="w-full mt-12 text-center">

                                    <div className="flex items-center border-b border-sfteal py-2">
                                        <input className="w-48 appearance-none bg-transparent border-none w-full text-black mr-1 py-5 px-6 leading-tight focus:outline-none" type="text" placeholder="Kahawa Wendani" aria-label="Full name"/>
                                        <button className="w-32 flex-shrink-0 bg-orange   text-sm  text-white py-4 px-6 " type="button">
                                        <span className='text-xl inline-flex items-center justify-space'> 
                                                <BiSearchAlt/>
                                                <p className='text-xl'>Search</p>
                                            </span> 
                                        </button>
                                    </div>

                                   

                            </form> 
                        </div>

                            </div>
                        </div>
                </div>

                {/* location section  */}
                <section className={` ${styles.location} bg-sfteal text-white  p-12  `}>

                    <div className=" container mt-12 ">
                        <div className={` ${styles.bannerCont} `}>
                            <div className={ `text-center`}>
                                <h2 className='text-3xl font-bold'> 
                                    Ship With Confidence , Track With Confidence
                                </h2>
                            </div>
                        </div>
                    </div>

                    {/* seearch or tracking results to be shown here */}
                    
                </section>

                {/* banner section */}
                <section className={` ${styles.banner} container mt-12 p-12`}>
                    <div className={` ${styles.bannerCont} `}>
                        <div className={ `text-center`}>
                            <h2 className='text-3xl font-bold'> Ship With Confidence , Track With Confidence </h2>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-12'>
                        <div className={` ${styles.col1} `}>
                            <img src={track}>
                            
                            </img>
                            <div className={` ${styles.col1Text} `}>
                                <h3 className='text-2xl font-bold'> 
                                Download an easier way to ship and track 
                                </h3>
                                <p className=' mt-4'>
                                    The FedEx® Mobile app lets you track packages and create labels on your phone. You can also request to hold your package at a retail location for pickup. Plus, you can use the app from your Apple Watch®*.
                                </p>
                            </div>
                            <button className={` mt-6 ${styles.btn} bg-sfteal hover:bg-orange text-white font-bold py-4 px-6 rounded `}>
                                <span className='inline-flex items-center justify-space'>
                                    <p>Download the app</p>
                                </span>
                            </button>
                        </div>
                        <div className={` ${styles.col2} `}>
                            <img src={enroll}>
                            
                            </img>
                            <div className={` ${styles.col1Text} `}>
                                <h3 className='text-2xl font-bold'> 
                                    Connect flexibility and sustainability
                                </h3>
                                <p className=' mt-4'>
                                    When you're away from home, use FedEx Delivery Manager® to hold all your deliveries at a retail location. It could decrease multiple delivery attempts and the associated shipping emissions.
                                </p>
                            </div>
                            <button className={` mt-6 ${styles.btn} bg-sfteal hover:bg-orange text-white font-bold py-4 px-6 rounded `}>
                                <span className='inline-flex items-center justify-space'>
                                    <p>Enroll for Free</p>
                                </span>
                            </button>
                        </div>
                    </div>
                </section>

            </main>
        <Footer />
    </>
  )
}

export default Tracking