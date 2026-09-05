
import React from 'react';
import { Project } from '../types';
import ProjectCard from './ProjectCard';
import { Loader2 } from 'lucide-react';

interface ProjectsSectionProps {
  projects: Project[];
  isLoading: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects, isLoading }) => {
  return (
    <section id="proyek" className="py-24">
      <h2 className="text-3xl font-bold text-center mb-12 tracking-tight">Proyek Pilihan</h2>
      {isLoading ? (
        <div className="flex flex-col items-center justify-center min-h-[300px]">
          <Loader2 className="w-12 h-12 animate-spin text-blue-500" />
          <p className="mt-4 text-slate-400">AI sedang meracik proyek baru...</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
