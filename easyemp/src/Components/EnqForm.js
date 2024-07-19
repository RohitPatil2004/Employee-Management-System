import React from "react";
import "./Styles/EnqForm.css";


const EnquiryForm = () => {
  return (
    <div className="enquiry-form-container">
      <div className="enquiry-form-content">
        <div className="enquiry-form-left">
          <h2 className="enquiry-title">
            We'd Love to walk you through the platform.
          </h2>
          <p className="enquiry-subtitle">
            Fill in the form and get a free demo!
          </p>
        </div>
        <div className="enquiry-form-right">
          <div class="form-card1">
            <div class="form-card2">
              <form class="form">
                <p class="form-heading">Get In Touch</p>

                <div class="form-field">
                  <input
                    required=""
                    placeholder="Name"
                    class="input-field"
                    type="text"
                  />
                </div>

                <div class="form-field">
                  <input
                    required=""
                    placeholder="Email"
                    class="input-field"
                    type="email"
                  />
                </div>

                <div class="form-field">
                  <input
                    required=""
                    placeholder="Subject"
                    class="input-field"
                    type="text"
                  />
                </div>

                <div class="form-field">
                  <textarea
                    required=""
                    placeholder="Message"
                    cols="30"
                    rows="3"
                    class="input-field"
                  ></textarea>
                </div>

                <button class="sendMessage-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;
