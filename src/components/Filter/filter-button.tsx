import React from 'react'
interface Props{
    text: string
}
const FilterButton = ({ text }:Props) => {
  return (
    <div className='w-fit h-[32px] p-3 rounded-md bg-[#272727] hover:bg-[#3f3f3f] flex justify-center items-center text-sm'>
        { text }
    </div>
  )
}

export default FilterButton