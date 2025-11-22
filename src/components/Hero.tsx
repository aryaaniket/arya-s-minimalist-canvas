import { Terminal } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative">
      <div className="animate-fade-in w-full">
        <div className="flex items-center gap-3 mb-8">
          <Terminal className="w-5 h-5 text-primary" />
          <p className="text-muted-foreground text-xs md:text-sm tracking-wider uppercase font-medium">
            ~/portfolio
          </p>
        </div>
        
        <div className="terminal-window p-6 md:p-8 mb-8">
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-destructive"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-primary"></div>
          </div>
          <div className="space-y-2 text-sm md:text-base">
            <p className="text-muted-foreground">
              <span className="text-primary">$</span> whoami
            </p>
            <p className="text-foreground font-semibold text-3xl md:text-5xl lg:text-6xl">
              Arya Aniket
            </p>
            <p className="text-muted-foreground mt-4">
              <span className="text-primary">$</span> cat role.txt
            </p>
            <p className="text-foreground text-lg md:text-xl">
              Software Engineer | System Architect | Problem Solver
            </p>
          </div>
        </div>
        
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
          Building scalable systems and elegant solutions. Specialized in modern web architecture, 
          distributed systems, and performance optimization.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <a 
            href="#projects" 
            className="px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium text-sm uppercase tracking-wide"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="px-6 py-3 border border-border hover:border-primary transition-colors font-medium text-sm uppercase tracking-wide"
          >
            Contact
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 right-6 md:right-12 lg:right-24 text-xs text-muted-foreground font-mono">
        <span className="text-primary">[</span>
        status: online
        <span className="text-primary">]</span>
      </div>
    </section>
  );
};

export default Hero;
