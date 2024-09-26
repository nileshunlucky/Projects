import React from 'react'

const CategoryCards = () => {
    const arrow = <i className="fa-solid fa-arrow-right-long"></i>
    const categories = [
        {
            id: 1,
            img: 'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT289.jpg?ver=53.39',
            title: 'INTERNATIONAL BURGER FEST',
            link:'/product'
        },
        {
            id: 2,
            img: 'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT287.jpg?ver=53.39',
            title: 'MATCH DAY COMBOS'
        },
        {
            id: 3,
            img: 'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT228.jpg?ver=53.39',
            title: 'VALUE LUNCH SPECIALS'
        },
        {
            id: 4,
            img: 'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT158.jpg?ver=53.39',
            title: 'BOX MEALS'
        },
        {
            id: 5,
            img: 'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT99.jpg?ver=53.39',
            title: 'BURGERS'
        },
        {
            id: 6,
            img: 'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT86.jpg?ver=53.39',
            title: 'CHICKEN BUCKETS'
        },
        {
            id: 7,
            img: 'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT213.jpg?ver=53.39',
            title: 'RICE BOWLZ'
        },
        {
            id: 8,
            img: 'https://online.kfc.co.in/static/media/finger_lickin.fc21c805.svg',
            title: <>View All Menu {arrow}</>
        },
    ];
    return (
        <div className='browse-categories-card grid lg:grid-cols-4 grid-cols-2 m-[12px] gap-3'>
            {categories.map((category) => (
                <div key={category.id} className='bg-zinc-100 cursor-pointer'>
                    <a href={category.link}>
                        <div className="card-image">
                            <img className='md:h-[180px] w-full' src={category.img} alt={category.title} />
                        </div>
                        <div className="card-title text-center py-5">
                            <h1 className='text-sm font-bold'>{category.title}</h1>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default CategoryCards