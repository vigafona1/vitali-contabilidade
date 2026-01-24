import { Eye, BarChart3, Shield, Smartphone } from "lucide-react";

const differentials = [
  {
    icon: Eye,
    title: "Clareza",
    description: "Linguagem simples e direta. Nada de termos técnicos desnecessários.",
  },
  {
    icon: BarChart3,
    title: "Controle",
    description: "Você acompanha tudo em tempo real, sem surpresas no final do mês.",
  },
  {
    icon: Shield,
    title: "Segurança",
    description: "Seus dados protegidos e sua empresa sempre em conformidade fiscal.",
  },
  {
    icon: Smartphone,
    title: "Atendimento Digital",
    description: "100% online, rápido e prático. Resolva tudo pelo WhatsApp.",
  },
];

const Differentials = () => {
  return (
    <section className="py-20 md:py-32 bg-foreground text-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 text-[400px] font-bold text-background/[0.03] select-none">
        V
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
            Por que a Vitali
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Diferenciais que fazem a diferença
          </h2>
          <p className="text-background/60">
            Mais do que números, entregamos tranquilidade para você focar no que importa: seu negócio.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-lg border border-background/10 bg-background/5 hover:bg-background/10 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <item.icon size={28} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-background/60">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
