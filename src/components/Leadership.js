import React from 'react';

const Leadership = () => {
  return (
    <section id="leadership" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-teal-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-100/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-700 bg-clip-text text-transparent">
            Leadership & Volunteering
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
          <div className="relative bg-gradient-to-br from-white to-teal-50/80 backdrop-blur-sm border-2 border-teal-200/50 rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="mb-8 pb-8 border-b-2 border-teal-100/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-3xl shadow-lg">
                  👨‍🏫
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-teal-900 mb-2">
                    Lead Instructor
                  </h3>
                  <p className="text-teal-700 font-semibold text-lg">
                    DACEP Summer Camp at Wayne State University
                  </p>
                </div>
              </div>
              <div className="inline-block bg-teal-100/50 border-2 border-teal-300/50 rounded-xl px-4 py-2">
                <span className="text-teal-800 font-semibold text-sm">Jun. 2023 – Jul. 2023</span>
              </div>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-4 text-teal-800 leading-relaxed">
                <span className="mt-2 flex-shrink-0 w-2 h-2 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full"></span>
                <span className="flex-1">Collaborated with camp staff through regular meetings to share updates and improve program delivery.</span>
              </li>
              <li className="flex items-start gap-4 text-teal-800 leading-relaxed">
                <span className="mt-2 flex-shrink-0 w-2 h-2 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full"></span>
                <span className="flex-1">Helped design and implement curriculum by creating lesson plans and organizing aligned activities.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
