import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-pink/20 rounded-full blur-[120px] animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-brand-blue/10 pointer-events-none" />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-brand-purple font-display mb-6 tracking-[0.4em] uppercase text-[10px] font-bold">Based in Karnataka, India</h2>
          <h1 className="text-5xl md:text-8xl font-display font-black mb-8 tracking-tighter leading-[0.85] text-slate-50">
            RADHIKA <br /> <span className="text-gradient">SALOLLI</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed font-medium">
            3rd Year Computer Science Student & Front End Developer Intern. Building calming AI soundscapes and interactive web solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 bg-slate-50 text-slate-950 rounded-full font-black text-[10px] uppercase tracking-[0.2em] hover:bg-brand-purple hover:text-white transition-all duration-300 shadow-xl shadow-brand-purple/10"
            >
              Explore Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 glass rounded-full font-black text-[10px] uppercase tracking-[0.2em] text-slate-50 hover:bg-white/10 transition-all duration-300"
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-bounce"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};
