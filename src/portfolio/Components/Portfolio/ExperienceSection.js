import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin, CheckCircle2, Briefcase } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      role: 'Associate Software Engineer Intern',
      company: 'Mphasis Pvt. Ltd.',
      type: 'Full Stack / Backend Intern',
      location: 'Bangalore, Pune',
      period: 'Jan 2025 – May 2025',
      current: true,
      color: 'blue',
      highlights: [
        'Developed and maintained backend RESTful services using Spring Boot with layered architecture (controller-service-repository)',
        'Implemented authentication and authorization using JWT and role-based access control for secure APIs',
        'Built integration points between backend and React.js frontend using Axios; supported frontend team during UI integration',
        'Designed and optimized MySQL schemas; wrote JPA/Hibernate mappings for entities with CRUD endpoints',
        'Performed API testing with Postman, debugging, and performance improvements using Git and Agile workflows'
      ],
      technologies: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'JWT', 'Axios', 'Git']
    },
    {
      id: 2,
      role: 'Python Development Intern',
      company: 'SlashMark (AICTE & APSCHE)',
      type: 'Python Developer Intern',
      location: 'Remote',
      period: 'Nov 2024 – Jan 2025',
      current: false,
      color: 'emerald',
      highlights: [
        'Delivered Python-based projects including To-Do App, Number Guessing Game, AI Chatbot, and License Plate Recognition',
        'Emphasized modular, testable code structure across all projects',
        'Gained hands-on experience with Python libraries and project packaging',
        'Improved understanding of backend logic and pre-production workflows'
      ],
      technologies: ['Python', 'OpenCV', 'AI/ML', 'Project Packaging']
    },
    {
      id: 3,
      role: 'Salesforce Developer Virtual Intern',
      company: 'SmartInternz',
      type: 'Salesforce Dev Intern',
      location: 'Virtual',
      period: 'Nov 2023 – Dec 2023',
      current: false,
      color: 'indigo',
      highlights: [
        'Completed comprehensive modules on Apex programming, Lightning Web Components (LWC), and REST APIs',
        'Earned Super Badges including Apex Specialist and Process Automation Specialist',
        'Gained expertise in Salesforce platform development and CRM customization'
      ],
      technologies: ['Apex', 'LWC', 'REST APIs', 'Salesforce']
    }
  ];

  const colorClasses = {
    blue: {
      badge: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
      dot: 'bg-blue-500',
      glow: 'shadow-blue-500/20'
    },
    emerald: {
      badge: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
      dot: 'bg-emerald-500',
      glow: 'shadow-emerald-500/20'
    },
    indigo: {
      badge: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400',
      dot: 'bg-indigo-500',
      glow: 'shadow-indigo-500/20'
    }
  };

  return (
    <section id="experience" className="py-24 bg-slate-900 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
            <Briefcase className="w-4 h-4" />
            Professional Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Where I've Worked
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My professional journey building real-world applications and gaining hands-on experience
            with industry-standard technologies.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-emerald-500/50 to-indigo-500/50 transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-0 transform -translate-x-1/2">
                <div className={`w-4 h-4 rounded-full ${colorClasses[exp.color].dot} ring-4 ring-slate-900 shadow-lg ${colorClasses[exp.color].glow}`} />
              </div>

              {/* Content card */}
              <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 text-xs font-medium bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30">
                            Recent
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-slate-300">
                        <Building2 className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <p className="text-sm text-slate-500 mt-1">{exp.type}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1.5 text-slate-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-500 text-sm mt-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-400 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-xs font-medium rounded-lg border ${colorClasses[exp.color].badge}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}