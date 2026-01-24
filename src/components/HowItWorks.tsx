import { MessageCircle, Search, Shield } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Você chama no WhatsApp",
    description: "Entre em contato pelo WhatsApp para iniciarmos uma conversa sobre seu negócio.",
  },
  {
    number: "02",
    icon: Search,
    title: "Eu analiso sua situação",
    description: "Avalio suas necessidades e envio uma proposta personalizada para você.",
  },
  {
    number: "03",
    icon: Shield,
    title: "Você fica regular",
    description: "Com suporte contínuo, você mantém sua empresa em dia sem preocupações.",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 md:py-32 bg-background relative">
      {/* Background V watermark */}
      <div className="absolute right-0 bottom-0 text-[300px] font-bold text-primary/[0.08] select-none leading-none">
        V
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
            Como Funciona
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simples e sem burocracia
          </h2>
          <p className="text-muted-foreground">
            Em três passos você resolve sua situação contábil.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-full h-[2px] bg-border" />
              )}
              
              <div className="text-center relative">
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-card border-2 border-primary/20 flex items-center justify-center relative z-10">
                    <step.icon size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
