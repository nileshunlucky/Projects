import React, { useState } from 'react'

const Navbar = ({ cart }) => {
    const [toggle, setToggle] = useState(false)
    function toggleHandler() {
        setToggle(!toggle)
    }
    return (
        <nav className='h-[100px] w-full bg-white text-black sticky top-0 z-50 flex justify-between items-center px-12 select-none'>
            <div className="hamburger md:hidden">
                <span onClick={toggleHandler} className='text-2xl'>=</span>
            </div>
            <div className="nav-leftSide flex justify-center items-center gap-12">
                <div className="nav-logo cursor-pointer">
                    <a href="#"><img src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg" alt="kfc-logo" /></a>
                </div>
                <div className={`nav-lists md:flex ${toggle ? 'block' : 'hidden'}`}>
                    <ul className='md:flex md:justify-between md:items-center gap-5 space-y-[80px] md:space-y-0
                    absolute md:static top-[98px] left-0 px-12 md:px-0 bg-white text-black w-full md:w-auto h-[200px] md:h-0'>
                        <li className='font-semibold text-sm'><a href="#">Menu <span className='text-5xl md:hidden'>🥞</span></a></li>
                        <li className='font-semibold text-sm'><a href="#">Deals <span className='text-5xl md:hidden'>💖</span></a></li>
                    </ul>
                </div>
            </div>
            <div className="nav-rightSide flex justify-between items-center gap-5 cursor-pointer">
                <div className="nav-registeration md:flex hidden justify-between items-center gap-3 border-r px-3">
                    <div className="register-user-icon">
                        <img src="https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg" alt="user-icon" />
                    </div>
                    <div className="register-button">
                        <button className='font-semibold text-sm'>Sign in</button>
                    </div>
                </div>
                <div className="nav-cart flex justify-between items-center">
                    <div className="cart-price">
                        <h1 className='font-semibold text-sm'>$0</h1>
                    </div>
                    <div className="cart-bukket-icon relative">
                        <img className='h-[50px]' src="kfc bakket.svg" alt="kfc-bukket" />
                        <span className='absolute top-[19px] left-[16px] text-[12px] font-bold w-[17px] text-center'>{cart}</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar