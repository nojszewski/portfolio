import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Radio App',
    description: 'A radio app for school to broadcast announcements and music. Doing behind-the-scenes stuff, setting up and maintaining infrastructure',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Raspberry Pi', 'Proxmox'],
    url: '#',
    urlText: 'Soon...'
  },
  {
    title: 'ZS1MM website',
    description: 'A website for my school. I did the design and development',
    tech: ['WordPress', 'CSS', 'JavaScript', 'Redis', 'MySQL'],
    url: 'https://zs1mm.edu.pl',
    urlText: 'Visit website'
  }
  // {
  //   title: '',
  //   description: 'AI-powered content management system',
  //   tech: ['Python', 'TensorFlow', 'React', 'MongoDB'],
  //   github: '#',
  //   demo: '#'
  // }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#121212] text-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">My selected projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-[#2D3748] p-6 rounded-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 text-sm bg-[#0A192F] rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a href={project.url} className="flex items-center hover:text-gray-300">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  {project.urlText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;