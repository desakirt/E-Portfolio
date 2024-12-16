import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectCard({ project }) {
  const { title, description, technologies, image, demoUrl, githubUrl } = project;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-dark/80 rounded-lg shadow-lg overflow-hidden"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-100 dark:bg-dark/50 text-gray-700 dark:text-gray-300 rounded text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-4">
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-primary hover:text-secondary"
          >
            <FaExternalLinkAlt size={14} />
            <span>Demo</span>
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-primary hover:text-secondary"
          >
            <FaGithub size={14} />
            <span>Code</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}