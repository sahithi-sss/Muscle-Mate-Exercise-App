import React from 'react'
import Button from './Button'


export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center p-5'>
      <p className='uppercase text-lg md:text-3xl font-semibold' style={{WebkitTextStroke: '0.8px #061A40',WebkitTextFillColor: '#97DFFC',color: '#97DFFC' }}>It's time to ...</p>
      <h1 className="uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold" style={{  WebkitTextStroke: '3.5px #061A40',  WebkitTextFillColor: '#B9D6F2',color: '#B9D6F2' }}>Unleash your inner <span>BeastMode</span> !</h1>
      <p className='text-lg md:text-3xl sm:text-2xl md:text-3xl lg:text-4xl' style={{WebkitTextStroke: '0.8px #061A40',WebkitTextFillColor: '#97DFFC',color: '#97DFFC' }}>I solemnly accept the destiny of becoming <span className=' text-4xl uppercase text-red-500'>outrageously ripped</span>, achieving the status of a <span className='text-4xl text-red-500 uppercase'>walking powerhouse</span>, and enduring the side effects of <span className='text-4xl text-red-500 uppercase'>unmatched bulk</span>, local legend status, mirror obsession, and occasional doorway reconfigurations.</p>
      <Button func={() => {
        window.location.href = '#generate'}}
        text = 'Accept & Begin !'></Button>
    </div>
  )
}
