import { motion } from 'framer-motion';

export default function SectionTitle({ children }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white"
    >
      {children}
    </motion.h2>
  );
}