import "./App.css";
import Clintfeedback from "./Components/Clintfeedback";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Herosection from "./Components/Herosection";
import Section1 from "./Components/Section1";

function App() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Smooth scroll
    }
  };
  return (
    <>
      <Header handleScroll={handleScroll} />
      <Herosection />
      <Section1 />
      <Clintfeedback />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
