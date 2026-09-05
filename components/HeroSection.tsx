
import React from 'react';
import { Button } from './ui/Button';
import { ArrowDown } from 'lucide-react';
import Hero3D from './Hero3D';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center py-20 relative overflow-hidden">
      {/* Latar belakang 3D interaktif */}
      <Hero3D />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
          Membangun Masa Depan Digital, Satu Baris Kode.
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8">
          Saya adalah seorang Fullstack Developer dengan hasrat untuk menciptakan solusi digital yang inovatif, fungsional, dan menawan secara visual.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#proyek">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/30">
              Lihat Proyek Saya
            </Button>
          </a>
          <a href="#kontak">
            <Button size="lg" variant="outline">
              Hubungi Saya
            </Button>
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a href="#tentang" aria-label="Scroll ke bawah">
          <ArrowDown className="w-6 h-6 text-slate-500 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;