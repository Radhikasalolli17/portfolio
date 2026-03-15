import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: 'Reliefmission Foundation',
    role: 'Graphic Designer',
    period: 'June 2023 – December 2023',
    location: 'Remote',
    description: [
      'Designed visual assets for social media campaigns, increasing engagement and brand awareness for foundation initiatives.',
      'Created high-quality marketing materials, including brochures, posters, and digital banners, using Adobe Creative Suite.',
      'Collaborated with the communications team to develop a consistent visual identity across all digital platforms.',
      'Assisted in the design of website UI elements to improve user experience and accessibility.'
    ]
  },
  {
    company: 'Digisnare',
    role: 'Front End Developer Intern',
    period: 'January 2024 – April 2024',
    location: 'Kalaburagi, Karnataka',
    description: [
      'Created front-end components and banner designs for company branding using HTML, CSS, React.js, and Bootstrap.',
      'Worked on UI/UX improvements for web interfaces, ensuring responsiveness and cross-browser compatibility.',
      'Assisted with integration of front-end interfaces with back-end systems using MongoDB and MySQL.',
      'Contributed to the development of internal tools and marketing assets aligned with company branding.'
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4 text-slate-50"
          >
            Work <span className="text-gradient">Experience</span>
          </motion.h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">
            My professional journey and internships in the tech industry.
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass p-10 rounded-[2rem] relative group border-white/5"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div>
                  <h3 className="text-2xl font-display font-bold text-slate-50 group-hover:text-brand-purple transition-colors">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-brand-purple font-bold mt-2">
                    <Briefcase size={16} />
                    <span className="tracking-wide">{exp.company}</span>
                  </div>
                </div>
                <div className="flex flex-col md:items-end gap-2 text-slate-500 text-xs font-bold tracking-wider">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-4 text-slate-400 leading-relaxed font-medium">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-brand-purple shrink-0 shadow-[0_0_8px_rgba(167,139,250,0.5)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
