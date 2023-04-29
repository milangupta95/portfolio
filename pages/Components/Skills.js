import React from 'react'
import Image from 'next/image'
function Skills() {
  return (
    /* Hello There */
    <div className='px-2 flex flex-col w-full md:h-screen h-full md:px-20 pt-32' id='skills'>
        <h1 className='text-5xl text-sky-600 mb-10 tracking-widest'>Skills</h1>
        <div className='grid lg:grid-cols-4 gap-4 sm:grid-cols-1 md:grid-cols-2'>
            <div className='rounded-lg bg-white mb-30'>
                <img src='/assets/HTMLLogo.png' height={400} width={400}/>
            </div>
            <div className='rounded-lg bg-white mb-30'>
                <Image src='/assets/CSSLogo.png' height={400} width={400}></Image>
            </div>
            <div className='rounded-lg bg-white mb-30'>
                <Image src='/assets/JavaScriptLogo.png' height={400} width={400}></Image>
            </div>
            <div className='rounded-lg mb-30'>
                <Image src='/assets/ReactLogo.png' height={400} width={400}></Image>
            </div>
            <div className='rounded-lg mb-30'>
                <img src='/assets/NodeJSLogo.png' height={400} width={400}/>
            </div>
            <div className='rounded-lg mb-30'>
                <Image src='/assets/ExpressLogo.png' height={400} width={400}></Image>
            </div>
            <div className='rounded-lg mb-30'>
                <Image src='/assets/MongoDBLogo.png' height={400} width={400}></Image>
            </div>
            <div className='rounded-lg mb-30'>
                <Image src='/assets/MySQLLogo.png' height={400} width={400}></Image>
            </div>
        </div>
    </div>
  )
}

export default Skills