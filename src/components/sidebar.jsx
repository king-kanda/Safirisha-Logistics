import React from 'react'
import styles from '../styles/dashboard.module.scss'
import { BsMenuButtonWide } from "react-icons/bs";
import {FaUserTie} from "react-icons/fa";

const Sidebar = () => {
  return (
    <>
        <section className={` ${styles.sideBar} bg-sfblue p-4`}>
          {/* name and menu icon */}
          <div className="flex items-center justify-between">
            <div className="border border-white rounded p-1">
                <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium text-white">
                    <span className='pr-5 text-sm'>
                      <FaUserTie/>
                    </span>
                    <span className="ml-1">John Doe</span>

                </div>
            </div>
            <button className="text-white border border-grey p-2 rounded">
                <span className='text-white '>
                    <BsMenuButtonWide/>
                </span>
            </button>
          </div>

          {/* navigatipon section */}
          
        </section>
    </>
  )
}

export default Sidebar