import React from 'react';
import './Gallery.css'; // Custom CSS for styling
import potato from "../../images/potato.jpg";
// You can import more images here as needed

const Gallery = () => {
  const images = [
    { src: potato, alt: 'Fresh Potatoes', caption: 'Freshly picked potatoes ready for export' },
    { src: potato, alt: 'Fresh Tomatoes', caption: 'Freshly picked tomatoes ready for export' },
    { src: potato, alt: 'Assorted Vegetables', caption: 'Assorted vegetables packed and ready' },
    { src: potato, alt: 'Export Packaging', caption: 'Secure and professional packaging for exports' },
    { src: potato, alt: 'Loading for Shipment', caption: 'Careful loading process for shipment' }
  ];

  return (
    <div className="gallery-page">


      {/* whatsapp button */}
      <a href="https://wa.me/918080518692" className="whatsapp_float" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
      </a>
      
      {/* Header Section */}
      <section className="gallery-header">
        <h2>Veggisphere Gallery</h2>
        <p>Discover our work in exporting the finest fruits and vegetables. From farm to shipment, we ensure top-quality standards.</p>
      </section>
      
      {/* Gallery Section */}
      <section className="gallery-container">
        <div className="masonry-grid">
          {images.map((image, index) => (
            <div key={index} className="masonry-item">
              <img src={image.src} alt={image.alt} className="gallery-image" />
              <div className="caption">{image.caption}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Export Process Section */}
      <section className="export-process">
        <h3>Our Export Process</h3>
        <p>We follow a stringent process to ensure the freshest produce reaches our clients worldwide. Our commitment to quality involves:</p>
        <ul>
          <li><strong>Quality Sourcing:</strong> All fruits and vegetables are sourced from trusted farms with sustainable practices.</li>
          <li><strong>Packaging:</strong> Innovative and secure packaging to ensure produce arrives fresh.</li>
          <li><strong>Timely Shipping:</strong> Collaborating with reliable logistics partners to ensure timely delivery.</li>
          <li><strong>Compliance:</strong> All our exports adhere to international safety and quality standards.</li>
        </ul>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h3>Client Testimonials</h3>
        <p>Our customers trust us to deliver quality produce on time.</p>
        <blockquote>"We have been sourcing from this company for over 5 years and have never been disappointed. The quality is unmatched!" - Global Importer</blockquote>
        <blockquote>"Their attention to detail in packaging and shipping is why we continue to work with them. Exceptional service!" - Major Distributor</blockquote>
      </section>
    </div>
  );
};

export default Gallery;
