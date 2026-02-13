import React from 'react'

type Props ={
    title: string;
    description: string;
    image: string;
    techStack: string[];
    demoUrl: string;
    githubUrl: string;
}

const ProjectCard = ({
    description,
    image,
    techStack,
    title,
    demoUrl,
    githubUrl
   }:Props) => {
  return (
    <div className='group relative bg-white dark:bg-gray-800 shadow-md rounded-2xl overflow-hidden'>
        
    </div>
  )
}

export default ProjectCard