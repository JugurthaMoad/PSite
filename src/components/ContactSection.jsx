import AppGithubIcon from "../icons/AppGithubIcon";
import AppLinkedinIcon from "../icons/AppLinkedinIcon";
import AppContactIcon from "../icons/AppContactIcon";
const ContactSection = () => {
  const handleClick = (to) => {
    console.log("contact");
  };
  return (
    <div className="contact_container">
      <a
        href="https://github.com/JugurthaMoad"
        target="_blank"
        rel="noreferrer"
      >
        <AppGithubIcon className="icons" />
      </a>

      <a
        href="https://www.linkedin.com/in/jugurtha-moad-951abb242"
        target="_blank"
        rel="noreferrer"
      >
        <AppLinkedinIcon className="icons" />
      </a>
      <AppContactIcon className="contact_icon" handleClick={handleClick} />
    </div>
  );
};

export default ContactSection;
