
import React, { useState } from 'react';
import { Project } from '../types';
import { generateProjects } from '../services/geminiService';
import { Button } from './ui/Button';
import { Textarea } from './ui/Textarea';
import { X, Wand2 } from 'lucide-react';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onProjectsGenerated: (projects: Project[]) => void;
  setIsLoading: (loading: boolean) => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ isOpen, onClose, onProjectsGenerated, setIsLoading }) => {
  const [prompt, setPrompt] = useState('');
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError("Prompt tidak boleh kosong.");
      return;
    }
    setError('');
    setIsLoading(true);
    onClose();

    try {
      const newProjects = await generateProjects(prompt);
      onProjectsGenerated(newProjects);
    } catch (err: any) {
      setError(err.message || "Terjadi kesalahan.");
      onClose(); // Re-open panel on error to show message, maybe better UX to show toast
      alert(`Error: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleQuickPrompt = (text: string) => {
    setPrompt(text);
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div 
        className="relative w-full max-w-2xl bg-[#0a0a0f] border border-slate-800 rounded-lg shadow-2xl shadow-blue-900/30 p-8 transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-scale"
        style={{ animation: 'fade-in-scale 0.3s forwards' }}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors">
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-2 text-white">Panel Konten AI</h2>
        <p className="text-slate-400 mb-6">
          Jelaskan jenis proyek portofolio yang ingin Anda tampilkan. AI akan membuatkannya untuk Anda.
        </p>

        <div className="space-y-4">
          <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Contoh: 'Buatkan 3 proyek tentang web3 dan NFT menggunakan Next.js' atau '2 proyek mobile dengan React Native untuk aplikasi sosial'."
            rows={4}
            className="text-base"
          />
          
          <div className="flex flex-wrap gap-2 text-sm">
            <button onClick={() => handleQuickPrompt('3 proyek fullstack dengan MERN stack')} className="px-3 py-1 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors text-slate-300">MERN Stack</button>
            <button onClick={() => handleQuickPrompt('2 proyek data visualisasi dengan D3.js dan React')} className="px-3 py-1 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors text-slate-300">Data Viz</button>
            <button onClick={() => handleQuickPrompt('3 proyek game sederhana dengan JavaScript')} className="px-3 py-1 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors text-slate-300">Game Dev</button>
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}
        </div>

        <div className="mt-8 flex justify-end">
          <Button onClick={handleGenerate} className="bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/30">
            <Wand2 size={18} className="mr-2" />
            Hasilkan Proyek
          </Button>
        </div>
      </div>
      <style>{`
        @keyframes fade-in-scale {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fade-in-scale {
          animation: fade-in-scale 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default AdminPanel;
