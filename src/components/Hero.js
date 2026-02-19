import React from 'react';

const Hero = () => {
  // LinkedIn SVG Icon
  const LinkedInIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );

  // GitHub SVG Icon
  const GitHubIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
    </svg>
  );

  const contactLinks = [
    { icon: '✉', text: 'ptaluk108@gmail.com', href: 'mailto:ptaluk108@gmail.com' },
    { icon: '📞', text: '(313)-603-6330', href: 'tel:+13136036330' },
    { icon: <LinkedInIcon />, text: 'LinkedIn', href: 'https://linkedin.com/in/prangon-talukdar', external: true },
    { icon: <GitHubIcon />, text: 'GitHub', href: 'https://github.com/Prangon108', external: true },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-teal-50 via-cyan-50/80 to-teal-50/60">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50/30 via-cyan-50/20 to-teal-50/20"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-200/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-300/15 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                <span className="bg-gradient-to-r from-primary-700 via-primary-600 to-primary-800 bg-clip-text text-transparent">
                  Prangon Talukdar
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-teal-700 font-medium">Software Engineer</p>
            </div>
            
            <p className="text-teal-800 text-lg leading-relaxed max-w-2xl">
            Software Engineer specializing in full-stack development, backend systems, and cloud infrastructure. Experienced in designing and delivering production-ready applications using Java, Spring Boot, React, Django, ASP.NET, and AWS. Passionate about building scalable APIs, microservices, and high-performance systems with clean architecture and strong engineering principles. Currently enhancing automation and system reliability as an Application Support Engineer, backed by a 4.0 GPA and Summa Cum Laude distinction.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              {contactLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-teal-50/80 border border-teal-200/40 rounded-lg text-teal-800 hover:bg-teal-100/80 hover:border-teal-300/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-200/20"
                >
                  {typeof link.icon === 'string' ? (
                    <span className="text-xl">{link.icon}</span>
                  ) : (
                    <span className="text-teal-700">{link.icon}</span>
                  )}
                  <span>{link.text}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="hidden lg:flex items-center justify-center animate-fade-in">
            <div className="relative w-full max-w-md">
              {/* Terminal Window */}
              <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-xl border border-teal-400/30 backdrop-blur-md p-4 shadow-2xl mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>
                  <span className="text-teal-300 text-xs font-mono ml-2">terminal</span>
                </div>
                <div className="font-mono text-xs space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-teal-400">$</span>
                    <span className="text-teal-200">git status</span>
                  </div>
                  <div className="text-green-400 pl-4">✓ Working tree clean</div>
                  <div className="flex items-center gap-2">
                    <span className="text-teal-400">$</span>
                    <span className="text-teal-200">npm run build</span>
                  </div>
                  <div className="text-cyan-300 pl-4">→ Building...</div>
                </div>
              </div>

              {/* Code Structure & Git Branches */}
              <div className="grid grid-cols-2 gap-3">
                {/* Code Structure */}
                <div className="bg-gradient-to-br from-teal-50/80 to-cyan-50/80 rounded-lg border border-teal-300/40 backdrop-blur-sm p-3 shadow-lg">
                  <div className="text-teal-700 text-[10px] font-semibold mb-2">Code Structure</div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-teal-500 text-xs">📁</span>
                      <div className="flex-1 h-2 bg-teal-300/50 rounded"></div>
                    </div>
                    <div className="flex items-center gap-2 pl-3">
                      <span className="text-teal-500 text-xs">📄</span>
                      <div className="flex-1 h-1.5 bg-teal-400/50 rounded"></div>
                    </div>
                    <div className="flex items-center gap-2 pl-3">
                      <span className="text-teal-500 text-xs">📄</span>
                      <div className="flex-1 h-1.5 bg-teal-400/50 rounded"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-teal-500 text-xs">📁</span>
                      <div className="flex-1 h-2 bg-teal-300/50 rounded"></div>
                    </div>
                  </div>
                </div>

                {/* Git Branches */}
                <div className="bg-gradient-to-br from-teal-50/80 to-cyan-50/80 rounded-lg border border-teal-300/40 backdrop-blur-sm p-3 shadow-lg">
                  <div className="text-teal-700 text-[10px] font-semibold mb-2">Git Branches</div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <div className="flex-1 h-1.5 bg-teal-400/50 rounded"></div>
                    </div>
                    <div className="flex items-center gap-2 pl-2">
                      <div className="w-0.5 h-3 bg-teal-400/40"></div>
                      <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                      <div className="flex-1 h-1.5 bg-teal-300/50 rounded"></div>
                    </div>
                    <div className="flex items-center gap-2 pl-2">
                      <div className="w-0.5 h-3 bg-teal-400/40"></div>
                      <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                      <div className="flex-1 h-1.5 bg-teal-300/50 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-teal-300/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-cyan-300/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
