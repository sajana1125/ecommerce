import React from "react";
import "../globals.css";
import { IoHandLeftOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { PiUserThin } from "react-icons/pi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiList } from "react-icons/pi";
import { TbMeat } from "react-icons/tb";
import'bootstrap/js/dist/modal'
import { categories } from "../Category";
import Link from "next/link";




function Header() {
  return (
    <div>
      {/* <top start> */}
      <section className="bg-primary">
        <div>
          <p className="text-white text-center">
            Due to the COVID 19 epidemic, orders may be processed with a slight
            delay
          </p>
        </div>
      </section>
      {/* top end */}

      {/* subtop start */}
      <section className="border-bottom ">
        <div className="container ">
          <div className="row">
            <div className="col-lg-4 top">
              <ul className="d-flex  list-style-none gap-3 ">
                <li className="">About Us</li>
                <li>My account</li>
                <li>Wishlist</li>
                <li>Order Tracking</li>
              </ul>
            </div>

            <div className="col-lg-7 offset-1 top">
              <div className="d-flex">
                <ul className="d-flex gap-2 pe-0">
                  <li className="border-end pe-1">
                    <IoHandLeftOutline />
                    100% Secure delivery without contacting the courier
                  </li>
                  <li className="border-end">Need help? Call Us: + 0020 500</li>

                  <li className="">
                    <div className="dropdown pt-0">
                      <button
                        className="btn dropdown-toggle  "
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="top">English</span>
                      </button>
                      <ul className="dropdown-menu ">
                        <li>
                          <a className="dropdown-item top" href="#">
                            English
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item top" href="#">
                            Spanish
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item top" href="#">
                            German
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li className="">
                    <div className="dropdown pt-0">
                      <button
                        className="btn english dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="top">USD</span>
                      </button>
                      <ul className="dropdown-menu botom">
                        <li>
                          <a className="dropdown-item top" href="#">
                            USD
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item top" href="#">
                            INR
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item top" href="#">
                            GBP
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* subtop end */}

      {/* subheading start */}
      <section className="border-bottom">
        <div className="container pt-4">
          <div className="row">
            <div className="col-lg-2">
             <Link href="/"> <img
                className="img1"
                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/bacola-logo.png"
                alt=""
              /></Link>
              <p className="top1">Online Grocery Shopping Center</p>
            </div>

            <div className="col-lg-2">
              <button
                type="button"
                className="btn  border location"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                <p className="top2 ">
                  your location <br />
                  <span className="fs-6 ">Select a Location</span>{" "}
                </p>
              </button>
            </div>

            <div className="col-lg-6">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control bg-body-secondary search"
                  placeholder="Search for products...."
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                >
                  <IoSearch />
                </button>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="d-flex gap-3">
                <PiUserThin className="user shop rounded-circle" />
                <p className="fw-bold pt-2 ">$0.00</p>

                <Link href="/cart" type="button" className="rounded-circle shop position-relative text-decoration-none link-dark">
                  <HiOutlineShoppingBag className="user" />
                   <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger">
                    0<span className="visually-hidden">unread messages</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        
      {/* sunheading end */}

      {/* nav start */}
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container pb-0">
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      
        <div className="row">
          <div className="col-lg-3">
            <ul className="navbar-nav bg-primary cw text1 rounded-pill">
            <li className="nav-item dropdown ">
          <a className="nav-link dropdown-toggle pt-3 px-3 text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             <PiList className="plist" /> ALL CATEGORIE
          </a>
          <ul className="dropdown-menu category  ">
              {categories.slice(0,8).map((a)=>(
                <li className="pt-4"> 
              <Link key={a.name} href={`/items/${a.slug}`} className="text-decoration-none link-dark ms-3 py-1">{a.name}</Link>
               </li> 
              ))}
             

               <li className="border-top">
              {categories.slice(8,11).map((a)=>
              <p className=" ms-3 py-1">{a.name}</p>
              )}
              </li> 
          </ul>
        </li>

        </ul>
          </div>

          <div className="col-lg-8 offset-1">

             <ul className="navbar-nav text1  ms-3 gap-5">
        <Link href="/" className="text-decoration-none"> <li className="nav-item dropdown">
           <a className="nav-link dropdown-toggle active " href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           HOME
          </a>
          <ul className="dropdown-menu ">
            <li><a className="dropdown-item" href="#">Home1</a></li>
            <li><a className="dropdown-item" href="#">Home2</a></li>
            <li><a className="dropdown-item" href="#">Home3</a></li>
            <li><a className="dropdown-item" href="#">Home4</a></li>
            <li><a className="dropdown-item" href="#">Home5</a></li>
          </ul>
        </li>
        </Link>

        
        <li className="nav-item dropdown position-static">
  <a data-mdb-dropdown-init className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
   SHOP
  </a>
  <div className="dropdown-menu mega  dropdown-center align-items-center shoplist " aria-labelledby="navbarDropdown" style={{borderTopLeftRadius: 0, borderTopRightRadius: 0}}>
    <div className="container ">
      <div className="row ">
        <div className=" col-lg-2  ">
          <div className="list-group py-3 list-group-flush  ">
            <p className=" text-uppercase text-primary font-weight-bold text2">
             Shop Lists
            </p>
            <a href="" className="text-decoration-none link-dark py-2 text2">Shop Default</a>
            <a href className="text-decoration-none link-dark py-2 text2">Shop Right Sidebar</a>
            <a href className="text-decoration-none link-dark py-2 text2">Shop Wid</a>
            <a href className=" text-decoration-none link-dark  py-2 text2">List Left Sidebar</a>
            <a href className="text-decoration-none link-dark py-2 text2">Load More Button</a>
             <a href className=" text-decoration-none link-dark py-2 text2">Infinite Scrolli</a>
          </div>
        </div>
        <div className=" col-lg-3 ">
          <div className="list-group py-3 list-group-flush">
            <p className=" text-primary text-uppercase font-weight-bold text2">
              Product Detail
            </p>
            <a href className="text-decoration-none link-dark py-2  text2">Product Default</a>
            <a href className="text-decoration-none link-dark py-2  text2">Product Variable</a>
            <a href className="text-decoration-none link-dark py-2  text2">Product Grouped</a>
            <a href className="text-decoration-none link-dark py-2  text2">Product External</a>
             <a href className="text-decoration-none link-dark py-2  text2">Product Downloadable</a>
              <a href className="text-decoration-none link-dark py-2  text2">Product with Video</a>
          </div>
        </div>

          <div className=" col-lg-2 ">
          <div className="list-group py-3 list-group-flush">
            <p className=" text-primary text-uppercase font-weight-bold text2">
             Product Type
            </p>
            <a href className=" text-decoration-none link-dark py-2 text2">Single Type 1</a>
            <a href className="text-decoration-none link-dark py-2 text2">Single Type 2</a>
            <a href className=" text-decoration-none link-dark py-2 text2">Single Type 3</a>
            <a href className="text-decoration-none link-dark py-2 text2">Single Type 4</a>
            <a href className="text-decoration-none link-dark py-2 text2">Thumbnails Left</a>
            <a href className="text-decoration-none link-dark py-2 text2">Zoom Image</a>
          </div>
        </div>

        <div className=" col-lg-2 ">
          <div className="list-group py-3 list-group-flush">
            <p className="text-primary text2  text-uppercase font-weight-bold">
              Shop Pages
            </p>
            <a href className="text-decoration-none py-2 link-dark text2">Cart</a>
            <a href className="text-decoration-none py-2 link-dark text2">Checkout</a>
            <a href className="text-decoration-none py-2  link-dark text2">My account</a>
            <a href className="text-decoration-none py-2 link-dark text2">Wishlist</a>
              <a href className="text-decoration-none py-2 link-dark text2">Order Tracking</a>
                <a href className="text-decoration-none py-2 link-dark text2">Order on Whatapps</a>
            
          </div>
        </div>
        <div className=" col-lg-3">
          <div className="list-group py-3 list-group-flush">
            <p className="text2 text-primary text-uppercase font-weight-bold">
            Shop Layouts
            </p>
            <a href className="text-decoration-none link-dark py-2 text2">Two Columns</a>
            <a href className="text-decoration-none link-dark py-2 text2">Three Columns</a>
            <a href className="text-decoration-none link-dark py-2 text2">Three Columns Wide</a>
            <a href className="text-decoration-none link-dark py-2 text2">Four Columns</a>
             <a href className="text-decoration-none link-dark py-2 text2">Four Columns Wide</a>
              <a href className="text-decoration-none link-dark py-2 text2">Five Columns Wide</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</li>

        <li className="nav-item navmenu" >
          {categories.slice(1,2).map((a)=>(
                
              <Link key={a.name} href={`/items/${a.slug}`} className="text-decoration-none text-uppercase  link-dark ms-3"> 
          
            {a.name}</Link>
              ))}
        </li>
        <li className="nav-item navmenu">
          {categories.slice(3,4).map((a)=>(
                
              <Link key={a.name} href={`/items/${a.slug}`} className="text-decoration-none text-uppercase  link-dark ms-3"> 
          
            {a.name}</Link>
              ))}
        </li>
        <li className="nav-item navmenu ">
          {categories.slice(4,5).map((a)=>(
                
              <Link key={a.name} href={`/items/${a.slug}`} className="text-decoration-none text-uppercase  link-dark ms-3"> 
          
            {a.name}</Link>
              ))}
        </li>
         <li className="nav-item">
          <a className="nav-link active " href="#">BLOG</a>
        </li>
         <li className="nav-item">
          <a className="nav-link active " href="#">CONTACT</a>
        </li>
        </ul>
          </div>
        </div>
      
    </div>
  </div>
</nav>
</div>
</section>

      {/* nav end */}
    </div>
  );
}

export default Header;
