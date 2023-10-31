import React from 'react'

const History = () => {
    return (
        <div className='w-3/4 max-h-80 overflow-y-scroll'>
            <div>
                <ul>
                    <h1 className='font-bold text-3xl m-5 text-center'>Requests</h1>
                    <li className='flex flex-row justify-around outline m-3 text-xl font-bold'>
                        <p>Address</p>
                        <p>Scrape data</p>
                        <p>status</p>
                    </li>

                    <li className='flex flex-row justify-around outline m-3 max-h-12 overflow-y-scroll'>
                        <p className='w-1/4 text-center' >bhupenderJogi</p>
                        <p className='w-1/4 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, sunt?</p>
                        <p className='w-1/4 text-center text-green-500'>fullfilled</p>
                    </li>
                    <li className='flex flex-row justify-around outline m-3 max-h-12 overflow-y-scroll'>
                        <p className='w-1/4 text-center' >bhupenderJogi</p>
                        <p className='w-1/4 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, sunt?</p>
                        <p className='w-1/4 text-center text-red-600'>pending</p>
                    </li>
                    <li className='flex flex-row justify-around outline m-3 max-h-12 overflow-y-scroll'>
                        <p className='w-1/4 text-center' >bhupenderJogi</p>
                        <p className='w-1/4 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, sunt?</p>
                        <p className='w-1/4 text-center text-green-500'>fullfiled</p>
                    </li>
                    <li className='flex flex-row justify-around outline m-3 max-h-12 overflow-y-scroll'>
                        <p className='w-1/4 text-center' >bhupenderJogi</p>
                        <p className='w-1/4 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, sunt?</p>
                        <p className='w-1/4 text-center text-red-600'>pending</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default History

