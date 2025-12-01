import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Rocket, GraduationCap, Target, Heart } from 'lucide-react';


export default function AboutSection() {
  const highlights = [
    {
      icon: Server,
      title: 'Backend Focused',
      description: 'Specializing in Spring Boot microservices with clean, layered architecture'
    },
    {
      icon: Code2,
      title: 'Full Stack Capable',
      description: 'Bridging backend APIs with React.js frontends for seamless integration'
    },
    {
      icon: Database,
      title: 'Data Driven',
      description: 'Designing optimized MySQL schemas with JPA/Hibernate mappings'
    },
    {
      icon: Rocket,
      title: 'Production Ready',
      description: 'Building secure, scalable solutions with JWT auth and best practices'
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-900 relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Passionate About Building
            <span className="block text-slate-400 text-2xl sm:text-3xl lg:text-4xl font-normal mt-2">
              Great Software
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Profile image in About section */}
            <div className="mb-8 flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl blur-2xl opacity-20" />
                <div className="relative w-32 h-32 rounded-2xl overflow-hidden border-2 border-slate-700/50 shadow-xl">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692a9441e0c72e42b1f4e80b/821bb4c9e_me.jpg"
                    alt="Kalam Jagan Mohan"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p className="text-lg">
                Hey there! I'm <span className="text-white font-semibold">Jagan</span>, a Java developer who loves turning ideas into scalable, production-ready applications. My journey in tech started with a curiosity about how things work behind the scenes—and that curiosity led me to backend development.
              </p>
              
              <p>
                During my internship at <span className="text-blue-400 font-medium">Mphasis</span>, I got hands-on experience building RESTful services with Spring Boot, implementing secure authentication with JWT, and collaborating with frontend teams to deliver complete solutions. It was challenging, exciting, and exactly where I wanted to be.
              </p>
              
              <p>
                What drives me? The satisfaction of writing clean code that solves real problems. Whether it's designing database schemas, debugging tricky API flows, or optimizing performance—I'm all in. I believe great software is built through attention to detail, continuous learning, and genuine collaboration.
              </p>

              <p>
                When I'm not coding, you'll find me exploring new technologies, organizing tech events, or mentoring fellow students. I'm always open to new opportunities and interesting conversations!
              </p>
            </div>

            {/* Quick facts */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <GraduationCap className="w-5 h-5 text-emerald-400" />
                <div>
                  <p className="text-white font-medium">B.Tech ECE</p>
                  <p className="text-slate-400 text-sm">Class of 2025</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <Target className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-white font-medium">Full Stack</p>
                  <p className="text-slate-400 text-sm">Java + React</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Highlights grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="group p-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 p-6 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-2xl border border-slate-700/50"
        >
          <div className="flex flex-wrap justify-center gap-6 sm:gap-12">
            {[
              { icon: Heart, text: 'Clean Code Advocate' },
              { icon: Target, text: 'Detail Oriented' },
              { icon: Rocket, text: 'Fast Learner' },
            ].map((value) => (
              <div key={value.text} className="flex items-center gap-2 text-slate-300">
                <value.icon className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium">{value.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}