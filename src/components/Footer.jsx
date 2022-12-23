import logoWhite from '../assets/logo-white.svg';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img className="footer__logo__img" alt="Logo KASA" src={logoWhite} />
      </div>
      <p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
