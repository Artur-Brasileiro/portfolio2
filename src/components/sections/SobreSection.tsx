import { useEffect, useState } from 'react';

interface SobreData {
  nome: string;
  titulo: string;
  bio: string;
  foto: string;
  resumo: string;
}

const SobreSection = () => {
  const [data, setData] = useState<SobreData | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data.json`)
      .then(response => response.json())
      .then(jsonData => {
        setData(jsonData.sobre);
        // Trigger fade-in after data loads
        setTimeout(() => setVisible(true), 100);
      })
      .catch(error => console.error('Error loading about data:', error));
  }, []);

  if (!data) {
    return (
      <section id="sobre" className="portfolio-section">
        <div className="portfolio-container">
          <div className="animate-pulse">
            <div className="h-32 bg-muted rounded-lg mb-4"></div>
            <div className="h-8 bg-muted rounded mb-2"></div>
            <div className="h-6 bg-muted rounded"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="sobre"
      className={
        `portfolio-section gradient-bg text-white transform transition-opacity duration-700 ease-out ` +
        (visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')
      }
    >
      <div className="portfolio-container">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              {/* Nome personalizado com cor branca */}
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {data.nome}
              </h1>
              {/* Título abaixo do nome */}
              <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-6">
                {data.titulo}
              </h2>
            </div>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              {data.bio}
            </p>
            <p className="text-base text-white/70">
              {data.resumo}
            </p>

            <div className="flex gap-4 pt-4">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                Ver Projetos
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300">
                Contato
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl animate-float">
                <img src={data.foto} alt={data.nome} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-white/20 to-transparent blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Se desejar remover o separador de onda, basta comentar ou deletar abaixo */}
      {/* <div className="wave-separator"></div> */}
    </section>
  );
};

export default SobreSection;