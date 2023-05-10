import Products from '../components/Products'
import  './home.css'
import { SuitHeart, Person, Bag } from 'react-bootstrap-icons'
import Slideshow from '../components/Slideshow'
import { FaQuoteRight, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { FiArrowUp, FiInstagram, FiTwitter, FiLinkedin, FiFacebook } from 'react-icons/fi'


export default function HomePage(){

    

    

    return(
        <>

  {/* Header  */}
  <section id="header" className="pb-3">
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        {/* Togeller */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Brand  */}
        <a href="index.html" className="navbar-brand">
          <img src={require("../images/logo.png")} alt="Company Logo" />
        </a>
        {/* Profile  */}
        <div className="profile">
          <button className="btn position-relative">
            <Person></Person>
            <span className="account"> Account</span>
          </button>
          <button className="btn position-relative">
            <SuitHeart />
            <span className="favourites"> Favourites</span>
          </button>
          <button className="btn position-relative">
            <Bag></Bag>
            <span className="position-absolute start-60 translate-items badge bg-color bag-user">
              2
            </span>
            <span className="bag ps-md-2"> Bag</span>
          </button>
        </div>
      </div>
    </nav>
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        {/* Menu  */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav">
            {/* mx-auto text-center */}
            <li className="nav-item">
              <a href="/" className="nav-link active">Home</a>
            </li>
            <li className="nav-item">
              <a href="/about.html" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="/shop.html" className="nav-link">Shop</a>
            </li>
            <li className="nav-item">
              <a href="/contact.html" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
        {/* Search Bar */}
        <div className="serch-bar d-none d-md-block">
          <input
            className="search icon"
            type="text"
            defaultValue="Search for products"
          />
          {/* <img id="mglass" src={require("../images/search.png")} alt='Search'/> */}
        </div>
      </div>
    </nav>
  </section>
  {/* End of Header  */}

  {/* Slideshow */}
  {/* <Slideshow></Slideshow> */}
  {/* End of slideshow */}

  {/* Latest products */}
  <section className="mt-4 latest-product">
    <div className="container">
      <h2>Latest Products</h2>
    </div>
    <section className="product">
      <button className="pre-btn">
        <img src={require("../images/arrow.png")} alt="Prev" width="50%" />
      </button>
      <button className="nxt-btn">
        <img src={require("../images/arrow.png")} alt="Next" width="34%" />
      </button>
        <Products></Products>
    </section>
  </section>
  {/* End of Latest products  */}
  {/* Shop by category */}
  <section className="pt-4 mt-4 home-cat">
    <div className="home-category">
      <div className="container">
        <h2>Shop by Category</h2>
      </div>
      <div className="container d-md-flex">
        <div className="col-md-4 cat-card">
          <img src={require("../images/cat1.png")} alt="Category" width="100%" />
          <h4>Lorem ipsum dolor</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            perspiciatis nisi explicabo.
          </p>
        </div>
        <div className="col-md-4 cat-card">
          <img src={require("../images/cat2.png")} alt="Category" width="100%" />
          <h4>Lorem ipsum dolor</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            perspiciatis nisi explicabo.
          </p>
        </div>
        <div className="col-md-4 cat-card">
          <img src={require("../images/cat3.png")} alt="Category" width="100%" />
          <h4>Lorem ipsum dolor</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            perspiciatis nisi explicabo.
          </p>
        </div>
      </div>
      <div className="container d-md-flex">
        <div className="col-md-4 cat-card">
          <img src={require("../images/cat4.png")} alt="Category" width="100%" />
          <h4>Lorem ipsum dolor</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            perspiciatis nisi explicabo.
          </p>
        </div>
        <div className="col-md-4 cat-card">
          <img src={require("../images/cat5.png")} alt="Category" width="100%" />
          <h4>Lorem ipsum dolor</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            perspiciatis nisi explicabo.
          </p>
        </div>
        <div className="col-md-4 cat-card">
          <img src={require("../images/cat6.png")} alt="Category" width="100%" />
          <h4>Lorem ipsum dolor</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            perspiciatis nisi explicabo.
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* End of shop by category */}
  {/* USP */}
  <section className="pt-4 mt-4">
    <div className="container">
      <h2>What We Offer</h2>
    </div>
    <div className="container d-md-flex">
      <div className="col-md-4 p-md-2">
        <div className="usp usp1-bg">
          <p className="text-center">Affordable Quality</p>
        </div>
        <p className="pt-2">
          Offering high-quality sarees at affordable prices, so everyone can
          enjoy the elegance of a saree.
        </p>
      </div>
      <div className="col-md-4 p-md-2">
        <div className="usp usp2-bg">
          <p className="text-center">Exclusive Designs</p>
        </div>
        <p className="pt-2">
          Providing unique and exclusive saree designs that are not available
          elsewhere.
        </p>
      </div>
      <div className="col-md-4 p-md-2">
        <div className="usp usp3-bg">
          <p className="text-center">Hassle free Return</p>
        </div>
        <p className="pt-2">
          Providing a straightforward and easy returns process, ensuring that
          customers can shop with confidence and peace of mind.
        </p>
      </div>
    </div>
  </section>
  {/* End of USP */}
  {/* Testimonials */}
  <section className="pt-4 mt-4 testimonials">
    <div className="container">
      <h2>What our customers says</h2>
    </div>
    <div className="container">
      <div
        id="myCarousel"
        className="carousel slide container"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner w-100">
          <div className="carousel-item active">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body text-center">
                    <FaQuoteRight></FaQuoteRight>
                  <p className="card-text px-4 pb-4 text-center">
                    Some example text some example text. Jane Doe is an
                    architect and engineer. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="text-center mt-4 image-text">
                <img
                  className="card-img-bottom"
                  src={require("../images/customer1.png")}
                  alt="Card card-img"
                  style={{ width: "10%" }}
                />
                <p style={{ fontWeight: 600 }}>Priya K</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body text-center">
                    <FaQuoteRight></FaQuoteRight>
                  <p className="card-text px-4 pb-4 text-center">
                    Some example text some example text. Jane Doe is an
                    architect and engineer. Repellendus minima ab excepturi! Qui
                    corrupti nobis itaque nesciunt commodi consequatur cumque
                    quia earum.
                  </p>
                </div>
              </div>
              <div className="text-center mt-4 image-text">
                <img
                  className="card-img-bottom"
                  src={require("../images/customer1.png")}
                  alt="Card card-img"
                  style={{ width: "10%" }}
                />
                <p style={{ fontWeight: 600 }}>Priya K</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body text-center">
                    <FaQuoteRight></FaQuoteRight>
                  <p className="card-text px-4 pb-4 text-center">
                    Some example text some example text. Jane Doe is an
                    architect and engineer. Nihil quam repellat aliquam, numquam
                    deleniti vero corrupti.
                  </p>
                </div>
              </div>
              <div className="text-center mt-4 image-text">
                <img
                  className="card-img-bottom"
                  src={require("../images/customer1.png")}
                  alt="Card card-img"
                  style={{ width: "10%" }}
                />
                <p style={{ fontWeight: 600 }}>Priya K</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body text-center">
                    <FaQuoteRight></FaQuoteRight>
                  <p className="card-text px-4 pb-4 text-center">
                    Some example text some example text. Jane Doe is an
                    architect and engineer. Adipisci numquam quasi quod fugiat
                    ea culpa, labore cumque voluptas.
                  </p>
                </div>
              </div>
              <div className="text-center mt-4 image-text">
                <img
                  className="card-img-bottom"
                  src={require("../images/customer1.png")}
                  alt="Card card-img"
                  style={{ width: "10%" }}
                />
                <p style={{ fontWeight: 600 }}>Priya K</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body text-center">
                    <FaQuoteRight></FaQuoteRight>
                  <p className="card-text px-4 pb-4 text-center">
                    Some example text some example text. Jane Doe is an
                    architect and engineer. Lorem ipsum dolor sit, amet
                    consectetur adipisicing elit. Hic omnis, laborum sed
                    assumenda commodi reiciendis rem voluptate nulla nam alias
                  </p>
                </div>
              </div>
              <div className="text-center mt-4 image-text">
                <img
                  className="card-img-bottom"
                  src={require("../images/customer1.png")}
                  alt="Card card-img"
                  style={{ width: "10%" }}
                />
                <p style={{ fontWeight: 600 }}>Priya K</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body text-center">
                    <FaQuoteRight></FaQuoteRight>
                  <p className="card-text px-4 pb-4 text-center">
                    Some example text some example text. Jane Doe is an
                    architect and engineer
                  </p>
                </div>
              </div>
              <div className="text-center mt-4 image-text">
                <img
                  className="card-img-bottom"
                  src={require("../images/customer1.png")}
                  alt="Card card-img"
                  style={{ width: "10%" }}
                />
                <p style={{ fontWeight: 600 }}>Priya K</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body text-center">
                    <FaQuoteRight></FaQuoteRight>
                  <p className="card-text px-4 pb-4 text-center">
                    Some example text some example text. Jane Doe is an
                    architect and engineer
                  </p>
                </div>
              </div>
              <div className="text-center mt-4 image-text">
                <img
                  className="card-img-bottom"
                  src={require("../images/customer1.png")}
                  alt="Card card-img"
                  style={{ width: "10%" }}
                />
                <p style={{ fontWeight: 600 }}>Priya K</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body text-center">
                    <FaQuoteRight></FaQuoteRight>
                  <p className="card-text px-4 pb-4 text-center">
                    Some example text some example text. Jane Doe is an
                    architect and engineer
                  </p>
                </div>
              </div>
              <div className="text-center mt-4 image-text">
                <img
                  className="card-img-bottom"
                  src={require("../images/customer1.png")}
                  alt="Card card-img"
                  style={{ width: "10%" }}
                />
                <p style={{ fontWeight: 600 }}>Priya K</p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <div className="cntrl-1">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </div>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <div className="cntrl-2">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </div>
        </button>
      </div>
    </div>
  </section>
  {/* End of Testimonials */}
  {/* Footer  */}
  <section id="footer">
    <div className="container d-md-flex mt-4 mb-3">
      {/* Copyright  */}
      <div className="col-md-3 mb-4">
        <img src={require("../images/logo.png")} alt="Company Logo" />
        <p className="text-dark-gray">
          Copyright © 2021 Sanjoli Sarees <br /> All rights reserved
        </p>
        <div className="social-media">
          <a href="#">
            <FiFacebook></FiFacebook>
          </a>
          <a href="#">
            <FiInstagram></FiInstagram>
          </a>
          <a href="#">
            <FiTwitter></FiTwitter>
          </a>
          <a href="#">
            <FiLinkedin></FiLinkedin>
          </a>
        </div>
      </div>
      {/* Quick Links */}
      <div className=" col-md-3 col-sm-6">
        <h4>Quick Links</h4>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about.html">About</a>
          </li>
          <li>
            <a href="/shop.html">Shop</a>
          </li>
          <li>
            <a href="/contact.html">Contact</a>
          </li>
        </ul>
      </div>
      {/* Policies  */}
      <div
        className=" col-md-3 col-sm-6"
        style={{ paddingTop: "2rem !important" }}
      >
        {/* <h4>Policies</h4> */}
        <ul>
          <li>
            <a href="#">Legal policy</a>
          </li>
          <li>
            <a href="#">Status policy</a>
          </li>
          <li>
            <a href="#">Privacy policy</a>
          </li>
          <li>
            <a href="#">Terms of service</a>
          </li>
        </ul>
      </div>
      {/* Get Updated */}
      <div className="col-md-3 pt-md-5 pt-3 mb-4">
        <h4>Get Updates</h4>
        <input
          type="text"
          name="update"
          placeholder="Enter your email"
          className="icon-rtl"
          id="update"
        />
      </div>
    </div>
  </section>
  {/* End of Footer  */}
  {/* Go to top button  */}
  <a href="#" className="go-to-top">
    <FiArrowUp></FiArrowUp>
  </a>
  {/* Go to top button  */}
</>

    )
}