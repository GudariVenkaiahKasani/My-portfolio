import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import useOnScreen from "../hooks/useOnScreen.jsx";

const About = () => {
  const [ref, visible] = useOnScreen({ threshold: 0.1 });

  const variants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0.85 },
  };

  return (
    <motion.div
      id="About"
      className="max-w-6xl mx-auto px-10 pt-10"
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      variants={variants}
      ref={ref}
    >
      {/* <div className="text-center text-3xl font-bold mb-4">About Me</div> */}
      <Typography variant="h4" textAlign="center" mb={3}>
        About Me
      </Typography>
      <p className="text-lg ">
        Hi, I'm Gudari Venkaiah Kasani a driven full-stack developer with a strong passion for creating innovative and efficient digital solutions. With expertise in both front-end and back-end technologies, I specialize in crafting seamless user experiences and robust applications. Let’s collaborate to bring your vision to life! Explore my portfolio, and don't hesitate to reach out for your next project. Together, we can create something extraordinary.
      </p>
    </motion.div>
  );
};

export default About;
