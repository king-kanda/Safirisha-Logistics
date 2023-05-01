import React from 'react'
import '../styles/navbar.scss'
import { Logo } from '../assets'
import { Link } from 'react-router-dom'

const Navbar = (props) => {

  // const color = props.color
  const btnStyles = props.btnStyles
  const textColor = props.textColor

  return (
    <div className=' navbar-container  container  text-sfblue ' >
        <nav className=" px-2 sm:px-4 py-2.5  dark:bg-gray-800">
  <div className=" flex justify-between items-center">
    <Link to="/" className="flex items-center">
        <img src={Logo} alt="" className='logo'/>
    </Link>
    <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
      <ul className="flex  flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        <li className={textColor}>
            <Link to="/about"> 
                About Us
            </Link>
        </li>
        <li>
               <Link to='/services'> Our Services</Link>
        </li>
        <li>
                <Link to='/Tracking'> Tracking </Link>
        </li>
        <li>
                 <Link to='/careers'> Careers</Link>
        </li>
        <li>
                 <Link to='/blog'> Blogs </Link>
        </li>
        <li>
                 <Link to='/contact'> Contact Us</Link>
        </li>

      </ul>
      
       
      
    </div>
    <div className="btn-class">
        <button className={`p-4 text-white ${btnStyles}`}>
            Request Quote
        </button>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar