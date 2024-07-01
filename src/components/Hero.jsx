import React from 'react'
import Button from './Button';
function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] width-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>
                <p >It's TIME TO GET</p>
                <h1 className='text-blue-400 uppercase font-semibold text-4xl sm:text-5xl md:text-7xl'>FIT</h1>
            </div>
            <p className='text-sm md:text-base font-light'>I hearby acknowladge that I may become <span className='text-blue-400 font-medium'>unbelievably FIT</span> and accept all risks of becoming the local <span className='text-blue-400 font-medium'>mass monstrosity</span>, afflicted with severe body dismorphia, unable to fit through doors.</p>
            <Button clickfunc={() => {
                window.location.href = '#generate'
            }}>Accept & Begin</Button>
        </div>
    )
}

export default Hero;
