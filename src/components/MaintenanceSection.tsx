/**
 * Componente: Seção de Serviços de Manutenção
 * Exibe cards responsivos com imagens e descrições dos serviços de manutenção
 */

export function MaintenanceSection() {
  return (
    <section id="manutencao" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl text-center mb-4 text-primary">
          Serviços de Manutenção
        </h2>
        <p className="text-center text-foreground mb-16 max-w-2xl mx-auto">
          Executamos serviços de manutenção em portões, grades, corrimãos e estruturas metálicas em geral. Atendemos residências, comércios e indústrias com agilidade, segurança e qualidade.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* MANUTENÇÃO 1: PORTÃO */}
          <div className="bg-card rounded-lg overflow-hidden card-shadow hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
              <img
                src="/images/maintenance-portao.jpg"
                alt="Soldagem em portão"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-lg mb-2 text-primary">
                Soldagem em Portão
              </h3>
              <p className="text-foreground text-sm leading-relaxed">
                Reparos e soldagem em portões metálicos com acabamento profissional e durável.
              </p>
            </div>
          </div>

          {/* MANUTENÇÃO 2: CAIXAS */}
          <div className="bg-card rounded-lg overflow-hidden card-shadow hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center overflow-hidden">
              <img
                src="/images/maintenance-caixas.jpg"
                alt="Estrutura de armazenamento"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-lg mb-2 text-primary">
                Estrutura de Armazenamento
              </h3>
              <p className="text-foreground text-sm leading-relaxed">
                Manutenção e reparo de estruturas metálicas para armazenamento com qualidade garantida.
              </p>
            </div>
          </div>

          {/* MANUTENÇÃO 3: ESTRUTURA */}
          <div className="bg-card rounded-lg overflow-hidden card-shadow hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center overflow-hidden">
              <img
                src="/images/maintenance-estrutura.jpg"
                alt="Reparo de estrutura metálica"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-lg mb-2 text-primary">
                Reparo de Estrutura Metálica
              </h3>
              <p className="text-foreground text-sm leading-relaxed">
                Reparos especializados em estruturas metálicas com acabamento profissional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
