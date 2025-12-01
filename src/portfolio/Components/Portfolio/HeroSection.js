import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Button from './ui/button'


export default function HeroSection() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Profile Image - Mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="lg:hidden mb-8 flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full blur-2xl opacity-30 animate-pulse" />
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-slate-700/50 shadow-2xl">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692a9441e0c72e42b1f4e80b/821bb4c9e_me.jpg"
                    alt="Kalam Jagan Mohan"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </motion.div>

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 text-sm font-medium">Available for opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Kalam Jagan
              <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Mohan
              </span>
            </motion.h1>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-6"
            >
              <p className="text-xl sm:text-2xl text-slate-300 font-light">
                Full Stack Developer
              </p>
              <p className="text-lg text-blue-400 font-medium mt-1">
                Java • Spring Boot • React.js
              </p>
            </motion.div>

            {/* Tagline */}
            <motion.p 
              className="text-slate-400 text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Building scalable backend services and seamless user experiences. 
              Turning complex problems into elegant, production-ready solutions.
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="flex items-center justify-center lg:justify-start gap-2 text-slate-500 mb-8"
            >
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Bangalore / Tirupati, India</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('projects')}
                className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                View My Work
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <a 
                href="https://linkedin.com/in/kalamjaganmohan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/Jagan8978" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-white hover:border-slate-500/50 hover:bg-slate-800 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="mailto:jaganmohankalam@gmail.com"
                className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-slate-800 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="tel:+918978510368"
                className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-purple-400 hover:border-purple-500/50 hover:bg-slate-800 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Profile & Stats */}
          <motion.div 
            className="flex-1 w-full max-w-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Profile Image - Desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="hidden lg:flex justify-center mb-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full blur-3xl opacity-30 animate-pulse" />
                <div className="relative w-56 h-56 rounded-full overflow-hidden border-4 border-slate-700/50 shadow-2xl ring-4 ring-blue-500/20">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692a9441e0c72e42b1f4e80b/821bb4c9e_me.jpg"
                    alt="Kalam Jagan Mohan"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Decorative ring */}
                <div className="absolute -inset-4 border-2 border-dashed border-blue-500/20 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '3+', label: 'Internships', color: 'from-blue-500 to-blue-600' },
                { value: '5+', label: 'Projects', color: 'from-indigo-500 to-purple-600' },
                { value: '8.83', label: 'CGPA', color: 'from-emerald-500 to-teal-600' },
                { value: '6+', label: 'Certifications', color: 'from-amber-500 to-orange-600' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                  <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center hover:border-slate-600/50 transition-all duration-300">
                    <p className={`text-3xl sm:text-4xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </p>
                    <p className="text-slate-400 text-sm mt-1">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tech stack preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-6 p-4 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl"
            >
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Spring Boot', 'React.js', 'MySQL', 'REST APIs', 'JWT'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1.5 text-xs font-medium bg-slate-700/50 text-slate-300 rounded-lg border border-slate-600/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <button 
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}