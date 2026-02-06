import React from 'react';

const TechnicalSkills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: "Python, Java, C#, .NET, JavaScript, TypeScript, HTML, CSS, Razor, C, C++, Swift, SQL, PostgreSQL",
      icon: "💻"
    },
    {
      title: "Frameworks & Libraries",
      skills: "React, Node.js, Express.js, ASP.NET, Django, Spring Boot, JUnit, OpenCV",
      icon: "⚛️"
    },
    {
      title: "Cloud & DevOps",
      skills: "AWS, Azure, Google Cloud Platform, Firebase, Docker, Kubernetes, Helm, GitHub Actions, CI/CD Pipelines",
      icon: "☁️"
    },
    {
      title: "Databases",
      skills: "PostgreSQL, MySQL, MongoDB, SQL Server, Firestore",
      icon: "🗄️"
    },
    {
      title: "Tools",
      skills: "Git, GitHub, Visual Studio Code, Visual Studio 2022/2019, JetBrains IDEs, Xcode, MATLAB, Swagger, Jira",
      icon: "🛠️"
    },
    {
      title: "API & Data Exchange",
      skills: "RESTful APIs, API Endpoints, Confluent Kafka, Swagger",
      icon: "🔌"
    },
    {
      title: "Methodologies",
      skills: "Agile (Scrum, Kanban), Waterfall, DevOps",
      icon: "📋"
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-teal-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-100/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-700 bg-clip-text text-transparent">
            Technical Qualifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
              <div className="relative bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm border-2 border-teal-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-4 pb-4 border-b-2 border-teal-100/50">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-teal-800 font-bold text-lg">
                    {category.title}
                  </h3>
                </div>
                <p className="text-teal-700 text-sm leading-relaxed">
                  {category.skills}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
