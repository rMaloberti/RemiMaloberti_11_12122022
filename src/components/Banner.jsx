import './Banner.css';

function Banner(props) {
  return (
    <div className={`banner banner--${props.page}`}>
      {props.page === 'home' ? <p className="banner__text">Chez vous, partout et ailleurs</p> : null}
    </div>
  );
}

export default Banner;
