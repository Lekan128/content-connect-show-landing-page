import { useEffect, useState } from 'react';
import MainLayout from './layouts/MainLayout';
import Hero from './components/Hero';
import VideoShowcase from './components/VideoShowcase';
import PreviousEpisodes from './components/PreviousEpisodes';
import MerchSection from './components/MerchSection';

// Import singleton home data
import defaultData from './data/home.json';
import defaultEpisodesData from './data/episodes.json';
import defaultMerchData from './data/merch.json';

export default function App() {
  const [data, setData] = useState<any>(defaultData);
  const [episodes, setEpisodes] = useState<any[]>(defaultEpisodesData.episodes || []);
  const [merch, setMerch] = useState<any[]>(defaultMerchData.merch || []);

  useEffect(() => {
    setData(defaultData);
    setEpisodes(defaultEpisodesData.episodes || []);
    setMerch(defaultMerchData.merch || []);
  }, []);

  return (
    <MainLayout>
      <Hero title={data.title} tagline={data.tagline} />
      
      <div className="max-w-7xl mx-auto w-full px-6 flex flex-col lg:flex-row gap-12 lg:gap-20 py-24 relative">
        {/* Left Column: Video */}
        <div className="flex-1 lg:max-w-[45%] lg:sticky lg:top-32 self-start">
          {data.videoUrl && <VideoShowcase videoUrl={data.videoUrl} />}
        </div>
        
        {/* Right Column: Episodes and Merch */}
        <div className="flex-1 lg:max-w-[55%] flex flex-col gap-24">
          {episodes && episodes.length > 0 && <PreviousEpisodes episodes={episodes} />}
          {merch && merch.length > 0 && <MerchSection merch={merch} />}
        </div>
      </div>
    </MainLayout>
  );
}
