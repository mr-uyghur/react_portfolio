import '../assets/styles/Project.scss';
import civiqGif from '../assets/images/1775105376858.gif';
import leetCoachGif from '../assets/images/Animation.gif';

interface ProjectData {
  title: string;
  description: string;
  imageUrl: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: ProjectData[] = [
  {
    title: "Civiq",
    description: "Interactive web app for exploring U.S. Senators and House representatives on a live map, with ZIP-based lookup, congressional district overlays, voting records, and how-to-vote information.",
    imageUrl: civiqGif,
    tech: ["React", "TypeScript", "Vite", "Django"],
    liveUrl: "https://rep-map-lime.vercel.app/",
  },
  {
    title: "LeetCode Coach",
    description: "AI-powered Socratic-tutor Chrome extension that guides users to solve coding problems without spoiling answers. Runs as a native side panel on LeetCode with a progressive hint system and collapsible reasoning blocks.",
    imageUrl: leetCoachGif,
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Zustand"],
    githubUrl: "https://github.com/mr-uyghur/Leet_Coach",
  },
];

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <span className="section-divider" />
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <div className="project-image-wrapper">
              <img src={project.imageUrl} alt={project.title} />
              <div className="project-overlay">
                <span>View Project</span>
              </div>
            </div>
            <div className="project-card-body">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t) => (
                  <span className="tech-chip" key={t}>{t}</span>
                ))}
              </div>
              <div className="project-ctas">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="cta-btn cta-primary">
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="cta-btn cta-secondary">
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
