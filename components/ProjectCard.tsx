
import React from 'react';
import { Project } from '../types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/Card';
import { Button } from './ui/Button';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="flex flex-col h-full bg-[#0a0a0f]/50 border-slate-800/50 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-900/20">
      <CardHeader>
        <div className="aspect-video rounded-md overflow-hidden mb-4 border border-slate-800">
          <img src={project.gambar} alt={project.judul} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
        </div>
        <CardTitle className="text-white">{project.judul}</CardTitle>
        <CardDescription>{project.deskripsi}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {project.teknologi.map(tech => (
            <span key={tech} className="bg-slate-800 text-blue-300 text-xs font-medium px-2.5 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <div className="w-full flex justify-end gap-3">
            <a href={project.linkDemo} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
             <Button variant="outline" size="sm">
                <Github className="w-4 h-4 mr-2" />
                Source Code
              </Button>
            </a>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
