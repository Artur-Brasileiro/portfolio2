import { useEffect, useState } from 'react';
import { GraduationCap, Calendar, CheckCircle } from 'lucide-react';

interface Educacao {
  id: number;
  instituicao: string;
  curso: string;
  periodo: string;
  status: string;
  descricao: string;
}

const EducacaoSection = () => {
  const [educacao, setEducacao] = useState<Educacao[]>([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(jsonData => setEducacao(jsonData.educacao))
      .catch(error => console.error('Error loading education data:', error));
  }, []);

  if (educacao.length === 0) {
    return (
      <section id="educacao" className="portfolio-section">
        <div className="portfolio-container">
          <div className="animate-pulse">
            <div className="h-12 bg-muted rounded mb-8"></div>
            <div className="space-y-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-32 bg-muted rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="educacao" className="portfolio-section bg-white text-[#171515]">
      <div className="portfolio-container">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl md:text-5xl font-bold mb-4 text-[#800080]">
            Educação
          </h2>
          <p className="section-subtitle text-xl text-[#171515]/80">
            Minha jornada acadêmica e certificações
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-[#800080]/20" />

          {educacao.map((item, index) => (
            <div
              key={item.id}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute top-6 w-4 h-4 bg-[#800080] rounded-full left-6 md:left-1/2 md:-translate-x-1/2`}
              />

              {/* Content Card */}
              <div
                className={`ml-16 md:ml-0 md:w-5/12 bg-[#800080]/10 p-6 rounded-lg text-[#171515] ${
                  index % 2 === 0 ? 'md:mr-8 md:ml-auto' : 'md:ml-8'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-[#800080]/10 p-3 rounded-lg">
                    <GraduationCap size={24} className="text-[#800080]" />
                  </div>

                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="text-xl font-bold text-[#800080]">
                        {item.curso}
                      </h3>
                      <h4 className="text-lg font-semibold text-[#171515]">
                        {item.instituicao}
                      </h4>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-[#171515]/80">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{item.periodo}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <CheckCircle size={16} className="text-green-500" />
                        <span>{item.status}</span>
                      </div>
                    </div>

                    <p className="text-[#171515]/70">
                      {item.descricao}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducacaoSection;