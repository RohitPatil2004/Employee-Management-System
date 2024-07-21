import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import "../Styles/Features.css";

const Features = () => {
  return (
    <>
      <NavBar activePage={"features"} />
      <div className="features-grid">
        <div className="grid-item">
          <img src="image1.jpg" alt="Image 1" />
          <h3>Attedance</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet nulla auctor, vestibulum magna sed, convallis ex.
          </p>
        </div>
        <div className="grid-item">
          <img src="image2.jpg" alt="Image 2" />
          <h3>Insurance</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet nulla auctor, vestibulum magna sed, convallis ex.
          </p>
        </div>
        <div className="grid-item">
          <img src="image3.jpg" alt="Image 3" />
          <h3>Task Management</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet nulla auctor, vestibulum magna sed, convallis ex.
          </p>
        </div>
        <div className="grid-item">
          <img src="image4.jpg" alt="Image 4" />
          <h3>Payroll</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet nulla auctor, vestibulum magna sed, convallis ex.
          </p>
        </div>
        <div className="grid-item">
          <img src="image5.jpg" alt="Image 5" />
          <h3>Screenshot</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet nulla auctor, vestibulum magna sed, convallis ex.
          </p>
        </div>
        <div className="grid-item">
          <img src="image6.jpg" alt="Image 6" />
          <h3>Email Reports</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet nulla auctor, vestibulum magna sed, convallis ex.
          </p>
        </div>
        <div className="grid-item">
          <img src="image7.jpg" alt="Image 7" />
          <h3>Teams</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet nulla auctor, vestibulum magna sed, convallis ex.
          </p>
        </div>
        <div className="grid-item">
          <img src="image8.jpg" alt="Image 8" />
          <h3>Daily Activity</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet nulla auctor, vestibulum magna sed, convallis ex.
          </p>
        </div>
        <div className="grid-item">
          <img src="image9.jpg" alt="Image 9" />
          <h3>Dashboard</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet nulla auctor, vestibulum magna sed, convallis ex.
          </p>
        </div>
        <div className="grid-item">
          <img src="image9.jpg" alt="Image 9" />
          <h3>Employees (admin only)</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet nulla auctor, vestibulum magna sed, convallis ex.
          </p>
        </div>
        <div className="grid-item">
          <img src="image9.jpg" alt="Image 9" />
          <h3>Project Management (admin only)</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet nulla auctor, vestibulum magna sed, convallis ex.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Features;
