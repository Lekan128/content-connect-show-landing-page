import { motion } from 'framer-motion';
import { FaYoutube } from 'react-icons/fa';

interface HeroProps {
  title: string;
  tagline: string;
}

export default function Hero({ title, tagline }: HeroProps) {
  return (
    <section className="w-full min-h-[85vh] flex flex-col items-center justify-center px-6 text-center py-20 relative overflow-hidden bg-brand-bg">
      {/* Subtle Background from Banner */}
      <div 
        className="absolute inset-0 opacity-[0.07] pointer-events-none bg-cover bg-center mix-blend-multiply"
        style={{ backgroundImage: 'url(/images/uploads/content_connect_banner.jpg)' }}
      />
      
      <div className="relative z-10 flex flex-col items-center">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-brand-text mb-6 uppercase tracking-tighter max-w-5xl leading-[1.1]"
        >
          {title}
        </motion.h1>
        
        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-3xl text-brand-text/80 mb-12 max-w-3xl font-medium tracking-tight"
        >
          {tagline}
        </motion.p>
        
        <motion.a 
          href="https://www.youtube.com/@ContenttConnect/featured"
          target="_blank"
          rel="noreferrer"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-brand-text text-brand-bg px-8 py-5 rounded-full font-bold text-xl flex items-center gap-3 shadow-xl hover:shadow-2xl transition-all"
        >
          <FaYoutube size={28} />
          Watch on YouTube
        </motion.a>
      </div>
    </section>
  );
}
