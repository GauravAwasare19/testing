import React, { useState } from "react";
import './vegetable.css'; 
import tomato from "../../images/potato.jpg"; // Correct image for tomato
import potato from "../../images/potato.jpg"; // Correct image for potato

const products = [
  {
    id: 1,
    name: "Tomato",
    image: tomato,
    description: "Fresh, organic tomatoes. Ideal for salads and cooking.",
    packaging: "Box of 5kg | Box of 10kg",
    shelfLife: "7-10 days",
    certifications: ["ISO 22000", "GlobalGAP"],
    regions: ["USA", "Europe", "Middle East"]
  },
  {
    id: 2,
    name: "Potato",
    image: potato,
    description: "High-quality potatoes for all types of cuisines.",
    packaging: "Sack of 20kg | Sack of 50kg",
    shelfLife: "2-3 months",
    certifications: ["HACCP", "EU Organic"],
    regions: ["Asia", "Australia", "Europe"]
  },
  {
    id: 3,
    name: "Potato",
    image: potato,
    description: "High-quality potatoes for all types of cuisines.",
    packaging: "Sack of 20kg | Sack of 50kg",
    shelfLife: "2-3 months",
    certifications: ["HACCP", "EU Organic"],
    regions: ["Asia", "Australia", "Europe"]
  },
  {
    id: 4,
    name: "Potato",
    image: potato,
    description: "High-quality potatoes for all types of cuisines.",
    packaging: "Sack of 20kg | Sack of 50kg",
    shelfLife: "2-3 months",
    certifications: ["HACCP", "EU Organic"],
    regions: ["Asia", "Australia", "Europe"]
  },
  {
    id: 5,
    name: "Potato",
    image: potato,
    description: "High-quality potatoes for all types of cuisines.",
    packaging: "Sack of 20kg | Sack of 50kg",
    shelfLife: "2-3 months",
    certifications: ["HACCP", "EU Organic"],
    regions: ["Asia", "Australia", "Europe"]
  },
  {
    id: 6,
    name: "Potato",
    image: potato,
    description: "High-quality potatoes for all types of cuisines.",
    packaging: "Sack of 20kg | Sack of 50kg",
    shelfLife: "2-3 months",
    certifications: ["HACCP", "EU Organic"],
    regions: ["Asia", "Australia", "Europe"]
  },
  {
    id: 7,
    name: "Potato",
    image: potato,
    description: "High-quality potatoes for all types of cuisines.",
    packaging: "Sack of 20kg | Sack of 50kg",
    shelfLife: "2-3 months",
    certifications: ["HACCP", "EU Organic"],
    regions: ["Asia", "Australia", "Europe"]
  },
  {
    id: 8,
    name: "Potato",
    image: potato,
    description: "High-quality potatoes for all types of cuisines.",
    packaging: "Sack of 20kg | Sack of 50kg",
    shelfLife: "2-3 months",
    certifications: ["HACCP", "EU Organic"],
    regions: ["Asia", "Australia", "Europe"]
  },
  {
    id: 9,
    name: "Potato",
    image: potato,
    description: "High-quality potatoes for all types of cuisines.",
    packaging: "Sack of 20kg | Sack of 50kg",
    shelfLife: "2-3 months",
    certifications: ["HACCP", "EU Organic"],
    regions: ["Asia", "Australia", "Europe"]
  },
  {
    id: 10,
    name: "Potato",
    image: potato,
    description: "High-quality potatoes for all types of cuisines.",
    packaging: "Sack of 20kg | Sack of 50kg",
    shelfLife: "2-3 months",
    certifications: ["HACCP", "EU Organic"],
    regions: ["Asia", "Australia", "Europe"]
  },
  {
    id: 11,
    name: "Potato",
    image: potato,
    description: "High-quality potatoes for all types of cuisines.",
    packaging: "Sack of 20kg | Sack of 50kg",
    shelfLife: "2-3 months",
    certifications: ["HACCP", "EU Organic"],
    regions: ["Asia", "Australia", "Europe"]
  },
  {
    id: 12,
    name: "Potato",
    image: potato,
    description: "High-quality potatoes for all types of cuisines.",
    packaging: "Sack of 20kg | Sack of 50kg",
    shelfLife: "2-3 months",
    certifications: ["HACCP", "EU Organic"],
    regions: ["Asia", "Australia", "Europe"]
  },
  // Add more unique products here as necessary
];

const Pagination = ({ currentPage, totalPages, onNext, onPrev }) => (
  <div className="pagination">
    <button onClick={onPrev} disabled={currentPage === 1}>
      Previous
    </button>
    <span>{`Page ${currentPage} of ${totalPages}`}</span>
    <button onClick={onNext} disabled={currentPage === totalPages}>
      Next
    </button>
  </div>
);

const Vegetable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="products-container">
      <h1 className="products-title">Our Veggies</h1>
      <p className="products-intro">
        Explore our extensive range of farm-fresh vegetables. We cater to Supermarkets, Resorts, Distributors, and Wholesalers. Our products range from fresh vegetables to herbs, perfect for a variety of culinary needs.
      </p>
      <div className="products-grid">
        {currentProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={`${product.name} image`} className="product-image" />
            <h2 className="product-name">{product.name}</h2>
            <p>{product.description}</p>
            <p><strong>Packaging:</strong> {product.packaging}</p>
            <p><strong>Shelf Life:</strong> {product.shelfLife}</p>
            <p><strong>Certifications:</strong> {product.certifications.join(", ")}</p>
            <p><strong>Regions Served:</strong> {product.regions.join(", ")}</p>
          </div>
        ))}
      </div>
      
      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onNext={handleNextPage}
        onPrev={handlePrevPage}
      />
    </div>
  );
};

export default Vegetable;
