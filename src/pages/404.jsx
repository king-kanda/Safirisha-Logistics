import React from 'react'
import { Link } from 'react-router-dom'
import { Lost } from '../assets'
import { Footer, Navbar } from '../components'


const NoMatch = () => {


  return (
    <>
       <Navbar color="bg-white" textColor="orange" btnStyles='bg-orange p-4 text-white'/>
        <div className="container p-4">
          <div className="flex items-center justify-center">
              <div className="main-div m-2 p-4">
                <h1 className="font-bold text-sfteal text-center start">
                  Howdy! <span className='text-orange'>Ranger</span> You seem to be lost.
                </h1>
                {/* image container */}
                <div className="eps">
                  <img src={Lost} alt="" className="lost-img" />
                </div>
                <p className='text-midblack text-center'>
                  The page you are looking for does not exist. let's get you back on <span className='text-orange underline'> <Link to='/'>track.</Link>  </span> 
                </p>
              </div>
          </div>
        </div>
        <Footer/>

    </>
  )
}

export default NoMatch