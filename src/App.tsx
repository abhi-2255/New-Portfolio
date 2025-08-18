import { Copyright } from "lucide-react";
import Navbar from "./navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

function App() {

  return (
    <>
      <Navbar />
      <div className="container mx-auto font-[Inter] scroll-smooth ">
        {/* Hero Section  */}
        <section className="lg:px-20 md:px-10 sm:px-5 px-5 mt-10 gap-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-12 ">
          {/* Image Section  */}
          <div className="lg:col-span-4 rounded-xl overflow-hidden">
            <img src="/images/dp.webp" alt="" className="w-full h-full object-cover object-center " />
          </div>
          {/* Text Section  */}
          <div className="lg:px-20 md:px-10 sm:px-4 px-4 grid grid-cols-1 gap-4 w-full h-full lg:col-span-8">
            <div>
              <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-3xl font-black ">Hi, I'm Alex,</h1>
              <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-3xl font-black"> a MERN Stack Developer</h1>
            </div>
            <p className="sm:text-sm md:text-lg lg:text-lg">I'm a passionate MERN Stack Developer with a focus on creating efficient and scalable web applications. I love turning ideas into reality through code. I specialize in building robust and user-friendly web solutions using the MERN Stack.</p>
            <button
              className="bg-blue-100 hover:bg-blue-300 transition-all duration-300 py-2 px-4 w-full font-semibold rounded-xl ">
              View Projects
            </button>
          </div>
        </section>

        {/* Project Section  */}
        <div className="lg:px-20 md:px-10 sm:px-5 px-5 py-4 mt-10">
          <h2 className="lg:text-3xl md:text-2xl sm:text-2xl text-xl font-bold text">Featured Projects</h2>
        </div>
        <Portfolio />
        <Skills />
        {/* Contact Section  */}
        <div className="lg:px-20 md:px-10 sm:px-5 px-5 py-4 mt-5">
          <h2 className="lg:text-3xl md:text-2xl sm:text-2xl text-xl font-bold">Contact</h2>
          <div className="pt-2">
            <h3 className="pb-2 lg:text-xl md:text-xl sm:text-lg text-lg">Name</h3>
            <input type="text" placeholder="Your Name" className="pt-2 pl-2 pb-2 lg:text-xl md:text-xl sm:text-lg text-lg text-shadow-md bg-gray-200  border-gray-300 rounded-md w-full" />
          </div>
          <div className="pt-5">
            <h3 className="lg:text-xl md:text-xl sm:text-lg text-lg">Email</h3>
            <input type="text" placeholder="Your Email" className="pt-2 pl-2 pb-2 lg:text-xl md:text-xl sm:text-lg text-lg text-shadow-md bg-gray-200  border-gray-300 rounded-md w-full" />
          </div>
          <div className="pt-5">
            <h3 className="lg:text-xl md:text-xl sm:text-lg text-lg">Message</h3>
            <textarea rows={5} className="pt-2 pl-2 pb-2 lg:text-xl md:text-xl sm:text-lg text-lg text-shadow-md bg-gray-200  border-gray-300 rounded-md w-full"></textarea>
          </div>
          <div className="pt-5">
            <button className="p-2 lg:text-xl md:text-xl sm:text-lg text-lg font-bold bg-blue-200 rounded-md hover:bg-blue-300">Send Message</button>
          </div>
        </div>
        {/* Footer Section  */}
        <div className="flex justify-center items-center lg:p-10 md:p-5 sm:p-5 p-5">
          <h2 className="flex items-center gap-1 lg:text-xl md:text-lg sm:text-sm text-sm text-gray-400"><Copyright size={20} />2025 Alex's Portfolio. All rights reserved.</h2>
        </div>
      </div>
    </>

  )
}

export default App
