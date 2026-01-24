import { Instagram, Mail, MessageCircle } from "lucide-react";
import logoVitaliWhite from "@/assets/Logo-sem-fundo.png";
import { WHATSAPP_LINK, INSTAGRAM_LINK, EMAIL } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background relative">
      {/* Top red line */}
      <div className="h-1 bg-primary" />

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <img 
              src={logoVitaliWhite} 
              alt="Vitali Contabilidade" 
              className="h-10 mb-4"
            />
            <p className="text-background/60 text-sm mb-4">
              Contabilidade digital com clareza e controle para MEI e pequenas empresas.
            </p>
            <p className="text-background/40 text-xs">
              Atendimento 100% online | Brasil
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <nav className="flex flex-col gap-2">
              <a href="#inicio" className="text-sm text-background/60 hover:text-primary transition-colors">
                Início
              </a>
              <a href="#servicos" className="text-sm text-background/60 hover:text-primary transition-colors">
                Serviços
              </a>
              <a href="#como-funciona" className="text-sm text-background/60 hover:text-primary transition-colors">
                Como Funciona
              </a>
              <a href="#blog" className="text-sm text-background/60 hover:text-primary transition-colors">
                Blog
              </a>
              <a href="#contato" className="text-sm text-background/60 hover:text-primary transition-colors">
                Contato
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="flex flex-col gap-3">
              <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-background/60 hover:text-primary transition-colors"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
              <a 
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 text-sm text-background/60 hover:text-primary transition-colors"
              >
                <Mail size={16} />
                {EMAIL}
              </a>
              <a 
                href={INSTAGRAM_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-background/60 hover:text-primary transition-colors"
              >
                <Instagram size={16} />
                @vitali.contabilidade
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} Vitali Contabilidade. Todos os direitos reservados.
          </p>
          <a 
            href="#" 
            className="text-xs text-background/40 hover:text-background/60 transition-colors"
          >
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
