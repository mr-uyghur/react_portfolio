import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';
import '../assets/styles/Footer.scss';

function Footer() {
  return (
    <footer>
      <div className="footer-icons">
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
      <p className="footer-copy">&copy; {new Date().getFullYear()} Ali Halmamat. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
