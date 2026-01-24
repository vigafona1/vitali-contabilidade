import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { INSTAGRAM_LINK } from "@/lib/constants";

const InstagramSection = () => {
  return (
    <section className="py-16 bg-background relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] flex items-center justify-center">
              <Instagram size={28} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Siga a Vitali no Instagram
              </h3>
              <p className="text-sm text-muted-foreground">
                Dicas, novidades e conteúdo sobre contabilidade
              </p>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-foreground/20 hover:bg-foreground hover:text-background"
            asChild
          >
            <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
              <Instagram size={18} className="mr-2" />
              @vitali.contabilidade
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
