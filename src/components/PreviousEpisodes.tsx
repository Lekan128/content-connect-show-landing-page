import { motion } from 'framer-motion';

interface Episode {
  title: string;
  description: string;
  videoUrl: string;
  guestImage?: string;
  guestLinkedin?: string;
}

interface PreviousEpisodesProps {
  episodes: Episode[];
}

export default function PreviousEpisodes({ episodes }: PreviousEpisodesProps) {
  if (!episodes || episodes.length === 0) return null;

  return (
    <div className="w-full flex flex-col relative">
      <div className="sticky top-0 z-20 bg-brand-bg/95 backdrop-blur-md py-4 flex flex-row justify-between items-center mb-6 border-b-2 border-brand-text/5">
        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wide">Episodes</h2>
        <a 
          href="https://www.youtube.com/@ContenttConnect/videos" 
          target="_blank" 
          rel="noreferrer"
          className="bg-brand-text text-brand-bg px-5 py-2 rounded-full font-bold text-sm md:text-base hover:opacity-90 transition-opacity border-2 border-brand-text shadow-sm"
        >
          See All Episodes
        </a>
      </div>

      <div className="flex flex-col gap-6">
        {episodes.map((ep, index) => (
          <motion.a
            href={ep.videoUrl}
            target="_blank"
            rel="noreferrer"
            key={index}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: Math.min(index * 0.1, 0.5) }}
            className="bg-brand-light rounded-3xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-brand-text/5 group cursor-pointer"
          >
            {ep.guestImage && (
              <div className="w-20 h-20 shrink-0 rounded-full overflow-hidden bg-brand-bg shadow-inner border-4 border-brand-text/10">
                <img src={ep.guestImage} alt="Guest" className="w-full h-full object-cover" />
              </div>
            )}
            <div className="flex-1 flex flex-col justify-center text-center sm:text-left">
              <h3 className="text-lg font-bold text-brand-text mb-2 leading-tight group-hover:opacity-80 transition-opacity">{ep.title}</h3>
              <p className="text-sm opacity-80 leading-relaxed font-sans line-clamp-3">{ep.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
