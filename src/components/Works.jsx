import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { Live, github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Helmet } from 'react-helmet';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
            <div
              onClick={() => window.open(live_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={Live}
                alt='Demo'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
  <Helmet>
        <meta name="description" content="I'm Joseph Ejiro, a 3D developer passionate about creating immersive experiences." />
        
        <meta property="og:title" content="Joseph Ejiro - 3D Developer Portfolio" />
        <meta property="og:description" content="Explore my 3D development projects and creations." />
        <meta property="og:image" content="https://awesomescreenshot.s3.amazonaws.com/image/4683026/42484598-0b225ba26bd06667c1fefa32487567f0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20230825%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230825T214457Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=417cd20171142fc1fcc919c7718f4d9950e2c988851b6d0f9c23493b7032e3e4" />
        <meta property="og:url" content="https://joecodes.netlify.app/" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Joseph Ejiro - 3D Developer Portfolio" />
        <meta name="twitter:description" content="Explore my 3D development projects and creations." />
        <meta name="twitter:image" content="https://awesomescreenshot.s3.amazonaws.com/image/4683026/42484598-0b225ba26bd06667c1fefa32487567f0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20230825%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230825T214457Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=417cd20171142fc1fcc919c7718f4d9950e2c988851b6d0f9c23493b7032e3e4" />
        
        <meta name="keywords" content="3D development, portfolio, projects, WebGL, virtual reality" />
        <meta name="author" content="Joseph Ejiro" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
