import { Code2, Database, Cpu, GitBranch } from "lucide-react";

const techStack = [
  { icon: Code2, label: "Frontend", tech: "React, TypeScript, Next.js" },
  { icon: Database, label: "Backend", tech: "Node.js, PostgreSQL, Redis" },
  { icon: Cpu, label: "Infrastructure", tech: "Docker, Kubernetes, AWS" },
  { icon: GitBranch, label: "Tools", tech: "Git, CI/CD, Monitoring" },
];

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-20 max-w-7xl mx-auto">
      <div className="w-full">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 flex items-center gap-3">
            <span className="text-primary text-2xl">//</span> About
          </h2>
          <div className="h-px bg-gradient-to-r from-primary via-border to-transparent"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="code-block p-6 space-y-4">
            <p className="text-sm text-muted-foreground">
              <span className="text-primary">01</span> BACKGROUND
            </p>
            <p className="text-base leading-relaxed">
              Engineer with a focus on building robust, scalable systems. I approach problems 
              systematically, prioritizing clean architecture and maintainable code.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              My work spans full-stack development, from crafting responsive interfaces to 
              designing distributed backend systems that handle millions of requests.
            </p>
          </div>
          
          <div className="code-block p-6 space-y-4">
            <p className="text-sm text-muted-foreground">
              <span className="text-primary">02</span> APPROACH
            </p>
            <p className="text-base leading-relaxed">
              I believe in writing code that's not just functional, but elegant. Every system 
              should be designed with scalability, security, and performance in mind from day one.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Continuous learning and staying current with evolving technologies is essential 
              in our field. I'm always exploring new tools and methodologies.
            </p>
          </div>
        </div>
        
        <div>
          <h3 className="text-sm tracking-wider uppercase text-muted-foreground mb-6 flex items-center gap-2">
            <span className="text-primary">&gt;</span> Tech Stack
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {techStack.map((item) => (
              <div 
                key={item.label}
                className="border border-border p-5 hover:border-primary transition-colors group"
              >
                <item.icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold text-sm mb-2 uppercase tracking-wide">
                  {item.label}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.tech}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
