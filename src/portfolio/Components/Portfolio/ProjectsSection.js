import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code2, Server, Cpu, Radio, ChevronRight, X, Calendar } from 'lucide-react';
import Button from './ui/button'

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Full-Stack Portfolio Management App',
      subtitle: 'Java (Spring Boot) & React.js',
      category: 'Full Stack',
      icon: Code2,
      color: 'blue',
      period: 'Mar 2025 – May 2025',
      description: 'A comprehensive portfolio management web application with secure authentication, role-based access, and seamless frontend-backend integration.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop',
      highlights: [
        'Architected backend micro-modules using Spring Boot with clean layered architecture',
        'Implemented secure login with JWT authentication and role-based route protection',
        'Built React frontend with state management using hooks and integrated with backend APIs via Axios',
        'Designed MySQL database schema with JPA/Hibernate ORM mappings',
        'Wrote unit-level tests and performed comprehensive API debugging with Postman'
      ],
      technologies: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'JWT', 'Axios', 'JPA/Hibernate'],
      metrics: [
        { label: 'API Endpoints', value: '15+' },
        { label: 'Components', value: '20+' },
        { label: 'Test Coverage', value: '80%' }
      ]
    },
    {
      id: 2,
      title: 'Dual Band Microstrip Patch Antenna',
      subtitle: '5G Communication Research',
      category: 'Hardware',
      icon: Radio,
      color: 'purple',
      period: '4 months',
      description: 'Led the design and simulation of a dual-band antenna for next-generation 5G communication systems, targeting millimeter-wave frequencies.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop',
      highlights: [
        'Led team in design and simulation using ANSYS HFSS software',
        'Successfully targeted 26.48 GHz and 30.93 GHz frequency bands',
        'Achieved excellent return loss and VSWR parameters',
        'Documented comprehensive performance metrics and analysis',
        'Presented integration considerations for compact mobile devices'
      ],
      technologies: ['HFSS', 'Antenna Design', '5G', 'RF Engineering', 'MATLAB'],
      metrics: [
        { label: 'Frequency Bands', value: '2' },
        { label: 'Team Size', value: '4' },
        { label: 'VSWR', value: '<2.0' }
      ]
    },
    {
      id: 3,
      title: 'Automated Irrigation System',
      subtitle: 'IoT & Embedded Systems',
      category: 'IoT',
      icon: Cpu,
      color: 'emerald',
      period: '8 weeks',
      description: 'Designed and implemented an intelligent irrigation system that automates watering based on soil moisture and environmental conditions.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop',
      highlights: [
        'Designed control logic for automated irrigation workflows',
        'Integrated multiple sensors for soil moisture, temperature, and humidity monitoring',
        'Implemented actuator control for water pumps and valves',
        'Reduced manual intervention through smart automation',
        'Built user-friendly monitoring interface'
      ],
      technologies: ['Arduino', 'IoT Sensors', 'Embedded C', 'Circuit Design'],
      metrics: [
        { label: 'Water Saved', value: '40%' },
        { label: 'Sensors', value: '5+' },
        { label: 'Automation', value: '100%' }
      ]
    },
    {
      id: 4,
      title: 'Laser Security System',
      subtitle: 'Embedded Security Module',
      category: 'Embedded',
      icon: Server,
      color: 'rose',
      period: '2 weeks',
      description: 'Built a laser-based perimeter security module for asset protection with real-time intrusion detection and alert mechanisms.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop',
      highlights: [
        'Designed laser-based security perimeter detection system',
        'Implemented hardware interfacing for laser emitters and receivers',
        'Built alarm logic with multiple alert mechanisms',
        'Optimized for low power consumption and reliability',
        'Tested for various environmental conditions'
      ],
      technologies: ['Embedded Systems', 'Laser Technology', 'Alarm Systems', 'Circuit Design'],
      metrics: [
        { label: 'Response Time', value: '<1ms' },
        { label: 'Range', value: '10m' },
        { label: 'Reliability', value: '99%' }
      ]
    }
  ];

  const colorClasses = {
    blue: {
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/30',
      text: 'text-blue-400',
      gradient: 'from-blue-500 to-indigo-500'
    },
    purple: {
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/30',
      text: 'text-purple-400',
      gradient: 'from-purple-500 to-pink-500'
    },
    emerald: {
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/30',
      text: 'text-emerald-400',
      gradient: 'from-emerald-500 to-teal-500'
    },
    rose: {
      bg: 'bg-rose-500/10',
      border: 'border-rose-500/30',
      text: 'text-rose-400',
      gradient: 'from-rose-500 to-orange-500'
    }
  };

  return (
    <section id="projects" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            <Code2 className="w-4 h-4" />
            Featured Projects
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Things I've Built
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A showcase of projects demonstrating my skills in full-stack development, 
            IoT systems, and engineering solutions.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className="relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-slate-600/50 transition-all duration-500">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${colorClasses[project.color].bg} ${colorClasses[project.color].border} ${colorClasses[project.color].text} border backdrop-blur-sm`}>
                      <project.icon className="w-3 h-3" />
                      {project.category}
                    </span>
                  </div>

                  {/* Period badge */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-slate-900/70 backdrop-blur-sm text-slate-300 text-xs">
                      <Calendar className="w-3 h-3" />
                      {project.period}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-3">{project.subtitle}</p>
                  <p className="text-slate-500 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 text-xs font-medium bg-slate-700/50 text-slate-300 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-xs font-medium bg-slate-700/50 text-slate-400 rounded-md">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* View details */}
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-medium ${colorClasses[project.color].text} flex items-center gap-1 group-hover:gap-2 transition-all`}>
                      View Details
                      <ChevronRight className="w-4 h-4" />
                    </span>
                    
                    {/* Metrics preview */}
                    <div className="flex items-center gap-3">
                      {project.metrics.slice(0, 2).map((metric) => (
                        <div key={metric.label} className="text-right">
                          <p className="text-white font-semibold text-sm">{metric.value}</p>
                          <p className="text-slate-500 text-xs">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700 rounded-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal image */}
                <div className="relative h-64">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                </div>

                {/* Modal content */}
                <div className="p-8">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${colorClasses[selectedProject.color].bg} ${colorClasses[selectedProject.color].border} ${colorClasses[selectedProject.color].text} border mb-3`}>
                        <selectedProject.icon className="w-3 h-3" />
                        {selectedProject.category}
                      </span>
                      <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
                      <p className="text-slate-400">{selectedProject.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-6">{selectedProject.description}</p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {selectedProject.metrics.map((metric) => (
                      <div 
                        key={metric.label}
                        className="text-center p-4 bg-slate-800/50 rounded-xl"
                      >
                        <p className={`text-2xl font-bold bg-gradient-to-r ${colorClasses[selectedProject.color].gradient} bg-clip-text text-transparent`}>
                          {metric.value}
                        </p>
                        <p className="text-slate-400 text-sm">{metric.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h3 className="text-white font-semibold mb-3">Key Highlights</h3>
                    <ul className="space-y-2">
                      {selectedProject.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-400 text-sm">
                          <ChevronRight className={`w-4 h-4 ${colorClasses[selectedProject.color].text} mt-0.5 flex-shrink-0`} />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-white font-semibold mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className={`px-3 py-1.5 text-sm font-medium ${colorClasses[selectedProject.color].bg} ${colorClasses[selectedProject.color].text} rounded-lg border ${colorClasses[selectedProject.color].border}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}