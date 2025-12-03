import { GoogleGenAI, Type } from "@google/genai";
import { Project } from '../types';

const projectSchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      judul: {
        type: Type.STRING,
        description: 'Nama proyek yang menarik dan singkat dalam Bahasa Indonesia.',
      },
      deskripsi: {
        type: Type.STRING,
        description: 'Deskripsi singkat (2-3 kalimat) tentang proyek dalam Bahasa Indonesia.',
      },
      gambar: {
        type: Type.STRING,
        description: `URL gambar placeholder dari picsum.photos. Gunakan seed unik berbasis nama proyek. Contoh: https://picsum.photos/seed/NamaProyekUnik/600/400`,
      },
      linkDemo: {
        type: Type.STRING,
        description: 'URL demo fiktif namun terlihat realistis. Cukup gunakan "#" jika tidak relevan.',
      },
      teknologi: {
        type: Type.ARRAY,
        items: {
          type: Type.STRING,
        },
        description: 'Array berisi 3-5 teknologi utama yang digunakan dalam proyek.',
      },
    },
    required: ['judul', 'deskripsi', 'gambar', 'linkDemo', 'teknologi'],
    propertyOrdering: ['judul', 'deskripsi', 'gambar', 'linkDemo', 'teknologi'],
  },
};

export const generateProjects = async (prompt: string): Promise<Project[]> => {
  // Pindahkan inisialisasi ke dalam fungsi
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Buatkan data portofolio proyek berdasarkan deskripsi berikut: "${prompt}". Pastikan semua teks dalam Bahasa Indonesia.`,
      config: {
        responseMimeType: 'application/json',
        responseSchema: projectSchema,
      },
    });

    const jsonText = response.text.trim();
    const projects = JSON.parse(jsonText);
    return projects as Project[];

  } catch (error) {
    console.error("Error generating projects with Gemini:", error);
    // In case of error, return an empty array or handle it appropriately
    throw new Error("Gagal menghasilkan proyek dari AI. Silakan coba lagi.");
  }
};
