import Image from "next/image"
import { TfiSearch } from "react-icons/tfi";
import Icon from "../Icon"
import { FaMicrophone } from "react-icons/fa";

const Searcher = () => {
  return (
    <div className="flex gap-x-[18px] h-[40px]">
        <div className="flex outline rounded-3xl outline-[1px] outline-[#323232]">
            <div className="h-[40px] w-[536px] bg-[#121212] rounded-l-2xl text-[#555] flex items-center p-[15px]">Buscar</div>
            <div className="w-[64px] bg-[#262626] flex justify-center rounded-r-2xl items-center"> <TfiSearch size={20}/> </div>
        </div>
        <Icon bgFill>
          <FaMicrophone size={18}/>
        </Icon>
    </div>
  )
}

export default Searcher