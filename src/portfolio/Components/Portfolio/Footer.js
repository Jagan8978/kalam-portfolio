import React from 'react';
import { Heart, ArrowUp, Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/kalamjaganmohan', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/Jagan8978', label: 'GitHub' },
    { icon: Mail, href: 'mailto:jaganmohankalam@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">
              Jagan<span className="text-blue-500">.</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Full Stack Developer passionate about building scalable applications 
              and creating seamless user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-slate-800">
          <p className="text-slate-500 text-sm flex items-center gap-1">
            © {currentYear} Kalam Jagan Mohan. Built with
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          </p>
          
          <button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors"
          >
            Back to top
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}