import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiFillMail, } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import Link from 'next/link'
function Main() {
    return (
        <div className='text-center w-full h-screen'>
            <div className='leading-10 flex flex-col justify-center items-center w-full h-full mx-auto p-3'>
                <div className='p-2 bg-slate-300'>
                    <p className='text-2xl text-grey-700 uppercase tracking-widest'>Lets Build Something Together</p>
                </div>
                <div>
                    <h1 className='text-5xl font-bold text-grey-700 p-2 tracking-widest'>Hi, I am <span className='text-violet-600'>Milan</span></h1>
                    <h1 className='text-5xl font-bold text-grey-700 p-2 tracking-widest'>A Full-Stack Developer</h1>
                    <p className='text-xl px-[20%] tracking-widest'>
                        I am a Full Stack Developer and currently i
                        am pursuring B.tech From IET(Lucknow) i have
                        a great problem Solving Skill and Strong Grasp on DSA
                        and i am eagar to learn new Technology
                    </p>
                </div>
                <div className='mt-10 flex justify-between items-center md:px-5'>
                    <div className='cursor-pointer'>
                    <Link href='https://www.linkedin.com/in/milan-kumar-gupta-a06886200/'><AiFillLinkedin size={40}></AiFillLinkedin></Link>
                    </div>
                    <div className='cursor-pointer md:ml-20 ml-10'>
                    <Link href='https://github.com/milangupta95'><AiFillGithub size={40}></AiFillGithub></Link>
                    </div>
                    <div className='cursor-pointer md:ml-20 ml-10'>
                    <Link href='mailto:milangupta95@gmail.com'><AiFillMail size={40}></AiFillMail></Link>
                    </div>
                    <div className='cursor-pointer md:ml-20 ml-10'>
                        <Link href=''><CgProfile size={40}></CgProfile></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main