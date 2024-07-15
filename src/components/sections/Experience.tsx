import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./timelineStyles.css";
import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { TExperience } from "../../types";
import { config } from "../../constants/config";

const ExperienceCard: React.FC<TExperience> = (experience) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(61, 58, 87, 0.15)",
        borderRadius: "1rem",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(100px)",
        width: "250px",
        height: "550px",
        
     
        
      }}
      contentArrowStyle={{ borderRight: "4px solid  #232631" }}
      date={experience.date}
      iconStyle={{ 

      display: "none",

      borderRadius: "20%",
      width: "40px",
      height: "40px",
      

      }}
   
       
      
    >
      

      <div
        style={{
          position: "absolute",
          width: "90px",
          height: "90px",
          backgroundColor: "#7e61ff",
          filter: "blur(100px)",
          left: "10%",
          top: "50%",
        }}
      ></div>

      <div>
        <h3 className="font-bold text-white">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 4 }}
        >
          {experience.companyName}
        </p>

        <ul className="ml-5 mt-5 list-disc space-y-2">
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 pl-1 text-[14px] tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.experience} />

      <VerticalTimeline className="custom-timeline" 
      
      lineColor="pink"
      
      
      >

        {experiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
      
        ))}


      </VerticalTimeline>
    </>
  );
};

export default SectionWrapper(Experience, "work");
