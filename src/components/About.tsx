import React from 'react';
import { motion } from 'motion/react';

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-1 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-slate-50">About <span className="text-gradient">Radhika</span></h2>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              I am a 3rd-year Computer Science and Engineering student at Dayananda Sagar College of Engineering, Bangalore. My passion lies in creating intuitive and responsive web interfaces that solve real-world problems.
            </p>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed">
              With a strong foundation in Data Structures, Algorithms, and Database Management, I enjoy bridging the gap between technical complexity and user-friendly design.
            </p>
            
            <div className="space-y-6 max-w-xl mx-auto">
              <div className="glass p-8 rounded-3xl border-l-4 border-brand-purple text-left">
                <h3 className="text-slate-50 font-bold text-xl mb-1">B.E. in Computer Science</h3>
                <p className="text-brand-purple text-sm font-bold mb-2">Dayananda Sagar College of Engineering</p>
                <p className="text-slate-500 text-sm">Aug 2023 – Jul 2027 (Expected) | Bangalore, Karnataka</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="glass p-6 rounded-2xl text-center">
                  <h4 className="text-slate-500 text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">Current Year</h4>
                  <p className="text-2xl font-display font-bold text-brand-blue">3rd Year</p>
                </div>
                <div className="glass p-6 rounded-2xl text-center">
                  <h4 className="text-slate-500 text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">Location</h4>
                  <p className="text-2xl font-display font-bold text-brand-pink">Karnataka</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
