import { motion } from 'framer-motion';
import SectionTitle from '../shared/SectionTitle';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

export default function Education() {
  const certifications = [
    'Full-Stack Development Certification',
    'React Developer Certification',
    'JavaScript Advanced Concepts',
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Education</SectionTitle>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* Formal Education */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <FaGraduationCap className="text-4xl text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Computer Programming
                </h3>
                <p className="text-gray-600 dark:text-gray-400">Sheridan College</p>
                <p className="text-gray-500 dark:text-gray-500">May/2023 - DEC/2024</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2 text-gray-900 dark:text-white">
              <FaCertificate className="text-primary" />
              <span>Certifications</span>
            </h3>
            <ul className="space-y-4">
              {certifications.map((cert) => (
                <li
                  key={cert}
                  className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
                >
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}