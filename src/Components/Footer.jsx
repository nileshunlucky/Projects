import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment , incrementByAmount } from '../counter/counter'
const Footer = () => {
    const dispatch = useDispatch()
    const year = new Date().getFullYear()
    return (
        <footer className='site-footer bg-black text-white md:px-[70px] md:pt-[70px] p-[10px]'>
            <div className="row row-1 text-center md:flex justify-evenly items-start my-[50px] md:space-y-0 space-y-5">
                <div onClick={() => dispatch(increment())} className="kfc-logo flex justify-center items-center cursor-pointer">
                    <img src="https://images.ctfassets.net/wtodlh47qxpt/25FSYFuEtGct8NSrtpKe6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg" alt="kfc-logo" />
                </div>
                <div className="catorgory-items flex justify-between items-start gap-5 md:ml-[25px]">
                    <div className="ul-title space-y-1 font-medium">
                        <span className='heading text-sm'>KFC India</span>
                        <ul className='md:text-[13px] text-[8px] space-y-1 text-zinc-300'>
                            <li><a href="#">About KFC</a></li>
                            <li><a href="#">KFC Care</a></li>
                            <li><a href="#">About KFC</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Our Golden Past</a></li>
                            <li><a href="#">Responsible Disclosure</a></li>
                        </ul>
                    </div>
                    <div className="ul-title space-y-1 font-medium">
                        <span className='heading text-sm'>Legal</span>
                        <ul className='md:text-[13px] text-[8px] space-y-1 text-zinc-300'>
                            <li><a href="#">About KFC</a></li>
                            <li><a href="#">KFC Care</a></li>
                            <li><a href="#">About KFC</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Our Golden </a></li>

                        </ul>
                    </div>
                    <div className="ul-title space-y-1 font-medium">
                        <span className='heading text-sm'>KFC Food</span>
                        <ul className='md:text-[13px] text-[8px] space-y-1 text-zinc-300'>
                            <li><a href="#">About KFC</a></li>
                            <li><a href="#">KFC Care</a></li>
                            <li><a href="#">About KFC</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Our Golden </a></li>

                        </ul>
                    </div>
                    <div className="ul-title space-y-1 font-medium">
                        <span className='heading text-sm'>Support</span>
                        <ul className='md:text-[13px] text-[8px] space-y-1 text-zinc-300'>
                            <li><a href="#">About KFC</a></li>
                            <li><a href="#">KFC Care</a></li>
                            <li><a href="#">About KFC</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Our Golden </a></li>

                        </ul>
                    </div>
                </div>
                <div className="find-store flex md:justify-between justify-center items-center gap-3">
                    <div className="location-icon">
                        <i className="fa-solid fa-location-dot text-red-600"></i>
                    </div>
                    <div className="store-link">
                        <a className='text-sm underline' href="#">Find a KFC</a>
                    </div>
                </div>
                <div className="social-btn flex justify-between items-center gap-5">
                    <div className="google-play">
                        <a href="#"><img src="https://images.ctfassets.net/wtodlh47qxpt/6BdZsyjLn64c06uCIE73d1/fb530f5d5231533b049463f6c7e8a2b1/google_play.svg" alt="google-play" /></a>
                    </div>
                    <div className="app-store">
                        <a href="#"><img src="https://images.ctfassets.net/wtodlh47qxpt/em3mcMuAdXWlgucSJiTbS/d3ae7e51ed101d829e459355e255c47f/apple.svg" alt="app-store" /></a>
                    </div>
                </div>
            </div>
            <div className="row row-2 mt-[25px] pb-[14px] flex justify-between items-center">
                <div className="column md:flex hidden lang-div ml-[4%] items-center"></div>
                <div className="column">
                    <h1 className='md:text-[11px] text-[9px] text-zinc-300 font-semibold'>Copyright © KFC Corporation {year} All rights reserved</h1>
                </div>
                <div className="column social-div md:mr-[4%]">
                    <div className="social-icons">
                        <ul className='flex justify-between items-center gap-3'>
                            <li><a href="#"><img src="https://images.ctfassets.net/wtodlh47qxpt/4ZHyPA2EeaoP3aqtNDriBA/463462a9c27b0aa585e12b21ce3766e0/Social_Insta_White.svg" alt="instagram-icon" /></a></li>
                            <li><a href="#"><img src="https://images.ctfassets.net/wtodlh47qxpt/dKiu2meLcfz2DNwsg7nZw/7194830b1ba6f25b158a23d6b2c4752c/Social_Facebook_White.svg" alt="facebook-icon" /></a></li>
                            <li><a href="#"><img src="https://images.ctfassets.net/wtodlh47qxpt/78z9x0WwdkdXwGVK726EKX/6599ca34ec88e2a6f46d7d94ed85a8ad/Social_Twitter_White.svg" alt="twitter-icon" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
