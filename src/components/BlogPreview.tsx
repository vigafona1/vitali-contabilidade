import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar } from "lucide-react";

const blogPosts = [
  {
    category: "MEI",
    title: "MEI precisa de contador? Entenda quando faz sentido",
    excerpt: "Descubra em quais situações um contador pode fazer diferença para seu MEI...",
    date: "20 Jan 2026",
    slug: "#",
  },
  {
    category: "Regularização",
    title: "O que acontece se atrasar o DAS do MEI?",
    excerpt: "Multas, juros e como regularizar sua situação de forma simples...",
    date: "18 Jan 2026",
    slug: "#",
  },
  {
    category: "Dicas",
    title: "5 erros que MEIs cometem na declaração anual",
    excerpt: "Evite problemas com o fisco conhecendo os erros mais comuns...",
    date: "15 Jan 2026",
    slug: "#",
  },
];

const BlogPreview = () => {
  return (
    <section id="blog" className="py-20 md:py-32 bg-card relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
              Atualizações e Dicas
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Conteúdo para você ficar em dia
            </h2>
          </div>
          <Button variant="ghost" className="self-start md:self-auto">
            Ver todos os artigos
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={index}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription>{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="p-0 h-auto text-primary">
                  Ler artigo
                  <ArrowRight size={14} className="ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
