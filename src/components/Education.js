import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-teal-50/50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-200/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-700 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <div className="relative bg-gradient-to-br from-white/90 to-teal-50/80 backdrop-blur-sm border-2 border-teal-200/50 rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-6 pb-6 border-b-2 border-teal-100/50">
                <div className="flex-1">
                  <div className="inline-block mb-3">
                    <span className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xs font-semibold px-3 py-1 rounded-full">University</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-teal-900 mb-3">
                    Wayne State University
                  </h3>
                  <p className="text-xl text-teal-700 font-semibold mb-1">Bachelor of Science</p>
                  <p className="text-lg text-teal-600">Computer Science</p>
                </div>
                <div className="text-right">
                  <div className="inline-block bg-teal-100/50 border-2 border-teal-300/50 rounded-xl px-4 py-2">
                    <span className="text-teal-700 font-semibold text-sm block mb-1">Graduation</span>
                    <span className="text-teal-800 font-bold text-lg">May 2025</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-6">
                <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-teal-300 to-transparent"></div>
                <div className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl px-8 py-4 shadow-lg">
                  <div className="flex items-baseline gap-2">
                    <span className="text-teal-50 text-sm font-medium">GPA</span>
                    <span className="text-white text-4xl font-bold">4.0</span>
                  </div>
                  <div className="text-teal-100 text-xs mt-1">Perfect Score</div>
                </div>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-teal-300 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
