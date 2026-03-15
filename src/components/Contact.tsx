import React from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-slate-50">Let's <span className="text-gradient">Connect</span></h2>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed font-medium">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-brand-purple group-hover:scale-110 transition-transform duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em] font-bold mb-1">Email Me</p>
                  <p className="text-slate-50 font-bold tracking-wide">radhikasalolli@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-brand-blue group-hover:scale-110 transition-transform duration-300">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em] font-bold mb-1">LinkedIn</p>
                  <p className="text-slate-50 font-bold tracking-wide">radhika-salolli-8440502b7</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-brand-pink group-hover:scale-110 transition-transform duration-300">
                  <Github size={24} />
                </div>
                <div>
                  <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em] font-bold mb-1">GitHub</p>
                  <p className="text-slate-50 font-bold tracking-wide">radhikasalolli</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-10 rounded-[2.5rem] border-white/5"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-white/5 border border-white/5 rounded-2xl text-slate-50 focus:outline-none focus:border-brand-purple/50 transition-colors font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-white/5 border border-white/5 rounded-2xl text-slate-50 focus:outline-none focus:border-brand-purple/50 transition-colors font-medium"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold ml-1">Message</label>
                <textarea 
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 bg-white/5 border border-white/5 rounded-2xl text-slate-50 focus:outline-none focus:border-brand-purple/50 transition-colors font-medium resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-slate-50 text-slate-950 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-brand-purple hover:text-white transition-all duration-300 shadow-xl shadow-brand-purple/10"
              >
                Send Message <Send size={18} className="ml-2" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
