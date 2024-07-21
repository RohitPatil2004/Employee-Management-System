import React from "react";
import Navbar from "../Components/NavBar";
import Footer from "../Components/Footer";
import EnquiryForm from "../Components/EnqForm";

function Features() {
  return (
    <div>
      <Navbar />
      <section className="features">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="logo.png" alt="Image 1" />
            </div>
            <div className="col-md-6">
              <h2>Feature 1</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet nulla auctor, vestibulum magna sed, convallis ex.
              </p>
              <button>Learn More</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img src="logo192.png" alt="Image 2" />
            </div>
            <div className="col-md-6">
              <h2>Feature 2</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet nulla auctor, vestibulum magna sed, convallis ex.
              </p>
              <button>Learn More</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img src="image3.jpg" alt="Image 3" />
            </div>
            <div className="col-md-6">
              <h2>Feature 3</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet nulla auctor, vestibulum magna sed, convallis ex.
              </p>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </section>
      <EnquiryForm />
      <Footer />
    </div>
  );
}

export default Features;
