import dynamic from "next/dynamic";
import AnimatedText from "./AnimatedText";
import FrontEndSkills from "./FrontEndSkills";
import BackEndSkills from "./BackEndSkills";
import ToolsAndTechSkills from "./ToolsAndTechSkills";
const Services = dynamic(() => import("./Services"));

const Skills = () => {
  return (
    <>
      <div className="mt-[40px] sm:mt[70px] mb-[120px]">
        <AnimatedText text="Skills & Abilities!" />

        <div className="flex flex-col mt-[80px]">
          {/* FrontEnd  Development */}
          <FrontEndSkills />

          <hr />

          {/* Backend  Development */}
          <BackEndSkills />
        </div>

        <hr />

        {/* Other Technologies*/}
        <ToolsAndTechSkills />

        {/* Services  Development */}
        <Services />
      </div>
    </>
  );
};

export default Skills;
