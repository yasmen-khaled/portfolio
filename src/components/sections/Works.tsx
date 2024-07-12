import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import './works.css'; 
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";


const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image, 
  sourceCodeLink,
  liveSiteLink,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="cardContainer">
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={30}
        tiltMaxAngleY={30}
        glareColor="#aaa6c3"
      >
        <div className="card" >
          <div className="mt-5">
          <div className="image-container">
  <img src={image.src} alt={image.alt || name} className="project-image" />
</div>
<div className="title-container">
  <h3 className="title">{name}</h3>
</div>

            <p className="text-secondary mt-2 text-[14px]">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
          <div className="mt-4">
            <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Source Code</a>
            <a href={liveSiteLink} target="_blank" rel="noopener noreferrer" className="ml-4 text-green-500 hover:text-green-700">Live Site</a>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

  
  
const Works = () => {
  return (
    <>
    
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
     
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px] text-center mx-auto"
        >
          
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
         
      </div>
      

    </>
  );
};

export default SectionWrapper(Works, "");
