import "./contact.scss";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaBitbucket,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contact section" id="contact">
      <h1>Contact</h1>
      <div className="contact-container">
        <div className="contact-wrapper">
          <div className="contact-props">
            <div className="contact-icon-wrapper">
              <a
                href="https://www.facebook.com/thang.luongtran/"
                target="_blank"
              >
                <FaFacebook
                  className="contact-icon"
                  href="https://www.instagram.com/tranthang229/"
                  target="_blank"
                />
              </a>
            </div>
          </div>
          <div className="contact-props">
            <div className="contact-icon-wrapper">
              <a href="https://www.instagram.com/tranthang229/" target="_blank">
                <FaInstagram className="contact-icon" />
              </a>
            </div>
          </div>
          <div className="contact-props">
            <div className="contact-icon-wrapper">
              <a href="https://github.com/thangtheregista" target="_blank">
                <FaGithub className="contact-icon" />
              </a>
            </div>
          </div>
          <div className="contact-props">
            <div className="contact-icon-wrapper">
              <a href="https://bitbucket.org/thangtheregista" target="_blank">
                <FaBitbucket />
              </a>
            </div>
          </div>
          <div className="contact-props">
            <div className="contact-icon-wrapper">
              <a href="https://linkedin.com/in/thangtheregista" target="_blank">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
