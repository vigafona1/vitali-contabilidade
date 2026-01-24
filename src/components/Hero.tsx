import { Button } from "@/components/ui/button";
import { MessageCircle, FileText } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 text-primary text-[400px] font-bold opacity-10 select-none">
          V
        </div>
      </div>
      
      {/* Red accent line */}
      <div className="absolute left-0 top-1/4 w-1 h-32 bg-primary" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
            Contabilidade Digital
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Contabilidade digital para{" "}
            <span className="text-primary">MEI</span> e{" "}
            <span className="text-primary">pequenas empresas</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            DAS, declaração anual e regularização sem dor de cabeça. 
            Atendimento 100% online com clareza e controle para seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-base" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2" size={20} />
                Chamar no WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-base" asChild>
              <a href="#contato">
                <FileText className="mr-2" size={20} />
                Solicitar orçamento
              </a>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">Atendimento em todo o Brasil</p>
            <div className="flex flex-wrap gap-6 text-sm text-foreground/60">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                100% Digital
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Resposta Rápida
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Suporte Contínuo
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
