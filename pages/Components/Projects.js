import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
function Projects() {
    return (
        <div className=' px-2 flex flex-col w-full md:h-screen h-full items-center justify-between md:px-20 pt-20' id='projects'>
            <div className='w-fit md:w-full h-full'>
                <h1 className='text-5xl text-sky-600 tracking-widest mb-10'>Projects</h1>
                <div className='md:w-full grid md:grid-cols-3 grid-cols-1'>
                    <div className='mr-5 justify-between shadow-lg shadow-grey-800'>
                        <h1 className='text-2xl tracking-widest border-b-2 mb-2'>E-Commerce Website</h1>
                        <Image className='border-b-2' src='/../public/assets/EComProject.png' width={400} height={500}></Image>
                        <div className='flex justify-between items-center mt-2 '>
                            <Link href='https://github.com/milangupta95/E-Commerce' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                Code
                            </Link>
                            <Link href='https://e-commerce-production-e391.up.railway.app/' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
                                Live
                            </Link>
                        </div>
                    </div>
                    <div className='p-2 mr-5 shadow-lg shadow-grey-800'>
                        <h1 className='text-2xl tracking-widest border-b-2 mb-2'>IMDB Clone</h1>
                        <Image className='border-b-2' src='/../public/assets/MovieApp.png' width={400} height={500}></Image>
                        <div className='flex justify-between items-center mt-2 '>
                            <Link href='#' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                Code
                            </Link>
                            <Link href='ttps://imdbclonemilan.netlify.app/' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
                                Live
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects