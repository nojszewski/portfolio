import React from 'react'

const About = () => {
  const skills = [
    'JavaScript/TypeScript',
    // 'React.js',
    'Node.js',
    'Docker',
    'AWS',
    'Proxmox VE',
    'SQL',
    'Linux',
    'Git',
    'Networking'
  ]

  return (
    <section id="about" className="py-20 bg-[#0A192F] text-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
              alt="Profile"
              className="rounded-lg shadow-xl w-full max-w-sm mx-auto"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg mb-6 leading-relaxed">
              Continuously gaining experience in IT administration, programming, and more, 
              I've worked on various projects ranging from web development to infrastructure
              My passion lies in creating efficient, scalable solutions that solve real-world problems.
            </p>
            <h3 className="text-2xl font-bold mb-4">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-3 mb-6">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-[#2D3748] rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
            <p className="text-lg leading-relaxed">
              When I'm not coding, you can find me enjoying a good cup of tea and traveling 
              (as seen in the photo on the left, taken from an airplane window).
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About