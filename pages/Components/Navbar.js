import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillGithub, AiFillLinkedin, AiFillMail, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { useState } from 'react'
function Navbar() {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }
    return (
        <div className='fixed top-0 h-20 bg-slate-100 w-full shadow-lg shadow-gray-800 z-[100]'>
            <div className='pr-2 flex justify-between items-center'>
                <Image src='/assets/logo.png' height={60} width={80}></Image>
                <ul className='hidden md:flex'>
                    <Link href='/'>
                        <li className='uppercase ml-10 text-xl hover:border-b-2'>Home</li>
                    </Link>
                    <Link href='/#about'>
                        <li className='uppercase ml-10 text-xl hover:border-b-2'>About</li>
                    </Link>
                    <Link href='/#skills'>
                        <li className='uppercase ml-10 text-xl hover:border-b-2'>Skills</li>
                    </Link>
                    <Link href='/#projects'>
                        <li className='uppercase ml-10 text-xl hover:border-b-2'>Projects</li>
                    </Link>
                    <Link href='/#contactus'>
                        <li className='uppercase ml-10 text-xl hover:border-b-2 hover:text-grey-800'>Contact</li>
                    </Link>
                </ul>
                <div className='md:hidden cursor-pointer' onClick={handleNav}>
                    <AiOutlineMenu size={30}></AiOutlineMenu>
                </div>
            </div>
            <div className={nav ? 'md:hidden fixed left-0 top-0 h-screen md:w-[40%] sm:w-[60%] bg-slate-100' : 'hidden'}>
                <div className='flex justify-between items-center pr-5'>
                    <Image src='/assets/logo.png' height={60} width={80}></Image>
                    <div className='cursor-pointer rounded-xl shadow-xl shadow-grey-800 bg-slate-300 p-1' onClick={handleNav}>
                        <AiOutlineClose></AiOutlineClose>
                    </div>
                </div>
                <p className='ml-2 border-b-2 text-xl'>Let's Build Some Legendary Together</p>
                <ul className='justify-between item-center mt-5'>
                    <Link href='/'>
                        <li onClick={() => setNav(false)} className='uppercase ml-2 mb-10 text-xl hover:border-b-2'>Home</li>
                    </Link>
                    <Link href='/#about'>
                        <li onClick={() => setNav(false)} className='uppercase ml-2 mb-10 text-xl hover:border-b-2'>About</li>
                    </Link>
                    <Link href='/#skills'>
                        <li onClick={() => setNav(false)} className='uppercase ml-2 mb-10 text-xl hover:border-b-2'>Skills</li>
                    </Link>
                    <Link href='/#projects'>
                        <li onClick={() => setNav(false)} className='uppercase ml-2 mb-10 text-xl hover:border-b-2'>Projects</li>
                    </Link>
                    <Link href='/#contactus'>
                        <li onClick={() => setNav(false)} className='uppercase ml-2 mb-10 text-xl hover:border-b-2 hover:text-grey-800'>Contact</li>
                    </Link>
                </ul>
                <div className='flex justify-between items-center px-5'>
                    <div className='cursor-pointer'>
                        <Link href='https://www.linkedin.com/in/milan-kumar-gupta-a06886200/'><AiFillLinkedin size={40}></AiFillLinkedin></Link>
                    </div>
                    <div className='cursor-pointer'>
                        <Link href='https://github.com/milangupta95'><AiFillGithub size={40}></AiFillGithub></Link>
                    </div>
                    <div className='cursor-pointer'>
                        <Link href='mailto: milangupta95@gmail.com'><AiFillMail size={40}></AiFillMail></Link>
                    </div>
                    <div className='cursor-pointer'>
                        <CgProfile size={40}></CgProfile>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar