import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Design System",
    description: "A comprehensive design system built for scalability and consistency across multiple platforms.",
    year: "2024",
    tags: ["React", "TypeScript", "Storybook"],
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time data visualization platform for business intelligence and decision making.",
    year: "2024",
    tags: ["Next.js", "D3.js", "PostgreSQL"],
  },
  {
    title: "Mobile Experience",
    description: "Progressive web application delivering native-like experiences across devices.",
    year: "2023",
    tags: ["React Native", "API Integration", "Performance"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen px-6 md:px-12 lg:px-24 py-20 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8">
          Selected Work
        </h2>
        <div className="w-20 h-px bg-primary"></div>
      </div>
      
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="group border-b border-border pb-8 hover:border-primary transition-colors duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl md:text-3xl font-heading">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-muted-foreground text-lg">
                  {project.description}
                </p>
              </div>
              <span className="text-sm text-muted-foreground md:min-w-[80px] md:text-right">
                {project.year}
              </span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span 
                  key={tag}
                  className="text-xs text-muted-foreground px-3 py-1 border border-border rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
