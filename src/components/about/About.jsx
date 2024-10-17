import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>Welcome to Veggisphere Exports</h1>
      <p>
        Established in 2007, Veggisphere Exports is a leading exporter of farm-fresh vegetables and fruits, supplying to markets worldwide. 
        As a distinguished producer and exporter, we provide a wide range of products including fresh fruits, vegetables, lettuces, herbs, leaves, spices, pulses, dried nuts, dairy products, food items, and more. 
        We proudly serve markets in the Maldives, Dubai, Saudi Arabia, Qatar, Bahrain, and beyond, maintaining the highest quality standards in all that we deliver.
      </p>

      <section>
        <h2>Our Reach</h2>
        <p>
          Today, Veggisphere Exports caters to the fruits and vegetable needs of major importing houses, particularly in the Maldives. 
          We are trusted suppliers for over 30 prominent resorts, including Villa Group of Resorts, Dream Island Resort Groups, Ozen Group Resorts, 
          Le Meridian Resorts, Maalifushi Resorts, and many others. Our extensive distribution network ensures that our products consistently meet the high standards expected by our international clientele.
        </p>
      </section>

      <section>
        <h2>Our Team</h2>
        <p>
          The backbone of Veggisphere Exports is our diligent workforce. Our team is comprised of highly skilled professionals with deep knowledge of agro-export procedures. 
          These individuals work closely with cultivators to ensure that every product we source, process, and export meets rigorous quality standards. 
          Their commitment to excellence allows us to consistently deliver the freshest, highest-quality products to our customers.
        </p>
      </section>

      <section>
        <h2>Quality Policy</h2>
        <p>
          Veggisphere Exports is a quality-conscious company dedicated to offering farm-fresh vegetables and fruits while adhering to the highest international hygiene standards. 
          We utilize products grown on our own farms and source fresh produce directly from trusted and reliable farmers. 
          This practice ensures that we maintain top-quality produce and consistency in our supply chain.
        </p>
      </section>

      <section>
        <h2>Quality Management</h2>
        <p>
          Our commitment to quality extends to every step of our process. 
          Fruits and vegetables are processed, packed, and stored at our state-of-the-art facilities under strict supervision to meet international hygiene norms. 
          By employing cutting-edge techniques, we ensure that the freshness, flavor, and nutritional value of our products are preserved, even for our most perishable goods.
        </p>
      </section>

      <section>
        <h2>Business Network</h2>
        <p>
          Thanks to our dedication to quality products and exceptional service, Veggisphere Exports has cultivated a strong, worldwide client base. 
          Our transparent business practices, competitive pricing, and client-focused approach have earned us the trust and appreciation of our customers and suppliers alike. 
          This well-established network of suppliers and delivery chains allows us to maintain a steady flow of demand and supply, ensuring timely fulfillment of orders.
        </p>
      </section>

      <section>
        <h2>Looking Forward</h2>
        <p>
          At Veggisphere Exports, we are always striving to expand our reach and enhance our offerings. 
          Our commitment to sustainability, innovation, and excellence ensures that we will continue to grow alongside our partners and clients in the years to come.
        </p>
      </section>
      
      {/* whatsapp button */}
      <a href="https://wa.me/918080518692" className="whatsapp_float" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
};

export default About;
