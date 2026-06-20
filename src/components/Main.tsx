import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://avatars.githubusercontent.com/u/69225775?v=4" alt="Ali Halmamat" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/mr-uyghur" target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/ali-h-4370361b4/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href="https://leetcode.com/u/mr-uyghur/" target="_blank" rel="noreferrer" aria-label="LeetCode">
              <CodeIcon />
            </a>
          </div>

          <h1>Ali Halmamat</h1>
          <p className="hero-role">Solutions Engineer &amp; Full Stack Developer</p>
          <p className="hero-bio">
            Building scalable web applications and GenAI-powered solutions at Google.
            Passionate about bridging engineering and product to ship things that matter.
          </p>

          <div className="hero-cta">
            <a
              href="#projects"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Projects
            </a>
            <a
              href="https://www.linkedin.com/in/ali-h-4370361b4/"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              Connect on LinkedIn
            </a>
          </div>

          <div className="mobile_social_icons">
            <a href="https://github.com/mr-uyghur" target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/ali-h-4370361b4/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href="https://leetcode.com/u/mr-uyghur/" target="_blank" rel="noreferrer" aria-label="LeetCode">
              <CodeIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
