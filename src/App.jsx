import "./App.css";
import Clintfeedback from "./Components/Clintfeedback";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Herosection from "./Components/Herosection";
import Section1 from "./Components/Section1";

function App() {
  return (
    <>
      <Header />
      <Herosection />
      <Section1 />
      <Clintfeedback />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
