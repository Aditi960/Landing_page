import { Github, Linkedin, Mail, Globe, Code2 } from "lucide-react";
import Avatar from "@/components/Avatar";
import SocialLink from "@/components/SocialLink";
import ProjectCard from "@/components/ProjectCard";

const Index = () => {
  const links = [
    {
      href: "https://github.com/Aditi960",
      icon: Github,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/aditi-thakare-9aa5831b0/",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "mailto:aditithakare02@gmail.com",
      icon: Mail,
      label: "Email Me",
    },
    {
      href: "https://aditithakare.me/",
      icon: Globe,
      label: "Portfolio",
    },
    {
      href: "https://leetcode.com/u/PO1bgkhm6o/",
      icon: Code2,
      label: "LeetCode",
    },
  ];

  const projects = [
    {
      title: "SkillBuddy",
      description: "Personalized career course companion with Firebase auth, Firestore backend, and AI-based recommendations. Final year BCA project.",
      tags: ["Firebase", "JavaScript", "HTML/CSS"],
      href: "https://skillbuddy0.netlify.app/",
    },
    {
      title: "Portfolio Website",
      description: "Responsive personal portfolio with interactive UI components, smooth animations, and clean accessible layout.",
      tags: ["HTML", "CSS", "JavaScript"],
      href: "https://aditithakare.me/",
    },
    {
      title: "Movie Data Analysis",
      description: "EDA project analyzing movie datasets with pandas, NumPy, and visualization libraries. Features heatmaps and trend analysis.",
      tags: ["Python", "Pandas", "Data Analysis"],
      href: "https://github.com/Aditi960/Movie-Data-Analysis",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12">
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-md space-y-8">
        {/* Header section */}
        <div className="text-center space-y-4">
          <Avatar initials="AT" />
          
          <div className="space-y-2 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              <span className="text-gradient-gold">Aditi Thakare</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Web Developer | Front-End | DSA
            </p>
          </div>

          <p 
            className="text-secondary-foreground/80 max-w-sm mx-auto leading-relaxed animate-fade-in"
            style={{ animationDelay: "400ms" }}
          >
            Third-year BCA student building responsive UIs and full-stack applications. 
            Fast learner with clean coding habits and strong problem-solving skills.
          </p>

          <p 
            className="text-sm text-muted-foreground animate-fade-in"
            style={{ animationDelay: "450ms" }}
          >
            📍 Pune, Maharashtra, India
          </p>
        </div>

        {/* Links section */}
        <div className="space-y-3">
          {links.map((link, index) => (
            <SocialLink
              key={link.label}
              href={link.href}
              icon={link.icon}
              label={link.label}
              delay={500 + index * 100}
            />
          ))}
        </div>

        {/* Projects section */}
        <div className="pt-6 space-y-4">
          <h2 
            className="text-xl font-semibold text-center text-gradient-gold animate-fade-in"
            style={{ animationDelay: "1000ms" }}
          >
            Featured Projects
          </h2>
          
          <div className="space-y-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.tags}
                href={project.href}
                delay={1100 + index * 100}
              />
            ))}
          </div>
        </div>

        {/* Skills highlight */}
        <div 
          className="pt-4 animate-fade-in"
          style={{ animationDelay: "1400ms" }}
        >
          <div className="flex flex-wrap justify-center gap-2">
            {["React.js", "JavaScript", "Node.js", "Firebase", "Java DSA", "Python"].map((skill) => (
              <span
                key={skill}
                className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <p 
          className="text-center text-sm text-muted-foreground pt-6 animate-fade-in"
          style={{ animationDelay: "1500ms" }}
        >
          Open to front-end and full-stack internship opportunities ✨
        </p>
      </div>
    </div>
  );
};

export default Index;
