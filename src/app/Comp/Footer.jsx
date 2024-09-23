import React from 'react'
import { LuMilk } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { RiDiscountPercentLine } from "react-icons/ri";
import { CiDollar } from "react-icons/ci";
import { PiPhoneCallLight } from "react-icons/pi";
import { GrFacebookOption } from "react-icons/gr";
import { PiInstagramLogo } from "react-icons/pi";
import { BiLogoTwitter } from "react-icons/bi";

function Footer() {
  
  return (
  <>
  <section className="foot pt-10">
<div className="container py-10">
<div className="row">
  <div className="col-lg-6 text-white py-5">
    <p>$20 discount for your first order</p>
    <p className="fs-4 fw-bold">Join our newsletter and get...</p>
    <p className="text-white-50">Join our email subscription now to get updates on promotions and coupons.</p>
<div className="input-group input-group-lg">
  <input type="text" className="footersub text-black-50 text-center"  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="your email addres" />
  <span className="input-group-text h-10 bg-primary text-white " id="inputGroup-sizing-lg">Subscribe</span>
</div>

  </div>


  <div className="col-lg-6">
    <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/coupon.png" alt="" />
  </div>
</div>
</div>

  </section>


<section className="">
  <div className="container py-4">
<div className="row border-bottom py-4">
  <div className="col-lg-3">
    <p className="fw-bold stock ms-4 border-end">
     <LuMilk />  Everyday fresh products
    </p>
  </div>

  <div className="col-lg-3"><p className='fw-bold stock ms-2 border-end'><TbTruckDelivery /> Free delivery for order over $70 </p></div>
  <div className="col-lg-3"><p className='fw-bold stock ms-2 border-end'><RiDiscountPercentLine /> Daily Mega Discounts</p></div>
  <div className="col-lg-3"><p className='fw-bold stock ms-2 border-end'><CiDollar /> Best price on the market</p></div>
</div>
</div>
</section>

<section>
  <div className="container">
    <div className="row py-5">
    <div className="col-lg-3">
{/* <p className='text-black px-4'>FRUIT & VEGETABLES</p> */}
<ul className='stock text-black-50'>
  <li className='text-black fs-6 pb-4 text-uppercase'>FRUIT & VEGETABLES</li>
  <li>Fresh Vegetables</li>
<li>Herbs & Seasonings</li>
<li>Fresh Fruits</li>
<li>Cuts & Sprouts</li>
<li>Exotic Fruits & Veggies</li>
<li>Packaged Produce</li>
<li>Party Trays</li>
</ul>

    </div>


    <div className="col-lg-2">
      {/* <p className='text-black px-4'>Breakfast & Dairy</p> */}
      <ul className='stock text-black-50'>
        <li className='text-black fs-6 pb-4 text-uppercase'>Breakfast & Dairy</li>
        <li>Milk & Flavoured Milk</li>
<li>Butter and Margarine</li>
<li>Cheese</li>
<li>Eggs Substitutes</li>
<li>Honey</li>
<li>Marmalades</li>
<li>Sour Cream and Dips</li>
<li>Yogurt</li>
      </ul>
    </div>


    <div className="col-lg-2">
      <ul className='stock text-black-50'>
        <li className='text-black fs-6 pb-4 text-uppercase'>Meat & Seafood</li>
        <li>Breakfast Sausage</li>
<li>Dinner Sausage</li>
<li>Beef</li>
<li>Chicken</li>
<li>Sliced Deli Meat</li>
<li>Shrimp</li>
<li>Wild Caught Fillets </li>
<li>Crab and Shellfish </li>
<li>Farm Raised Fillets </li>

      </ul>
    </div>


    <div className="col-lg-2 ">
      <ul className='stock text-black-50'>
        <li className='text-black fs-6 pb-4 text-uppercase'>Beverages</li>
        <li>Water</li>
<li>Sparkling Water</li>
<li>Soda & Pop</li>
<li>Coffee</li>
<li>Milk & Plant-Based Milk</li>
<li>Tea & Kombucha</li>
<li>Drink Boxes & Pouches</li>
<li>Craft Beer</li>
<li>Wine</li>
      </ul>
    </div>


    <div className="col-lg-3">
      <ul className='stock text-black-50'>
        <li className='text-black fs-6 pb-4 text-uppercase'>Breads & Bakery</li>
        <li>Milk & Flavoured Milk</li>
<li>Butter and Margarine</li>
<li>Cheese</li>
<li>Eggs Substitutes</li>
<li>Honey</li>
<li>Marmalades</li>
<li>Sour Cream and Dips</li>
<li>Yog</li>

      </ul>
    </div>
  </div>
  </div>
</section>

<section className='py-4'>
  <div className="container">
    <div className="row">
      <div className="col-lg-4">
        <div className='d-flex'>
<p className='fw-4 px-2 py-2'><PiPhoneCallLight className='call'/></p>
<div>
<span className='fw-bold fs-5'>8 800 555-55</span> 
<p  className='text-black-50 fw-normal top pt-0'>Working 8:00 - 22:00</p>
</div>
</div>
  </div>

      <div className="col-lg-6 offset-2">
<div className='d-flex gap-2'>
  <div className='px-2'>
<span className='fw-bold'>Download App on Mobile :</span>
<p className='top text-black-50 '>15% discount on your first purchase</p>
</div>
<img className='google px-2' src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/google-play.png" alt="" />
<img className='google px-3' src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/app-store.png" alt="" />
<GrFacebookOption className='social'/>
<PiInstagramLogo className=' social' />
<BiLogoTwitter className='social' />

</div>
      </div>
    </div>
  </div>
</section>

<section>
  <div className="container border-top">
    <div className="row py-3">
      <div className="col-lg-6">
<p className='top text-black-50'>Copyright 2024 © Bacola WordPress Theme. All rights reserved. Powered by KlbTheme.</p>

      </div>


      <div className="col-lg-6">
        <div className='d-flex top gap-2 text-black-50 py-1'>
          <p>Privacy Policy</p>
          <p>Terms and Conditions </p>
          <p>Cookie</p>
        <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/payments.jpg" alt="" />
        

        </div>
      </div>
    </div>
  </div>
</section>



  </>
  )
}

export default Footer;
