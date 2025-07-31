import { useEffect, useState } from 'react';

interface HabilidadeCategoria {
  categoria: string;
  itens: string[];
}

const HabilidadesSection = () => {
  const [habilidades, setHabilidades] = useState<HabilidadeCategoria[]>([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(jsonData => setHabilidades(jsonData.habilidades))
      .catch(error => console.error('Error loading skills data:', error));
  }, []);

  if (habilidades.length === 0) {
    return (
      <section id="habilidades" className="portfolio-section">
        <div className="portfolio-container">
          <div className="animate-pulse">
            <div className="h-12 bg-muted rounded mb-8"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="h-48 bg-muted rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="habilidades" className="portfolio-section bg-white text-[#171515]">
      <div className="portfolio-container">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl md:text-5xl font-bold mb-4 text-[#800080]">
            Habilidades
          </h2>
          <p className="section-subtitle text-xl text-[#171515]/80">
            Tecnologias e ferramentas que domino
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {habilidades.map((categoria, index) => (
            <div
              key={categoria.categoria}
              className="portfolio-card bg-[#800080]/10 p-6 rounded-lg text-[#171515] text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-6 text-[#800080]">
                {categoria.categoria}
              </h3>

              <div className="space-y-3">
                {categoria.itens.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="px-4 py-2 rounded-lg transition-all duration-300 cursor-default"
                    style={{ backgroundColor: 'rgba(23,21,21,0.05)' }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HabilidadesSection;