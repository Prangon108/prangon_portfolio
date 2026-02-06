import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Application Support Engineer",
      company: "Wayne County Government",
      location: "Detroit, MI",
      period: "Aug. 2025 - Present",
      responsibilities: [
        "Implement and monitor CI/CD pipelines, patching, and release activities in a SaaS environment, ensuring application stability, data integrity, and compliance.",
        "Manage application security, roles, and profiles, and perform complex data loading, transformation, and validation using HDL, Spreadsheet Loaders, and SQL-based analytics.",
        "Support and manage applications deployed in Oracle Cloud Infrastructure (OCI), contributing to automation and data analytics efforts using Terraform, Python, Bash, and PowerShell scripting.",
        "Develop and maintain REST API and Oracle Integration Cloud (OIC) integrations to enable reliable data exchange, analytics, and operational efficiency across enterprise systems.",
        "Collaborate with cross-functional county divisions and vendors to deliver scalable, data-driven solutions; maintain runbooks, performance dashboards, and incident response playbooks."
      ]
    },
    {
      title: "Software Developer Co-op",
      company: "Partify",
      location: "Fraser, MI",
      period: "Mar. 2025 - Aug. 2025",
      responsibilities: [
        "Developed and integrated custom functionalities for the Partify storefront using JavaScript, CSS, and Liquid.",
        "Utilized the Shopify CLI to build, test, and deploy customized solutions directly to the Partify platform.",
        "Performed ongoing front-end maintenance by delivering updates, resolving bugs, and implementing performance enhancements.",
        "Partnered with teammates to ensure new feature releases aligned with overall project objectives and improved user experience."
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Rocket Companies",
      location: "Detroit, MI",
      period: "Jun. 2024 - Aug. 2024",
      responsibilities: [
        "Utilized the Blazor framework, including Razor, CSS, and C#, to develop and maintain web applications, API endpoints, and build consumers and producers for Confluent Kafka and other services.",
        "Managed and optimized databases using SQL to enable seamless interaction between web applications and backend data storage.",
        "Applied agile methodologies to enhance team collaboration and efficiently complete software engineering tasks.",
        "Deployed multiple code updates, applications, and database changes to production, ensuring reliable, high-quality solutions for clients."
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "ETAS Inc",
      location: "Plymouth, MI",
      period: "Jan. 2023 - May. 2023",
      responsibilities: [
        "Developed a Node.js (Express) application that enables transmission of CAN signals over IP using Raspberry Pi and custom Linux shell scripts.",
        "Assisted in building a cloud-based fleet management solution, participating in Agile sprints and back-end testing with Mocha.",
        "Supported deployment to AWS test environments using Jenkins, and maintained technical documentation in Confluence."
      ]
    },
    {
      title: "Software Intern",
      company: "Wayne State University",
      location: "Detroit, MI",
      period: "Sep. 2022 - Dec. 2023",
      responsibilities: [
        "Developed and integrated new functions in DegreeWorks, including a transfer requirements query for streamlined credit evaluations.",
        "Updated the PostgreSQL database, website, and technical documentation for project tracking."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-teal-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-100/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-700 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="relative">
          {/* Enhanced Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 via-cyan-400 to-teal-500 hidden md:block rounded-full shadow-lg"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-0 md:pl-20">
                {/* Enhanced Timeline dot */}
                <div className="absolute left-6 top-8 w-5 h-5 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full border-4 border-white shadow-xl hidden md:block ring-2 ring-teal-200"></div>
                
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
                  <div className="relative bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm border-2 border-teal-200/50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6 pb-6 border-b-2 border-teal-100/50">
                      <div className="flex-1">
                        {index === 0 && (
                          <span className="inline-block bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">Current</span>
                        )}
                        <h3 className="text-2xl md:text-3xl font-bold text-teal-900 mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-teal-700 font-semibold text-lg">
                            {exp.company}
                          </p>
                          <span className="text-teal-400">•</span>
                          <p className="text-teal-600">{exp.location}</p>
                        </div>
                      </div>
                      <div className="bg-teal-100/50 border-2 border-teal-300/50 rounded-xl px-4 py-2">
                        <span className="text-teal-800 text-sm font-semibold whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-4 text-teal-800 leading-relaxed">
                          <span className="mt-2 flex-shrink-0 w-2 h-2 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full"></span>
                          <span className="flex-1">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
