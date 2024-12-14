import React from 'react'

export default function Products({items}) {
  return (
    <>
        <div className='shadow-lg text-center pb-4'>
        <img src={items.thumbnail} alt="IPHONE" className="max-w-[300px] " />
          <h4>{items.title}</h4>
          <b>Rs {items.price}</b>
        </div>
    </>
  )
}


/*
'https://dummyjson.com/products'
'https://dummyjson.com/products/categories' 
'https://dummyjson.com/products/category/smartphones'
*/