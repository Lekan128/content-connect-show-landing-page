import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-6 md:px-12 flex justify-between items-center bg-brand-bg relative z-50">
      <Link to="/" className="text-2xl font-black tracking-tighter text-brand-text flex items-center gap-3">
        <motion.div 
          initial={{ rotate: -10, scale: 0.9 }}
          animate={{ rotate: 0, scale: 1 }}
          className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center bg-white shadow-md border-2 border-white"
        >
          <img src="/images/uploads/content_connect_logo.jpg" alt="Content Connect Logo" className="w-full h-full object-cover" />
        </motion.div>
        Content Connect
      </Link>

      <div className="flex gap-4 items-center">
        <a href="https://www.youtube.com/@ContenttConnect/featured" target="_blank" rel="noreferrer" className="text-brand-text hover:text-white transition-colors">
          <FaYoutube size={24} />
        </a>
        <a href="https://instagram.com/thisiscontentconnect" target="_blank" rel="noreferrer" className="text-brand-text hover:text-white transition-colors">
          <FaInstagram size={24} />
        </a>
        <a href="https://twitter.com/ademiladed" target="_blank" rel="noreferrer" className="text-brand-text hover:text-white transition-colors">
          <FaTwitter size={24} />
        </a>
      </div>
    </nav>
  );
}
