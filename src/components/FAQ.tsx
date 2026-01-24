import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "MEI precisa de contador?",
    answer: "Legalmente, o MEI não é obrigado a ter contador. No entanto, contar com um profissional pode evitar erros na declaração anual, garantir que você esteja pagando o DAS corretamente e orientar sobre o momento certo de migrar para ME.",
  },
  {
    question: "O que acontece se atrasar o DAS?",
    answer: "O atraso gera multa de 0,33% ao dia (limitada a 20%) e juros baseados na taxa Selic. Além disso, DAS em atraso podem impedir a emissão de certidões e bloquear benefícios previdenciários.",
  },
  {
    question: "A DASN é obrigatória?",
    answer: "Sim! A Declaração Anual do Simples Nacional (DASN-SIMEI) deve ser entregue até 31 de maio de cada ano, informando o faturamento do ano anterior. A não entrega gera multa mínima de R$ 50,00.",
  },
  {
    question: "Quando devo migrar de MEI para ME?",
    answer: "A migração é obrigatória quando o faturamento anual ultrapassa R$ 81.000,00 ou quando você precisa contratar mais de um funcionário. Também pode ser estratégica se você quiser emitir notas para empresas maiores ou ampliar as atividades.",
  },
  {
    question: "Como funciona o atendimento?",
    answer: "Todo atendimento é feito de forma digital, principalmente pelo WhatsApp. Você pode tirar dúvidas, enviar documentos e receber orientações a qualquer momento, com respostas rápidas e objetivas.",
  },
  {
    question: "Quanto custa o serviço?",
    answer: "Os valores variam de acordo com o serviço escolhido e a complexidade da sua situação. Entre em contato pelo WhatsApp para receber uma proposta personalizada sem compromisso.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 md:py-32 bg-background relative">
      {/* Red accent */}
      <div className="absolute left-0 top-32 w-1 h-24 bg-primary" />

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
              Perguntas Frequentes
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Dúvidas comuns
            </h2>
            <p className="text-muted-foreground">
              Respostas para as perguntas mais frequentes sobre nossos serviços.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
