import '../assets/styles/Project.scss';
import civiqGif from '../assets/images/1775105376858.gif';
import leetCoachGif from '../assets/images/Animation.gif';

interface ProjectData {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

const projects: ProjectData[] = [
  {
    title: "Civiq",
    description: "Interactive web app for exploring U.S. Senators and House representatives on a live map, with ZIP-based lookup, congressional district overlays, voting records, and how-to-vote information. Built with React, TypeScript, Vite, and Django.",
    imageUrl: civiqGif,
    projectUrl: "https://rep-map-lime.vercel.app/",
  },
  {
    title: "LeetCode Coach",
    description: "LeetCode Coach is an AI-powered Socratic-tutor Chrome extension designed to guide users to solve coding problems without spoiling the answers. It functions as a native side panel on LeetCode, utilizing a progressive hint system, system-prompted anti-spoiler guards, collapsible reasoning (thinking) blocks, and direct code extraction from Monaco Editor. Built with React, TypeScript, Vite, Tailwind CSS, Zustand, and Manifest V3.",
    imageUrl: leetCoachGif,
    projectUrl: "https://github.com/mr-uyghur/Leet_Coach",
  }
];

function Project() {
    return (
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <span className="section-divider" />
        <div className="projects-grid">
            {projects.map((project, index) => (
              <div className="project" key={index}>
                <a href={project.projectUrl} target="_blank" rel="noreferrer">
                  <div className="project-image-wrapper">
                    <img src={project.imageUrl} alt={project.title} />
                    <div className="project-overlay">
                      <span>View Project</span>
                    </div>
                  </div>
                </a>
                <div className="project-card-body">
                  <a href={project.projectUrl} target="_blank" rel="noreferrer">
                    <h2>{project.title}</h2>
                  </a>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
        </div>
    </div>
    );
}

export default Project;
