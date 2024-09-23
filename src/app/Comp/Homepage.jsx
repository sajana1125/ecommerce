 "use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { products} from'../Category'
import { FaFileDownload } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { RxTimer } from "react-icons/rx";
import Link from 'next/link';
import { GoArrowRight } from "react-icons/go";
import { categories } from "../Category";

function Homepage() {
var allproduct=products.filter((a)=>a.category)

let com=products.filter((a)=>a.category == 'Best-Sellers')
  
   
  return (
    <section className='home py-2'>
    <div className='container '>
      {/* slider start */}
    <div className="row ">
        <div className="col-lg-9 offset-3">
             <div>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img className='slide' src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/slider-image-1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='slide' src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/slider-image-2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='slide' src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/slider-3.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
        </div>
   </div>
{/* slider end */}


{/* all product start */}
<div className="row">
  {/* left side start */}
  <div className="col-lg-3">
    <img className='rounded' src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/banner-box.jpg" alt="" />
     <img className='rounded py-5' src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/bacola-banner-04.jpg" alt="" />

     <div className=''>
      <ul className='list-group '>
       
        <li className='py-2 list-group-item top'>
          <div className='d-flex gap-2'>
             <FaFileDownload  className='social'/> 
            <p>Download the Bacola App to your Phone.</p>
            </div>
            </li>
        <li className='py-2 list-group-item top'>
          <div className='d-flex gap-2'><CiDeliveryTruck className='social'/>
          <p> Order now so you dont miss the opportunities.</p></div></li>

        <li className='py-3 list-group-item top'>
          <div className='d-flex gap-2'><RxTimer className='social' /> 
          <p>Your order will arrive at your door in 15 minutes.</p> </div></li>
      </ul>
     </div>

     <div className='py-5'>
      <p className='text-uppercase'>Trending Products</p>
      <ul className='border py-3'>
        <li>
          <div className='d-flex'>
            <img className='trendingpro' src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-7.jpg" alt="" />
            <p className='top py-3'>USDA Choice Angus Beef Stew Meat
              <br />$79.99 </p>
          </div>
        </li>

         <li>
          <div className='d-flex'>
            <img className='trendingpro' src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-4.jpg" alt="" />
            <p className='top py-3'>Warrior Blend Organic
              <br />$79.99 </p>
          </div>
        </li>


         <li>
          <div className='d-flex'>
            <img className='trendingpro' src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-48.jpg" alt="" />
            <p className='top py-3'>Encore Seafoods Stuffed Alaskan Salmon
            <br /> $27.49 </p>
          </div>
        </li>

         <li>
          <div className='d-flex'>
            <img className='trendingpro' src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-5.jpg" alt="" />
            <p className='top py-3'>
Vital Farms Pasture-Raised Egg Bites Bacon & Cheddar
            <br /> $27.49 </p>
          </div>
        </li>

         <li>
          <div className='d-flex'>
            <img className='trendingpro' src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46.jpg" alt="" />
            <p className='top py-3'>Field Roast Chao Cheese Creamy Original
            <br /> $27.49 </p>
          </div>
        </li>


      </ul>
     </div>

     <div className='py-2'>
      <p className='text-uppercase'>Customer Comment</p>
      <div className='py-2 girlphoto px-4'>
        <p className='fw-bold py-2'>The Best Marketplace</p>
        <p className='top text-black-50'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
<div className='d-flex gap-2'>
        <img className='rounded-circle w-25' src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/avatar-3.jpg" alt="" />
        <p className='fw-bold'>Tina Mcdonnell <br />
<span className='top text-black-50'>Sales Manager</span></p>
        </div>

      </div>
     </div>


  </div>
  {/* left side end */}

  {/* right side start */}
  <div className="col-lg-9 py-4">
    <div className="row">
      <div className="col-lg-6">
         <div className='px-2'>
<span className='fw-bold fs-5'> BEST SELLERS</span>
<p className='top text-black-50 '>Do not miss the current offers until the end of March.</p>
</div>
</div>
<div className="col-lg-6 text-end ">
  <button className='btn  border rounded-pill text-black-50 '>view all <GoArrowRight /> </button>
</div>
     
</div>
    <div className="row bg-white">
    {com.slice(0,4).map((a)=>(
      <div className="col-lg-3  border" key={a.id}>
        <div className='pic'>
        <img className='homeproduct' src={a.image} alt="" /> </div>
        <div className='py-3'>
        <Link href={`/detail/${a.id}`} className=' text-decoration-none link-dark titleproduct fw-bold pt-4  '>{a.title}</Link>
        <p className='text-success pt-0'>In stock</p>
        <p className='fw-bold'>$ {a.price}</p>
        <button className='btn btn-sm  border rounded-pill py-2 text-primary mb-2 w-100 box1'>Add to cart</button>
        </div>
       
      </div>
    ))}
   </div>

   <div className='py-5'>
    <div className="row addhome rounded">
      <div className="col-lg-6  px-3">
      <span className='top text-black-50'>Always Taking Care</span> 
        <p className='fw-bold text-black-50 '> In store or online your health & safety is our top priority.</p>
      </div>
      <div className="col-lg-6">
        <img className='addimg' src="https://klbtheme.com/bacola/wp-content/plugins/bacola-core/elementor/images/banner-box2.jpg" alt="" />
      </div>
    </div>
   </div>

  
      <div className="row">
     <div className="col-lg-6">
     <div className='px-2'>
<span className='fw-bold fs-5'>HOT PRODUCT FOR <span className='text-danger'>THIS WEEK</span> 
</span>
<p className='top text-black-50 '>Dont miss this opportunity at a special discount just for this week.</p>
</div>
</div>

        <div className="col-lg-6 text-end ">
        <button className='btn  border rounded-pill text-black-50 '>view all <GoArrowRight /> </button>
</div>

      </div>

<div className='py-3'>
      <div className='border rounded border-danger border-1'>
        <div className="row">
          <div className="col-lg-3">
            <img className='w-100' src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-50.jpg" alt="" />
          </div>
          <div className="col-lg-8">
            <p className='text-danger py-2'>$ 4.49</p>
            <p className='fs-5'>Chobani Complete Vanilla Greek Yogurt</p>
<p className='top'>1 kg <span className='text-success px-2 top'>In Stock</span></p>

<input type="range" className="form-range " min={0} max={5} id="customRange2" />

          </div>
        </div>
        
      </div>
      </div>

<section className='py-4'>
      <div className='fisrtpurchase rounded py-3'>
        <div className="container d-flex gap-3 py-2">
<p className='text-danger px-2'>Super discount for your <span className='fw-bold text-underline'>first purchase.</span> </p>
<p className='border border-dashed border-danger border-1 rounded px-3'>FREE25BAC</p>
<p className='top text-black-50 text-end'>Use discount code in checkout!</p>
        </div>

      </div>

   </section>




    <div>
    <div className="row">
      <div className="col-lg-6">
       <div className='px-2'>
<span className='fw-bold fs-5'>NEW PRODUCTS
</span>
<p className='top text-black-50 '>New products with updated stocks</p>
</div>
</div>

        <div className="col-lg-6 text-end ">
        <button className='btn  border rounded-pill text-black-50 '>view all <GoArrowRight /> </button>
</div>
     
      </div>
    </div>
    <div className="row bg-white">
    {allproduct.slice(8,16).map((a)=>(
      <div className="col-lg-3  border" key={a.id}>
        <div className='pic'>
        <img className='homeproduct' src={a.image} alt="" /> </div>
        <div className='py-3'>
        <Link href={`/detail/${a.id}`} className=' text-decoration-none link-dark titleproduct fw-bold pt-4  '>{a.title}</Link>
        <p className='text-success pt-0'>In stock</p>
        <p className='fw-bold'>$ {a.price}</p>
        <button className='btn btn-sm  border rounded-pill py-2 text-primary mb-2 w-100 box1'>Add to cart</button>
        </div>
       
      </div>
    ))}
   </div>


     <div className='py-5'>
    <div className="row">
      <div className="col-lg-6 ">
        <img className='rounded' src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-01.jpg" alt="" />
      </div>


      <div className="col-lg-6">
        <img className='rounded' src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-02.jpg" alt="" />
      </div>
    </div>
  </div>



  </div>




  </div>



 

  {/* right side end */}
 
 <section className='py-5'>
  <div className="container">
    <div className="row">
      <div className="col-lg-3  py-3 border">
        <div className=" ">
              {categories.slice(3,4).map((a)=>(
                
              <Link key={a.name} href={`/items/${a.slug}`} className="text-decoration-none  link-dark ms-3 py-1"> 
            
              <img className='botomcat' src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/baverages-1.jpg" alt="" />
              <p className='fw-bold text-center'>{a.name}</p></Link>
              ))}
          </div>  
      </div>
      <div className="col-lg-9">
        <div className="row ">
          <div className="col-lg-3 py-3  border">
              {categories.slice(6,7).map((a)=>(
                
              <Link key={a.name} href={`/items/${a.slug}`} className="text-decoration-none d-flex link-dark ms-3 py-1"> 
            
              <img className='w-50' src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/biscuitssnacks-1.jpg" alt="" />
              <p className='py-3 fw-bold'>{a.name}</p></Link>
              ))}
          </div>

            <div className="col-lg-3 py-3 border ">
              {categories.slice(4,5).map((a)=>(
                
              <Link key={a.name} href={`/items/${a.slug}`} className="text-decoration-none d-flex link-dark ms-3 py-1"> 
            
              <img className='w-50' src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/breadbakery-1.jpg" alt="" />
              <p className=' fw-bold'>{a.name}</p></Link>
              ))}
          </div> 

           <div className="col-lg-3 py-3 border ">
              {categories.slice(2,3).map((a)=>(
                
              <Link key={a.name} href={`/items/${a.slug}`} className="text-decoration-none d-flex link-dark ms-3 py-1"> 
            
              <img className='w-50' src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/dairy-1.jpg" alt="" />
              <p className=' fw-bold'>{a.name}</p></Link>
              ))}
          </div> 

           <div className="col-lg-3 border py- 3 ">
              {categories.slice(5,6).map((a)=>(
                
              <Link key={a.name} href={`/items/${a.slug}`} className="text-decoration-none d-flex link-dark ms-3 py-1"> 
            
              <img className='w-50' src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/category-image4.png" alt="" />
              <p className=' fw-bold'>{a.name}</p></Link>
              ))}
          </div> 

          <div className="col-lg-3 py-3 border ">
              {categories.slice(0,1).map((a)=>(
                
              <Link key={a.name} href={`/items/${a.slug}`} className="text-decoration-none d-flex link-dark ms-3 py-1"> 
            
              <img className='w-50' src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/fruitvegetables-1.jpg" alt="" />
              <p className='fw-bold'>{a.name}</p></Link>
              ))}
          </div> 

          
          <div className="col-lg-3 py-3 border ">
              {categories.slice(7,8).map((a)=>(
                
              <Link key={a.name} href={`/items/${a.slug}`} className="text-decoration-none d-flex link-dark ms-3 py-1"> 
            
              <img className='w-50' src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/category-image2.png" alt="" />
              <p className='fw-bold'>{a.name}</p></Link>
              ))}
          </div>   

<div className="col-lg-3 py-3 border ">
              {categories.slice(7,8).map((a)=>(
                
              <Link key={a.name} href={`/items/${a.slug}`} className="text-decoration-none d-flex link-dark ms-3 py-1"> 
            
              <img className='w-50' src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/category-image2.png" alt="" />
              <p className='fw-bold'>{a.name}</p></Link>
              ))}
          </div>   

          
<div className="col-lg-3 py-3 border ">
              {categories.slice(1,2).map((a)=>(
                
              <Link key={a.name} href={`/items/${a.slug}`} className="text-decoration-none d-flex link-dark ms-3 py-1"> 
            
              <img className='w-50' src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/meat-1.jpg" alt="" />
              <p className='fw-bold'>{a.name}</p></Link>
              ))}
          </div>   
        </div>
      </div>
    </div>
  </div>
 </section>

</div>





{/* allproduct end */}

   







    
    </section>
  )
}

export default Homepage
