import React from 'react'
import Image from 'next/image'
function About() {
    return (
        <div className='flex w-full h-screen justify-between items-center' id='about'>
            <div className='px-2 md:px-20'>
                <p className='text-5xl mb-5 text-sky-600 tracking-widest'>About</p>
                <p className='text-xl tracking-widest'>
                    Hey There I am Milan kumar Gupta and Professionally i am
                    full-stack developer and my technology stack is MERN(MongoDB,Express,React and NodeJS)
                    I am Fast Learner and Able to learn any technology much faster
                    i have great problem solving skill and i have solved more than
                    1000+ question on various coding platform such as leetcode,Codeforces,
                    Codechef,Hackerrank and geeksforgeeks.
                    I started my Coding journey back in 2020 when i started my B.tech in
                    Information Technology at
                    Institute of Engineering and Technology and Learn to many skills by
                    making Projects.
                </p>
            </div>
            <div className='width-200 rounded-lg shadow-lg shadow-grey-500 p-5 cursor-pointer mr-10'>
                <Image src='/../public/assets/AboutImage.jpg' width={1500} height={1500}/>
            </div>
        </div>
    )
}

export default About