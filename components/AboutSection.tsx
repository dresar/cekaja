
import React from 'react';

const skills = [
  "React & Next.js", "TypeScript", "Node.js", "Prisma",
  "Tailwind CSS", "Framer Motion", "React Three Fiber", "UI/UX Design"
];

const AboutSection: React.FC = () => {
  return (
    <section id="tentang" className="py-24">
      <h2 className="text-3xl font-bold text-center mb-12 tracking-tight">Tentang Saya</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative w-full max-w-md mx-auto h-80 rounded-lg overflow-hidden p-1 bg-gradient-to-br from-blue-500 to-fuchsia-500">
          <div className="w-full h-full bg-[#0a0a0a] rounded-md">
            <img 
              src="https://picsum.photos/seed/desk-setup/500/400" 
              alt="Meja Kerja Developer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/30"></div>
          <p className="absolute bottom-4 left-4 text-sm bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-700">Setup Kerja 3D (Placeholder)</p>
        </div>
        <div className="space-y-6">
          <p className="text-slate-400 leading-relaxed">
            Halo! Saya seorang pengembang perangkat lunak yang bersemangat dalam merancang dan membangun aplikasi web yang luar biasa. Dengan pengalaman di seluruh tumpukan teknologi, saya menikmati proses mengubah ide-ide kompleks menjadi produk nyata yang intuitif dan efisien.
          </p>
          <p className="text-slate-400 leading-relaxed">
            Saya percaya pada kode yang bersih, arsitektur yang dapat diskalakan, dan desain yang berpusat pada pengguna. Di luar coding, saya suka menjelajahi teknologi baru dan berkontribusi pada proyek sumber terbuka.
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map(skill => (
              <span key={skill} className="bg-slate-800/80 text-blue-300 text-xs font-medium px-3 py-1 rounded-full border border-slate-700">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
