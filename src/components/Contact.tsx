import { Mail, Github, Linkedin, FileText, Terminal } from "lucide-react";

const contactMethods = [
  { icon: Mail, label: "Email", value: "arya.aniket@example.com", href: "mailto:arya.aniket@example.com" },
  { icon: Github, label: "GitHub", value: "github.com/aryaaniket", href: "#" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/aryaaniket", href: "#" },
  { icon: FileText, label: "Resume", value: "Download CV", href: "#" },
];

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20 max-w-7xl mx-auto">
      <div className="w-full max-w-4xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 flex items-center gap-3">
            <span className="text-primary text-2xl">//</span> Contact
          </h2>
          <div className="h-px bg-gradient-to-r from-primary via-border to-transparent"></div>
        </div>
        
        <div className="terminal-window p-6 md:p-8 mb-8">
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-xs font-mono text-muted-foreground">contact_info.sh</span>
          </div>
          
          <div className="space-y-4">
            <p className="text-sm font-mono text-muted-foreground mb-6">
              <span className="text-primary">$</span> cat contact.json
            </p>
            
            <div className="space-y-3 pl-4 border-l-2 border-primary/30">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  className="flex items-center gap-4 hover:text-primary transition-colors group"
                >
                  <method.icon className="w-5 h-5 text-primary" />
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      {method.label}
                    </p>
                    <p className="text-sm font-mono group-hover:translate-x-1 transition-transform">
                      {method.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="code-block p-6 mb-12">
          <p className="text-sm mb-4">
            <span className="text-primary">/*</span> Open to opportunities <span className="text-primary">*/</span>
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Currently available for freelance projects, consulting, or full-time positions. 
            Interested in challenging problems, distributed systems, and high-performance applications.
          </p>
        </div>
        
        <div className="flex items-center justify-between pt-8 border-t border-border">
          <p className="text-xs font-mono text-muted-foreground">
            © 2024 Arya Aniket
          </p>
          <p className="text-xs font-mono text-muted-foreground">
            Built with React + TypeScript
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
