import './Tag.css';

function Tag(props) {
  const { tag } = props;

  return (
    <div className="tag">
      <p className="tag__text">{tag}</p>
    </div>
  );
}

export default Tag;
