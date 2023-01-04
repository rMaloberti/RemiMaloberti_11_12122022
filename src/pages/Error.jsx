import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './Error.css';

function Error() {
  return (
    <div className="page">
      <Header />
      <div className="error-content">
        <div className="top-section">
          <h1 className="top-section__title">404</h1>
          <p className="top-section__text">Oups! La page que vous demandez n'existe pas.</p>
        </div>
        <div className="bottom-section">
          <Link className="bottom-section__link" to="/">Retourner sur la page d’accueil</Link>
        </div>
      </div>
    </div>
  );
}

export default Error;
