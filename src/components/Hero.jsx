import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-light dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Hi, I'm Kirtan Desai 👋
          </h1>
          
          <div className="relative h-24 overflow-hidden">
            <div className="absolute animate-text-slide">
              <span className="block h-24 text-2xl md:text-3xl text-primary">Software Developer</span>
              <span className="block h-24 text-2xl md:text-3xl text-primary">Software Engineer</span>
              <span className="block h-24 text-2xl md:text-3xl text-primary">Web Developer</span>
              <span className="block h-24 text-2xl md:text-3xl text-primary">App Developer</span>
              <span className="block h-24 text-2xl md:text-3xl text-primary">Problem Solver</span>
              <span className="block h-24 text-2xl md:text-3xl text-primary">Software Developer</span>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors cursor-pointer"
            >
              View My Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors cursor-pointer"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}