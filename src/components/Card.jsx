import React from 'react'

function Card(props) {

    const { img, title, category, price} = props
    return (
        <div className='bg-[#362C29]/50 p-6 rounded-2xl flex flex-col gap-2 w-full lg:w-auto md:w-auto hover:translate-y-[-8px]'>
            <img
                src={img}
                className='w-full lg:w-52  h-64 rounded-2xl object-cover'
            />
            <h1 className='text-lg text-white'>{title}</h1>
            <span className='text-gray-400'>{category}</span>
            <div className='flex items-center gap-5'>
                <h5 className='text-2xl text-[#E58D27]'>${price}</h5>
                <button  
                    className='bg-[#E58D27] text-black font-bold rounded-full w-full p-3 hover:-translate-y-1 transition-all duration-200 '
                >
                    Buy
                </button>
            </div>
        </div>
    )
}

export default Card
