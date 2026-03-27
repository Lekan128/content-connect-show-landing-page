import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 bg-brand-text text-brand-light flex flex-col items-center gap-6 mt-20">
      <div className="flex gap-6">
        <a href="https://www.youtube.com/@ContenttConnect/featured" target="_blank" rel="noreferrer" className="hover:text-brand-bg transition-colors">
          <FaYoutube size={28} />
        </a>
        <a href="https://instagram.com/thisiscontentconnect" target="_blank" rel="noreferrer" className="hover:text-brand-bg transition-colors">
          <FaInstagram size={28} />
        </a>
        <a href="https://ng.linkedin.com/in/ademilade-shodipe-dosunmu-39840a1a9" target="_blank" rel="noreferrer" className="hover:text-brand-bg transition-colors">
          <FaLinkedin size={28} />
        </a>
        <a href="https://twitter.com/ademiladed" target="_blank" rel="noreferrer" className="hover:text-brand-bg transition-colors">
          <FaTwitter size={28} />
        </a>
        <a href="https://instagram.com/ademilade_" target="_blank" rel="noreferrer" className="hover:text-brand-bg transition-colors relative group">
          <FaInstagram size={28} />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-brand-light text-brand-text text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Host</span>
        </a>
      </div>
      <p className="text-sm opacity-80 text-center uppercase tracking-widest font-semibold">
        © {new Date().getFullYear()} The Content Connect Show. Hosted by Ademilade.
      </p>
    </footer>
  );
}
