import React from "react";
import { ArrowRight, Leaf, Users, Globe, ArrowDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const timelineMilestones = [
  {
    year: "2016",
    title: "Início",
    subtitle: "festival da sustentabilidade",
    copy: "A primeira chamada: transformar resíduo orgânico em vínculo, solo e presença no território.",
  },
  {
    year: "2018",
    title: "Rede",
    subtitle: "trilhas do araçari",
    copy: "Mutirões, vizinhos, escolas e parceiros começam a formar uma inteligência coletiva de cuidado.",
  },
  {
    year: "2020",
    title: "Expansão",
    subtitle: "liga da compostagem",
    copy: "A cultura da compostagem atravessa telas, ruas e quintais, conectando mais gente ao ciclo da vida.",
  },
  {
    year: "2022",
    title: "Cultura",
    subtitle: "Instituto Pindorama",
    copy: "Educação, tecnologia de chão e memória viva viram linguagem para regenerar o cotidiano urbano.",
  },
      {
        year: "2026",
        title: "Compostoverso",
        subtitle: "Instituto COMPOR",
        copy: "A rede ganha novas camadas: dados, narrativas, experiências e comunidades em órbita.",
        actions: [
          {
            date: "03–09/05/26",
            title: "Semana da Compostagem",
            copy: "A mobilização entra em órbita: ações locais, convocações públicas e compostagem ocupando ruas, redes e territórios.",
          },
          {
            date: "30/11/26",
            title: "Dia do Compostonauta",
            copy: "10 anos de movimento Compostonautas: celebração, memória viva e lançamento dos próximos ciclos de regeneração.",
          },
        ],
      },
];

const triadPillars = [
  {
    eyebrow: "Pés no chão",
    title: "TELLUS",
    classTag: "▣ LVL 01 · SOLO",
    copy: "Compostagem, território e ação local. Pés no chão para ativar oficinas, mutirões, encontros e práticas vivas nos territórios.",
    accent: "#9caf88",
    texture: "radial-gradient(circle at 78% 92%, rgba(156,175,136,0.16), transparent 20%), radial-gradient(circle at 0% 0%, rgba(255,176,0,0.08), transparent 32%)",
  },
  {
    eyebrow: "Mãos no touch",
    title: "CYBER",
    classTag: "▥ LVL 02 · REDE",
    copy: "Rede, toque e mobilização. Mãos no touch para conectar pessoas, espalhar chamados e fortalecer a campanha em rede.",
    accent: "#ffb000",
    texture: "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
  },
  {
    eyebrow: "Cabeça na nuvem",
    title: "ASTRA",
    classTag: "✦ LVL 03 · VISÃO",
    copy: "Visão, imaginação e próximo ciclo. Cabeça na nuvem para abrir a campanha dos 10 anos e apontar novos futuros Compostonautas.",
    accent: "#60a5fa",
    texture: "radial-gradient(1.5px 1.5px at 20% 30%, rgba(255,255,255,0.65), transparent), radial-gradient(1px 1px at 70% 60%, rgba(255,255,255,0.45), transparent), linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
  },
];

const viralCards = [
  {
    kind: "ref. rua",
    text: "Composteiro de bairro?",
    support: "Leve sua prática para a campanha.",
    image: "/images/floranauta.png",
    imagePosition: "object-top",
    overlay: "bg-black/45",
    tone: "text-[#60a5fa] rotate-[-2deg]",
  },
  {
    kind: "manifesto",
    text: "Ideia para ação local?",
    support: "Ide e levai a compostagem a toda criatura.",
    image: "/images/jesus-meme.png",
    imagePosition: "object-top",
    overlay: "bg-black/60",
    tone: "text-[#60a5fa] rotate-[1deg]",
  },
  {
    kind: "convocação",
    text: "Quer somar com a rede?",
    support: "Entre em órbita como Compostonauta.",
    image: "/images/raul-meme.png",
    imagePosition: "object-top",
    overlay: "bg-black/50",
    tone: "text-[#60a5fa] rotate-[-1deg]",
  },
];

const participationPaths = [
  {
    title: "Organize uma ação local",
    copy: "Leve oficina, roda, mutirão ou encontro para sua cidade durante a Semana da Compostagem.",
    action: "Ativar território",
  },
  {
    title: "Apoie a campanha",
    copy: "Some com divulgação, articulação, estrutura, espaço ou colaboração em rede.",
    action: "Apoiar campanha",
  },
  {
    title: "Seja parceiro",
    copy: "Conecte escola, coletivo, horta, instituição ou iniciativa à nova etapa do Compostonautas.",
    action: "Conectar parceria",
  },
];

const CONTACT = {
  whatsappUrl: "https://chat.whatsapp.com/C6C4HYTg801KH2Ok6cDYdS",
  contactEmail: "compostonautas@gmail.com",
  openCallDateLabel: "data da chamada aberta: em breve",
};

const CAMPAIGN_LINKS = {
  interestFormUrl: "https://tally.so/r/rj0ozR",
  whatsappUrl: CONTACT.whatsappUrl,
};

const HERO_COPY = {
  eyebrow: "10 anos em órbita",
  paragraph:
    "A Semana da Compostagem 2026 marca a abertura da campanha de 10 anos do Compostonautas. Entre no grupo, receba o chamado e descubra como ativar seu território.",
  primaryCta: "Entrar no grupo do WhatsApp",
  secondaryCta: "Receber convite da chamada aberta",
  tertiaryCta: "Ativar meu território",
};

const Home = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

    const countdownStarted = true;
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  React.useEffect(() => {


    const targetDate = new Date("2026-11-30T00:00:00-03:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    };

    updateCountdown();
    const timer = window.setInterval(updateCountdown, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#050505] text-[#f5f1e8] min-h-[100dvh] selection:bg-[#ffb000] selection:text-black font-sans relative overflow-x-hidden">
      {/* Global Analog Noise */}
      <div 
        className="pointer-events-none fixed inset-0 z-[999] opacity-[0.035] mix-blend-screen" 
        style={{backgroundImage: "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/></filter><rect width='200' height='200' filter='url(%23n)'/></svg>\")"}}
      ></div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-5 md:px-8 py-6 flex items-center justify-between mix-blend-difference">
        <a href="#" className="flex items-center gap-4 group">
          <div className="w-10 h-10 rounded-full bg-black border border-white/20 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-500 ease-out">
            <img
              src="/images/logo-sinal-compostonauta.png"
              alt="Compostonautas"
              className="w-8 h-8 object-contain"
            />
          </div>
          <span className="font-mono text-[10px] tracking-[0.3em] text-white/70 hidden md:block group-hover:text-white transition-colors duration-500">COMPOSTONAUTAS</span>
        </a>
        <nav className="hidden md:flex gap-10 font-mono text-xs tracking-[0.2em] text-white/50">
          <a href="#triade" className="hover:text-[#ffb000] transition-colors duration-300">TRÍADE</a>
          <a href="#rede" className="hover:text-[#ffb000] transition-colors duration-300">REDE</a>
          <a href="https://chat.whatsapp.com/C6C4HYTg801KH2Ok6cDYdS" className="hover:text-[#ffb000] transition-colors duration-300">PARTICIPAR</a>
          <a href="#dez" className="hover:text-[#ffb000] transition-colors duration-300">10 ANOS</a>
          <a href="https://chat.whatsapp.com/C6C4HYTg801KH2Ok6cDYdS" className="bg-[#ffb000] text-black px-4 py-2 -mt-2 font-bold hover:bg-white transition-colors">WHATSAPP</a>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="relative h-[100svh] min-h-[720px] w-full overflow-hidden bg-black grain flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[#050505] z-10" />
          
          <div className="relative z-20 text-center px-4 max-w-6xl mx-auto flex flex-col items-center mt-2 md:mt-4">
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="mt-5 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="https://chat.whatsapp.com/C6C4HYTg801KH2Ok6cDYdS"
                target="_blank"
                rel="noreferrer"
                className="bg-[#ffb000] text-black px-6 py-3.5 font-space uppercase tracking-widest text-xs font-bold border-[3px] border-black shadow-[6px_6px_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0_#000] transition-all"
              >
                {HERO_COPY.primaryCta}
              </a>
              <a
                href="#chamados"
                className="bg-[#f5f1e8] text-black px-6 py-3.5 font-space uppercase tracking-widest text-xs font-bold border-[3px] border-black shadow-[6px_6px_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0_#000] transition-all"
              >
                {HERO_COPY.secondaryCta}
              </a>
              <a
                href="#rede"
                className="border border-white/25 px-6 py-3.5 font-space uppercase tracking-widest text-xs font-bold text-white/80 hover:border-[#ffb000] hover:text-[#ffb000] transition-colors"
              >
                {HERO_COPY.tertiaryCta}
              </a>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="font-caveat text-3xl md:text-5xl text-[#ffb000] mb-2 transform -rotate-3"
            >
              {HERO_COPY.eyebrow}
            </motion.h2>
            
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              className="font-anton text-[4rem] md:text-[6.2rem] lg:text-[6.9rem] leading-[0.82] tracking-tighter uppercase mb-2"
            >
              <motion.span style={{ y: y1 }} className="block text-stroke opacity-80">COMPOSTO</motion.span>
              <motion.span style={{ y: y2 }} className="block text-[#ffb000] relative z-10">NAUTAS</motion.span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="font-mono text-xs md:text-sm text-white/70 tracking-widest max-w-3xl mt-3 leading-relaxed"
            >
              {HERO_COPY.paragraph}
            </motion.p>

            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="mt-5 flex flex-col sm:flex-row gap-3"
            >
              {/*<a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-[#ffb000] text-black px-4 py-2 -mt-2 font-bold hover:bg-white transition-colors"
              >
                WHATSAPP
              </a>
              <a href="#chamados" className="bg-[#f5f1e8] text-black px-6 py-3.5 font-space uppercase tracking-widest text-xs font-bold border-[3px] border-black shadow-[6px_6px_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0_#000] transition-all">
                Receber convite da chamada aberta
              </a>
              <a href="#rede" className="border border-white/25 px-6 py-3.5 font-space uppercase tracking-widest text-xs font-bold text-white/80 hover:border-[#ffb000] hover:text-[#ffb000] transition-colors">
                Ativar meu território
              </a>*/}
            </motion.div>
            
            <motion.a 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              href="#triade" 
              className="mt-5 text-white/30 hover:text-[#ffb000] transition-colors hidden md:flex flex-col items-center gap-2 group"
            >
              <span className="font-mono text-[10px] tracking-[0.3em]">VER MOVIMENTO</span>
              <ArrowDown className="w-5 h-5 group-hover:translate-y-2 transition-transform duration-300" />
            </motion.a>
          </div>

          {/* Marquee Background */}
          <div className="absolute bottom-10 left-0 w-full overflow-hidden whitespace-nowrap opacity-[0.03] z-0 pointer-events-none">
            <div className="inline-block animate-marquee font-space text-[12rem] font-bold uppercase text-white tracking-tighter">
              CULTURA REGENERAÇÃO COMUNIDADE TECNOLOGIA CULTURA REGENERAÇÃO COMUNIDADE TECNOLOGIA
            </div>
          </div>
        </section>

        <section className="relative h-0 bg-[#050505] z-30">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full border border-white/15 bg-black flex items-center justify-center shadow-[0_0_70px_rgba(255,176,0,0.22)]">
              <img
                src="/images/logo-sinal-compostonauta.png"
                alt="Sinal Compostonauta"
                className="w-16 h-16 md:w-24 md:h-24 object-contain opacity-90"
              />
            </div>
          </div>
        </section>

        <section id="contagem" className="relative bg-[#050505] text-[#f5f1e8] px-5 md:px-12 py-20 md:py-28 border-y border-white/10 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
            <div className="font-anton text-[18vw] leading-none text-white uppercase tracking-tight">
              30/11
            </div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#ffb000] mb-5">
              Dia do Compostonauta · 30/11/26
            </p>

            <h2 className="font-anton uppercase text-5xl md:text-8xl leading-[0.9] tracking-tight mb-8">
              Contagem regressiva
            </h2>

            <p className="max-w-3xl mx-auto text-white/60 text-lg md:text-xl leading-relaxed mb-10">
              Um ciclo de 10 anos se fecha. Outro começa a entrar em órbita.
            </p>
            <p className="max-w-3xl mx-auto text-white/60 text-lg md:text-xl leading-relaxed mb-10">
              Transição em andamento!
            </p>

            <p className="max-w-3xl mx-auto text-white/60 text-lg md:text-xl leading-relaxed mb-10">
              Destino: Dia do Compostonauta!
            </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-10">
                {[
                  ["Dias", timeLeft.days],
                  ["Horas", timeLeft.hours],
                  ["Minutos", timeLeft.minutes],
                  ["Segundos", timeLeft.seconds],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="border border-white/15 bg-white/[0.03] p-6 md:p-8"
                  >
                    <div className="font-anton text-5xl md:text-7xl text-[#ffb000] leading-none">
                      {String(value).padStart(2, "0")}
                    </div>
                    <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-white/45">
                      {label}
                    </div>
                  </div>

              </div>
          </div>
        </section>

        <section className="relative bg-[#050505] text-[#f5f1e8] px-5 md:px-12 py-16 md:py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 md:mb-14">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#ffb000] mb-4">
              Ativando frequência
            </p>
            <h2 className="font-anton uppercase text-4xl md:text-6xl leading-[0.9] tracking-tight">
              O chamado já está em curso
            </h2>
            <p className="mt-6 max-w-3xl text-white/65 text-base md:text-xl leading-relaxed">
              A Semana da Compostagem 2026 abre a campanha de 10 anos do Compostonautas. Agora o movimento precisa de território, gente e micróbios.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            <div className="border border-white/10 bg-white/[0.02] p-6 md:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#ffb000] mb-4">
                01 · Território
              </p>
              <h3 className="font-space text-2xl md:text-3xl font-bold mb-4">
                Ação local
              </h3>
              <p className="text-white/60 leading-relaxed">
                Ações locais, mutirões, oficinas e encontros com pés no chão.
              </p>
            </div>

            <div className="border border-white/10 bg-white/[0.02] p-6 md:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#ffb000] mb-4">
                02 · Rede
              </p>
              <h3 className="font-space text-2xl md:text-3xl font-bold mb-4">
                Rede viva
              </h3>
              <p className="text-white/60 leading-relaxed">
                Pessoas, grupos, escolas e parceiros conectando compostagem, cultura e cuidado.
              </p>
            </div>

            <div className="border border-white/10 bg-white/[0.02] p-6 md:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#ffb000] mb-4">
                03 · Missão
              </p>
              <h3 className="font-space text-2xl md:text-3xl font-bold mb-4">
                Novo ciclo
              </h3>
              <p className="text-white/60 leading-relaxed">
                Uma década de movimento se transforma em novo ciclo de mobilização.
              </p>
            </div>
          </div>

          <div className="mt-10 md:mt-12">
            <a
              href="https://chat.whatsapp.com/C6C4HYTg801KH2Ok6cDYdS"
              className="inline-flex items-center gap-3 bg-[#ffb000] text-black px-6 py-4 font-space uppercase tracking-widest text-xs font-bold border-[3px] border-black shadow-[6px_6px_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0_#000] transition-all"
            >
              Embarcar agora <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

        <section id="triade" className="bg-[#050505] text-[#f5f1e8] p-3 md:p-6">
                        <div className="lg:w-1/3 sticky top-32">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-[1px] w-12 bg-[#ffb000]"></div>
                  <h3 className="font-mono text-[#ffb000] tracking-[0.2em] text-xs">A TRÍADE</h3>
                </div>
              </div>
          <div className="grid md:grid-cols-3 border border-white/10 bg-[#050505] text-[#f5f1e8] overflow-hidden">
            {triadPillars.map((pillar, index) => (           
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="relative min-h-[430px] md:min-h-[420px] p-8 md:p-10 border-b md:border-b-0 md:border-r last:border-r-0 border-white/10 overflow-hidden group flex flex-col justify-between"
              > 
                <div
                  className="absolute top-6 right-6 z-30 font-mono text-[9px] uppercase tracking-[0.18em] px-2 py-1 border bg-black/70"
                  style={{
                    color: pillar.accent,
                    borderColor: `${pillar.accent}66`,
                    boxShadow: `0 0 18px ${pillar.accent}33`,
                  }}
                >
                  {pillar.classTag}
                </div>
                <div
                  className="absolute inset-0 opacity-70 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    backgroundImage: pillar.texture,
                    backgroundSize: pillar.title === "CYBER" || pillar.title === "ASTRA" ? "72px 72px" : "auto",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/20 to-[#050505]/70"></div>
                <div className="absolute -bottom-24 -right-20 w-64 h-64 rounded-full border border-white/10 group-hover:border-white/20 transition-colors"></div>
                <div className="relative z-10">
                  <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/45 mb-6">
                    {pillar.eyebrow}
                  </div>
                  <h2
                    className="font-anton text-[5.5rem] md:text-[6.5rem] lg:text-[7.5rem] leading-[0.8] tracking-wide text-[#f5f1e8] group-hover:translate-x-2 transition-transform duration-500"
                    style={{ textShadow: `0 0 34px ${pillar.accent}22` }}
                  >
                    {pillar.title}
                  </h2>
                  <div
                    className="mt-4 font-mono text-xs tracking-[0.3em] opacity-70"
                    style={{ color: pillar.accent }}
                  >
                    █ █ ░ ░
                  </div>
                </div>
                <div className="relative z-10">
                  <div
                    className="w-10 h-1 mb-8 group-hover:w-20 transition-all duration-500"
                    style={{ backgroundColor: pillar.accent }}
                  ></div>
                  <p className="max-w-xs text-base md:text-lg leading-relaxed text-white/66 group-hover:text-white/85 transition-colors">
                    {pillar.copy}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="py-32 md:py-48 px-5 md:px-12 bg-[#0a0a0a] relative grain">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-20 items-start">
              <div className="lg:w-1/3 sticky top-32">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-[1px] w-12 bg-[#ffb000]"></div>
                  <h3 className="font-mono text-[#ffb000] tracking-[0.2em] text-xs">O FRONT</h3>
                </div>
                <h2 className="font-space text-5xl md:text-7xl font-bold uppercase leading-[0.9] mb-8 text-white">
                  Nossa<br />Missão
                </h2>
                <p className="text-xl text-white/50 leading-relaxed font-sans">
                  Não somos apenas um projeto de gestão de resíduos. Somos um movimento em prol da vida, atuando em três frentes essenciais para a regeneração urbana.
                </p>
              </div>
              
              <div className="lg:w-2/3 flex flex-col gap-8">
                {/* Item 1 */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="bg-[#111] p-10 md:p-16 border border-white/5 hover:border-[#4ade80]/30 transition-colors group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Leaf className="w-32 h-32 text-[#4ade80]" />
                  </div>
                  <div className="w-16 h-16 rounded-full bg-[#1a3d2a]/30 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 border border-[#1a3d2a]">
                    <Leaf className="text-[#4ade80] w-6 h-6" />
                  </div>
                  <h4 className="font-anton text-4xl md:text-5xl uppercase mb-6 tracking-wide text-white">Regeneração</h4>
                  <p className="text-white/60 font-sans text-lg md:text-xl leading-relaxed max-w-2xl relative z-10">
                    Devolver à terra o que é da terra. A compostagem reintegra a matéria aos ciclos vivos com a ajuda da nossa tripulação microscópica e reconecta cidade, alimento e cuidado com o solo.
                  </p>
                </motion.div>

                {/* Item 2 */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-[#111] p-10 md:p-16 border border-white/5 hover:border-[#ffb000]/30 transition-colors group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Users className="w-32 h-32 text-[#ffb000]" />
                  </div>
                  <div className="w-16 h-16 rounded-full bg-[#3d2a1a]/30 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 border border-[#3d2a1a]">
                    <Users className="text-[#ffb000] w-6 h-6" />
                  </div>
                  <h4 className="font-anton text-4xl md:text-5xl uppercase mb-6 tracking-wide text-white">Comunidade</h4>
                  <p className="text-white/60 font-sans text-lg md:text-xl leading-relaxed max-w-2xl relative z-10">
                    Nada disso acontece sozinho. A campanha cresce em rede, com pessoas, escolas, coletivos e territórios que ativam a compostagem como cultura viva.
                  </p>
                </motion.div>

                {/* Item 3 */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-[#111] p-10 md:p-16 border border-white/5 hover:border-[#60a5fa]/30 transition-colors group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Globe className="w-32 h-32 text-[#60a5fa]" />
                  </div>
                  <div className="w-16 h-16 rounded-full bg-[#1a2a3d]/30 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 border border-[#1a2a3d]">
                    <Globe className="text-[#60a5fa] w-6 h-6" />
                  </div>
                  <h4 className="font-anton text-4xl md:text-5xl uppercase mb-6 tracking-wide text-white">Tecnologia</h4>
                  <p className="text-white/60 font-sans text-lg md:text-xl leading-relaxed max-w-2xl relative z-10">
                    Rede para mobilizar e ampliar impacto. Usamos comunicação, organização e linguagem digital para espalhar práticas, conectar pessoas e fortalecer a campanha.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-[#f5f1e8] text-black px-5 md:px-12 py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-y-0 left-10 hidden md:block w-[8px] bg-black"></div>
          <div className="absolute inset-y-0 right-10 hidden md:block w-[8px] bg-black"></div>
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #000 1px, transparent 0)", backgroundSize: "18px 18px" }}></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65 }}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/45 mb-6">Adubação poética e prática</p>
              <h2 className="font-anton uppercase text-[4rem] md:text-[7.5rem] lg:text-[9rem] leading-[1] tracking-tight max-w-6xl">
                Valorização dos resíduos.<br />
                <span className="text-stroke-black">Viralização</span> da compostagem.
              </h2>
            </motion.div>

            <div className="mt-16 md:mt-20 grid md:grid-cols-3 gap-7 md:gap-8">
              {viralCards.map((card, index) => (
                <motion.div
                  key={card.kind}
                  initial={{ opacity: 0, y: 26, rotate: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className={`${card.tone} group relative overflow-hidden border-[4px] border-black min-h-[360px] md:min-h-[420px] bg-[#f5f1e8] text-black shadow-[8px_8px_0_#000] flex flex-col hover:rotate-0 hover:-translate-y-2 transition-transform duration-500`}
                >
                  <div className="relative z-10 p-6 md:p-7 border-b-[4px] border-black bg-[#f5f1e8]">
                    <p className="font-anton uppercase leading-[0.9] text-4xl md:text-5xl text-black">
                      {card.text}
                    </p>
                  </div>

                  <div className="relative flex-1 min-h-[220px] overflow-hidden">
                    <img
                      src={card.image}
                      alt=""
                      className={`absolute inset-0 w-full h-full object-cover ${card.imagePosition} scale-105 transition-transform duration-700 group-hover:scale-110`}
                    />
                    <div className={`absolute inset-0 ${card.overlay}`} />
                  </div>

                  <div className="relative z-10 p-6 md:p-7 bg-black text-[#f5f1e8]">
                    <p className="font-space text-base md:text-lg font-bold leading-snug text-[#ffb000]">
                      {card.support}
                    </p>

                    <span className="block mt-5 font-mono text-[10px] uppercase tracking-[0.25em] text-white/45">
                      {card.kind}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-14 md:mt-16 max-w-4xl border-l-[3px] border-black pl-6 md:pl-8">
              <p className="font-mono text-sm md:text-base leading-relaxed text-black/70">
                Não basta compostar em silêncio. Queremos valorizar os resíduos, espalhar práticas e fazer a compostagem circular como linguagem viva.
              </p>
            </div>
          </div>
        </section>

        {/* REDE */}
        <section id="rede" className="py-32 md:py-48 bg-[#ffb000] text-black relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 font-anton text-[25rem] leading-[0.8] text-black select-none pointer-events-none text-stroke-black opacity-30 -translate-y-20 break-words flex flex-wrap content-start">
            REDE REDE REDE REDE REDE
          </div>
          
          <div className="max-w-7xl mx-auto px-5 relative z-10">
            <div className="text-center mb-24">
              <h2 className="font-caveat text-5xl md:text-7xl text-black mb-6 transform -rotate-2">raspas e restos nos interessam</h2>
              <h3 className="font-anton text-7xl md:text-[8rem] uppercase leading-[0.9] tracking-tighter text-black">
                Como participar
              </h3>
              <p className="text-xl md:text-2xl font-sans font-medium text-black/70 max-w-3xl mx-auto leading-relaxed mt-10">
                A campanha de 10 anos não é uma vitrine. É uma convocação para ativar territórios durante a Semana da Compostagem 2026 e preparar para o Dia do Compostonauta (30/11).
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {participationPaths.map((path, index) => (
                <motion.div
                  key={path.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-black text-[#f5f1e8] border-[4px] border-black p-8 md:p-10 min-h-[260px] flex flex-col justify-between shadow-[8px_8px_0_rgba(0,0,0,0.25)] hover:-translate-y-2 transition-transform duration-500"
                >
                  <span className="font-mono text-xs tracking-[0.3em] text-[#ffb000]">0{index + 1}</span>
                  <div>
                    <h4 className="font-anton uppercase text-4xl md:text-5xl leading-[0.9] mb-6">{path.title}</h4>
                    <p className="text-white/65 leading-relaxed">{path.copy}</p>
                    <a href="#chamados" className="mt-8 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-[#ffb000] hover:text-white transition-colors">
                      {path.action} <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="mt-10 text-center font-mono text-xs uppercase tracking-[0.22em] text-black/60">
              Só quer acompanhar? Entre no grupo e receba os chamados.
            </p>
            
            <div className="mt-16 md:mt-20 flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://chat.whatsapp.com/C6C4HYTg801KH2Ok6cDYdS"
                className="bg-black text-[#ffb000] px-10 py-5 rounded-full font-space uppercase tracking-widest text-sm font-bold hover:bg-[#1a3d2a] hover:text-white transition-all duration-300 flex items-center gap-4 hover:gap-6 hover:scale-105"
              >
                Quero ativar meu território <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#chamados"
                className="bg-[#f5f1e8] text-black px-10 py-5 rounded-full font-space uppercase tracking-widest text-sm font-bold border-2 border-black hover:bg-black hover:text-[#ffb000] transition-all duration-300"
              >
                Receber os chamados
              </a>
            </div>
          </div>
        </section>
        <section
          id="chamados"
          className="relative bg-[#050505] text-[#f5f1e8] px-5 md:px-12 py-20 md:py-28 border-y border-white/10 overflow-hidden"
        >
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
            <div className="font-anton text-[18vw] leading-none text-white uppercase tracking-tight">
              CHAMADOS
            </div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-[1fr_420px] gap-10 md:gap-16 items-center">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#ffb000] mb-5">
                receber os chamados
              </p>

              <h2 className="font-anton uppercase text-5xl md:text-7xl leading-[0.9] tracking-tight mb-6">
                Fique na escuta
              </h2>

              <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl">
                Deixe seu e-mail para receber novidades, convites, datas importantes e próximos chamados da campanha de 10 anos do Compostonautas.
              </p>
            </div>

            <form
              name="chamados"
              method="POST"
              data-netlify="true"
              className="bg-[#f5f1e8] text-black border-[4px] border-black shadow-[10px_10px_0_#ffb000] p-6 md:p-8"
            >
              <input type="hidden" name="form-name" value="chamados" />

              <label className="block font-mono text-[10px] uppercase tracking-[0.25em] mb-3">
                seu e-mail
              </label>

              <input
                type="email"
                name="email"
                required
                placeholder="voce@email.com"
                className="w-full border-[3px] border-black bg-white px-4 py-4 font-mono text-sm outline-none mb-5"
              />

              <label className="block font-mono text-[10px] uppercase tracking-[0.25em] mb-3">
                nome ou território <span className="opacity-50">(opcional)</span>
              </label>

              <input
                type="text"
                name="territorio"
                placeholder="nome, cidade ou território"
                className="w-full border-[3px] border-black bg-white px-4 py-4 font-mono text-sm outline-none mb-6"
              />

              <button
                type="submit"
                className="w-full bg-black text-[#ffb000] px-6 py-4 font-space uppercase tracking-widest text-xs font-bold hover:bg-[#ffb000] hover:text-black transition-colors"
              >
                Receber os chamados
              </button>

              <p className="mt-5 font-mono text-[10px] leading-relaxed text-black/55">
                Sem spam. Só sinais importantes da campanha, da Semana da Compostagem e do Dia do Compostonauta.
              </p>
            </form>
          </div>
        </section>
        <section id="chamada" className="relative bg-[#0a0a0a] text-[#f5f1e8] px-5 md:px-12 py-28 md:py-40 overflow-hidden grain">
          <div className="absolute inset-0 opacity-[0.12]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize: "64px 64px" }}></div>
          <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#ffb000] mb-7">chamada aberta</p>
              <h2 className="font-anton uppercase text-[4.5rem] md:text-[8rem] leading-[1] tracking-tight">
                Quer ativar<br />
                seu território?
              </h2>
              <p className="mt-10 text-xl md:text-2xl leading-relaxed text-white/62 max-w-3xl">
                Estamos mapeando pessoas, coletivos, escolas, espaços e parceiros que queiram levar ações para a Semana da Compostagem 2026. Deixe seu interesse e receba os próximos chamados.
              </p>
              <div className="mt-10 inline-flex border border-[#ffb000]/40 bg-[#ffb000]/10 px-5 py-3 font-mono text-xs uppercase tracking-[0.22em] text-[#ffb000]">
                {CONTACT.openCallDateLabel}
              </div>
            </div>

            <div id="participar" className="lg:col-span-5 bg-[#f5f1e8] text-black border-[4px] border-black p-7 md:p-9 shadow-[10px_10px_0_#ffb000] rotate-[-1deg]">
              <p className="font-caveat text-3xl md:text-4xl mb-4">transmitir coordenadas</p>
              <h3 className="font-space uppercase font-bold text-3xl md:text-4xl leading-none mb-8">Entre em órbita com gente</h3>
              <p className="mb-6 text-black/65 leading-relaxed">
                Preencha o formulário para receber o convite da chamada aberta, os próximos passos da campanha e formas de impulsionar um novo giro JEDI (Jornada Ecoevolutiva entre Decompositores e Internautas).
              </p>
              <div className="border-[3px] border-black bg-white px-5 py-5 text-black/70 font-mono text-sm leading-relaxed">
                O formulário abre em uma nova aba e leva menos de 2 minutos para preencher.
              </div>
              <div className="mt-6 grid gap-3">
                <a
                  href={CAMPAIGN_LINKS.interestFormUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-black text-[#ffb000] px-6 py-4 font-space uppercase tracking-widest text-xs font-bold text-center hover:bg-[#1a3d2a] hover:text-white transition-colors"
                >
                  Preencher formulário de interesse
                </a>
                <a
                  href={CAMPAIGN_LINKS.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="border-[3px] border-black px-6 py-4 font-space uppercase tracking-widest text-xs font-bold text-center hover:bg-[#ffb000] transition-colors"
                >
                  Entrar no grupo do WhatsApp
                </a>
              </div>
              <p className="mt-5 font-mono text-[11px] leading-relaxed text-black/55">
                Usaremos seus dados apenas para comunicação sobre a campanha e os próximos passos do Compostonautas.
              </p>
            </div>
          </div>
        </section>

        <section id="dez" className="py-32 md:py-52 bg-[#050505] relative grain overflow-hidden">
          <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[720px] h-[720px] bg-[#1a3d2a]/20 rounded-full blur-[140px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none"></div>
          <div className="absolute inset-x-0 top-12 font-anton text-[18vw] leading-none text-white/[0.025] text-center select-none pointer-events-none">2016—2026</div>

          <div className="max-w-7xl mx-auto px-5 relative z-10">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-[1px] w-8 bg-white/20"></div>
              <h3 className="font-mono text-[#9caf88] tracking-[0.3em] text-xs uppercase">Rumo aos 10 anos</h3>
              <div className="h-[1px] w-8 bg-white/20"></div>
            </div>
            
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="font-space text-5xl md:text-8xl lg:text-[8rem] font-bold leading-[0.9] tracking-tighter mb-8 md:mb-10 text-center text-white"
            >
              2016 — 2026<br />
              <span className="text-[#9caf88]">Na dobra do espaço-tempo</span>
            </motion.h2>
            
            <p className="font-sans text-lg md:text-xl text-white/60 leading-relaxed max-w-3xl mx-auto font-light text-center">
              Juntos no buraco de minhoca mobilizando a Semana da Compostagem e preparando o novo ciclo Compostonauta.
            </p>

            <div className="mt-20 md:mt-28">
              <div className="hidden md:block relative px-4">
                <div className="absolute left-8 right-8 top-[18px] h-[3px] bg-[#9caf88]/45"></div>
                <div className="grid gap-5 relative" style={{ gridTemplateColumns: `repeat(${timelineMilestones.length}, minmax(0, 1fr))` }}>
                  {timelineMilestones.map((milestone, index) => (
                    <motion.div
                      key={milestone.year}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.55, delay: index * 0.08 }}
                      className="group"
                    >
                      <div className="w-9 h-9 mx-auto rounded-full bg-[#9caf88] border-[6px] border-[#050505] shadow-[0_0_0_1px_rgba(156,175,136,0.35),0_0_36px_rgba(156,175,136,0.2)] group-hover:bg-[#ffb000] group-hover:scale-125 transition-all duration-500"></div>
                      <div className="mt-6 text-center">
                        <div className="font-mono text-sm text-[#f5f1e8] tracking-wider">{milestone.year}</div>
                        <div className="font-space text-xs uppercase tracking-[0.18em] text-[#9caf88] mt-2 group-hover:text-[#ffb000] transition-colors">{milestone.title}</div>
                        <p className="mt-5 text-sm leading-relaxed text-white/42 group-hover:text-white/65 transition-colors">{milestone.copy}</p>
                  {milestone.actions && (
                    <div className="mt-6 ml-6 space-y-5 border-l border-[#ffb000]/40 pl-5">
                       {milestone.actions.map((action) => (
                        <div key={action.date} className="relative">
                          <div className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-[#ffb000]"></div>
                          <div className="inline-block bg-[#ffb000] text-black px-2 py-1 font-mono text-xl leading-none">
                              {action.date}
                          </div>
                          <div className="mt-2 font-space text-xs uppercase tracking-[0.2em] text-[#ffb000]">
                            {action.title}
                          </div>
                          <p className="mt-2 text-sm leading-relaxed text-white/55">
                            {action.copy}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}    
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="md:hidden relative pl-7">
                <div className="absolute left-[13px] top-3 bottom-3 w-[2px] bg-[#9caf88]/45"></div>
                <div className="space-y-9">
                  {timelineMilestones.map((milestone, index) => (
                    <motion.div
                      key={milestone.year}
                      initial={{ opacity: 0, x: 18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.45, delay: index * 0.05 }}
                      className="relative"
                    >
                      <div className="absolute -left-[26px] top-1 w-6 h-6 rounded-full bg-[#9caf88] border-[5px] border-[#050505]"></div>
                      <div className="font-mono text-2xl text-[#f5f1e8]">{milestone.year}</div>

                      <div className="font-space text-xs uppercase tracking-[0.2em] text-[#ffb000] mt-1">
                        {milestone.title}
                      </div>

                      {milestone.subtitle && (
                        <div className="font-mono text-xs uppercase tracking-[0.2em] text-white/70 mt-1">
                          {milestone.subtitle}
                        </div>
                      )}

                      <p className="mt-3 text-sm leading-relaxed text-white/55">
                        {milestone.copy}
                      </p>

                      {milestone.actions && (
                        <div className="mt-6 ml-6 space-y-5 border-l border-[#ffb000]/40 pl-5">
                          {milestone.actions.map((action) => (
                            <div key={action.date} className="relative">
                              <div className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-[#ffb000]" />

                              <div className="inline-block bg-[#ffb000] text-black px-2 py-1 font-mono text-xl leading-none">
                                {action.date}
                              </div>

                              <div className="mt-2 font-space text-xs uppercase tracking-[0.2em] text-[#ffb000]">
                                {action.title}
                              </div>

                              <p className="mt-2 text-sm leading-relaxed text-white/55">
                                {action.copy}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-16 flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://chat.whatsapp.com/C6C4HYTg801KH2Ok6cDYdS" className="bg-[#ffb000] text-black px-8 py-4 font-space uppercase tracking-widest text-xs font-bold border-[3px] border-black hover:bg-white transition-colors">
                Entrar no grupo
              </a>
              <a href="#chamados" className="border border-white/20 px-8 py-4 font-space uppercase tracking-widest text-xs font-bold text-white/75 hover:border-[#ffb000] hover:text-[#ffb000] transition-colors">
                Receber os chamados
              </a>
              <a href="#rede" className="border border-white/20 px-8 py-4 font-space uppercase tracking-widest text-xs font-bold text-white/75 hover:border-[#ffb000] hover:text-[#ffb000] transition-colors">
                Ativar meu território
              </a>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="py-16 md:py-20 border-t border-white/5 bg-[#050505] relative z-20">
          <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 rounded-full bg-[#ffb000]"></div>
              <span className="font-mono text-xs text-white/40 tracking-[0.2em] uppercase">© {new Date().getFullYear()} Compostonautas · Semana da Compostagem 2026</span>
            </div>
            
            <div className="flex gap-8 md:gap-12 font-mono text-xs tracking-widest uppercase">
              <a href="https://chat.whatsapp.com/C6C4HYTg801KH2Ok6cDYdS" className="text-white/40 hover:text-[#ffb000] transition-colors">WhatsApp</a>
              <a href="#dez" className="text-white/40 hover:text-[#ffb000] transition-colors">Manifesto</a>
              <a href={`mailto:${CONTACT.contactEmail}`} className="text-white/40 hover:text-[#ffb000] transition-colors">Contato</a>
            </div>
            
            <span className="font-caveat text-xl text-white/30">compostagem, cultura regenerativa e mobilização comunitária em novo ciclo</span>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Home;
