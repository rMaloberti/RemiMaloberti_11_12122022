import './Banner.css';

function Banner(props) {
  return (
    <div className={`banner banner--${props.page}`}>
      {props.page === 'home' ? <h2>Chez vous, partout et ailleurs</h2> : null}
    </div>
  );
}

export default Banner;
