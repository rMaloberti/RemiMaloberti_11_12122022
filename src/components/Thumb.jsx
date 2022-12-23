import { Link } from 'react-router-dom';
import './Thumb.css';

function Thumb(props) {
  const logement = props.data;

  return (
    <Link to={`logement/${logement.id}`} className="thumb">
        <img className="thumb__img" alt={logement.title} src={logement.cover} />
        <p className="thumb__title">{logement.title}</p>
    </Link>
  );
}

export default Thumb;
