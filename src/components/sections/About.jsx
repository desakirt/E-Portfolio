import { motion } from 'framer-motion';
import SectionTitle from '../shared/SectionTitle';
import SkillBadge from '../shared/SkillBadge';

export default function About() {
  const skills = [
    'React.js',
    'JavaScript (ES6+)',
    'Node.js',
    'MongoDB',
    'HTML5',
    'CSS3',
    'TypeScript',
    'Git',
    'Python',
    'C#',
    'C++',
    'Java',
    'Kotlin',
    'Swift',
    'Go',
    'Rust',
    'Kotlin/Native',
    'Flutter',
    'React Native',
    'Ionic',
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>About Me</SectionTitle>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <div className="space-y-6">
            <p className="text-gray-700 dark:text-gray-300">
              Hello! I'm Kirtan Desai, a passionate Software Developer, Software Engineer, and Web/App Developer. 
              I specialize in creating dynamic, responsive, and engaging web and mobile applications using the 
              latest technologies.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              I enjoy working on innovative projects, learning about cutting-edge web technologies, and creating 
              solutions that make a difference.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <SkillBadge key={skill}>{skill}</SkillBadge>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}