import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, User, Users, MessageCircle, CheckCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

const services = [
  {
    icon: Building2,
    title: "MEI – Pacote Essencial",
    description: "Tudo que você precisa para manter seu MEI regularizado e sem preocupações.",
    features: [
      "DAS mensal",
      "Declaração anual (DASN)",
      "Acompanhamento e suporte",
    ],
    highlight: true,
  },
  {
    icon: Users,
    title: "Pequenas Empresas",
    description: "Contabilidade completa para empresas do Simples Nacional.",
    features: [
      "Contabilidade mensal",
      "Impostos e obrigações",
      "Suporte consultivo",
    ],
    highlight: false,
  },
  {
    icon: User,
    title: "Pessoa Física",
    description: "Serviços especializados para suas obrigações fiscais pessoais.",
    features: [
      "IRPF",
      "Carnê-Leão",
      "eSocial doméstico",
    ],
    highlight: false,
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 md:py-32 bg-card relative">
      {/* Red accent line */}
      <div className="absolute right-0 top-20 w-1 h-32 bg-primary" />

      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Soluções para cada fase do seu negócio
          </h2>
          <p className="text-muted-foreground">
            Do MEI à pequena empresa, oferecemos suporte contábil completo com atendimento digital e humanizado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg ${
                service.highlight ? "border-primary/50 shadow-md" : ""
              }`}
            >
              {service.highlight && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
              )}
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  service.highlight ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                }`}>
                  <service.icon size={24} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                      <CheckCircle size={16} className="text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full" 
                  variant={service.highlight ? "default" : "outline"}
                  asChild
                >
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={16} className="mr-2" />
                    Saiba mais
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
