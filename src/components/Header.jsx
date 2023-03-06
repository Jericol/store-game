import React from 'react';
import { useState } from 'react';
import { RiShoppingCart2Line, RiHeartAddFill, RiAlignLeft, RiFlutterLine } from "react-icons/ri";


function Header() {

    const [showMenu, setShowMenu] = useState(false)


    return (
        <header className='h-[10vh] text-gray-300 py-4 px-10 flex items-center justify-between bg-[#181A20] z-50  top-0'>
            {/* menu movile */}
            <button
                onClick={() => setShowMenu(!showMenu)}
                className='lg:hidden text-2xl'
            >
                <RiAlignLeft />
            </button>
            <div
                className={`fixed left-0 bg-[#181A20] w-full h-full z-40 transition-all duration-[0.9s] ${showMenu ? "top-0" : "-top-full"
                    }`}
            >
                <button onClick={() => setShowMenu(!showMenu)}   className='text-3xl p-4 transition-all duration-[0.9s]'>
                    <RiFlutterLine />
                </button>
                <ul className=''>
                    <li>
                        <a href="#" className='block text-center p-4'>Home</a>
                    </li>
                    <li>
                        <a href="#" className=' block text-center p-4'>Streams</a>
                    </li>
                    <li>
                        <a href="#" className='text-[#E58D27] block text-center p-4'>Game Store</a>
                    </li>
                    <li>
                        <a href="#" className=' block text-center p-4'>News</a>
                    </li>
                </ul>
            </div>
            {/* Menu */}
            <ul className='hidden lg:flex items-center gap-6'>
                <li>
                    <a href="#" className='hover:text-[#E58D27] transition-colors'>Home</a>
                </li>
                <li>
                    <a href="#" className='hover:text-[#E58D27] transition-colors'>Streams</a>
                </li>
                <li>
                    <a href="#" className='text-[#E58D27] transition-colors'>Game Store</a>
                </li>
                <li>
                    <a href="#" className='hover:text-[#E58D27] transition-colors'>News</a>
                </li>
            </ul>
            {/* user menu */}
            <ul className='flex items-center gap-6 text-xl'>
                <li>
                    <button className='hover:text-[#E58D27] transition-colors'>
                        <RiShoppingCart2Line />
                    </button>
                </li>
                <li>
                    <button className='hover:text-[#E58D27] transition-colors'>
                        <RiHeartAddFill />
                    </button>
                </li>
                <li>
                    <button>
                        <img
                            src="https://img.freepik.com/foto-gratis/sonriendo-mirando-amistosamente-mostrando-numero-tres-o-tercero-mano-adelante-cuenta-regresiva_1194-406890.jpg?w=1060&t=st=1677730326~exp=1677730926~hmac=7d8d8cc909f89a0046e38c053974133cfeb97216fd99abfba7d494fe3fb74948"
                            className='w-8 h-8 object-cover rounded-full ring-2 ring-[#E58D27]'
                        />
                    </button>
                </li>
            </ul>
        </header>
    )
}

export default Header;
