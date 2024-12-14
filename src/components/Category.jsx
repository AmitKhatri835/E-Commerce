import React from 'react'

export default function Categories({categories,setCatName}) {

  let cat=categories.map((v,i)=>{
    return(
    <li onClick={()=>setCatName(v)} className="font-serif p-[7px] text-[18px] cursor-pointer mb-2 font-[500] bg-[#ccc]" key={i} >{v}</li>
    )
  })

  return (
    <>
    <div>
        <h2 className="text-[25px] p-[10px] text-center font-bold ">Product Category</h2>
        <ul>
            {cat}
        </ul>
    </div>
    </>
  )
}
