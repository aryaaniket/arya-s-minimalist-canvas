import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Mail, label: "Email", href: "mailto:arya.aniket@example.com" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
];

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20 max-w-7xl mx-auto">
      <div className="max-w-3xl">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8">
          Let's Connect
        </h2>
        <div className="w-20 h-px bg-primary mb-12"></div>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
          I'm always interested in hearing about new projects and opportunities. 
          Feel free to reach out if you'd like to collaborate.
        </p>
        
        <div className="space-y-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-4 text-foreground hover:text-primary transition-colors duration-300 group"
            >
              <link.icon className="w-6 h-6" />
              <span className="text-lg group-hover:translate-x-2 transition-transform duration-300">
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </div>
      
      <div className="mt-20 pt-8 border-t border-border">
        <p className="text-sm text-muted-foreground">
          © 2024 Arya Aniket. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
