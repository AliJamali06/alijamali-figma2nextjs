import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./components/hero";
import CustomerContent from "./components/customer-content";
import Gallery from "./components/Gallery";
import TextContent from "./components/TextContent";
import ContactUs from "./components/ContactUs";

export default function Home() {
  return (
      <>
        <Navbar/>
        <div className="main-container container">
          <Hero/>
          <CustomerContent/>
          <TextContent/>
          <Gallery/>
          <ContactUs/>
        </div>
        <Footer/>
      </>
    )
  }















































































