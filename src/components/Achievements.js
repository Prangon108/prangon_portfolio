import React from 'react';

const Achievements = () => {
  const achievements = [
    {
      title: "ICPC Regional Contest",
      description: "Secured third place in the 2023 ICPC East Central North America Regional Contest at Grand Valley State University, Michigan.",
      icon: "🥇",
      gradient: "from-yellow-400 to-orange-400"
    },
    {
      title: "Dean's List",
      description: "Awarded Dean's List honors for 9 consecutive semesters.",
      icon: "📚",
      gradient: "from-teal-400 to-cyan-400"
    },
    {
      title: "Summa Cum Laude",
      description: "Graduated Summa Cum Laude.",
      icon: "🎓",
      gradient: "from-purple-400 to-pink-400"
    },
    {
      title: "Best Student",
      description: "Recognized as Best Student of the Semester for Winter 2025 with a perfect GPA of 4.0/4.0.",
      icon: "⭐",
      gradient: "from-cyan-400 to-teal-400"
    }
  ];

  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 bg-teal-50/50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-200/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-700 bg-clip-text text-transparent">
            Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="relative group">
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${achievement.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-300`}></div>
              <div className="relative bg-gradient-to-br from-white to-teal-50/80 backdrop-blur-sm border-2 border-teal-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.gradient} flex items-center justify-center text-3xl shadow-lg flex-shrink-0`}>
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-teal-900 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-teal-700 leading-relaxed text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
