import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: "GroceryPro",
      subtitle: "Smart Grocery Price Comparison App",
      description: "Led the development of a web app to compare grocery prices between stores and optimize based on travel cost.",
      features: [
        "Built responsive UI with React and Tailwind; implemented real-time search and filtering.",
        "Integrated Django REST APIs with Firecrawl and Google Maps for pricing and location data, using the Distance Matrix and the Dijkstra algorithm to compute optimal store routes.",
        "Managed architecture, tasks, and Git workflow; achieved 70% faster comparisons and 25–35% user savings."
      ],
      codeLink: "https://github.com/Prangon108/Grocery_Pro",
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      name: "AI-Study-Companion",
      subtitle: "AI-Powered Learning Platform",
      description: "Developed a full-stack AI-assisted study platform enabling smart flashcard and quiz generation from documents using OpenAI GPT-4o.",
      features: [
        "Designed an interactive, responsive UI with React and Redux; integrated educational games for engaging learning experiences.",
        "Built Firebase backend with Realtime Database, Authentication, and Cloud Functions for seamless user data, login, and content storage.",
        "Enabled voice input via Web Speech API, and real-time collaboration through sharable links for quizzes and flashcards."
      ],
      codeLink: "https://github.com/Prangon108/AI-Study-Companion",
      gradient: "from-cyan-500 to-teal-500"
    },
    {
      name: "Grade Entry System",
      subtitle: "Full-Stack Grade Management Platform",
      description: "Developed a full-stack web application for teachers to manage students, courses, and grades using ASP.NET Core Web API (C#) and React (TypeScript).",
      features: [
        "Implemented secure JWT-based authentication with protected routes and role-based API access to ensure data privacy and session integrity.",
        "Designed RESTful APIs with Entity Framework Core and SQLite to support efficient CRUD operations and scalable backend architecture.",
        "Built a responsive, modern UI with Tailwind CSS and Vite, featuring tab navigation, toast notifications, and confirmation dialogs for improved UX."
      ],
      codeLink: "https://github.com/Prangon108/GradeEntrySystem",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "SmartScheduler",
      subtitle: "Automated Meeting Conflict Resolver",
      description: "Developed a lightweight scheduling application using Java and Spring Boot to automate meeting conflict detection and suggest optimal time slots, adopted by more than 450+ active users.",
      features: [
        "Implemented interval trees and efficient sorting algorithms to detect overlapping meetings across multiple calendars in real time.",
        "Designed RESTful APIs with Spring Boot for seamless integration with front-end applications and calendar systems like Outlook and Google Calendar.",
        "Applied priority queues to rank suggested time slots based on participant availability, meeting duration, and preferences, reducing manual scheduling efforts, and minimizing conflicts.",
        "Wrote comprehensive unit tests using JUnit to ensure reliability and correctness of scheduling logic and API endpoints."
      ],
      codeLink: "https://github.com/Prangon108/",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-teal-50/50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-200/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-700 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="relative group">
              <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300`}></div>
              <div className="relative bg-gradient-to-br from-white to-teal-50/80 backdrop-blur-sm border-2 border-teal-200/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
                <div className="mb-6 pb-6 border-b-2 border-teal-100/50">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-teal-900 mb-2">
                        {project.name}
                      </h3>
                      <p className="text-teal-600 font-medium">{project.subtitle}</p>
                    </div>
                    {project.codeLink && (
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`bg-gradient-to-r ${project.gradient} text-white px-4 py-2 rounded-lg font-semibold text-sm hover:scale-105 transition-transform shadow-lg hover:shadow-xl`}
                      >
                        View Code →
                      </a>
                    )}
                  </div>
                  <p className="text-teal-800 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <ul className="space-y-3 flex-grow">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-teal-700 text-sm leading-relaxed">
                      <span className={`mt-1.5 flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white text-xs font-bold`}>
                        ✓
                      </span>
                      <span className="flex-1">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
