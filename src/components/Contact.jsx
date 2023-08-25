import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { Helmet } from 'react-helmet';
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_ibobidq",
        "template_ai7v3pq",
        {
          from_name: form.name,
          to_name: "Joseph Codes",
          from_email: form.email,
          to_email: "jojosr001@gmail.com",
          message: form.message,
        },
        "WCF9fVbBT9R5SdyO7"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
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
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
