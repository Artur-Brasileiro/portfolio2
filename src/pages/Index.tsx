import Navigation from '@/components/Navigation';
import SobreSection from '@/components/sections/SobreSection';
import ProjetosSection from '@/components/sections/ProjetosSection';
import HabilidadesSection from '@/components/sections/HabilidadesSection';
import EducacaoSection from '@/components/sections/EducacaoSection';
import ContatoSection from '@/components/sections/ContatoSection';
import useScrollReveal from '@/hooks/useScrollReveal';

const Index = () => {
  // Initialize scroll reveal animations
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Navigation */}
      <Navigation />
      
      {/* Main Content - Sections loaded from JSON */}
      <main>
        {/* Section: Sobre */}
        <SobreSection />
        
        {/* Section: Projetos */}
        <ProjetosSection />
        
        {/* Section: Habilidades */}
        <HabilidadesSection />
        
        {/* Section: Educação */}
        <EducacaoSection />
        
        {/* Section: Contato */}
        <ContatoSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-secondary text-white py-8">
        <div className="portfolio-container text-center">
          <p className="text-white/80">
            © 2024 Portfolio. Desenvolvido com React, TypeScript e Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
