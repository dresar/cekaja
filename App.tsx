
import React, { useState } from 'react';
import { Project } from './types';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import AdminPanel from './components/AdminPanel';
import { PanelRightOpen } from 'lucide-react';
import { Button } from './components/ui/Button';

const mockProjects: Project[] = [
  {
    judul: 'Platform E-learning Interaktif',
    deskripsi: 'Sebuah platform e-learning dengan fitur gamifikasi untuk meningkatkan keterlibatan siswa. Dibangun dengan arsitektur modern dan pengalaman pengguna yang mulus.',
    gambar: 'https://picsum.photos/seed/elearning/600/400',
    linkDemo: '#',
    teknologi: ['React', 'TypeScript', 'Node.js', 'PostgreSQL']
  },
  {
    judul: 'Aplikasi Visualisasi Data Cuaca',
    deskripsi: 'Aplikasi web real-time yang menampilkan data cuaca global dalam bentuk visualisasi 3D yang menakjubkan menggunakan D3.js dan WebGL.',
    gambar: 'https://picsum.photos/seed/weather/600/400',
    linkDemo: '#',
    teknologi: ['Vue.js', 'D3.js', 'Tailwind CSS', 'Firebase']
  }
];

export default function App() {
  const [projects, setProjects] = useState<Project[]>(mockProjects);
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleProjectsGenerated = (newProjects: Project[]) => {
    setProjects(newProjects);
    setIsAdminPanelOpen(false);
  };

  return (
    <div className="bg-[#050508] text-slate-300 font-sans antialiased relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,_rgba(29,78,216,0.15),_transparent_30%)]"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_top_right,_rgba(192,38,211,0.1),_transparent_40%)]"></div>

      <main className="relative z-10 container mx-auto px-4 md:px-8">
        <Header />
        <HeroSection />
        <AboutSection />
        <ProjectsSection projects={projects} isLoading={isLoading} />
        <ContactSection />
      </main>

      <footer className="text-center py-8 border-t border-slate-800/50 text-slate-500 text-sm">
        <p>Didesain dan Dibangun oleh Anda. Ditenagai oleh AI.</p>
      </footer>

      {/* Admin Panel Toggle Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsAdminPanelOpen(!isAdminPanelOpen)}
          className="rounded-full w-14 h-14 p-0 flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-blue-500"
          aria-label="Buka Panel Admin"
        >
          <PanelRightOpen size={24} />
        </Button>
      </div>

      <AdminPanel
        isOpen={isAdminPanelOpen}
        onClose={() => setIsAdminPanelOpen(false)}
        onProjectsGenerated={handleProjectsGenerated}
        setIsLoading={setIsLoading}
      />
    </div>
  );
}
