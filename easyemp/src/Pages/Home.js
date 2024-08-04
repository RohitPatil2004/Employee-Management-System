import { useEffect } from "react";
import "../Styles/Home.css";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import EnquiryForm from "../Components/EnqForm";
import Carousel, {CarouselItem} from "../Components/Carousel";

const Home = () => {
    useEffect(() => {
      document.title='Home'
    }, []);
  return (
    <>
      {/*Nav Bar */}
      <NavBar activePage={"home"} />
      {/*Home*/}
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
      <section className="features">
        <h1>Features</h1>
        <Carousel>
          <CarouselItem>
            <img src="./logo.png" alt=""/>
          </CarouselItem>
          <CarouselItem>
            <img src="./logo192.png" alt=""/>
          </CarouselItem>
          <CarouselItem>
            <img src="./logo512.png" alt=""/>
          </CarouselItem>
        </Carousel>
      </section>
      {/*enquiry*/}
      <EnquiryForm />
      {/*footer*/}
      <Footer />
    </>
  );
}

export default Home;
