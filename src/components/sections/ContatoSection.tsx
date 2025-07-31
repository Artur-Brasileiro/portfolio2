import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

interface Contato {
  email: string;
  telefone: string;
  linkedin: string;
  github: string;
  twitter: string;
  endereco: {
    cidade: string;
    estado: string;
    pais: string;
  };
}

const ContatoSection = () => {
  const [contato, setContato] = useState<Contato | null>(null);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(jsonData => setContato(jsonData.contato))
      .catch(error => console.error('Error loading contact data:', error));
  }, []);

  if (!contato) {
    return (
      <section id="contato" className="portfolio-section">
        <div className="portfolio-container">
          <div className="animate-pulse">
            <div className="h-12 bg-muted rounded mb-8"></div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="h-64 bg-muted rounded-lg"></div>
              <div className="h-64 bg-muted rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contato" className="portfolio-section bg-purple-700 text-white">
      <div className="portfolio-container">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
          >
            Contato
          </h2>
          <p
            className="text-xl text-white/80 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            Vamos conversar sobre seu próximo projeto
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div
            className="space-y-8 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Entre em Contato</h3>
              <p className="text-white/80 mb-8">
                Estou sempre aberto a discutir novas oportunidades e projetos interessantes.
                Vamos criar algo incrível juntos!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Email</p>
                  <a
                    href={`mailto:${contato.email}`}
                    className="text-white hover:text-white/80 transition-colors"
                  >
                    {contato.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Telefone</p>
                  <a
                    href={`tel:${contato.telefone}`}
                    className="text-white hover:text-white/80 transition-colors"
                  >
                    {contato.telefone}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Localização</p>
                  <p className="text-white">
                    {contato.endereco.cidade}, {contato.endereco.estado}, {contato.endereco.pais}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold mb-4 text-white">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a
                  href={contato.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <Linkedin className="text-white" size={24} />
                </a>
                <a
                  href={contato.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <Github className="text-white" size={24} />
                </a>
                <a
                  href={contato.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <Twitter className="text-white" size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            <form className="space-y-6 bg-white/10 p-8 rounded-xl backdrop-blur-sm">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors resize-none"
                  placeholder="Conte-me sobre seu projeto..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContatoSection;
