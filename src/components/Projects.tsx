import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, X, Code2, Globe, ArrowLeft } from 'lucide-react';

const projects = [
  {
    title: 'Sound Scapes AI',
    description: 'Built a calming web-based music platform aimed at reducing stress through ambient soundtracks. Enabled users to play multiple soothing tracks simultaneously.',
    image: 'https://picsum.photos/seed/sound/1200/800',
    tags: ['React.js', 'MongoDB', 'Bootstrap'],
    github: 'https://github.com/radhikasalolli/sound-scapes-ai',
    live: 'https://sound-scapes-ai.vercel.app',
  },
  {
    title: 'Online Pets Shop',
    description: 'Developed a responsive platform for browsing, adopting, and booking pets. Features pet health records, dietary plans, and filter-by-breed functionality.',
    image: 'https://picsum.photos/seed/pets/1200/800',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/radhikasalolli/online-pets-shop',
    live: 'https://online-pets-shop.vercel.app',
  },
  {
    title: 'Agro Culture Web App',
    description: 'An interactive portal for farmers to access crop-related data, soil tracking, and fertilizer usage. Used Firebase for real-time data storage.',
    image: 'https://picsum.photos/seed/farm/1200/800',
    tags: ['Firebase', 'JavaScript', 'HTML/CSS'],
    github: 'https://github.com/radhikasalolli/agro-culture',
    live: 'https://agro-culture-app.web.app',
  },
  {
    title: 'ATM Simulation Machine',
    description: 'Simulated ATM functionality with virtual card authentication. Developed GUI interfaces in Java for transaction history and secure logic.',
    image: 'https://picsum.photos/seed/bank/1200/800',
    tags: ['Java', 'Java GUI', 'Database'],
    github: 'https://github.com/radhikasalolli/atm-simulation',
    live: '#',
  },
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4 text-slate-50"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">
            A selection of my recent work, ranging from web applications to machine learning models.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative glass rounded-[2rem] overflow-hidden p-10 border-white/5 hover:border-white/10 transition-all duration-500"
            >
              <div className="flex flex-wrap gap-3 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="px-4 py-1.5 bg-white/5 rounded-full text-[10px] text-brand-purple font-bold uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-3xl font-display font-bold mb-4 text-slate-50 group-hover:text-brand-purple transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 mb-8 leading-relaxed font-medium">
                {project.description}
              </p>
              
              <div className="flex items-center gap-6">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-50 transition-colors"
                >
                  <Github size={16} /> Source
                </a>
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-50 transition-colors"
                >
                  <ExternalLink size={16} /> Preview
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-[#030014]/90 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl glass rounded-[2.5rem] overflow-hidden shadow-2xl border-white/10 flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 left-8 z-[110] flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 rounded-full text-white text-[10px] font-bold uppercase tracking-widest transition-all backdrop-blur-xl border border-white/10 shadow-xl"
              >
                <ArrowLeft size={16} /> Back
              </button>

              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 z-[110] p-2.5 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all backdrop-blur-xl border border-white/10 shadow-xl"
              >
                <X size={20} />
              </button>

              {/* Project Image/Preview Area */}
              <div className="w-full md:w-3/5 h-[300px] md:h-auto relative bg-slate-900 overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent opacity-60" />
              </div>

              {/* Project Info Area */}
              <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-brand-purple/10 border border-brand-purple/20 rounded-full text-[10px] text-brand-purple font-bold uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-3xl md:text-4xl font-display font-black mb-6 text-slate-50">
                  {selectedProject.title}
                </h3>
                
                <p className="text-slate-400 text-sm md:text-base mb-10 leading-relaxed font-medium">
                  {selectedProject.description}
                </p>

                <div className="flex flex-col gap-4">
                  <a 
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-8 py-4 bg-slate-50 text-slate-950 rounded-full font-black text-[10px] uppercase tracking-[0.2em] hover:bg-brand-purple hover:text-white transition-all duration-300 shadow-xl shadow-brand-purple/10"
                  >
                    <Globe size={16} /> Visit Live Site
                  </a>
                  <a 
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-8 py-4 glass rounded-full font-black text-[10px] uppercase tracking-[0.2em] text-slate-50 hover:bg-white/10 transition-all duration-300"
                  >
                    <Code2 size={16} /> View Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
