import React from 'react';
import { motion } from 'motion/react';
import { Code2, Database, Layout, Cpu, Globe, Terminal, Github, MessageSquare, Users, Lightbulb, Users2 } from 'lucide-react';

const skills = [
  { name: 'React.js', icon: <Code2 className="text-cyan-400" />, level: 85 },
  { name: 'JavaScript', icon: <Terminal className="text-yellow-500" />, level: 88 },
  { name: 'Python', icon: <Terminal className="text-blue-400" />, level: 80 },
  { name: 'Java', icon: <Terminal className="text-red-500" />, level: 75 },
  { name: 'C', icon: <Terminal className="text-gray-400" />, level: 70 },
  { name: 'HTML/CSS', icon: <Globe className="text-orange-500" />, level: 95 },
  { name: 'MySQL', icon: <Database className="text-blue-600" />, level: 82 },
  { name: 'MongoDB', icon: <Database className="text-green-500" />, level: 78 },
  { name: 'Linux', icon: <Cpu className="text-white" />, level: 65 },
  { name: 'Jenkins', icon: <Cpu className="text-red-400" />, level: 60 },
  { name: 'GitHub', icon: <Github className="text-white" />, level: 90 },
  { name: 'Bootstrap', icon: <Layout className="text-purple-600" />, level: 85 },
];

const softSkills = [
  { name: 'Communication', icon: <MessageSquare className="text-emerald-400" />, description: 'Effective verbal and written communication.' },
  { name: 'Leadership', icon: <Users className="text-amber-400" />, description: 'Leading teams and managing projects effectively.' },
  { name: 'Problem Solving', icon: <Lightbulb className="text-yellow-400" />, description: 'Analytical thinking and creative solutions.' },
  { name: 'Team Collaboration', icon: <Users2 className="text-indigo-400" />, description: 'Working seamlessly in diverse team environments.' },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4 text-slate-50"
          >
            Technical <span className="text-gradient">Expertise</span>
          </motion.h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">
            A comprehensive overview of my technical stack and proficiency in various technologies.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-24">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -5, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
              className="glass p-6 rounded-2xl flex flex-col items-center justify-center gap-4 group transition-all duration-300 border-white/5"
            >
              <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <span className="text-xs font-bold text-slate-400 group-hover:text-slate-50 tracking-wider uppercase">
                {skill.name}
              </span>
              
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-brand-purple to-brand-blue"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4 text-slate-50"
          >
            Soft <span className="text-gradient">Skills</span>
          </motion.h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">
            Interpersonal skills that complement my technical abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {softSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
              className="glass p-8 rounded-3xl flex flex-col items-center text-center gap-4 group transition-all duration-300 border-white/5"
            >
              <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <div>
                <h3 className="text-slate-50 font-bold text-lg mb-2">{skill.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
