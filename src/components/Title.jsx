import './Title.css';

function Title(props) {
  const { title, location } = props;

  return (
    <div className="title">
      <h1 className="title__heading">{title}</h1>
      <h2 className="title__location">{location}</h2>
    </div>
  );
}

export default Title;
