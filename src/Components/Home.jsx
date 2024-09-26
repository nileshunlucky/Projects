import React from 'react'
import CategoryCards from './Home/CategoryCards'
import ExclusiveOffer from './Home/ExclusiveOffer'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { decrement, increment , incrementByAmount } from '../counter/counter'

const Home = ({ cart, setCart }) => {
    const dispatch = useDispatch()
    return (
        <div className='home h-full w-full'>
            {/* Order */}
            <div className="order-section h-[68px] bg-black text-white flex justify-center items-center gap-3">
                <div className="order-title">
                    <h1 className='md:text-sm text-[10px] font-bold'>LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</h1>
                </div>
                <div className="order-button">
                    <motion.button whileTap={{ scale: 0.9, backgroundColor: 'black', border: '2px solid white', borderRadius: '5px' }}
                        onClick={() => dispatch(increment())}
                        className='md:p-2 p-1 md:px-6 px-3 bg-[#e4002b] text-white rounded-full text-sm'>
                        Start Order
                    </motion.button>
                </div>
            </div>
            {/* Banner */}
            <div className="kfc-banner">
                <a href="#"><img className='md:h-[376px]' src="https://images.ctfassets.net/wtodlh47qxpt/3rG3DVKuArGcVVWvMJL0vL/6028fc17975a8c862c86fd67c0e54de5/web_1440x396px.jpg?w=1366&fit=fill&fm=webp" alt="kfc-poster" /></a>
            </div>
            {/* Browse Categories */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                className="browse-categories-container md:ml-[140px] ml-[50px] md:mr-[80px] mr-[30px] transition-all duration-500">
                <motion.div className="browse-categories-title flex justify-between items-center">
                    <h1 className='uppercase md:text-3xl text-2xl font-bold md:mt-[100px] mt-[30px] mb-[55px] mr-[31px] w-[600px]'>browse categories</h1>
                    <span className="horizontal-line border-t-2 w-full md:mt-[120px] mt-[30px] mr-[100px] block pb-[60px]"></span>
                </motion.div>
                <motion.div className="browse-categories-cards">
                    <CategoryCards />
                </motion.div>
            </motion.div>
            {/* Exclusive Offers */}
            <div className="exclusive-offers-container mt-[90px] bg-black text-white md:pb-[100px]">
                <div className="exclusive-offers md:ml-[160px]">
                    <div className="exclusive-offers-icon ml-[40px] mb-[55px]">
                        <div className="injected-icon">
                            <img src="Injected.svg" alt="Injected-icon" />
                        </div>
                    </div>
                    <div className="exclusive-offers-headline flex justify-between items-center ml-[40px] mb-[40px]">
                        <div className="title">
                            <h1 className='text-3xl font-bold'>Exclusive Offers for you</h1>
                        </div>
                        <div className="text mr-[160px] flex justify-between items-center gap-2 cursor-pointer">
                            <span ><p className='text-sm'>View All Deals</p></span>
                            <span ><i className="fa-solid fa-arrow-right-long text-sm"></i></span>
                        </div>
                    </div>
                    <div className="exclusive-offers-cardLists pl-[32px]">
                        <ExclusiveOffer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
