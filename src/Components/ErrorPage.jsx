import React from 'react'

const ErrorPage = () => {
    return (
        <div className='h-screen w-full flex justify-center items-center'>
            <div className="kfc-logo mx-[30px] cursor-pointer">
                <img className='h-[250px]' src="https://images.ctfassets.net/wtodlh47qxpt/25FSYFuEtGct8NSrtpKe6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg" alt="kfc-logo" />
            </div>
            <div className="error-title">
                <h1 className='text-5xl font-bold'>
                    <span className='text-red-600'>404</span>
                    <br />THERE'S NO FRIED <br />CHICKEN ON THIS PAGE...
                </h1>
                <a href="/"><button className='text-xl font-semibold p-2 px-4 bg-black text-white rounded-full my-[10px]'>BACK TO HOME</button></a>
            </div>
        </div>
    )
}

export default ErrorPage
