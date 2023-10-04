import React from 'react'
import {BiGroup} from 'react-icons/bi'
import {LuFuel} from 'react-icons/lu'
import {ImMeter} from 'react-icons/im'
import {GiSteeringWheel} from 'react-icons/gi'
import {AiOutlineHeart} from 'react-icons/ai'

const ProductCard = ({Data}) => {
  return (
    <div className="mb-6 bg-white w-80 min-[1033px]:w-[31%] h-96 pl-4 pr-4 rounded-xl">
        <img src={Data.url} alt={Data.name} className='h-2/4 w-full pt-2 rounded-xl'/>
        <div className='flex flex-row justify-between w-full pt-2'>
            <div className='text-2xl'>{Data.name}</div>
            <div className='border-dashed border-2 border-sky-500 pl-2 pr-2 rounded-2xl'>{Data.model}</div>
        </div>
        <div className='flex flex-col gap-2 pt-4 pb-4'>
            <div className='flex flex-row justify-between w-3/4'>
            <h1 className='flex flex-row items-center gap-1'><BiGroup className='text-sky-600'/>{Data.people} People</h1>
            <h1 className='flex flex-row items-center gap-1 pr-6'><LuFuel className='text-sky-600'/>{Data.fuel}</h1>
            </div>
            <div className='flex flex-row justify-between w-3/4'>
            <h1 className='flex flex-row items-center gap-1'><ImMeter className='text-sky-600'/>{Data.Average}</h1>
            <h1 className='flex flex-row items-center gap-1'><GiSteeringWheel className='text-sky-600'/>{Data.mood}</h1>
            </div>
        </div>
        <div className='border-t-2 flex flex-row justify-between gap-2 pt-2'>
            <div className='text-2xl'>${Data.price}<span className='text-xs'>/month</span></div>
            <div className='flex flex-row'>
            <button className='bg-sky-200 pl-2 pr-2 h-8 rounded-lg'><AiOutlineHeart/></button>
            <div className='bg-sky-600 text-white flex justify-center items-center w-20 rounded-xl ml-2'>Rent now</div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard