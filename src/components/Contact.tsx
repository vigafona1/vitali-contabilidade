import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { WHATSAPP_NUMBER } from "@/lib/constants";

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Vitali.`;

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.whatsapp.trim()) {
      toast({
        title: "Preencha os campos obrigatórios",
        description: "Nome e WhatsApp são obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    // Create WhatsApp message
    const message = `Olá! Meu nome é ${formData.name}.%0A%0AServiço de interesse: ${formData.service || "Não especificado"}%0A%0AMensagem: ${formData.message || "Gostaria de saber mais sobre os serviços."}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Redirecionando para o WhatsApp!",
      description: "Continue a conversa por lá.",
    });

    // Reset form
    setFormData({ name: "", whatsapp: "", service: "", message: "" });
  };

  return (
    <section id="contato" className="py-20 md:py-32 bg-card relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -right-40 -bottom-40 text-[500px] font-bold text-foreground/[0.02] select-none">
        V
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
              Contato
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Quer ficar 100% regular?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Entre em contato e receba uma proposta personalizada para sua situação.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* WhatsApp CTA */}
            <div className="flex flex-col justify-center items-center text-center p-8 rounded-2xl bg-foreground text-background">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <MessageCircle size={40} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Prefere o WhatsApp?
              </h3>
              <p className="text-background/60 mb-6">
                Atendimento rápido e direto. Respondo em poucas horas.
              </p>
              <Button size="lg" className="w-full max-w-xs" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={20} className="mr-2" />
                  Chamar no WhatsApp
                </a>
              </Button>
            </div>

            {/* Contact Form */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <h3 className="text-xl font-semibold mb-6">Solicitar orçamento</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome *</Label>
                    <Input
                      id="name"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      maxLength={100}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="whatsapp">WhatsApp *</Label>
                    <Input
                      id="whatsapp"
                      placeholder="(00) 00000-0000"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      maxLength={20}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Serviço de interesse</Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mei">MEI – Pacote Essencial</SelectItem>
                      <SelectItem value="empresa">Pequenas Empresas</SelectItem>
                      <SelectItem value="irpf">IRPF</SelectItem>
                      <SelectItem value="carne-leao">Carnê-Leão</SelectItem>
                      <SelectItem value="esocial">eSocial Doméstico</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    placeholder="Conte um pouco sobre sua situação..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    maxLength={1000}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Send size={18} className="mr-2" />
                  Enviar mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
