import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    const formData = new FormData(event.target);
    formData.append("access_key", "2daeca8c-4aac-4213-9b3e-54e93fb26563");

    const response = await fetch("https://api.web3forms.com/submit",{
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success){
      setSubmitted(true)
    }
    else {
      setSubmitted(false)
    }
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8 text-center transition-colors duration-300">Get In Touch</h2>
        <p className="text-slate-600 dark:text-slate-300 text-center mb-12 text-lg transition-colors duration-300">
          I'm always interested in hearing about new projects and opportunities.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8 transition-colors duration-300">Contact Info</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-50 dark:bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-purple-200 dark:border-purple-500/50 transition-all duration-300">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm transition-colors duration-300">Email</p>
                  <a href="mailto:prasanganiraula2016@gmail.com" className="text-slate-800 dark:text-white font-semibold hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 break-all">
                    prasanganiraula2016@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-50 dark:bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-purple-200 dark:border-purple-500/50 transition-all duration-300">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm transition-colors duration-300">Phone</p>
                  <a href="tel:+977-986-236-4021" className="text-slate-800 dark:text-white font-semibold hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">
                    +977-986-236-4021
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-50 dark:bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-purple-200 dark:border-purple-500/50 transition-all duration-300">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm transition-colors duration-300">Location</p>
                  <p className="text-slate-800 dark:text-white font-semibold transition-colors duration-300">
                    Kathmandu, Nepal
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-750 transition-colors duration-300">
              <h4 className="text-slate-900 dark:text-white font-semibold mb-4 transition-colors duration-300">Follow Me</h4>
              <div className="flex gap-4">
                <a href="https://github.com/prasanga73" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-white rounded-lg flex items-center justify-center hover:bg-purple-600 dark:hover:bg-purple-500 hover:text-white transition duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/prasanga-niraula-7bb8242a6/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-white rounded-lg flex items-center justify-center hover:bg-purple-600 dark:hover:bg-purple-500 hover:text-white transition duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.735-2.004 1.446-.103.25-.129.598-.129.946v5.413h-3.554s.05-8.789 0-9.514h3.554v1.347c.42-.648 1.36-1.573 3.322-1.573 2.429 0 4.25 1.574 4.25 4.963v4.777zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.704 0-.948.77-1.704 1.963-1.704 1.193 0 1.915.756 1.937 1.704 0 .946-.744 1.704-1.985 1.704zm1.582 11.597H3.635V9.438h3.284v10.914zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-slate-700 dark:text-white font-semibold mb-2 transition-colors duration-300">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 transition duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-slate-700 dark:text-white font-semibold mb-2 transition-colors duration-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 transition duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-700 dark:text-white font-semibold mb-2 transition-colors duration-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 transition resize-none duration-300"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:opacity-90 transition duration-300 cursor-pointer shadow-md hover:shadow-lg"
              >
                Send Message
              </button>

              {submitted && (
                <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-700 dark:text-green-300 transition-colors duration-300">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
