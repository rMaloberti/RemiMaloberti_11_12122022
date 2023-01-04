import './Banner.css';

function Banner(props) {
  return (
    <div className={`banner banner--${props.page}`}>
      {props.page === 'home' ? <p className="banner__text">Chez&nbsp;vous, partout&nbsp;et&nbsp;ailleurs</p> : null}
    </div>
  );
}

export default Banner;
