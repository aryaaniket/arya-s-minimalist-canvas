import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Distributed Cache System",
    description: "High-performance caching layer built with Redis and Node.js, handling 10k+ req/s with sub-10ms latency. Implemented consistent hashing for horizontal scalability.",
    year: "2024",
    tags: ["Redis", "Node.js", "Docker", "Performance"],
    metrics: "10k+ req/s, <10ms latency",
  },
  {
    title: "Real-time Analytics Pipeline",
    description: "Event-driven data processing system using Kafka and ClickHouse. Processes millions of events daily with real-time aggregation and visualization.",
    year: "2024",
    tags: ["Kafka", "ClickHouse", "Python", "Real-time"],
    metrics: "5M+ events/day",
  },
  {
    title: "Microservices Architecture",
    description: "Designed and implemented microservices infrastructure with service mesh, API gateway, and automated deployment pipelines. Reduced deployment time by 70%.",
    year: "2023",
    tags: ["Kubernetes", "gRPC", "CI/CD", "AWS"],
    metrics: "70% faster deploys",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen px-6 md:px-12 lg:px-24 py-20 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 flex items-center gap-3">
          <span className="text-primary text-2xl">//</span> Projects
        </h2>
        <div className="h-px bg-gradient-to-r from-primary via-border to-transparent"></div>
      </div>
      
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="border border-border hover:border-primary transition-all duration-300 group"
          >
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-primary text-sm font-mono">
                      [{String(index + 1).padStart(2, '0')}]
                    </span>
                    <h3 className="text-xl md:text-2xl font-semibold">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-mono mb-4">
                    {project.metrics}
                  </div>
                </div>
                
                <div className="flex gap-2 ml-4">
                  <button className="p-2 border border-border hover:border-primary transition-colors">
                    <Github className="w-4 h-4" />
                  </button>
                  <button className="p-2 border border-border hover:border-primary transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="text-xs font-mono px-3 py-1 border border-border text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
                <span className="text-xs font-mono px-3 py-1 text-muted-foreground ml-auto">
                  {project.year}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 code-block p-6">
        <p className="text-sm font-mono">
          <span className="text-primary">$</span> git log --all --oneline
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          More projects available on request. Each showcases different aspects of system design, 
          scalability patterns, and engineering best practices.
        </p>
      </div>
    </section>
  );
};

export default Projects;
