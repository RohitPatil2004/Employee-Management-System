import "./App.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import EnquiryForm from "./Components/EnqForm";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <>
      {/*navbar*/}
      <NavBar activePage={"home"} />
      {/*home*/}
      <div className="home-container">
        <div className="left-section">
          <button>Welcome to Easy Emp.</button>
          <h1>
            Employee Management System Built With <br />
            <span className="different-color">A human approach</span>.
          </h1>
          <button class="button">
            Try Free
            <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
              <path
                clip-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="right-section">
          <img src="./logo.png" alt="Employee Management System" />
        </div>
      </div>
      {/*features*/}
      <h1>Features of App</h1>
      <div
        id="carouselExampleControlsNoTouching"
        class="carousel slide"
        data-bs-touch="false"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./logo.png" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="./logo192.png" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="./logo512.png" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      {/*enquiry*/}
      <EnquiryForm />
      <Footer />
    </>
  );
}

export default App;
