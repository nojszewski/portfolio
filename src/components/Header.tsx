import React from 'react'
import { Code2, Terminal, ChevronDown } from 'lucide-react'

const Header = () => {
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <header className="min-h-screen flex items-center justify-center relative bg-[#0A192F] text-[#E2E8F0] px-4">
      <div className="max-w-4xl w-full">
        <div className="flex items-center space-x-2 mb-4">
          <Code2 className="w-8 h-8" />
          <Terminal className="w-8 h-8" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Wojciech Nojszewski
        </h1>
        <h2 className="text-2xl md:text-3xl mb-6 text-gray-400">
          Backend Developer, Server Admin
        </h2>
        <p className="text-xl leading-relaxed max-w-2xl">
          Experienced in system administration, programming, and DevOps. 
          Skilled in managing infrastructure, developing software, and automating workflows. 
          Scroll down to see more.
        </p>
      </div>
      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 hover:text-gray-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </header>
  )
}

export default Header
