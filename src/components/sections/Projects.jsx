import { motion } from 'framer-motion';
import SectionTitle from '../shared/SectionTitle';
import ProjectCard from '../shared/ProjectCard';


export default function Projects() {
  const projects = [
    {
      title: 'BLog Applicaiton',
      description: 'An Application with user Authentication.',
      technologies: ['Ionic', 'Angular', 'Node.js', 'MongoDB'],
      image: '/assets/Blog.jpeg',
      demoUrl: 'https://blog-app-v1-fawn.vercel.app/',
      githubUrl: 'https://github.com/desakirt/Blog-App',
    },
    {
      title: 'Task Manager',
      description: ' a Modern, Responsive Task Management Application built with modern technologies.',
      technologies: ['React.js', 'Tailwind CSS', 'Framer Motion'],
      image: '../assets/TSM.jpeg',
      demoUrl: 'https://task-manager-app-gray-phi.vercel.app/',
      githubUrl: 'https://github.com/desakirt/Task-Manager-app',
    },
    // Add more projects here
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Projects</SectionTitle>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}