import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import SectionTitle from '../shared/SectionTitle';
import ContactForm from '../shared/ContactForm';

export default function Contact() {
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/desakirt', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/kirtan-desai-426a8530b/', label: 'LinkedIn' },
    { icon: FaTwitter, url: 'https://x.com/Kirtan_Desai1?mx=2', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Contact Me</SectionTitle>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Let's Connect
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Feel free to reach out for collaborations or just a friendly hello!
            </p>
            

            
            
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                  aria-label={label}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}