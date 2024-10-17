import React from 'react';
import './faqs.css'; // Optional CSS file for styling

const Faqs = () => {
  return (
    <div className="faqs-container">
      <h2>Frequently Asked Questions</h2>

      <div className="faq">
        <h3>1. What fruits and vegetables do you export?</h3>
        <p>We export a wide variety of fresh fruits and vegetables including tomatoes, potatoes, onions, carrots, citrus fruits, apples, and more. All our produce is sourced from trusted farmers and suppliers to ensure quality.</p>
      </div>

      <div className="faq">
        <h3>2. Where do you ship your products?</h3>
        <p>We ship our products to countries all over the world, with a focus on Europe, the Middle East, North America, and Asia. We are equipped to handle international shipping efficiently and ensure that our products arrive fresh and on time.</p>
      </div>

      <div className="faq">
        <h3>3. How do you ensure the freshness of the produce during shipment?</h3>
        <p>We use state-of-the-art cold chain logistics, including refrigerated containers, to maintain the optimal temperature for fruits and vegetables during transportation. Our packaging is also designed to protect the produce and retain its freshness.</p>
      </div>

      <div className="faq">
        <h3>4. What kind of packaging do you use?</h3>
        <p>We use eco-friendly, secure packaging that complies with international standards. This includes cardboard boxes, plastic crates, and biodegradable packaging to ensure the produce is safe and environmentally responsible.</p>
      </div>

      <div className="faq">
        <h3>5. Can I place a custom order or bulk order?</h3>
        <p>Yes, we accept custom and bulk orders based on your specific requirements. Our team works closely with clients to ensure their exact needs are met, whether it’s for particular quantities, specific packaging, or delivery schedules.</p>
      </div>

      <div className="faq">
        <h3>6. How can I track my shipment?</h3>
        <p>Once your order is processed and shipped, we will provide you with tracking information. You can monitor the status of your shipment through our logistics partner’s tracking system to know the exact location and estimated delivery time of your products.</p>
      </div>

      <div className="faq">
        <h3>7. What is your sustainability policy?</h3>
        <p>We are committed to sustainable farming and eco-friendly packaging. We work with local farmers who practice sustainable agriculture and use biodegradable materials whenever possible for packaging. Our goal is to minimize environmental impact while delivering high-quality produce.</p>
      </div>

      <div className="faq">
        <h3>8. Do you provide organic produce?</h3>
        <p>Yes, we offer organic fruits and vegetables certified by recognized international standards. If you require organic produce, please mention it during your order, and we will ensure your products meet the necessary organic certification requirements.</p>
      </div>

      <div className="faq">
        <h3>9. How can I contact customer support?</h3>
        <p>You can reach out to our customer support team via email at support@exportcompany.com or call us at +123 456 7890. We are available from Monday to Friday, 9 AM to 6 PM, and will be happy to assist you with any inquiries or issues.</p>
      </div>
      
      <div className="faq">
        <h3>10. What are your payment options?</h3>
        <p>We accept various payment options, including wire transfers, credit cards, and online payment systems such as PayPal. All transactions are secure and encrypted to protect your information.</p>
      </div>

      {/* whatsapp button */}
      <a href="https://wa.me/918080518692" className="whatsapp_float" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
};

export default Faqs;
