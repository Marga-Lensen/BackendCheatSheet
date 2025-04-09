// import "./Footer.css";
import logo from "/ML-logo-cropped-sq.png"; // Adjust path as needed

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">&copy; {new Date().getFullYear()} ML DevLab.</p>
        <img src={logo} alt="ML Logo" className="footer-logo" />
        {/* <span className="brand-name">ML DevLab</span> */}
        <p> All rights reserved.</p>
      </div>
      
      
      
    </footer>
  );
};

export default Footer;
