import { LucideIcon } from "lucide-react";

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  delay?: number;
}

const SocialLink = ({ href, icon: Icon, label, delay = 0 }: SocialLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 p-4 rounded-xl bg-card border border-border
                 hover:border-primary/50 hover:shadow-gold transition-all duration-300
                 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-secondary
                      group-hover:bg-primary/10 transition-colors duration-300">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <span className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">
        {label}
      </span>
      <svg
        className="w-5 h-5 ml-auto text-muted-foreground group-hover:text-primary 
                   group-hover:translate-x-1 transition-all duration-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </a>
  );
};

export default SocialLink;
