const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-20 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 w-full">
        <div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8">
            About
          </h2>
          <div className="w-20 h-px bg-primary mb-8"></div>
        </div>
        
        <div className="space-y-6">
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            I'm an engineer passionate about building digital experiences that are both functional and beautiful. 
            My work focuses on creating solutions that prioritize simplicity and user experience.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            With expertise in modern web technologies and a keen eye for design, I bridge the gap between 
            technical excellence and aesthetic refinement.
          </p>
          
          <div className="pt-8">
            <h3 className="text-sm tracking-wide uppercase text-muted-foreground mb-4">Expertise</h3>
            <div className="flex flex-wrap gap-3">
              {['Web Development', 'UI/UX Design', 'System Architecture', 'Problem Solving'].map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-accent text-accent-foreground text-sm rounded-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
