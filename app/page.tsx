import Works from "./components/works";
import Skills from "./components/Skills";
import ExperienceYears from "./components/ExperienceYears";
import Testimonial from "./components/testimonial";
import CustomersAndClients from "./components/CustomersAndClients";
import BlogSection from "./components/BlogSection";
import SideNav from "./components/sidnav"; // ⬅️ Import the SideNav component
import NavBar from "./components/NavBar";
import Header from "./components/header";





export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen  pb-20 gap-16 sm:p-20 bg-black relative">
      
      {/* ⬅️ SideNav */}
      <SideNav />
      <main className="flex flex-col gap-[32px] row-start-2 items-center pl-0 md:pl-8">
       <NavBar />
       <section id="header" className="w-full mt-[0] sm:mt-[-70px] bg-[#0e0e10]">
          <Header />
        </section>

       
        <section id="skills" className="w-full">
          <Skills />
        </section>

        <section id="works" className="w-full">
          <Works />
        </section>

        <section id="experience" className="w-full">
          <ExperienceYears />
        </section>

        <section id="testimonials" className="w-full">
          <Testimonial />
        </section>

        <section id="clients" className="w-full">
          <CustomersAndClients />
        </section>

        <section id="blog" className="w-full">
          <BlogSection />
        </section>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-white">
        <p>Footer</p>
      </footer>
    </div>
  );
}
