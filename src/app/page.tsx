import Header from "./components/header";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Courses from "./components/cour";
import CourseCategory from "./components/services";
import Achievement from "./components/achive";
import OurTeam from "./components/about";
import CustTestimonials from "./components/testimonials";
import HeroSection from "./components/hero";
export default function Home() {
  return (
    <div>
    <Header/>
      <Navbar/>
      <HeroSection/>
      <CourseCategory/>
      <Achievement/>
      <Courses/>
      <OurTeam/>
      <CustTestimonials/>
      <Footer/>
    </div>
  );
}