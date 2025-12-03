
import React from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Textarea } from './ui/Textarea';

const ContactSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Terima kasih atas pesan Anda! (Fungsionalitas pengiriman akan diimplementasikan di backend).");
  };

  return (
    <section id="kontak" className="py-24">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 tracking-tight">Hubungi Saya</h2>
        <p className="text-slate-400 mb-8">
          Punya proyek menarik atau hanya ingin menyapa? Silakan kirim pesan. Saya akan segera membalasnya.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <Input type="text" placeholder="Nama Anda" required />
          <Input type="email" placeholder="Email Anda" required />
          <Textarea placeholder="Pesan Anda..." rows={5} required />
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/30">
            Kirim Pesan
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
