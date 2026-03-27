import { motion } from 'framer-motion';

interface MerchItem {
  name: string;
  price?: string;
  isAvailable: boolean;
  image?: string;
}

interface MerchSectionProps {
  merch: MerchItem[];
}

export default function MerchSection({ merch }: MerchSectionProps) {
  if (!merch || merch.length === 0) return null;

  return (
    <div className="w-full flex flex-col">
      <h2 className="text-3xl font-black mb-6 uppercase tracking-wide">Merch</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {merch.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-brand-text text-brand-bg rounded-3xl overflow-hidden shadow-lg relative flex flex-col group"
          >
            <div className="w-full aspect-square bg-brand-light flex items-center justify-center p-4 relative">
              {item.image ? (
                <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-xl" />
              ) : (
                <div className="w-full h-full rounded-xl bg-brand-text/5 flex items-center justify-center font-black tracking-widest text-2xl text-brand-text/20">MERCH</div>
              )}
              
              {!item.isAvailable && (
                <div className="absolute inset-0 bg-brand-bg/60 backdrop-blur-[2px] flex items-center justify-center z-10">
                  <span className="bg-brand-text text-brand-bg px-6 py-2 rounded-full font-black uppercase rotate-[-15deg] shadow-lg border-2 border-brand-bg text-sm">
                    Sold Out
                  </span>
                </div>
              )}
            </div>
            
            <div className="p-5 flex flex-col justify-between flex-1 gap-3">
              <div>
                <h3 className="text-lg font-bold leading-tight">{item.name}</h3>
                {item.price && <p className="font-semibold opacity-70 text-sm mt-1">{item.price}</p>}
              </div>
              {item.isAvailable && (
                <button className="bg-brand-bg text-brand-text px-4 py-3 rounded-xl font-bold text-sm w-full hover:opacity-90 transition-opacity">
                  Buy Now
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
