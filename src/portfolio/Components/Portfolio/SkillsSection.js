import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Wrench, Brain, Layers } from 'lucide-react';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills', icon: Layers },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'frontend', label: 'Frontend', icon: Code },
    { id: 'database', label: 'Database', icon: Database },
    { id: 'tools', label: 'Tools', icon: Wrench },
    { id: 'concepts', label: 'Concepts', icon: Brain },
  ];

  const skills = [
    // Backend
    { name: 'Java', level: 90, category: 'backend', color: 'from-orange-500 to-red-500' },
    { name: 'Spring Boot', level: 85, category: 'backend', color: 'from-green-500 to-emerald-500' },
    { name: 'Spring MVC', level: 80, category: 'backend', color: 'from-green-400 to-teal-500' },
    { name: 'Hibernate/JPA', level: 80, category: 'backend', color: 'from-amber-500 to-orange-500' },
    { name: 'Python', level: 70, category: 'backend', color: 'from-blue-500 to-yellow-500' },
    
    // Frontend
    { name: 'React.js', level: 80, category: 'frontend', color: 'from-cyan-400 to-blue-500' },
    { name: 'JavaScript (ES6+)', level: 80, category: 'frontend', color: 'from-yellow-400 to-amber-500' },
    { name: 'HTML5', level: 90, category: 'frontend', color: 'from-orange-500 to-red-500' },
    { name: 'CSS3', level: 85, category: 'frontend', color: 'from-blue-500 to-indigo-500' },
    { name: 'Axios', level: 85, category: 'frontend', color: 'from-purple-500 to-indigo-500' },
    
    // Database
    { name: 'MySQL', level: 85, category: 'database', color: 'from-blue-500 to-cyan-500' },
    { name: 'MySQL Workbench', level: 80, category: 'database', color: 'from-teal-500 to-cyan-500' },
    
    // Tools
    { name: 'Git', level: 85, category: 'tools', color: 'from-orange-500 to-red-600' },
    { name: 'GitHub', level: 85, category: 'tools', color: 'from-slate-600 to-slate-800' },
    { name: 'Postman', level: 90, category: 'tools', color: 'from-orange-500 to-amber-500' },
    { name: 'Maven', level: 75, category: 'tools', color: 'from-red-500 to-rose-600' },
    { name: 'VS Code', level: 90, category: 'tools', color: 'from-blue-500 to-blue-600' },
    
    // Concepts
    { name: 'REST APIs', level: 90, category: 'concepts', color: 'from-emerald-500 to-green-500' },
    { name: 'JWT Authentication', level: 85, category: 'concepts', color: 'from-pink-500 to-rose-500' },
    { name: 'OOP', level: 90, category: 'concepts', color: 'from-violet-500 to-purple-500' },
    { name: 'Data Structures', level: 80, category: 'concepts', color: 'from-indigo-500 to-blue-500' },
    { name: 'CRUD Operations', level: 90, category: 'concepts', color: 'from-teal-500 to-emerald-500' },
    { name: 'API Integration', level: 85, category: 'concepts', color: 'from-cyan-500 to-blue-500' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-4">
            Technical Skills
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            My Tech Arsenal
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life. From backend services to frontend interfaces, 
            here's what powers my development workflow.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-700/50'
              }`}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className="group relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-5 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-medium">{skill.name}</h3>
                <span className="text-sm text-slate-400">{skill.level}%</span>
              </div>
              
              {/* Progress bar */}
              <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.03 }}
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                />
              </div>

              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300 blur-xl`} />
            </motion.div>
          ))}
        </div>

        {/* Skills summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            { label: 'Languages', value: '5+', sublabel: 'Programming' },
            { label: 'Frameworks', value: '4+', sublabel: 'Modern' },
            { label: 'Tools', value: '8+', sublabel: 'Development' },
            { label: 'Concepts', value: '10+', sublabel: 'Core' },
          ].map((stat) => (
            <div 
              key={stat.label}
              className="text-center p-6 bg-slate-800/20 rounded-2xl border border-slate-700/30"
            >
              <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-blue-400 font-medium text-sm">{stat.label}</p>
              <p className="text-slate-500 text-xs">{stat.sublabel}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}