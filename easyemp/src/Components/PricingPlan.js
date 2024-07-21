import React from 'react';

const PricingPlan = ({ image, title, features, price }) => {
  return (
    <div className="pricing-plan">
      <img src={image} alt={title} />
      <br />
      <h2>{title}</h2>
      <br />
      <h3>Features:</h3>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <br />
      <h3>{`Price: ${price}$/per month`}</h3>
      <br />
      <button>Get Started</button>
    </div>
  );
};

export default PricingPlan;
