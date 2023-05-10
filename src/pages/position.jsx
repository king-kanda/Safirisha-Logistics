import React from 'react'
import { Navbar , Footer } from '../components'
import styles from  '../styles/positions.module.scss'


const position = () => {
  return (
    <>
        <Navbar textColor="white" btnStyles='bg-sfblue p-4 text-white'/>
            <main>
                <section className={` grid grid-cols-1 md:grid-cols-2 gap-4 `}>
                    <div className={` bg-sfblue rounded-lg p-9 `}>
                        {/* blue from zone */}
                        <div className={`${styles.positionTt} `}>
                            <h3 className={`${styles.positionTitle} w-3/4`}>
                                Senior Software Engineer.
                            </h3>
                        </div>
                        <div className={`form mt-12`}>
                            <form action="" >
                                <div className={` ${styles.formGroup} full-name border-b border-orange `}>
                                    <label htmlFor="full-name" className={`block text-white text-sm font-bold mb-2`}>Full Name</label>
                                    <input class="appearance-none bg-transparent border-none w-full text-grey text-2xl mr-3 py-3 px-5 leading-tight focus:outline-none" type="text" placeholder="Enter Your Full Name" aria-label="Full name"/>
                                </div>
                                <div className={` ${styles.formGroup} full-name border-b border-orange my-6 `}>
                                    <label htmlFor="full-name" className={`block text-white text-sm font-bold mb-2`}>Email Address</label>
                                    <input class="appearance-none bg-transparent border-none w-full text-grey text-2xl mr-3 py-2 px-4 leading-tight focus:outline-none" type="email" placeholder="example@gmail.com" aria-label="Email Address"/>
                                </div>
                                <div className={` ${styles.formGroup} full-name border-b border-orange my-6 `}>
                                    <label htmlFor="full-name" className={`block text-white text-sm font-bold mb-2`}>Phone</label>
                                    <input class="appearance-none bg-transparent border-none w-full text-grey text-2xl mr-3 py-3 px-5 leading-tight focus:outline-none" type="tel" placeholder="Enter Your Phone Number" aria-label="Phone Number"/>
                                </div>
                                <div className={` ${styles.formGroup} full-name   mt-4 `}>
                                    <label htmlFor="full-name" className={`block text-white text-sm font-bold mb-2`}>Submit CV</label>
                                    <div class="flex items-center justify-center w-full">
                                        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                                <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                                <p class="text-xs text-gray-500 dark:text-gray-400">PDF , DOCX</p>
                                            </div>
                                            <input id="dropzone-file" type="file" class="hidden" />
                                        </label>
                                    </div> 

                                </div>
                                <div className={` ${styles.formGroup}  my-8 `}>
                                   
                                    <button className="bg-white hover:bg-orange text-sfteal font-bold rounded-full py-3 px-6">
                                        Apply Now 
                                    </button>

                                </div>
                            </form>
                        </div>
                    </div>
                    <div className={` p-9 `}>
                        {/* white role description zone
                         */}
                        <hr className='my-6'/>
                            <div className={` flex items-center justify-start `}>
                                <span className='rounded-full border border-orange px-4 py-2' > 
                                    Remote 
                                </span>
                                <span className='rounded-full border border-orange px-4 py-2 mx-4' > 
                                    Full Time 
                                </span>
                            </div>
                            {/* job description */}
                            <div className={` ${styles.positionDesc} my-6 `}>
                                <h3 className={`${styles.positionTitle} text-orange text-3xl`}>
                                    WHAT YOU'LL DO:
                                </h3>
                                <div className={` ${styles.positionDesc} my-6 `}>
                                    <ul class="max-w-md space-y-1 text-gray-500 list-disc list-outside dark:text-grey">
                                        <li>
                                        Proactively work with your team to collaborate and execute on the product goals and technical roadmap with a full initiative and a sense of responsibility to deliver timely and high code quality standards.
                                        </li>
                                        <li>
                                        Effectively build product-focused features in our Angular frontend independently. Contribute to shared UI components and design system, and the architecture of the front-end platform
                                        </li>
                                        <li>
                                        Read, write, and review application code, with a focus on writing maintainable code that is effective and easy to understand Document, explain and test the systems you help build
                                        </li>
                                    </ul>
                                </div>

                                {/*  */}

                                <h3 className={`${styles.positionTitle} text-orange text-3xl`}>
                                    We Are Looking For
                                </h3>
                                <div className={` ${styles.positionDesc} my-6 `}>
                                    <ul class="max-w-md space-y-1 text-gray-500 list-disc list-outside dark:text-grey">
                                        <li>
                                        Minimum of 5 years solid experience of JS, Typescript, Angular 2+
                                        Comprehensive understanding of writing "clean code“ and are able to define and maintain high performant, scalable
                                        UI components and its styling Works independently and has a high level of quality awareness
                                        Strong interest and curiosity. Desire to understand the full picture and ability to develop a long term vision
                                        Demonstrated capacity to clearly and concisely communicate about complex technical, architectural, and/or organizational problems and propose thorough iterative solutions
                                        </li>
                                        
                                    </ul>
                                </div>

                                <h3 className={`${styles.positionTitle} text-orange text-3xl`}>
                                    Nice to have
                                </h3>
                                <div className={` ${styles.positionDesc} my-6 `}>
                                    <ul class="max-w-md space-y-1 text-gray-500 list-disc list-outside dark:text-grey">
                                        <li>
                                            Testing frameworks (JEST, Cypress, or similar)
                                        </li>
                                        <li>
                                        Cross-platform development kits (e.g. React Native, Xamarin, Nativescript)
                                        </li>
                                        <li>
                                        React ,
                                        Redux ,
                                        Redux Saga
                                        </li>
                                        <li>
                                        GOOD SENSE OF HUMOR
                                        </li>
                                    </ul>
                                </div>

                            </div>
                                      
                    </div>
                </section>
            </main>
        <Footer/>
    </>
  )
}

export default position