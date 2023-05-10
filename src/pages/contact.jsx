import React, {useState , useEffect} from "react";
import { Navbar , Footer } from '../components'
import '../styles/contact.scss'

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name)
    }

  return (
    <>
        <Navbar  color="bg-white" textColor="orange" btnStyles='bg-orange p-4 text-white'/>
        {/* create a banner */}
        <div className="contact-banner" >
            
        </div>
        {/* <!-- Container for demo purpose --> */}
        <div class="container my-24 px-6 mx-auto">

        {/* <!-- Section: Design Block --> */}
        <section class="mb-32 text-gray-800">
            <div class="flex flex-wrap">

                <div class="grow-0 shrink-0 basis-auto mb-10 md:mb-0 w-full md:w-8/12 px-3 lg:px-6">
                    <h2 class="text-3xl text-orange font-bold mb-6">
                        Frequently asked questions.
                    </h2>
                    <h3 class="contact font-bold mb-2">
                    What is the estimated delivery time for my order?
                    </h3>
                    <p class="text-gray-500 mb-6">
                    The estimated delivery time for your order depends on various factors such as the shipping method chosen, the destination, and any potential delays caused by customs or weather. You can check the estimated delivery time during checkout or by contacting the seller or carrier for more information.

                    </p>
                    <h3 class="contact font-bold mb-2">
                        What should I do if my package is lost or damaged during shipping?
                    </h3>
                    <p class="text-gray-500 mb-6">
                    In the event that your package is lost or damaged during shipping, you should contact the seller or carrier as soon as possible to report the issue and initiate a claim. Be sure to keep any relevant documentation, such as the tracking number and proof of purchase.
                    </p>

                    <h3 class="contact font-bold mb-2">
                    Can I track my shipment? How do I get the tracking information?
                    </h3>
                    <p class="text-gray-500 mb-6">
                    Yes, you can usually track your shipment by using the tracking number provided by the carrier. The tracking information may be available through the carrier's website or mobile app, or you may be able to receive updates via email or SMS.
                    </p>

                    <h3 class="font-bold mb-2">
                    What are the shipping options available? Are there any expedited shipping services?
                    </h3>
                    <p class="text-gray-500">
                    The available shipping options and services may vary depending on the seller, carrier, and destination. Some common options include standard ground shipping, expedited shipping, and international shipping. It's a good idea to review the shipping options and associated costs during checkout, and to contact the seller or carrier if you have any questions or special requirements.
                    </p>

                </div>
                <div class="grow-0 shrink-0 basis-auto w-full md:w-4/12 px-3 lg:px-6">
                    <p class="font-bold mb-6">Didn't find your answer in the FAQ? Contact our sales</p>
                    <form onSubmit={handleSubmit}>
                        {name}
                    <div class="form-group mb-6">
                        <input type="text" class="form-control block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-sfblue
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-black focus:bg-white focus:border-sfblue focus:outline-none" id="exampleInput7"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        autoFocus={true}
                        placeholder="Name"/>
                    </div>
                    <div class="form-group mb-6">
                        <input type="email" class="form-control block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-sfblue
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-black focus:bg-white focus:border-sfblue focus:outline-none" id="exampleInput8"
                        placeholder="Email address"/>
                    </div>
                    <div class="form-group mb-6">
                        <textarea class="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                       
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-black focus:bg-white focus:border-sfblue focus:outline-none
                        " id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
                    </div>
                    <div class="form-group form-check text-center mb-6">
                        <input type="checkbox"
                        class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-sfblue checked:border-orange focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                        id="exampleCheck87"
                        defaultChecked={true}
                        />
                        <label class="form-check-label inline-block text-gray-800" for="exampleCheck87">Send me a copy of this
                        message</label>
                    </div>
                    <button type="submit" class="
                        w-full
                        px-6
                        py-4
                        bg-sfblue
                        text-white
                        font-medium
                        text-lg
                        leading-tight
                        uppercase
                        rounded
                        shadow-md
                        hover:bg-blue-700 hover:shadow-lg
                        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                        active:bg-blue-800 active:shadow-lg
                        transition
                        duration-150
                        ease-in-out">Send</button>
                    </form>
                </div>

            </div>
        </section>
        {/* <!-- Section: Design Block --> */}

        </div>
        {/* <!-- Container for demo purpose --> */}
        <Footer />
    </>
    )
}

export default Contact


           
