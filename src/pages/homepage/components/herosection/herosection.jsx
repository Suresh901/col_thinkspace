import AnimatedHeading from "../heading/AnimatedHeading";
import HeroVideo from "../../../../assets/image/intro.mp4";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center gap-2 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={HeroVideo}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 flex flex-col justify-center items-start h-full text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Welcome to ThinkSpace
        </h1>
        <AnimatedHeading />
        <p className="text-lg md:text-2xl mb-6 max-w-2xl">
          Empowering Ideas, Building Innovation.
        </p>
        <Link to="/contact">
          <button className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
