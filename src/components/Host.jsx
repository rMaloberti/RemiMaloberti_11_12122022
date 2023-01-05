import './Host.css';

function Host(props) {
  const { name, picture } = props.host;

  return (
    <div className="host">
      <p className="host__name">{name}</p>
      <div className="host__picture">
        <img className="host__picture__img" alt={name} src={picture} />
      </div>
    </div>
  );
}

export default Host;
