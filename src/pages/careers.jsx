import React from 'react'
import { Navbar , Footer } from '../components'
import styles from  '../styles/career.module.scss'

const Careers = () => {
  return (
    <>
          <Navbar textColor="white" btnStyles='bg-sfblue p-4 text-white'/>
            <main>
                <div className={` ${styles.heroCont}`}>
                    <div className={` ${styles.heroCont1} container`}>
                        <div className="hc-main">
                        
                            <div className={` ${styles.heroText} hero-about font-bold `}>
                                
                                <h1> Join The Team <span className='text-orange'>.</span></h1>
                                {/* <p className='text-bold text-5xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p> */}
                            </div>
                            <div className={` ${styles.heroTxt} `}>
                                <p>
                                We aim to grow the team by several hundred percent over the coming years. If you want to engineer on the  customer success and be involved in successful projects with a company that values your individual freedom, get in touch - we'd love to hear from you.
                                </p>
                            </div>

                           
                        </div>
                    </div>
                </div>
                <section className={` ${styles.careerCont} container`}>
                    <div className={` ${styles.careerCont1} `}>
                        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4`}>
                            <div className={` ${styles.career1} `}>
                                <h3>
                                    Open Positions.
                                </h3>
                            </div>
                            <div className={` ${styles.careerIntro} `}>
                                <p>
                                    Join a diverse and innovative team. We are visionaries who grow, succeed and change. Together we can change the world.  
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={` ${styles.careerCont2}`}>
                    <div className={` ${styles.openPositions} mt-10`}>
                            <div className={`grid grid-cols-1 md:grid-cols-6 gap-4`}>
                                <div className={` ${styles.openBlank} col-span-1 `}>
                                    {/* blank slate display:none on mobile */}
                                </div>
                                <div className={` ${styles.openPos} col-span-5 `}>
                                    {/*  */}
                                    <div className={` ${styles.position}`}>
                                        <hr className='my-6'/>
                                        <span className='rounded-full border border-orange px-4 py-2' > 
                                            Remote 
                                        </span>
                                      
                                        <div className={`${styles.positionTt} my-3 flex items-center justify-between`}>
                                            <Link to='/careers/position'>
                                                <h3 className={`${styles.positionTitle}`}>
                                                    Senior Software Engineer
                                                </h3>
                                            </Link>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-sfteal font-bold py-2 px-4 rounded">
                                                Apply Now
                                            </button>
                                        </div>


                                        <span className={` ${styles.positionLoc} my-5`}>
                                           <p>
                                                Full Time
                                            </p>
                                        </span>
                                        <hr className='my-2'/>
                                    </div>
                                    <div className={` mt-12 ${styles.position}`}>
                                    
                                        <span className='rounded-full border border-orange px-4 py-2' > 
                                            Remote 
                                        </span>
                                      
                                        <div className={`${styles.positionTt} my-3 flex items-center justify-between`}>
                                            <Link to='/careers/position'>
                                                <h3 className={`${styles.positionTitle}`}>
                                                   DevOps Engineer
                                                </h3>
                                            </Link>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-sfteal font-bold py-2 px-4 rounded">
                                                Apply Now
                                            </button>
                                        </div>


                                        <span className={` ${styles.positionLoc} my-5`}>
                                           <p>
                                                Full Time
                                            </p>
                                        </span>
                                        <hr className='my-2'/>
                                    </div>
                                </div>
                            </div>
                    </div>
                </section>
            </main>
        <Footer />
    </>
  )
}

export default Careers