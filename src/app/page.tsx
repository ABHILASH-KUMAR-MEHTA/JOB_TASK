import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Pricing from './components/Plans/Whatdo';
import Testimonial from './components/Testimonial/Testimonial';
import Footer from './components/Footer/Footer';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Review from './components/Reviews/Review';

export default function Home() {
  return (
    <>
      <div className='w-full overflow-hidden bg-white'>
        <Navbar />
        <Hero />
        <Pricing />
        <Work />
        <Review />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
