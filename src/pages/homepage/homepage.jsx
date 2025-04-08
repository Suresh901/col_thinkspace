import HeroSection from "./components/herosection/herosection";
import AssistSection from "./components/assist/assistsection";
import Methodology from "./components/methodology/methodology";
import Services from "../../components/services/services";
import Questions from "../../components/questions/Questions";
import TestimonialSlider from "../../components/slider/TestimonialSlider";
import Serve from "../../components/serve/Serve";
import Request from "../../components/request/Request";

const homepage = () => {
  return (
    <div className=" relative">
      <HeroSection />
      <AssistSection />
      <Methodology />
      <Services />
      <Questions
        title="F"
        title1="requently"
        title2="A"
        title3="sked"
        title4="Q"
        title5="uestions"
        title6="Do you have any questions?"
      />
      <Serve />
      <TestimonialSlider />
      <Request />
    </div>
  );
};

export default homepage;
