import React from "react";
import './home.css';
import potato from "../../images/potato.jpg";
import carousel1 from "../../images/carousel1.jpg"; 
import carousel2 from "../../images/carousel2.jpg"; 
import carousel3 from "../../images/carousel3.jpg"; 
import orange from "../../images/potato.jpg"; 


import { Link } from 'react-router-dom'

const Home = () => {
  return (
    
    <div className="homepage-container">      

      {/* whatsapp button */}
      <a href="https://wa.me/918080518692" className="whatsapp_float" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
      </a>

        {/* Carousel */}
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={carousel1} className="d-block w-100" alt="Carousel 1"/>
                    <div className="carousel-caption custom-caption d-none d-md-block">
                        <h5>Exporter of Farm Fresh Vegetables and Fruits</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={carousel2} className="d-block w-100" alt="Carousel 2"/>
                    <div className="carousel-caption custom-caption d-none d-md-block">
                        <h5>Exporter of Farm Fresh Vegetables and Fruits</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={carousel3} className="d-block w-100" alt="Carousel 3"/>
                    <div className="carousel-caption custom-caption d-none d-md-block">
                        <h5>Exporter of Farm Fresh Vegetables and Fruits</h5>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

          {/* Two-column section with image on left and text on right */}
          <section className="two-column-section">
            <div className="image-container">
              <img src={potato} alt="Potato" />
            </div>
            <div className="text-container">
              <h2>About VeggiSphere</h2>
              <p>
                Welcome to VeggiSphere! Established in 2015, we have quickly become a trusted name in the export of premium-quality vegetables and fruits. As a dedicated producer and exporter, we offer an extensive range of fresh produce, including organic vegetables, seasonal fruits, leafy greens, herbs, and specialty items like spices, pulses, and dried fruits.
                Our commitment to quality and freshness ensures that our clients receive only the finest products. Join us on our journey to bring nature's bounty to your table!
              </p>
            </div>
          </section>

          {/* featured section */}
          <section  className="featured-products">
            <h2>Explore Our Product Range</h2>
            <div className="product-list">
            <div className="product-item">
                  <Link to="/vegetables" style={{ color: "inherit", textDecoration: "none" }}>
                          <img src={potato} alt="Apple" />
                          <h3>Vegetables</h3>
                          <p>Crisp and juicy apples from the best orchards.</p>
                  </Link>
              </div>
              <div className="product-item" id="block">
                  <Link to="/fruits" style={{ color: "inherit", textDecoration: "none" }}>
                          <img src={potato} alt="Apple" />
                          <h3>Fruits</h3>
                          <p>Crisp and juicy apples from the best orchards.</p>
                  </Link>
              </div>
              <div className="product-item" id="block">
                  <Link to="/agro" style={{ color: "inherit", textDecoration: "none" }}>
                          <img src={orange} alt="Apple" />
                          <h3>Agro commodities</h3>
                          <p>Crisp and juicy apples from the best orchards.</p>
                  </Link>
              </div>
            </div>
          </section>


          {/* Testimonials section */}
          <section className="testimonials">
            <h2>What Our Clients Say</h2>
            <div className="testimonial-grid">
              <div className="testimonial-item">
                <p>"Fresh Harvest Exporters provides the best quality produce. We are always satisfied!"</p>
                <h4>- Sarah Johnson, Importer</h4>
              </div>
              <div className="testimonial-item">
                <p>"The service and quality are unmatched. Highly recommended!"</p>
                <h4>- Mike Smith, Distributor</h4>
              </div>
              <div className="testimonial-item">
                <p>"Reliable and trustworthy. Our go-to supplier for fruits and vegetables."</p>
                <h4>- Emily Davis, Restaurant Owner</h4>
              </div>
              <div className="testimonial-item">
                <p>"Reliable and trustworthy. Our go-to supplier for fruits and vegetables."</p>
                <h4>- Emily Davis, Restaurant Owner</h4>
              </div>
              <div className="testimonial-item">
                <p>"Reliable and trustworthy. Our go-to supplier for fruits and vegetables."</p>
                <h4>- Emily Davis, Restaurant Owner</h4>
              </div>
            </div>
          </section>


          <section className="call-to-action">
            <h2>Get in Touch</h2>
            <p>Interested in our products? <a href="/contact">Contact us</a> today!</p>
          </section>

    </div>
  );
};

export default Home;
