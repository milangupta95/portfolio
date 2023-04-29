import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import axios from 'axios';
function ContactUs() {
    const [email,setEmail] = useState("");
    const [name,setName] = useState("");
    const [message,setMessage] = useState("");

    const emailSetter = (e) => {
        setEmail(e.target.value);
    }

    const nameSetter = (e) => {
        setName(e.target.value);
    }

    const messageSetter = (e) => {
        setMessage(e.target.value);
    }

    const contact = async () => {
        try {
            let res = await axios.post('/api/contact',{
                name: name,
                email:email,
                message: message
            });
            if(res.status == 200) {
                window.alert("Message Send SuccessFully");
            } else {
                window.alert("There is Some Error");
            }
        } catch(err) {
            window.alert(err.message)
        }
    }
    return (
        <div className='flex justify-between px-2 md:px-20 w-full h-screen pt-20' id='contactus'>
            <div className='w-full h-full'>
                <p className='text-5xl tracking-widest text-sky-600'>Contact</p>
                <div className='flex md:flex-row flex-col justify-between items-center'>
                    <div className='p-2  shadow-lg shadow-grey-800'>
                        <Image src="/assets/Contact.jpg" height={500} width={400} />
                        <div>
                            <p className='text-xl tracking-widest'>Milan Kumar Gupta</p>
                            <p className='text-xl tracking-widest'>Full-Stack Developer</p>
                            <p className='text-xl tracking-widest'>Email : <span>milangupta95@gmail.com</span></p>
                            <p className='text-xl tracking-widest'>Mobile: <span>9140076991</span></p>
                        </div>
                    </div>
                    <div className='w-[75%]'>
                        <div className="container my-24 px-6 mx-auto">
                            <section className="mb-32 text-center text-gray-800">
                                <div className="max-w-[700px] mx-auto px-3 lg:px-6">
                                    <h2 className="text-3xl font-bold mb-12">Contact us</h2>
                                    <form>
                                        <div className="form-group mb-6">
                                            <input onChange={nameSetter} value ={name} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7" placeholder="Name" />
                                        </div>
                                        <div className="form-group mb-6">
                                            <input onChange={emailSetter} value={email} type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8" placeholder="Email address" />
                                        </div>
                                        <div className="form-group mb-6">
                                            <textarea onChange={messageSetter} value={message} className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
                                        </div>
                                        <button onClick = {contact} type="submit" className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Send</button>
                                    </form>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ContactUs