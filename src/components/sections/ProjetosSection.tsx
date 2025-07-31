import { useEffect, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Projeto {
  id: number;
  titulo: string;
  descricao: string;
  tecnologias: string[];
  link: string;
  demo: string;
  imagem: string;
  destaque: boolean;
}

const ProjetosSection = () => {
  const [projetos, setProjetos] = useState<Projeto[]>([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(jsonData => setProjetos(jsonData.projetos))
      .catch(error => console.error('Error loading projects data:', error));
  }, []);

  if (projetos.length === 0) {
    return (
      <section id="projetos" className="portfolio-section">
        <div className="portfolio-container">
          <div className="animate-pulse">
            <div className="h-12 bg-muted rounded mb-8"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-64 bg-muted rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projetos" className="portfolio-section bg-white text-[#171515]">
      <div className="portfolio-container">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl md:text-5xl font-bold mb-4 text-[#800080]">
            Projetos
          </h2>
          <p className="section-subtitle text-xl text-[#171515]/80">
            Alguns dos meus trabalhos mais recentes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetos.map((projeto, index) => (
            <div
              key={projeto.id}
              className="portfolio-card bg-[#800080]/10 p-6 rounded-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-4 group">
                <img
                  src={projeto.imagem}
                  alt={projeto.titulo}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#800080]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={projeto.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#171515] text-white p-3 rounded-full hover:scale-110 transition-transform"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={projeto.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#171515] text-white p-3 rounded-full hover:scale-110 transition-transform"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#800080]">
                  {projeto.titulo}
                </h3>
                <p className="text-[#171515]/80">
                  {projeto.descricao}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {projeto.tecnologias.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[#171515]/10 text-[#171515] text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4 pt-2">
                  <a
                    href={projeto.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#800080] hover:text-[#800080]/80 transition-colors"
                  >
                    Ver Demo
                  </a>
                  <a
                    href={projeto.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#171515] hover:text-[#171515]/90 transition-colors"
                  >
                    Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjetosSection;