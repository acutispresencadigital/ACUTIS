/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, type ReactNode, type UIEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  ChevronDown, 
  Target, 
  Filter, 
  Search, 
  Zap, 
  Instagram, 
  ArrowRight,
  ShieldCheck,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// --- Components ---

const Container = ({ children, className = "" }: { children: ReactNode, className?: string }) => (
  <div className={`max-w-[1000px] mx-auto px-6 ${className}`}>
    {children}
  </div>
);

const Button = ({ children, className = "", primary = false, conversion = false, onClick }: { children: ReactNode, className?: string, primary?: boolean, conversion?: boolean, onClick?: () => void }) => (
  <button 
    onClick={onClick}
    className={`
    inline-flex items-center justify-center text-center leading-tight
    px-8 py-4 transition-all duration-200 active:scale-[0.98]
    ${conversion
      ? "bg-gradient-to-br from-[#00c853] to-[#00e676] text-black rounded-[10px] font-bold text-[17px] px-10 py-[20px] shadow-[0_0_25px_rgba(0,200,83,0.4)] hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(0,200,83,0.6)]"
      : primary 
        ? "bg-brand-blue text-white hover:bg-[#0052cc] rounded-[6px] font-semibold text-[15px] md:text-base" 
        : "bg-white/[0.05] border border-white/[0.08] text-white hover:bg-white/[0.1] rounded-[6px] font-semibold text-[15px] md:text-base"}
    ${className}
  `}>
    {children}
  </button>
);

const SectionTitle = ({ children, className = "" }: { children: ReactNode, className?: string }) => (
  <h2 className={`
    font-sans font-bold title-tight mb-6 text-white
    text-3xl md:text-5xl lg:text-[56px]
    ${className}
  `}>
    {children}
  </h2>
);

const Paragraph = ({ children, className = "" }: { children: ReactNode, className?: string }) => (
  <p className={`
    text-[17px] md:text-lg text-zinc leading-[1.6] max-w-[640px]
    ${className}
  `}>
    {children}
  </p>
);

const AccordionItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-white/[0.08] last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left transition-opacity hover:opacity-80"
      >
        <span className="text-lg md:text-xl font-semibold text-white tracking-tight">{question}</span>
        <ChevronDown className={`w-5 h-5 text-zinc transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="pb-8 text-zinc text-[17px] leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    document.title = "ACUTIS PRESENÇA DIGITAL";
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const WHATSAPP_URL = "https://wa.me/5531936184412?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações";

  const handleCTA = () => {
    window.open(WHATSAPP_URL, '_blank');
  };

  const scrollGallery = (direction: 'left' | 'right') => {
    const slider = document.getElementById('feedback-slider');
    if (slider) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleGalleryScroll = (e: UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollPosition = container.scrollLeft;
    const itemWidth = container.clientWidth / (window.innerWidth < 768 ? 1 : 2.5); 
    const index = Math.round(scrollPosition / 320); // 300px card + simplified gap
    setActiveIndex(Math.min(5, Math.max(0, index)));
  };

  const scrollToConversion = () => {
    document.getElementById('conversao')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand-blue/30">
      <div className="font-sans">
        
        {/* 1. HERO SECTION */}
        <section className="section-spacing min-h-[85vh] flex flex-col items-center justify-center">
          <Container className="text-center">
            <motion.div {...fadeIn}>
              <div className="flex justify-center mb-8">
                <img 
                  onClick={scrollToTop}
                  src="https://i.imgur.com/4sGW7sr.png" 
                  alt="ACUTIS Logo" 
                  className="h-16 md:h-24 w-auto object-contain cursor-pointer transition-transform active:scale-95"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="inline-block px-3 py-1 rounded-full border border-white/[0.1] text-zinc text-[13px] font-medium tracking-wide mb-8">
                Consultoria de Presença Digital Especializada
              </span>

              <h1 className="font-sans font-extrabold text-5xl md:text-7xl lg:text-8xl title-tight mb-8">
                Se você parar de postar hoje… <br />
                <span className="text-brand-blue">seu negócio continua vendendo?</span>
              </h1>

              <div className="flex flex-col items-center gap-8 mb-10">
                <div className="space-y-4">
                  <p className="text-2xl md:text-3xl font-bold text-white max-w-[700px] leading-[1.2]">
                    Se a resposta for "não sei", você não tem um sistema de vendas.
                  </p>
                  <p className="text-zinc text-lg font-medium">
                    Você tem um perfil dependente de algoritmo de redes sociais.
                  </p>
                </div>

                <div className="max-w-[640px] p-1 border-white/[0.08]">
                  <p className="text-xl md:text-2xl text-zinc leading-relaxed font-medium italic">
                    E enquanto você tenta chamar atenção com posts… <span className="text-white font-bold">seus concorrentes estão sendo encontrados</span> no Google por clientes prontos para comprar.
                  </p>
                </div>

                <div className="space-y-6 flex flex-col items-center">
                  <h3 className="text-lg md:text-xl font-bold text-brand-blue uppercase tracking-[0.1em]">
                    PARE DE PERDER CLIENTES TODOS OS DIAS
                  </h3>
                  <Paragraph className="text-center">
                    <span className="text-white font-bold">Um site profissional + presença estruturada no Google</span> para você ser a primeira opção de quem já está procurando pelo seu serviço.
                  </Paragraph>
                  <div className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    Menos tempo respondendo curiosos. <br />
                    <span className="text-brand-blue italic">Mais conversas com quem quer fechar.</span>
                  </div>
                </div>
              </div>

              <Button conversion onClick={handleCTA} className="w-full sm:w-auto">
                Quero minha estrutura profissional
              </Button>
              <p className="text-[12px] opacity-70 mt-4 font-medium text-zinc">
                Sem compromisso • Resposta rápida
              </p>
            </motion.div>
          </Container>
        </section>

        {/* 2. GATILHO DE SEGURANÇA */}
        <section className="section-spacing border-y border-white/[0.06]">
          <Container>
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div {...fadeIn}>
                <ShieldCheck className="w-8 h-8 text-brand-blue mb-8" />
                
                <SectionTitle>
                  Você vai mesmo deixar o futuro do seu negócio nas mãos do Instagram?
                </SectionTitle>

                <div className="space-y-12">
                  <Paragraph className="text-xl md:text-2xl text-white font-semibold max-w-full">
                    Você não precisa parar de usar redes sociais. Mas precisa <span className="text-brand-blue font-bold">parar de depender delas</span>.
                  </Paragraph>
                  
                  <div className="space-y-6">
                    <p className="text-[13px] font-bold uppercase tracking-widest text-zinc/60">HOJE FUNCIONA ASSIM:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-10 border border-white/[0.08] rounded-[6px]">
                        <p className="text-[17px]"><span className="text-brand-blue font-bold block text-2xl mb-2">Se você posta</span> aparece</p>
                      </div>
                      <div className="p-10 border border-white/[0.08] rounded-[6px] opacity-25">
                        <p className="text-[17px]"><span className="text-white font-bold block text-2xl mb-2">Se não posta</span> desaparece</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <p className="text-[13px] font-bold uppercase tracking-widest text-zinc/60">E ENQUANTO ISSO:</p>
                    <ul className="space-y-6">
                      {[
                        "Seus clientes se distraem com vídeos",
                        "Seu conteúdo some em poucas horas",
                        "E você precisa começar tudo de novo… todos os dias"
                      ].map((item, id) => (
                        <li key={id} className="flex gap-4 items-start">
                          <CheckCircle2 className="w-5 h-5 text-brand-blue mt-1 flex-shrink-0" />
                          <span className="text-white font-medium text-[19px]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-8">
                    <h3 className="text-2xl font-bold text-white mb-8 tracking-tight">AGORA IMAGINA O CONTRÁRIO</h3>
                    <div className="bg-brand-blue/95 text-white p-12 rounded-[6px] relative overflow-hidden group shadow-2xl shadow-brand-blue/10">
                      <Target className="absolute -bottom-4 -right-4 w-32 h-32 opacity-15" />
                      <div className="relative z-10 max-w-[480px]">
                        <p className="text-[22px] font-bold leading-snug mb-4">Um lugar onde o cliente te encontra mesmo quando você não está fazendo nada.</p>
                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] opacity-80">
                          SEM DEPENDER DE CONTEÚDO CONSTANTE. SEM DANCINHA. SEM ESTRESSE.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <div className="space-y-12">
                <motion.div 
                  {...fadeIn} 
                  transition={{ delay: 0.2 }}
                  className="p-12 border border-white/[0.08] rounded-[6px] relative"
                >
                  <Instagram className="absolute top-6 right-6 w-5 h-5 text-white/10" />
                  <h3 className="text-[15px] font-bold mb-10 uppercase tracking-[0.2em] text-zinc">CICLO DE DEPENDÊNCIA</h3>
                  <ul className="space-y-8">
                    {[
                      "O algoritmo corta seu alcance do dia pra noite",
                      "Sua conta pode ser bloqueada ou hackeada",
                      "Seus clientes se perdem no meio de notificações",
                      "Você gasta horas criando conteúdo que some"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                        <span className="text-zinc font-medium text-[17px] leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-12 pt-8 border-t border-white/[0.08]">
                    <p className="text-white font-bold text-lg leading-snug">
                      Enquanto isso, quem tem uma <span className="text-brand-blue">estrutura profissional</span> continua sendo encontrado.
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  {...fadeIn} 
                  transition={{ delay: 0.3 }}
                  className="bg-zinc/[0.05] p-12 border border-white/[0.08] rounded-[6px]"
                >
                  <h3 className="text-3xl font-bold mb-6 tracking-tight leading-tight">Uma <span className="text-brand-blue">página de vendas</span> transforma visitas em conversas.</h3>
                  <p className="text-lg font-medium text-zinc mb-10">Ponto final.</p>
                  
                  <div className="flex flex-wrap gap-2 mb-10">
                    {["Contínuo", "Previsível", "Escalável"].map((tag) => (
                      <span key={tag} className="text-[11px] font-bold uppercase tracking-widest text-zinc/80 px-4 py-2 bg-white/[0.03] border border-white/[0.06] rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="pt-8 border-t border-white/[0.08]">
                    <p className="text-lg font-medium italic text-zinc leading-relaxed">
                      É como ter um <span className="text-white font-bold">vendedor trabalhando pra você 24 horas por dia</span>… trazendo só quem realmente tem interesse.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </Container>
        </section>

        {/* 3. SHOWCASE (PORTFOLIO) */}
        <section className="section-spacing">
          <Container>
            <motion.div {...fadeIn} className="text-center mb-10">
              <SectionTitle className="max-w-[1000px] mx-auto">
                Negócios comuns passam a <span className="text-brand-blue">dominar</span> o digital.
              </SectionTitle>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { 
                  title: "Foco em Conversão", 
                  desc: "Pensado para fazer o visitante clicar. Não só “achar bonito”.",
                  image: "https://i.imgur.com/8LKpNae.png" 
                },
                { 
                  title: "Design Responsivo", 
                  desc: "Experiência perfeita em qualquer dispositivo.",
                  image: "https://i.imgur.com/j80m06A.png" 
                },
                { 
                  title: "Autoridade Digital", 
                  desc: "Você deixa de ser “mais um” e passa a ser a referência.",
                  image: "https://i.imgur.com/NVB2LDi.png" 
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  {...fadeIn}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col h-full"
                >
                  <div className="w-full mb-10 group relative flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-brand-blue opacity-0 blur-[60px] group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" />
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02] shadow-[0_20px_50px_rgba(0,102,255,0.08)]"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-white tracking-tight">{item.title}</h4>
                  <Paragraph className="text-[16px] leading-relaxed">
                    {item.desc}
                  </Paragraph>
                </motion.div>
              ))}
            </div>
            
            <motion.div {...fadeIn} className="mt-32 max-w-[800px] mx-auto p-12 border border-white/[0.08] rounded-[6px]">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <Zap className="w-8 h-8 text-brand-blue flex-shrink-0" />
                <div className="text-center md:text-left flex-grow">
                  <h4 className="text-2xl font-bold mb-4">Metodologia Estratégica</h4>
                  <Paragraph className="text-[17px]">
                    Nada é aleatório — tudo é estruturado para guiar o cliente até o contato de forma rápida.
                  </Paragraph>
                </div>
                <div className="text-center md:text-right">
                  <p className="text-5xl font-extrabold text-brand-blue tracking-tighter">100%</p>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-zinc mt-1">VENDAS</p>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* 4. O DIFERENCIAL ACUTIS */}
        <section className="section-spacing bg-zinc/[0.01] border-y border-white/[0.05]">
          <Container>
            <motion.div {...fadeIn} className="text-center mb-24">
              <span className="text-zinc font-bold uppercase tracking-[0.2em] text-[13px] mb-4 block">COM A ACUTIS É FÁCIL E RÁPIDO</span>
              <SectionTitle className="max-w-[700px] mx-auto">
                Seu novo canal de vendas ativo em até <span className="whitespace-nowrap text-brand-blue">5 dias úteis.</span>
              </SectionTitle>
              <div className="flex flex-col items-center mt-10">
                <Button conversion onClick={handleCTA} className="w-full sm:w-auto px-12 text-center">
                  EU QUERO
                </Button>
                <p className="text-[12px] opacity-70 mt-4 font-medium text-zinc">
                  Sem compromisso • Resposta rápida
                </p>
              </div>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="space-y-10">
                <motion.div {...fadeIn} className="p-12 border border-white/[0.05] rounded-[6px] space-y-8">
                  <Target className="w-7 h-7 text-brand-blue" />
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Site que leva o cliente à ação</h3>
                    <p className="text-xl text-white font-bold italic mb-8 border-l-2 border-brand-blue/30 pl-6">Aqui tudo é para conversão.</p>
                    <ul className="space-y-6">
                      {[
                        "Integração com o WhatsApp",
                        "Integração com checkouts",
                        "Integração com agendamentos",
                        "Comunicação que direciona",
                        "Navegação sem distrações"
                      ].map((li, idx) => (
                        <li key={idx} className="flex gap-3 items-center text-zinc text-[18px]">
                          <CheckCircle2 className="w-5 h-5 text-brand-blue/40" />
                          <span>{li}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                <motion.div {...fadeIn} className="p-12 border border-white/[0.05] rounded-[6px] space-y-8">
                  <Filter className="w-7 h-7 text-brand-blue" />
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Filtro de Curiosos</h3>
                    <p className="text-xl text-zinc font-medium mb-10">Receba apenas quem realmente tem interesse em fechar.</p>
                    <div className="space-y-4">
                      {["Já entende o que você faz", "Já altamente interessado", "Pronto para decisão"].map((step, idx) => (
                        <div key={idx} className="p-6 border border-white/[0.04] bg-white/[0.02] rounded text-[17px] font-semibold text-zinc/80">
                          {step}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="space-y-10">
                <motion.div {...fadeIn} className="p-12 border border-white/[0.05] rounded-[6px] space-y-8">
                  <Search className="w-7 h-7 text-brand-blue" />
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-white">Apareça no Google</h3>
                    <Paragraph className="mb-8">Seu cliente já está procurando pelo seu serviço agora.</Paragraph>
                    <div className="p-10 bg-white/[0.03] border-l border-brand-blue/50 mb-10">
                      <p className="text-2xl font-bold text-white italic">Ele encontra você ou seu concorrente?</p>
                    </div>
                    <p className="text-brand-blue text-2xl font-bold tracking-tight">
                      Presença local estratégica para clientes prontos para contratar.
                    </p>
                  </div>
                </motion.div>

                <motion.div {...fadeIn} className="bg-brand-blue p-14 rounded-[6px] text-white">
                  <ShieldCheck className="w-8 h-8 mb-8" />
                  <h3 className="text-4xl font-bold mb-6 title-tight">Tudo pronto, sem complicação</h3>
                  <p className="text-lg font-medium mb-8 opacity-90 leading-relaxed">
                    Nós cuidamos da tecnologia, da estrutura e da entrega. Você cuida dos novos clientes.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-12">
                    {["Criação", "Estrutura", "Full-Suporte"].map((item) => (
                      <span key={item} className="px-4 py-2 bg-white/10 rounded text-[10px] font-bold uppercase tracking-widest">{item}</span>
                    ))}
                  </div>
                  
                  <div className="pt-10 border-t border-white/20 w-full">
                    <p className="text-5xl font-extrabold tracking-tighter mb-4">Zero estresse.</p>
                    <p className="opacity-70 text-[15px] font-medium italic">Foco total no seu negócio.</p>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <div className="mt-24 flex flex-col items-center">
              <Button conversion onClick={handleCTA} className="w-full sm:w-auto px-12">
                Falar com um especialista
              </Button>
              <p className="text-[12px] opacity-70 mt-4 font-medium text-zinc">
                Sem compromisso • Resposta rápida
              </p>
            </div>
          </Container>
        </section>

        {/* 5. FEEDBACKS (PREMIUM SaaS STYLE) */}
        <section className="section-spacing bg-zinc/[0.01] relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />
          
          <Container>
            <motion.div {...fadeIn} className="text-center mb-12">
              <SectionTitle className="max-w-[700px] mx-auto text-4xl md:text-5xl uppercase tracking-tighter">
                Feedbacks
              </SectionTitle>
            </motion.div>

            <div className="relative group max-w-[1200px] mx-auto px-4 md:px-0">
              {/* Navigation Arrows (Desktop) */}
              <button 
                onClick={() => scrollGallery('left')}
                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-12 h-12 items-center justify-center rounded-full bg-white/[0.08] text-white hover:bg-white/[0.15] transition-all backdrop-blur-sm p-3 group-hover:opacity-100 opacity-0"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button 
                onClick={() => scrollGallery('right')}
                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 w-12 h-12 items-center justify-center rounded-full bg-white/[0.08] text-white hover:bg-white/[0.15] transition-all backdrop-blur-sm p-3 group-hover:opacity-100 opacity-0"
                aria-label="Próximo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div 
                className="flex overflow-x-auto gap-8 pb-14 snap-x snap-mandatory no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing"
                id="feedback-slider"
                onScroll={handleGalleryScroll}
              >
                {[
                  "https://i.imgur.com/zr5tjtB.png",
                  "https://i.imgur.com/2y7MAau.png",
                  "https://i.imgur.com/rfCH0IZ.png",
                  "https://i.imgur.com/5iN0zTQ.png",
                  "https://i.imgur.com/ICr8XOc.png",
                  "https://i.imgur.com/RfzKQHD.png"
                ].map((src, idx) => (
                  <motion.div 
                    key={idx} 
                    className="flex-none w-[300px] md:w-[380px] snap-center"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <div className="relative bg-zinc/[0.03] backdrop-blur-[2px] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl transition-all hover:border-brand-blue/30 group/card h-auto">
                      {/* Subtle light sheen on top */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
                      
                      <img 
                        src={src} 
                        alt={`Feedback ${idx + 1}`} 
                        className="w-full h-auto object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Navigation Indicators & Text */}
              <div className="flex flex-col items-center gap-6 mt-2">
                <div className="flex gap-1.5">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className={`h-1 rounded-full transition-all duration-300 ${activeIndex === i ? "w-8 bg-brand-blue" : "w-2 bg-white/[0.1]"}`} />
                  ))}
                </div>
                <div className="flex items-center gap-4 text-zinc">
                  <span className="h-[1px] w-8 bg-white/[0.08]" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">
                    Deslize para navegar
                  </p>
                  <span className="h-[1px] w-8 bg-white/[0.08]" />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 6. FAQ */}
        <section className="section-spacing container mx-auto max-w-[800px] px-6">
          <motion.div {...fadeIn} className="text-center mb-12">
            <span className="text-brand-blue font-bold uppercase tracking-[0.2em] text-[13px] mb-4 block">DÚVIDAS</span>
            <SectionTitle className="text-center">FAQ</SectionTitle>
          </motion.div>

          <motion.div {...fadeIn}>
            <AccordionItem 
              question="Mas meu negócio é pequeno… isso funciona pra mim?" 
              answer="Funciona principalmente pra negócios pequenos. Porque você precisa de uma estrutura que passe profissionalismo e transforme cada visita em uma oportunidade real de venda."
            />
            <AccordionItem 
              question="E se eu não souber nada de site ou tecnologia?" 
              answer="Melhor ainda. Você não precisa aprender nada — já recebe tudo pronto pra usar."
            />
            <AccordionItem 
              question="Eu já tenho Instagram… isso não resolve?" 
              answer="Se resolvesse, você já estaria vendendo mais. O Instagram distrai. Sua página direciona o cliente pra ação."
            />
            <AccordionItem 
              question="Qual a diferença disso pra um Linktree?" 
              answer="O Linktree só organiza links. Aqui você tem uma estrutura pensada pra gerar clientes."
            />
            <AccordionItem 
              question="Isso realmente traz mais clientes?" 
              answer="Se já tem gente chegando até você, sim. A diferença é que agora eles não vão só olhar — vão agir."
            />
            <AccordionItem 
              question="E se eu investir e não tiver retorno?" 
              answer="O maior risco não é investir. É continuar perdendo clientes todos os dias sem perceber."
            />
            <AccordionItem 
              question="Quanto tempo demora pra ficar pronto?" 
              answer="Em poucos dias já pode estar no ar… pronto pra começar a gerar resultado."
            />
            <AccordionItem 
              question="Vou precisar ficar mexendo nisso direto?" 
              answer="Não. A ideia é deixar rodando enquanto você foca em fechar clientes."
            />
            <AccordionItem 
              question="E se eu quiser mudar algo depois?" 
              answer="A gente ajusta pra você. Sem complicação."
            />
          </motion.div>
        </section>

        {/* 7. FINAL CTA BLOCK */}
        <section id="conversao" className="py-24 bg-zinc/[0.02] border-y border-white/[0.05]">
          <Container className="text-center">
            <motion.div {...fadeIn} className="max-w-[700px] mx-auto">
              <p className="text-2xl md:text-3xl font-medium text-white/90 leading-relaxed mb-12">
                Você pode continuar tentando do jeito que está… <br className="hidden md:block" />
                ou pode ter uma estrutura pensada pra <span className="text-brand-blue font-bold">gerar clientes todos os dias.</span>
              </p>
              
              <div className="flex flex-col items-center">
                <Button conversion onClick={handleCTA} className="w-full sm:w-auto px-12">
                  QUERO MAIS CLIENTES
                </Button>
                <p className="text-[12px] opacity-70 mt-4 font-medium text-zinc">
                  Sem compromisso • Resposta rápida
                </p>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* 8. FOOTER */}
        <footer className="py-12 border-t border-white/[0.08]">
          <Container className="text-center">
            <motion.div {...fadeIn}>
              <div className="mb-8 flex justify-center">
                <img 
                  onClick={scrollToTop}
                  src="https://i.imgur.com/4sGW7sr.png" 
                  alt="ACUTIS Logo" 
                  className="h-24 md:h-40 w-auto object-contain cursor-pointer transition-transform active:scale-95"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="max-w-[700px] mx-auto mb-10 space-y-8">
                <p className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-white title-tight">
                  Sua estrutura própria não é um custo, é a sua liberdade do algoritmo.
                </p>
                
                <div className="space-y-4">
                  <p className="text-brand-blue text-lg md:text-xl font-bold uppercase tracking-[0.2em]">
                    Pare de depender. Comece a construir.
                  </p>
                  <p className="text-zinc/30 text-3xl md:text-4xl font-extrabold uppercase tracking-tight">
                    Presença Real.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center mb-12">
                <Button conversion onClick={handleCTA} className="w-full sm:w-auto px-12">
                  QUERO UMA PÁGINA DE VENDAS
                </Button>
                <p className="text-[12px] opacity-70 mt-4 font-medium text-zinc">
                  Sem compromisso • Resposta rápida
                </p>
              </div>

              <div className="max-w-[600px] mx-auto mb-16 space-y-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-blue/80">
                  Operação Digital Estratégica
                </p>
                <p className="text-zinc text-sm font-medium leading-relaxed uppercase tracking-wider opacity-60">
                  Nossa base é tecnológica e remota, o que nos permite entregar <br className="hidden md:block" />
                  presença digital de alto nível para empresas de todos os estados do Brasil.
                </p>
              </div>

              <div className="pt-12 border-t border-white/[0.05] text-zinc/30 text-xs font-bold tracking-[0.2em] uppercase">
                <p>© 2026 ACUTIS PRESENÇA DIGITAL.</p>
              </div>
            </motion.div>
          </Container>
        </footer>
      </div>
    </div>
  );
}
