import starEmpty from '../assets/star-empty.svg';
import starFull from '../assets/star-full.svg';
import './Star.css';

function Star(props) {
  const { full } = props;

  return (
    <div className="star">
      <img className="star__img" alt={full ? 'Étoile pleine' : "Étoile"} src={full ? starFull : starEmpty} />
    </div>
  );
}

export default Star;
