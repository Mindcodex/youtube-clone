import React from 'react'
import VideoTitle from '../video-title'

const VideoDescription = () => {
  return (
    <section className='w-full  py-2 px-2 hover:bg-[#3f3f3f] rounded-2xl'>
       <VideoTitle/>
       <div className='text-sm mt-1'>7,300 vistas  hace 2 horas</div>
       <p className='mt-5 text-sm bg'>CIERRAN INADI: MILEI LO ELIMINA DEFINITIVAMENTE, L <span className='bg-[#0f0f0]'>...mas</span></p>
    </section>
  )
}

export default VideoDescription