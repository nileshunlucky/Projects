import React, { useState } from 'react';

const ExclusiveOffer = () => {
  const [curr, setCurr] = useState(0);

  const offers = [
    {
      id: 1,
      img: 'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/CHKZINGER.jpg?ver=53.39',
      title: 'FREE CHICKEN...',
      para: '1 Pc free Chicken Zinger on a cart value of 499 or above on first order. Only for registered users.',
    },
    {
      id: 2,
      img: 'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/ADDCHK99.jpg?ver=53.39',
      title: 'ADD 2 PC HOT N...',
      para: 'Add 2 Pc Hot n Crispy Chicken at just Rs 99 on min cart value of Rs 499 or more. Applicable on 2nd & 3rd order for signed-in users.',
    },
    {
      id: 3,
      img: 'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/ADDCHK99.jpg?ver=53.39',
      title: 'ADD 2 PC HOT N...',
      para: 'Add 2 Pc Hot n Crispy Chicken at just Rs 99 on min cart value of Rs 499 or more. Applicable on 2nd & 3rd order for signed-in users.',
    },
    {
      id: 4,
      img: 'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/ADDCHK99.jpg?ver=53.39',
      title: 'ADD 2 PC HOT N...',
      para: 'Add 2 Pc Hot n Crispy Chicken at just Rs 99 on min cart value of Rs 499 or more. Applicable on 2nd & 3rd order for signed-in users.',
    },
    {
      id: 5,
      img: 'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/ADDCHK99.jpg?ver=53.39',
      title: 'ADD 2 PC HOT N...',
      para: 'Add 2 Pc Hot n Crispy Chicken at just Rs 99 on min cart value of Rs 499 or more. Applicable on 2nd & 3rd order for signed-in users.',
    },
  ];

  const visibleCards = 3; // Number of cards you want visible at once

  const prev = () => {
    setCurr((prevCurr) => (prevCurr === 0 ? offers.length - 1 : prevCurr - 1));
  };

  const next = () => {
    setCurr((prevCurr) => (prevCurr === offers.length - 1 ? 0 : prevCurr + 1));
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute inset-y-0 left-0 flex items-center z-10 cursor-pointer" onClick={prev}>
        <span className="bg-zinc-500 p-2 px-4 rounded-full">
          <i className="fa-solid fa-chevron-left text-xl text-black"></i>
        </span>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center z-10 cursor-pointer" onClick={next}>
        <span className="bg-zinc-500 p-2 px-4 rounded-full">
          <i className="fa-solid fa-chevron-right text-xl text-black"></i>
        </span>
      </div>
      <div style={{ transform: `translateX(-${curr * 70}%)` }}
        className="flex transition-transform duration-300 ease-in-out">
        {offers.map((offer, index) => (
          <div
            key={offer.id}
            className="flex-shrink-0  p-2" // Divide the width evenly by the number of visible cards
          >
            <div className="card bg-white text-black rounded-lg text-center">
              <div className="card-image">
                <img className="h-[234px] rounded-t-lg" src={offer.img} alt={offer.title} />
              </div>
              <div className="card-title mx-[20px]">
                <h1 className="text-[23px] text-red-600 font-bold">{offer.title}</h1>
              </div>
              <div className="card-para h-[48px] w-[310px] overflow-hidden">
                <p className="text-sm">{offer.para}</p>
              </div>
              <div className="card-buttons flex justify-evenly items-center mb-[30px]">
                <div className="card-detailBtn">
                  <button className="text-sm font-semibold text-[#494949] underline">View Details</button>
                </div>
                <div className="card-offerBtn">
                  <button className="text-sm font-semibold py-[10px] px-[45px] rounded-full border border-[#494949]">
                    Apply Offer
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="indicator absolute bottom-4 right-0 left-0">
        <div className="flex justify-center items-center gap-2">
          {offers.map((_, i) => (
            <div className={`transition-all w-1 h-1 bg-white rounded-full cursor-pointer ${curr === i ? 'p-1' : 'bg-opacity-50'}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExclusiveOffer;
