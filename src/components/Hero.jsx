import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { TypeAnimation } from 'react-type-animation';
import { Helmet } from 'react-helmet';


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
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
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
   <h1 className={`${styles.heroHeadText} text-white`}>
    Hi, I'm <span className='text-[#915EFF]'>Joseph</span>
  </h1>
  <TypeAnimation
        sequence={[
          "I'm a Developer",
          1000,
          "I'm a Writer",
          1000,
          "I'm a Designer",
          1000,
        ]}
        speed={50}
        repeat={Infinity}
        style={{ fontSize: '2em' }}
      />
    </div>

      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
