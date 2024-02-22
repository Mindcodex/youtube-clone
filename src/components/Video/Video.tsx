'use client'
import ReactPlayer from "react-player/youtube"
import VideoDescription from "./VideoDescription/VideoDescription"
import VideoTitle from "./video-title"

const Video = () => {
  return (
    <>
      <div className="w-[817px] h-[460px] bg-black rounded-xl overflow-hidden">
        <ReactPlayer controls={true} playing = {true}  width={"100%"} height={"100%"} url={'https://www.youtube.com/watch?v=ho91KspiWhk&list=PLhFBHuT4t3aDIh_vuw7PhYm4dEoQx6SHh'}></ReactPlayer>
      </div>
    </>
  )
}

export default Video