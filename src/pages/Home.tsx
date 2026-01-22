import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle, Building2, Zap, Hammer, Palette } from "lucide-react";
import { MaintenanceSection } from "@/components/MaintenanceSection";

/**
 * Site Institucional - Serviços Residenciais
 * Design: Minimalismo Moderno com Tons Terrosos
 * Paleta: Marrom (#8B6F47), Bege (#F5F1E8), Cinza (#4A4A4A), Branco
 * Tipografia: Poppins (títulos), Inter (corpo)
 */

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen bg-white">
      {/* ===== NAVEGAÇÃO ===== */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <div className="font-display text-xl text-primary font-bold" style={{marginTop: '30px'}}>
              Serralheria e Empreiteira Equilíbrio
            </div>
            <div className="text-xs text-muted-foreground">
              Serviços Residenciais e Comerciais
            </div>
          </div>
          <ul className="hidden md:flex gap-8 text-foreground">
            <li><a href="#inicio" className="hover:text-primary transition-colors">Início</a></li>
            <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre</a></li>
            <li><a href="#servicos" className="hover:text-primary transition-colors">Serviços</a></li>
            <li><a href="#manutencao" className="hover:text-primary transition-colors">Manutenção</a></li>
            <li><a href="#contato" className="hover:text-primary transition-colors">Contato</a></li>
          </ul>
        </div>
      </nav>

      {/* ===== SEÇÃO HERO / INÍCIO ===== */}
      <section id="inicio" className="relative w-full h-96 md:h-screen bg-cover bg-center flex items-center justify-center" style={{backgroundImage: 'url(/images/hero-banner.jpg)'}}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4">
          {/* Símbolo de Arquitetura e Urbanismo */}
          <img src="/images/architecture-symbol.png" alt="Símbolo de Arquitetura" className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-8" />
          <h1 className="font-display text-4xl md:text-6xl mb-4">
            Transforme Seu Espaço
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto">
            Soluções profissionais em elétrica, construção civil e pintura para sua casa e empresa
          </p>
          <a href="mailto:serralher.empreiteiraequilibrio@gmail.com" className="inline-block">
            <Button className="btn-primary bg-primary text-white hover:opacity-90">
              Solicitar Orçamento
            </Button>
          </a>
        </div>
      </section>

      {/* ===== SEÇÃO SOBRE NÓS ===== */}
      <section id="sobre" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/about-section.jpg" 
                alt="Sobre nós" 
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="font-display text-4xl mb-6 text-primary">Sobre Nós</h2>
              <p className="text-foreground text-lg mb-4 leading-relaxed">
                A Serralheria e Empreiteira Equilíbrio é uma empresa formalmente registrada com CNPJ ativo, especializada em oferecer soluções completas e integradas para serviços residenciais e comerciais. Com mais de 15 anos de experiência no mercado, nossa equipe especializada transforma espaços em ambientes funcionais, seguros e belos.
              </p>
              <p className="text-foreground text-lg mb-6 leading-relaxed">
                Nossa missão é proporcionar excelência em cada projeto, garantindo qualidade, pontualidade e satisfação do cliente. Possuímos estrutura profissional, equipe qualificada e compromisso com as normas técnicas vigentes. Trabalhamos com profissionalismo, responsabilidade e atenção aos detalhes em cada serviço.
              </p>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="font-display text-3xl text-primary mb-2">+15</div>
                  <p className="text-sm text-muted-foreground">Anos de Experiência</p>
                </div>
                <div className="text-center">
                  <div className="font-display text-3xl text-primary mb-2">500+</div>
                  <p className="text-sm text-muted-foreground">Projetos Concluídos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO SERVIÇOS ===== */}
      <section id="servicos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl text-center mb-4 text-primary">Nossos Serviços</h2>
          <p className="text-center text-foreground mb-16 max-w-2xl mx-auto">
            Oferecemos soluções profissionais e completas para suas necessidades residenciais e comerciais
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* SERVIÇO 1: ELÉTRICA */}
            <div className="bg-card rounded-lg overflow-hidden card-shadow hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
                <img src="/images/service-eletrica.jpg" alt="Serviço de Elétrica" className="w-full h-full object-cover" />
              </div>
              <div className="flex gap-2 p-3 overflow-x-auto bg-gray-100">
                <img src="/images/service-eletrica-2.jpg" alt="Elétrica - Imagem 2" className="w-32 h-32 object-cover rounded" />
                <img src="/images/service-eletrica-3.jpg" alt="Elétrica - Imagem 3" className="w-32 h-32 object-cover rounded" />
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl mb-4 text-primary">Elétrica</h3>
                <p className="text-foreground mb-6 leading-relaxed">
                  Instalações elétricas completas, manutenção, reparos e modernização de sistemas. Trabalhamos com segurança e conformidade com as normas técnicas vigentes.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>✓ Instalações novas</li>
                  <li>✓ Manutenção preventiva</li>
                  <li>✓ Reparos e correções</li>
                  <li>✓ Modernização de sistemas</li>
                </ul>
              </div>
            </div>

            {/* SERVIÇO 2: CONSTRUÇÃO CIVIL */}
            <div className="bg-card rounded-lg overflow-hidden card-shadow hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center overflow-hidden">
                <img src="/images/service-marcenaria.jpg" alt="Serviço de Construção Civil" className="w-full h-full object-cover" />
              </div>
              <div className="flex gap-2 p-3 overflow-x-auto bg-gray-100">
                <img src="/images/service-construcao-2.jpg" alt="Construção Civil - Imagem 2" className="w-32 h-32 object-cover rounded" />
                <img src="/images/service-construcao-3.jpg" alt="Construção Civil - Imagem 3" className="w-32 h-32 object-cover rounded" />
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl mb-4 text-primary">Construção Civil</h3>
                <p className="text-foreground mb-6 leading-relaxed">
                  Reformas, ampliações e obras civis. Criamos soluções personalizadas que combinam funcionalidade e beleza.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>✓ Reformas residenciais</li>
                  <li>✓ Ampliações e construções</li>
                  <li>✓ Alvenaria e estrutura</li>
                  <li>✓ Acabamentos em geral</li>
                </ul>
              </div>
            </div>

            {/* SERVIÇO 3: PINTURA */}
            <div className="bg-card rounded-lg overflow-hidden card-shadow hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center overflow-hidden">
                <img src="/images/service-pintura.jpg" alt="Serviço de Pintura" className="w-full h-full object-cover" />
              </div>
              <div className="flex gap-2 p-3 overflow-x-auto bg-gray-100">
                <img src="/images/service-pintura-2.jpg" alt="Pintura - Imagem 2" className="w-32 h-32 object-cover rounded" />
                <img src="/images/service-pintura-3.jpg" alt="Pintura - Imagem 3" className="w-32 h-32 object-cover rounded" />
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl mb-4 text-primary">Pintura</h3>
                <p className="text-foreground mb-6 leading-relaxed">
                  Pintura residencial e comercial com acabamento profissional. Utilizamos tintas de qualidade e técnicas modernas para resultados duráveis.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>✓ Pintura interna</li>
                  <li>✓ Pintura externa</li>
                  <li>✓ Preparação de superfícies</li>
                  <li>✓ Acabamentos especiais</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO MANUTENÇÃO ===== */}
      <MaintenanceSection />

      {/* ===== SEÇÃO CONTATO ===== */}
      <section id="contato" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl text-center mb-4 text-primary">Entre em Contato</h2>
          <p className="text-center text-foreground mb-16 max-w-2xl mx-auto">
            Estamos aqui para responder suas dúvidas e oferecer as melhores soluções para seu projeto
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* INFORMAÇÕES DE CONTATO */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Mail className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-lg mb-2">E-mail</h3>
                  <p className="text-foreground"><a href="mailto:serralher.empreiteiraequilibrio@gmail.com" className="text-primary hover:underline">serralher.empreiteiraequilibrio@gmail.com</a></p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MessageCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-lg mb-2">WhatsApp</h3>
                  <p className="text-foreground">Aguardando Informações</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-lg mb-2">Telefone</h3>
                  <p className="text-foreground">Aguardando Informações</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Building2 className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-lg mb-2">CNPJ</h3>
                  <p className="text-foreground">59.884.468/0001-39</p>
                </div>
              </div>
            </div>

            {/* FORMULÁRIO DE CONTATO */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <form className="space-y-6">
                <div>
                  <label className="block text-foreground font-medium mb-2">Nome</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label className="block text-foreground font-medium mb-2">E-mail</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-foreground font-medium mb-2">Telefone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label className="block text-foreground font-medium mb-2">Mensagem</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Descreva seu projeto..."
                  ></textarea>
                </div>

          <a href="mailto:serralher.empreiteiraequilibrio@gmail.com" className="block">
            <Button className="w-full btn-primary bg-primary text-white hover:opacity-90">
              Enviar Mensagem
            </Button>
          </a>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO CTA - SOLICITAR ORÇAMENTO ===== */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl mb-4">Pronto para Começar?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Solicite um orçamento sem compromisso e conheça nossas soluções personalizadas
          </p>
          <a href="mailto:serralher.empreiteiraequilibrio@gmail.com" className="inline-block">
            <Button className="bg-white text-primary hover:opacity-90 font-medium px-8 py-3 rounded-lg">
              Solicitar Orçamento
            </Button>
          </a>
        </div>
      </section>

      {/* ===== RODAPÉ ===== */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
             <div className="font-display text-lg mb-4 text-primary">Serralheria e Empreiteira Equilíbrio</div>
            <p className="text-foreground text-sm">
              Soluções profissionais em elétrica, construção civil e pintura
              para sua casa e empresa.
            </p>
            <p className="text-foreground text-sm mt-3">
              <strong>CNPJ:</strong> 59.884.468/0001-39
            </p>
            </div>

            <div>
              <h3 className="font-display text-lg mb-4 text-primary">Links Rápidos</h3>
              <ul className="space-y-2 text-sm text-foreground">
                <li><a href="#inicio" className="hover:text-primary transition-colors">Início</a></li>
                <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre</a></li>
                <li><a href="#servicos" className="hover:text-primary transition-colors">Serviços</a></li>
                <li><a href="#contato" className="hover:text-primary transition-colors">Contato</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-lg mb-4 text-primary">Redes Sociais</h3>
              <div className="flex gap-4">
                <a href="#" className="text-primary hover:text-opacity-70 transition-colors">Facebook</a>
                <a href="#" className="text-primary hover:text-opacity-70 transition-colors">Instagram</a>
                <a href="#" className="text-primary hover:text-opacity-70 transition-colors">WhatsApp</a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 Serralheria e Empreiteira Equilíbrio. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
