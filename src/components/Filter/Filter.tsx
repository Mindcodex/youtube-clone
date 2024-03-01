import React from 'react'
import FilterButton from './filter-button'
import { filterData } from './filter-data'

const Filter = () => {
  return (
    <div className='overflow-hidden'>
        <div className='mt-6 max-w-full gap-x-3 flex text-nowrap'>
            {
                filterData.map((item: string, i) => <FilterButton key={i} text={item}/>)
            }
        </div>
    </div>
  )
}

export default Filter