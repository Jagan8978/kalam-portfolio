import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send, ArrowRight, CheckCircle } from 'lucide-react';
import Button from './ui/button'
import Input from './ui/input'
import Textarea from './ui/textarea'
import { toast } from 'sonner';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'jaganmohankalam@gmail.com',
      href: 'mailto:jaganmohankalam@gmail.com',
      color: 'blue'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8978510368',
      href: 'tel:+918978510368',
      color: 'emerald'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bangalore / Tirupati, India',
      href: null,
      color: 'purple'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/kalamjaganmohan',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Jagan8978',
      color: 'from-slate-600 to-slate-800'
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const colorClasses = {
    blue: 'bg-blue-500/10 border-blue-500/30 text-blue-400 hover:bg-blue-500/20',
    emerald: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20',
    purple: 'bg-purple-500/10 border-purple-500/30 text-purple-400 hover:bg-purple-500/20'
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            <Mail className="w-4 h-4" />
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            I'm always open to new opportunities and interesting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-4 mb-8">
              {contactInfo.map((info) => (
                <motion.div
                  key={info.label}
                  whileHover={{ x: 5 }}
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${colorClasses[info.color]}`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-slate-800`}>
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">{info.label}</p>
                    {info.href ? (
                      <a 
                        href={info.href}
                        className="text-white font-medium hover:underline"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                      <social.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-center text-slate-400 text-xs mt-2">{social.label}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick response promise */}
            <div className="mt-8 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <p className="text-emerald-400 text-sm font-medium">
                  Usually responds within 24 hours
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 text-sm mb-2">Your Name</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      required
                      className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-sm mb-2">Email Address</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      required
                      className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 text-sm mb-2">Subject</label>
                  <Input
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="What's this about?"
                    required
                    className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 text-sm mb-2">Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project or opportunity..."
                    required
                    rows={5}
                    className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-blue-500 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-6 text-lg rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <Send className="w-5 h-5" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}