import React from 'react'

const Card = (props) => {
    return (
        <div className='pt-8 mt-4'>
            <div className='mx-auto w-1/2 flex justify-between items-center p-3 border border-gray-800'>
                <div className='flex flex-row items-center gap-4'>
                    <img src={props.image} width="35px" alt="" />
                    <h1>{props.name}</h1>
                    <span className='text-gray-500 font-semibold uppercase'>{props.symbol}</span>
                </div>
                <div className='flex flex-col items-end'>
                    <span className='font-semibold text-green-600'>${props.price_change_24h}</span>                    
                    <span className='font-semibold'>${props.current_price}</span>
                </div>
            </div>
        </div>
    )
}

export default Card