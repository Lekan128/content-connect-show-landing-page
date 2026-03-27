import { motion } from 'framer-motion';

interface VideoShowcaseProps {
  videoUrl: string;
}

export default function VideoShowcase({ videoUrl }: VideoShowcaseProps) {
  const getEmbedUrl = (url: string) => {
    try {
      if (url.includes('youtu.be/')) return `https://www.youtube.com/embed/${url.split('youtu.be/')[1].split('?')[0]}`;
      if (url.includes('v=')) return `https://www.youtube.com/embed/${new URLSearchParams(url.split('?')[1]).get('v')}`;
      return url;
    } catch {
      return url;
    }
  };

  return (
    <div className="w-full flex flex-col">
      <h2 className="text-3xl font-black mb-6 uppercase tracking-wide">What is Content Connect?</h2>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full aspect-[4/5] md:aspect-video lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-[6px] border-brand-light relative"
      >
        <iframe 
          className="w-full h-full absolute inset-0 bg-black"
          src={getEmbedUrl(videoUrl)} 
          title="The Content Connect Show Showcase" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        />
      </motion.div>
    </div>
  );
}
