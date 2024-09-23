"use client";
import React from 'react'
import { products } from '@/app/Category';
import { useParams } from 'next/navigation'
import Link from 'next/link';


function page() {
    let{id}=useParams()
    var cat=products.filter((a)=>a.category==id)
  return (

    <div className='container py-3'>
      <div className="row">
        <div className="col-lg-4"> 
          <div className='d-flex gap-3'>
            <Link className='link-dark ' href="/">Home</Link>
          <p className='fw-bold text-black-50 '>  {id}</p>
          </div>
          <div className='py-4'>
            <p className='text-uppercase fw-bold'>Product Categories</p>

   <div className='text-black-50'>
  <div className="form-check">
    <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
    <label className="form-check-label" htmlFor="defaultCheck1">
    Coffee
    </label>
  </div>

  <div className="form-check">
    <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
    <label className="form-check-label" htmlFor="defaultCheck1">
  Craft Beer
    </label>
  </div>

  <div className="form-check">
    <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
    <label className="form-check-label" htmlFor="defaultCheck1">
 Drink Boxes & Pouches
    </label>
  </div>

  <div className="form-check">
    <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
    <label className="form-check-label" htmlFor="defaultCheck1">
Milk & Plant-Based Milk
    </label>
  </div>

  <div className="form-check">
    <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
    <label className="form-check-label" htmlFor="defaultCheck1">
Soda & Pop
    </label>
  </div>

  <div className="form-check">
    <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
    <label className="form-check-label" htmlFor="defaultCheck1">
Sparkling Water
    </label>
  </div>

  <div className="form-check">
    <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
    <label className="form-check-label" htmlFor="defaultCheck1">
Tea & Kombucha
    </label>
  </div>

   <div className="form-check">
    <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
    <label className="form-check-label" htmlFor="defaultCheck1">
Water
    </label>
  </div>

   <div className="form-check">
    <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
    <label className="form-check-label" htmlFor="defaultCheck1">
Wine
    </label>
  </div>
  
  

</div>


          </div>

          <div className='py-4'>
   <p className='text-uppercase fw-bold'>Filter by price</p>
           
<input type="range" class=" range " id="customRange1"></input>
 <label for="customRange1" class="form-label top "> Price: $0 — $20</label>
          </div>

          <div className='py-4'>
            <p className='text-uppercase fw-bold'>Product Status</p>

   <div className='text-black-50'>
  <div className="form-check">
    <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
    <label className="form-check-label" htmlFor="defaultCheck1">
  In Stock
    </label>
  </div>

  <div className="form-check">
    <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
    <label className="form-check-label" htmlFor="defaultCheck1">

On Sale
    </label>
  </div>
          </div>
          </div>


           <div className='py-4'>
            <p className='text-uppercase fw-bold'>Brands</p>

   <div className='text-black-50'>
  <div className="form-check">
    <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
    <label className="form-check-label" htmlFor="defaultCheck1">
 Oreo
    </label>
  </div>

  <div className="form-check">
    <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
    <label className="form-check-label" htmlFor="defaultCheck1">

Quaker

    </label>
  </div>

   <div className="form-check">
    <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
    <label className="form-check-label" htmlFor="defaultCheck1">

Welch's
    </label>
  </div>
          </div>
          </div>

          <img className='add' src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif" alt="" />


          </div>



        <div className="col-lg-8 py-4">
 <img className='py-5 fruit1' src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-18.jpg" alt="" />
      <div className='row py-5 px-3'>
       {cat.map((a)=>( 
        <div className='col-lg-3 cat border' key={a.id}>
          <img className='fruit ' src={a.image} alt="" />
           <Link href={`/detail/${a.id}`} className='text-decoration-none link-dark'>{a.title}</Link>
            <p className='text-success stock pt-0'>In stock</p>
        <p className='fw-bold stock text-danger'>$ {a.price}</p>
        <button className='btn btn-sm  border rounded-pill text-primary mb-3 w-100 box1'>Add to cart</button>
            </div> 
      ))}
      </div>
   </div>
   </div>
    </div>
  )
}

export default page
