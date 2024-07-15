import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import "./about.css"; 
import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

interface IServiceCard {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ index, icon }) => { // Destructure icon from props
  return (
    <Tilt
      glareEnable
      tiltEnable
      tiltMaxAngleX={40}
      tiltMaxAngleY={40}
      glareColor="#aaa6i3"
      scale={1.2}
    >
      <div className="xs:w-[220px] w-full h-[150px]  ">
        <motion.div
          variants={fadeIn("up", "spring", index * 0.3, 0.75)}
          className="notification green-pink-gradient shadow-card w-full rounded-[20px] p-[1px] w-[200px] justify-center items-center"
        >
          <div className="">
            <img
              src={icon} 
              alt=""
              className="w-[50w-[100px] h-[70px] bottom-0 mt-autopx] h-[150px] mx-auto " 
            />
{/* flex flex-col justify-center items-center w-full */}
      

          </div>
        </motion.div>
      </div>
    </Tilt>
  );
};

const About = () => {
  return (

    <>
  

      <Header useMotion={true} {...config.sections.about} 
      
      
      />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px] text-center mx-auto "
      >
        {config.sections.about.content}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 max-sm:justify-center ">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
