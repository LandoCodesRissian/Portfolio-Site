import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div 
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
      <div
      options = {{
        max: 45,
        scale: 1,
        speed: 450
      }}
      className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
      <img src={icon} alt={title}
      className='w-16 h-16 object-contain' />
      <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

      </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        As a Full Stack Developer, my proficiency lies in web development, 
        where I excel in leveraging technologies like React, Node.js, Git, and MySQL. 
        I take pride in my ability to craft sleek and engaging websites that prioritize responsive design, 
        ensuring a seamless user experience across all devices. My skills extend beyond the code; 
        I thrive both in solo projects and collaborative team environments, where I contribute to creating not just functional, 
        but also fun and dynamic web solutions. This blend of technical expertise and teamwork enables me to 
        consistently deliver projects that stand out in the digital landscape.
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((services, index) => (
        <ServiceCard key ={services.title} index={index} {...services} />
      ))}
    </div>
    </>
  )
}

export default About