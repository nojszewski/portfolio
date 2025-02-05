import React, { useState } from 'react'
import { Mail, Linkedin, Github, MapPin, Check, AlertCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    
    try {
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message')
      }

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      })
      
      setIsSubmitted(true)
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message')
      setTimeout(() => {
        setError('')
      }, 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 bg-[#121212] text-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-[#2D3748] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                  required
                  disabled={isSubmitting}
                  minLength={2}
                  maxLength={50}
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-[#2D3748] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full p-3 bg-[#2D3748] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                  required
                  disabled={isSubmitting}
                  minLength={10}
                  maxLength={1000}
                />
              </div>
              {error && (
                <div className="flex items-center text-red-500">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  {error}
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 ${
                  isSubmitted 
                    ? 'bg-green-600 hover:bg-green-700' 
                    : error
                    ? 'bg-red-600 hover:bg-red-700'
                    : 'bg-[#0A192F] hover:bg-[#162a47]'
                } transition-colors rounded-lg flex items-center justify-center`}
              >
                {isSubmitting ? (
                  <span className="inline-block animate-pulse">Sending...</span>
                ) : isSubmitted ? (
                  <span className="flex items-center">
                    <Check className="w-5 h-5 mr-2" />
                    Message Sent!
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <p className="flex items-center">
                  <Mail className="w-5 h-5 mr-3" />
                  wojciech [at] nojszewski.net
                </p>
                <p className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3" />
                  Poland
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Social Links</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/nojszewski" className="hover:text-gray-300">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact