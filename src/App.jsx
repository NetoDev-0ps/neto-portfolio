import React, { useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, Instagram, MessageCircle, Briefcase, FileText, Globe } from 'lucide-react';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, [darkMode]);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-[#121212] font-sans text-slate-900 dark:text-white flex flex-col items-center py-12 px-6">
      
      {/* Botão de Toggle Dark/Light */}
      <button 
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-8 right-8 p-2 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition shadow-sm"
      >
        {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-600" />}
      </button>

      {/* Perfil e Header */}
      <header className="flex flex-col items-center mb-8 text-center">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl mb-6">
          <img 
            src="https://github.com/NetoMonteiro.png" 
            alt="Neto Monteiro" 
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-3xl font-bold mb-1">Neto Monteiro</h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
          Analista de Sistemas | Desenvolvedor Full Stack 
        </p>
        
        {/* Badges de Especialidade */}
        <div className="flex gap-2">
          <span className="flex items-center gap-1 px-4 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium">
            <Globe size={12} /> Web
          </span>
          <span className="flex items-center gap-1 px-4 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium">
             UI/UX 
          </span>
        </div>
      </header>

      {/* Botões Principais (Links de Ação) */}
      <main className="w-full max-w-md space-y-4 mb-12">
        <LinkCard 
          icon={<Briefcase size={20} />} 
          title="Portfólio" 
          url="https://github.com/NetoMonteiro" 
        />
        <LinkCard 
          icon={<FileText size={20} />} 
          title="Currículo" 
          url="/public/assets/vitae.pdf" // Coloque aqui o link do seu PDF ou Google Drive
        />
        <LinkCard 
          icon={<MessageCircle size={20} />} 
          title="WhatsApp" 
          url="https://wa.me/5585982324771"
        />
      </main>

      {/* Redes Sociais no Rodapé */}
      <footer className="flex gap-6 mt-auto">
        <SocialIcon icon={<Github size={24} />} url="https://github.com/NetoMonteiro"  />
        <SocialIcon icon={<Linkedin size={24} />} url="https://linkedin.com/in/neto-monteiro" />
        <SocialIcon icon={<Instagram size={24} />} url="https://www.instagram.com/netin.jpg/" />
      </footer>
    </div>
  );
};

// Componente para os Cards de Link
const LinkCard = ({ icon, title, url }) => (
  <a 
    href={url} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center p-4 w-full bg-white dark:bg-[#1E1E1E] border border-slate-200 dark:border-slate-800 rounded-xl hover:scale-[1.02] transition-transform duration-200 shadow-sm"
  >
    <div className="text-slate-600 dark:text-slate-400 mr-4">
      {icon}
    </div>
    <span className="font-medium text-lg">{title}</span>
  </a>
);

// Componente para os Ícones de Redes Sociais
const SocialIcon = ({ icon, url }) => (
  <a 
    href={url} 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
  >
    {icon}
  </a>
);

export default App;