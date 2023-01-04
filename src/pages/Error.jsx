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
          <p className="top-section__text">Oups!&nbsp;La&nbsp;page&nbsp;que vous&nbsp;demandez&nbsp;n'existe&nbsp;pas.</p>
        </div>
        <div className="bottom-section">
          <Link className="bottom-section__link" to="/">Retourner sur la page d’accueil</Link>
        </div>
      </div>
    </div>
  );
}

export default Error;
