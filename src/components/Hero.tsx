import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="animate-fade-in">
        <p className="text-muted-foreground text-sm md:text-base mb-4 tracking-wide uppercase">
          Portfolio
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 text-balance leading-tight">
          Arya Aniket
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 max-w-2xl text-balance">
          Engineer crafting elegant solutions through code and design
        </p>
        
        <a 
          href="#about" 
          className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 group"
        >
          <span className="text-sm tracking-wide uppercase">Explore</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
      
      <div className="absolute bottom-8 left-6 md:left-12 lg:left-24">
        <div className="w-px h-16 bg-border"></div>
      </div>
    </section>
  );
};

export default Hero;
