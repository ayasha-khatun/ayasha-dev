import React from 'react'
import Hero from './Hero/Hero';
import About from './About/About';
import Education from './Education/Education';
import Skill from './Skill/Skill';
import Project from './Project/Project';

function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Skill />
      <Project />
      <Education />
    </div>
  )
}

export default Home;