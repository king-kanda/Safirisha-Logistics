import React , { useRef , useEffect} from 'react'
import { Navbar , Footer } from '../components'
import { Outline , ColdIce , DAF , Iveco} from '../assets'
import styles from '../styles/services.module.scss'


const Services = () => {

    
  return (
    <>
         {/* this is the machines page  */}
         <Navbar  color="bg-white" textColor="orange" btnStyles='bg-orange p-4 text-white'/>
        {/* body */}

        <section >
            <div className={` ${styles.headingSec} text-center p-7 mb-2`}>
                <div className="container">
                    <h1 className='font-bold text-orange'>
                        <b className='text-sfteal'> Beasts :</b> Unmatched <br /> Transist .
                    </h1>
                    
                    <p className='text-midblack'>
                    Moving your business with beasts , so you can be the beast.
                    </p>
                </div>
            </div>
            <div className="container contain-truck-outline  ">
                <div className={`${styles.svgCont} mb-6`}>
                    <img src={Outline} alt="SVG-truck outline" />
                </div>
            </div>
        </section>
        

        <div className="gsap-container-trucks">
            <section>
                <div className="container trucks">
                    {/* flex and animations  */}
                    {/* flex first before animate */}
                    <div className="cont1 p-6 mb-5" id="truck1">
                        <div className="flex items-start justify-between">
                            <div className="t-img">
                                <img  src={DAF} alt="" />
                            </div>
                            <div className={`${styles.tText} p-4`}>
                                <h1 className="tt-title text-orange" >
                                <span className='text-sfblue'> #3 .</span> DAF XF 530
                                </h1>
                                <p>
                                The four-axled XF 530 opens up our top 10 of the strongest trucks on the market. With a pull weight of 80 tons, a MX-13 engine with 12-speed TraXon transmission and a torque of 2600 Nm at 1000 to 1425 rpm, the XF is the top model of the Dutch truck company.

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="cont2 p-6 mb-5" id="truck1">
                        <div className="flex items-start justify-between">
                        
                            <div className={`${styles.tText} p-4`}>
                                <h1 className="tt-title text-orange" >
                                <span className='text-sfblue'> #2 .</span> IVECO S-WAY
                                </h1>
                                <p>
                                With a Cursor 13 diesel engine, 570 hp from 12.9 litres capacity and a torque of 2500 Nm at 1000 to 1605 rpm, the Iveco S-Way ranks number 8 among the super trucks.



                                </p>
                            </div>
                            <div className="t-img">
                                <img src={Iveco} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="cont2 p-6 mb-5" id="truck1">
                        <div className="flex items-start justify-between">
                            <div className="t-img">
                                <img src={ColdIce} alt="" />
                            </div>
                            <div className={`${styles.tText} p-4`}>
                                <h1 className="tt-title text-orange" >
                                <span className='text-sfblue'> #1 .</span> Volvo FH 16 750
                                </h1>
                                <p>
                                A beauty on the outside, a beast on the inside: With an additional 20 hp the Volvo FH 16 750 is even more powerful than the Scania R 730. 6 cylinders, 16.1 litres capacity and a torque of 3550 Nm at 1050 to 1400 rpm qualify the Volvo as one of the most powerful series-produced trucks in the world and therefore number 2 in our ranking.



                                </p>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </section>
        </div>
        <Footer/>
    </>
  )
}

export default Services