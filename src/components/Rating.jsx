import './Rating.css';
import Star from './Star';

function Rating(props) {
  const { rating } = props;

  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<Star full={true} />);
    } else {
      stars.push(<Star full={false} />);
    }
  }

  return <div className="rating">{stars}</div>;
}

export default Rating;
