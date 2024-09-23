"use client";
import { products } from '@/app/Category';
import { useParams } from 'next/navigation'
import React from 'react'
import { MdStarRate } from "react-icons/md";

function page() {
 let{cid}=useParams()
   let dtl=products.find((a)=>a.id==cid)

  return (
    <>
        <div className='row'>
            <div className="col-lg-5 text-end "> <img className='w-100' src={dtl.image} alt="" /></div>
      
       <div className='col-lg-4'>
       <p className='fw-bold pt-5 fs-5'>{dtl.title}</p>
       <p>{dtl.description}</p>
       <p className='text-danger'> $ {dtl.price}</p>
       <p className='star'><MdStarRate /> <MdStarRate /> <MdStarRate /> <MdStarRate /> <MdStarRate /></p>
      
<button className='btn btn-sm  border rounded-pill py-2 text-primary mb-2 w-25 box1'>Add to cart</button>
       </div>
       </div>
    </>
  )
}

export default page
