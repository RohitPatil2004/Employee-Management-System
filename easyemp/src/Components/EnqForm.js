import React from 'react';
import '../Styles/EnqForm.css';

const EnquiryForm = () => {
  return (
    <div className="enquiry-form-container">
      <div className="enquiry-form-content">
        <div className="enquiry-form-left">
          <h2 className="enquiry-title">We'd Love to walk you through the platform.</h2>
          <p className="enquiry-subtitle">Fill in the form and get a free demo!</p>
        </div>
        <div className="enquiry-form-right">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="city">City:</label>
              <input type="text" id="city" name="city" />
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EnquiryForm;
