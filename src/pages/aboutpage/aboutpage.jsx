import Questions from "../../components/questions/Questions";
import Request from "../../components/request/Request";
import HeroSection from "./components/HeroSection";
import Project from "./components/projects/project";
import ProjectSection from "./components/projectsection/ProjectSection";
import Stories from "./components/stories/Stories";
import TeamCard from "./components/team/TeamCard";

const about = () => {
  return (
    <div>
      <HeroSection />
      <Stories />
      <ProjectSection />
      <Project />
      <TeamCard />
      <Questions title="F" title1="AQS" title2="T" title3="he Help Section" />
      <Request />
    </div>
  );
};

export default about;
