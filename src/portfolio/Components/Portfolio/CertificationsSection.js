import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, CheckCircle2, Sparkles } from 'lucide-react';

export default function CertificationsSection() {
  const certifications = [
    {
      id: 1,
      name: 'Joy of Python',
      issuer: 'NPTEL',
      category: 'Programming',
      color: 'blue',
      verified: true
    },
    {
      id: 2,
      name: 'Cloud Computing',
      issuer: 'NPTEL',
      category: 'Cloud',
      color: 'cyan',
      verified: true
    },
    {
      id: 3,
      name: 'Java Certification',
      issuer: 'SlashMark',
      category: 'Programming',
      color: 'orange',
      verified: true
    },
    {
      id: 4,
      name: 'IoT Certification',
      issuer: 'Blackbuck Engineers',
      category: 'IoT',
      color: 'emerald',
      verified: true
    },
    {
      id: 5,
      name: 'Technical Training',
      issuer: 'Xcelr',
      category: 'Development',
      color: 'purple',
      verified: true
    },
    {
      id: 6,
      name: 'Apex Specialist',
      issuer: 'Salesforce',
      category: 'Salesforce',
      color: 'sky',
      verified: true,
      badge: true
    },
    {
      id: 7,
      name: 'Process Automation Specialist',
      issuer: 'Salesforce',
      category: 'Salesforce',
      color: 'sky',
      verified: true,
      badge: true
    },
    {
      id: 8,
      name: 'Developer Super Set',
      issuer: 'Salesforce',
      category: 'Salesforce',
      color: 'sky',
      verified: true,
      badge: true
    }
  ];

  const colorClasses = {
    blue: 'from-blue-500 to-indigo-500',
    cyan: 'from-cyan-500 to-blue-500',
    orange: 'from-orange-500 to-red-500',
    emerald: 'from-emerald-500 to-teal-500',
    purple: 'from-purple-500 to-pink-500',
    sky: 'from-sky-500 to-blue-500'
  };

  const salesforceCerts = certifications.filter(c => c.badge);
  const otherCerts = certifications.filter(c => !c.badge);

  return (
    <section id="certifications" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            Certifications
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Credentials & Badges
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Industry-recognized certifications and super badges that validate my technical expertise.
          </p>
        </motion.div>

        {/* Salesforce Super Badges - Featured */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-5 h-5 text-sky-400" />
            <h3 className="text-xl font-semibold text-white">Salesforce Super Badges</h3>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-4">
            {salesforceCerts.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[cert.color]} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center hover:border-sky-500/30 transition-all duration-300">
                  {/* Badge icon */}
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-sky-500/20 to-blue-500/20 flex items-center justify-center">
                    <Award className="w-8 h-8 text-sky-400" />
                  </div>
                  
                  <h4 className="text-white font-semibold mb-1">{cert.name}</h4>
                  <p className="text-sky-400 text-sm font-medium mb-3">{cert.issuer}</p>
                  
                  {cert.verified && (
                    <div className="flex items-center justify-center gap-1 text-emerald-400 text-xs">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Verified</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-5 h-5 text-amber-400" />
            <h3 className="text-xl font-semibold text-white">Professional Certifications</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherCerts.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-5 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    {/* Gradient icon */}
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClasses[cert.color]} bg-opacity-20 flex items-center justify-center flex-shrink-0`}>
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${colorClasses[cert.color]} flex items-center justify-center`}>
                        <Award className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-medium truncate">{cert.name}</h4>
                      <p className="text-slate-400 text-sm">{cert.issuer}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="px-2 py-0.5 text-xs font-medium bg-slate-700/50 text-slate-300 rounded">
                          {cert.category}
                        </span>
                        {cert.verified && (
                          <span className="flex items-center gap-1 text-emerald-400 text-xs">
                            <CheckCircle2 className="w-3 h-3" />
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 p-6 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-red-500/10 rounded-2xl border border-slate-700/50"
        >
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { value: '8+', label: 'Certifications' },
              { value: '3', label: 'Super Badges' },
              { value: '5', label: 'Platforms' },
              { value: '100%', label: 'Verified' }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-slate-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}