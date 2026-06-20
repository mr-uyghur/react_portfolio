import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../assets/styles/Contact.scss';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Get In Touch</h1>
          <span className="section-divider" />
          <p className="contact-intro">
            Got a project waiting to be realized? I'm open to collaboration, consulting, and interesting opportunities. Reach out — let's build something great together.
          </p>
          <div className="contact-cta-row">
            <a
              href="https://www.linkedin.com/in/ali-h-4370361b4/"
              target="_blank"
              rel="noreferrer"
              className="contact-cta-card"
            >
              <div className="cta-icon">
                <LinkedInIcon />
              </div>
              <div className="cta-text">
                <span className="cta-label">Connect on</span>
                <span className="cta-value">LinkedIn</span>
              </div>
            </a>
            <a
              href="https://github.com/mr-uyghur"
              target="_blank"
              rel="noreferrer"
              className="contact-cta-card"
            >
              <div className="cta-icon">
                <GitHubIcon />
              </div>
              <div className="cta-text">
                <span className="cta-label">View work on</span>
                <span className="cta-value">GitHub</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
