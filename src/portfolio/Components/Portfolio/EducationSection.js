import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, TrendingUp } from 'lucide-react';

export default function EducationSection() {
  const education = [
    {
      id: 1,
      degree: 'B.Tech in Electronics and Communication Engineering',
      institution: 'Annamacharya Institute of Technology and Sciences',
      location: 'Tirupati',
      period: '2021 – 2025',
      grade: '8.83 CGPA',
      gradeType: 'CGPA',
      current: true,
      color: 'blue',
      highlights: [
        'Specialized in embedded systems and communication technologies',
        'Student Coordinator for Training & Placement Cell',
        'Organized 5+ technical events as Event Organizer'
      ]
    },
    {
      id: 2,
      degree: 'Intermediate (Class XII)',
      institution: 'Sri Venkata Reddy Sidhartha Junior College',
      location: 'Madanapalle',
      period: '2019 – 2021',
      grade: '92.3%',
      gradeType: 'Percentage',
      current: false,
      color: 'emerald',
      highlights: [
        'Strong foundation in Mathematics and Physics',
        'Participated in science exhibitions and competitions'
      ]
    },
    {
      id: 3,
      degree: 'SSC (Class X)',
      institution: 'S.V.L. English Medium High School',
      location: 'Madanapalle',
      period: '2018 – 2019',
      grade: '9.8 GPA',
      gradeType: 'GPA',
      current: false,
      color: 'purple',
      highlights: [
        'Consistent academic excellence',
        'Active participation in school activities'
      ]
    }
  ];

  const colorClasses = {
    blue: {
      badge: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
      icon: 'text-blue-400 bg-blue-500/20',
      gradient: 'from-blue-500 to-indigo-500'
    },
    emerald: {
      badge: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
      icon: 'text-emerald-400 bg-emerald-500/20',
      gradient: 'from-emerald-500 to-teal-500'
    },
    purple: {
      badge: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
      icon: 'text-purple-400 bg-purple-500/20',
      gradient: 'from-purple-500 to-pink-500'
    }
  };

  return (
    <section id="education" className="py-24 bg-slate-900 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-4">
            <GraduationCap className="w-4 h-4" />
            Education
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Academic Journey
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My educational background that laid the foundation for my technical skills
            and passion for technology.
          </p>
        </motion.div>

        {/* Education cards */}
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${colorClasses[edu.color].icon}`}>
                    <GraduationCap className="w-7 h-7" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                          {edu.current && (
                            <span className="px-2 py-0.5 text-xs font-medium bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-slate-300 font-medium">{edu.institution}</p>
                        <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-slate-400">
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4" />
                            {edu.location}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            {edu.period}
                          </span>
                        </div>
                      </div>

                      {/* Grade badge */}
                      <div className={`px-4 py-2 rounded-xl border ${colorClasses[edu.color].badge}`}>
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4" />
                          <div>
                            <p className="font-bold">{edu.grade}</p>
                            <p className="text-xs opacity-80">{edu.gradeType}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="flex flex-wrap gap-2 mt-4">
                      {edu.highlights.map((highlight, i) => (
                        <li 
                          key={i}
                          className="text-sm text-slate-400 bg-slate-800/50 px-3 py-1.5 rounded-lg"
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { icon: Award, label: '1st Prize', sublabel: 'PPT Competition' },
            { icon: Award, label: '2nd Prize', sublabel: 'Quiz Competition' },
            { icon: GraduationCap, label: '5+ Events', sublabel: 'Organized' },
            { icon: TrendingUp, label: 'Placement', sublabel: 'Coordinator' },
          ].map((item, index) => (
            <div 
              key={item.label}
              className="text-center p-4 bg-slate-800/30 rounded-xl border border-slate-700/50"
            >
              <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-amber-500/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-amber-400" />
              </div>
              <p className="text-white font-semibold">{item.label}</p>
              <p className="text-slate-400 text-xs">{item.sublabel}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}