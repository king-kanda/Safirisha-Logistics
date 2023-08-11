// customer dashboard
import React from 'react'
import { Sidebar } from '../components'
import styles from '../styles/dashboard.module.scss'

const Dashboard = () => {
  return (
    <>
        <main className={` ${styles.dashboard} `}>
            <section className=''>
                {/* sidebar component */}
                <Sidebar></Sidebar>
            </section>
            <section className=''>
                {/* navbar component */}
               
            </section>
        </main>
    </>
  )
}

export default Dashboard