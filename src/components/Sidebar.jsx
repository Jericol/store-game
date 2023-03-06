import React from 'react';
import { useState } from 'react';
import { RiMoneyDollarCircleLine, RiFacebookFill, RiInstagramLine, RiYoutubeLine, RiTwitterLine, RiFilter3Fill, RiFlutterLine } from "react-icons/ri";

function Sidebar() {

    const [ showSidebar, setShowSidebar ] = useState(false)
    return (
        <>
            <div className={`w-[80%] md:w-[40%] fixed lg:static top-0  ${
                showSidebar ? "left-0" : "-left-full"
              } lg:w-80 h-full text-gray-400  transition-all bg-[#181A20] p-4 `}
            >
                {/* search */}
                <div className='bg-[#362c29]/50 rounded-2xl p-4 mb-4'>
                    <h4 className='mb-4 text-white text-lg'>Categories</h4>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='indy' />
                            <label htmlFor="indy">Indy</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='aventure' />
                            <label htmlFor="aventure">Aventure</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='mmo' />
                            <label htmlFor="mmo">MMO</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='casual game' />
                            <label htmlFor="casual game">Casual Game</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='strategy' />
                            <label htmlFor="strategy">Strategy</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='simulador' />
                            <label htmlFor="simulador">Simulador</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='sport game' />
                            <label htmlFor="sport game">Sport Game</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='action game' />
                            <label htmlFor="action game">Action Game</label>
                        </div>
                    </div>
                    <h4 className='my-6 text-white text-lg'>Plataforms</h4>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='pc' />
                            <label htmlFor="pc">PC</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='play station 5' />
                            <label htmlFor="play station 5">PlayStation 5</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='play station 4' />
                            <label htmlFor="play station 4">PlayStation 4</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='xbox series' />
                            <label htmlFor="xbox series">Xbox Series</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='nintendo switch' />
                            <label htmlFor="nintendo switch">Nintendo Switch</label>
                        </div>
                    </div>
                    <h4 className='my-6 text-white text-lg'>Price</h4>
                    <form className='flex flex-col gap-8'>
                        <div className='flex items-center justify-between gap-4'>
                            <div className='relative'>
                                <RiMoneyDollarCircleLine className='absolute left-2 top-1/2 -translate-y-1/2'/>
                                <input 
                                type="number" 
                                className='bg-[#181A20] py-2 Pl-8 pr-4 rounded-xl outline-none w-full' 
                                />
                            </div>
                            <span>-</span>
                            <div className='relative'>
                                <RiMoneyDollarCircleLine className='absolute left-2 top-1/2 -translate-y-1/2'/>
                                <input 
                                type="number" 
                                className='bg-[#181A20] py-2 Pl-8 pr-4 rounded-xl outline-none w-full' 
                                />
                            </div>
                        </div>
                        <button type="submit" 
                        className='bg-[#E58D27] text-black font-bold rounded-full w-full p-3 hover:-translate-y-1 transition-all duration-200 '
                        >
                            Apply filters
                        </button>
                    </form>
                </div>
                {/* Redes sociales */}
                    <ul className='flex items-center justify-between'>
                        <li>
                            <a href="#" className='text-2xl'>
                                <RiFacebookFill />
                            </a>
                        </li>
                        <li>
                            <a href="#" className='text-2xl'>
                                <RiInstagramLine />
                            </a>
                        </li>
                        <li>
                            <a href="#" className='text-2xl'>
                                <RiYoutubeLine />
                            </a>
                        </li>
                        <li>
                            <a href="#" className='text-2xl'>
                                <RiTwitterLine />
                            </a>
                        </li>
                    </ul>
            </div>
            {/* buttom movil */}
            <button 
              className='lg:hidden  fixed bottom-4 right-4 bg-[#E58D27] p-4 rounded-full text-2xl z-40'
              onClick={() => setShowSidebar(!showSidebar)}
            >
                {showSidebar ? <RiFlutterLine /> : <RiFilter3Fill /> } 
            </button>
        </>
    )
}

export default Sidebar
