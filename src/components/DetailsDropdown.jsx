import './DetailsDropdown.css';
import Dropdown from './Dropdown';

function DetailsDropdown(props) {
  const { title, content, isList } = props;

  return (
    <Dropdown
      title={title}
      content={content}
      isList={isList}
      isDetailsDropdown={true}
      defaultStatus="opened"
    />
  );
}

export default DetailsDropdown;
