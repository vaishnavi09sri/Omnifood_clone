import Hero from "./components/Hero";
import Features from "./components/Features";
import Meals from "./components/Meals";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Header from './components/Header';
import Footer from "./components/Footer";
import HowItWorks from "./components/HowItWorks";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <HowItWorks/>
      <Meals />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
