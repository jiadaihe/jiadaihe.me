"use client";

import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Mail, Linkedin, Twitter, Calendar, MapPin } from 'lucide-react';

export default function Home() {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);  // initialize to null on server side
  const [transferredData, setTransferredData] = useState('0 B');

  useEffect(() => {
    // set current time on client side
    setCurrentTime(new Date());

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Simulate data transfer calculation
    setTimeout(() => {
      setTransferredData('127.3 KiB');
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Single featured project
  const project = {
    title: "TouchDesigner hopefully",
    description: "placeholder. please don't judge me.",
    technologies: ["TouchDesigner", "Python", "JavaScript", "HTML", "CSS"],
    // githubUrl: "https://github.com/yourusername/task-manager-pro",
    // liveUrl: "https://task-manager-pro.vercel.app",
    year: "2025",
    // image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop"
  };

  const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com/jiadaiho' },
    { name: 'Twitter', url: 'https://twitter.com/jiadaiho' },
    // { name: 'Email', url: 'jiadaihe@gmail.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/jiadaihe' },
    { name: 'GitHub', url: 'https://github.com/jiadaihe' },
    { name: 'Blog', url: 'https://jiadaihe.substack.com/' }
  ];

  return (
    <div className="min-h-screen bg-white flex">
      {/* Draggable Profile Image */}
      <img 
        src="/me.jpeg"
        alt="Profile"
        className="fixed top-5 right-10 w-20 h-20 rounded-lg cursor-grab active:cursor-grabbing z-50 shadow-lg"
        draggable
        style={{ imageRendering: 'pixelated' }}
      />

      {/* Watermark */}
      <div className="fixed bottom-2 left-2 text-gray-400 text-sm pointer-events-none z-40 font-mono">
        Jiadai 何
      </div>

      {/* Receipt Sidebar */}
      <aside className="w-80 bg-white shadow-xl border-r-4 border-dashed border-gray-300 font-mono text-sm overflow-y-auto h-screen sticky top-0">
        <div className="p-6">
          {/* Receipt Header */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold mb-4">Jiadai 何</h1>
            
            {/* Info Table */}
            <table className="w-full text-sm mb-6">
              <tbody>
                <tr>
                  <td className="text-left">JOB:</td>
                  <td className="text-right">SWE</td>
                </tr>
                <tr>
                  <td className="text-left">LOC:</td>
                  <td className="text-right">NYC</td>
                </tr>
                <tr>
                  <td className="text-left">LANG:</td>
                  <td className="text-right">EN, 中文</td>
                </tr>
              </tbody>
            </table>

            {/* Pixelated decoration */}
            <div className="w-32 h-6 mx-auto mb-4 bg-gray-200 border border-gray-400" 
                 style={{ 
                   imageRendering: 'pixelated',
                   backgroundImage: 'repeating-linear-gradient(45deg, #000 0px, #000 4px, #fff 4px, #fff 8px)'
                 }}>
            </div>
          </div>

          {/* Social Links Navigation */}
          <nav className="mb-6">
            <table className="w-full">
              <tbody>
                {socialLinks.map((link, index) => (
                  <tr key={index}>
                    <td className="text-left py-1">
                      <a 
                        href={link.url} 
                        className="hover:bg-black hover:text-white px-1 py-1 transition-colors block w-full"
                      >
                        {link.name}
                      </a>
                    </td>
                    <td className="text-right py-1">
                      <a 
                        href={link.url}
                        className="hover:bg-black hover:text-white px-2 py-1 transition-colors block"
                      >
                        <img 
                          src={`https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${link.url}&size=16`}
                          alt=""
                          className="w-4 h-4 grayscale"
                        />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </nav>

          {/* QR Code */}
          <div className="text-center mb-6">
            <video 
              className="w-24 h-24 mx-auto border border-gray-400 object-cover rounded"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/me.mp4" type="video/mp4" />
            </video>
          </div>
          {/* <div className="text-center mb-6">
            <div className="w-24 h-24 mx-auto bg-black border border-gray-400" 
                 style={{ 
                   imageRendering: 'pixelated',
                   backgroundImage: 'repeating-conic-gradient(#000 0% 25%, #fff 0% 50%) 50% / 4px 4px'
                 }}>
            </div>
          </div> */}

          {/* Receipt Footer */}
          <div className="border-t border-dashed border-gray-400 pt-4">
            <table className="w-full text-sm mb-4">
              <tbody>
                <tr>
                  <td className="text-left">DATE:</td>
                  <td className="text-right">{currentTime?.toLocaleDateString()}</td>
                </tr>
                <tr>
                  <td className="text-left">TIME:</td>
                  <td className="text-right">{currentTime?.toLocaleTimeString()}</td>
                </tr>
                <tr>
                  <td className="text-left">TRANSFERRED:</td>
                  <td className="text-right">{transferredData}</td>
                </tr>
              </tbody>
            </table>

            <div className="text-center text-xs">
              <div className="flex justify-center items-center gap-2">
                <span>♻</span>
                <span>◼</span>
                <span>© 2024</span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8">
        {/* Floating Tickers (like Maxwell's) */}
        <div className="mb-8">
          {/* <div className="bg-gray-800 text-white py-2 mb-2 overflow-hidden">
            <div className="animate-pulse text-center text-sm">
              ⚛ are.na/username ☾
            </div>
          </div> */}
          <div className="bg-gray-700 text-white py-2 mb-8 overflow-hidden">
            <div className="animate-pulse text-center text-sm">
              ⚛ Let's build something amazing ☾
            </div>
          </div>
        </div>

        {/* Articles & Posts Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <a href="#articles" className="text-blue-600">#</a>
            Articles & posts
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Featured Article */}
            <article className="bg-gray-100 p-6 rounded-lg relative">
              {/* <div className="absolute -top-2 -left-2 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xs rotate-12">
                NEW
              </div> */}
              {/* <img 
                src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=300&h=200&fit=crop"
                alt="Article"
                className="w-full h-32 object-cover rounded mb-4"
              />
              <h3 className="font-bold text-lg mb-2">Building Modern Web Apps</h3>
              <time className="text-gray-500 text-sm">September 2024</time> */}
            </article>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <a href="#projects" className="text-blue-600">#</a>
            Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Main Project */}
            <article className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow col-span-2">
              <img 
                // src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className="text-gray-500 text-sm">{project.year}</span>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:border-gray-900 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div> */}
              </div>
            </article>

            {/* Weather Widget */}
            <article className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold mb-4">Current Status</h3>
              <p className="mb-2">I am currently living in New York City, USA.</p>
              <p className="mb-2">It is:</p>
              <p className="text-2xl font-bold">{currentTime?.toLocaleTimeString()}</p>
              <p className="text-gray-600">🌤 Partly cloudy</p>
              <p className="text-lg">72°F</p>
            </article>
          </div>
        </section>

        {/* <section>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <a href="#abandoned" className="text-blue-600">#</a>
            Abandoned projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="bg-gray-50 border border-gray-200 rounded-lg p-6 opacity-75">
              <img 
                src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=300&h=200&fit=crop"
                alt="Abandoned project"
                className="w-full h-32 object-cover rounded mb-4"
              />
              <h3 className="font-bold text-lg mb-2">
                <s>socialapp.com</s>
              </h3>
              <p className="text-gray-600 text-sm">Social media analytics tool</p>
            </article>
          </div>
        </section> */}
      </main>
    </div>
  );
};
