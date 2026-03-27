import { useEffect, useState } from 'react';
import MainLayout from './layouts/MainLayout';
import Hero from './components/Hero';
import VideoShowcase from './components/VideoShowcase';
import PreviousEpisodes from './components/PreviousEpisodes';
import MerchSection from './components/MerchSection';
import defaultData from './data/home.json';

export default function App() {
  const [data, setData] = useState(defaultData);

  useEffect(() => {
    setData(defaultData);
  }, []);

  return (
    <MainLayout>
      <Hero title={data.title} tagline={data.tagline} />
      
      <div className="max-w-7xl mx-auto w-full px-6 flex flex-col lg:flex-row gap-12 lg:gap-20 py-24">
        {/* Left Column: Video */}
        <div className="flex-1 lg:max-w-[45%] lg:sticky lg:top-32 self-start">
          {data.videoUrl && <VideoShowcase videoUrl={data.videoUrl} />}
        </div>
        
        {/* Right Column: Episodes and Merch */}
        <div className="flex-1 lg:max-w-[55%] flex flex-col gap-24">
          {data.episodes && <PreviousEpisodes episodes={data.episodes} />}
          {data.merch && <MerchSection merch={data.merch} />}
        </div>
      </div>
    </MainLayout>
  );
}
