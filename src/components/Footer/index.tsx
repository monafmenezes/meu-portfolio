import { FooterContainer } from "./styles";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <a href="https://github.com/monafmenezes">
          <FaGithub size={25} color="#3d3b41" />
        </a>
        <a href="https://www.linkedin.com/in/monalisafmenezes/">
          <FaLinkedin size={25} color="#3d3b41"/>
        </a>
      </div>
      <p>Copyright © 2022</p>
    </FooterContainer>
  );
};

export default Footer;
