import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href: string;
  delay?: number;
}

const ProjectCard = ({ title, description, tags, href, delay = 0 }: ProjectCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-5 rounded-xl bg-card border border-border
                 hover:border-primary/50 hover:shadow-gold transition-all duration-300
                 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary 
                                  group-hover:translate-x-0.5 group-hover:-translate-y-0.5 
                                  transition-all duration-300 flex-shrink-0 mt-1" />
      </div>
      
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground
                       group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
};

export default ProjectCard;
