import dropdownDown from '../assets/dropdown-down.svg';
import dropdownUp from '../assets/dropdown-up.svg';
import './Dropdown.css';

function Dropdown(props) {
  const toggleDropdown = () => {
    const dropdown = document.getElementById(`dropdown-${props.title}`);

    if (dropdown.classList.contains('dropdown--closed')) {
      dropdown.classList.replace('dropdown--closed', 'dropdown--opened');
    } else {
      dropdown.classList.replace('dropdown--opened', 'dropdown--closed');
    }
  } 

  return (
    <div id={`dropdown-${props.title}`} className="dropdown dropdown--closed">
      <div className="dropdown__header" onClick={toggleDropdown}>
        <h2 className="dropdown__header__title">{props.title}</h2>
        <div className="dropdown__header__toggle">
          <img className="dropdown__header__toggle__icon" alt="dropdown icon" src={props.isOpen ? dropdownUp : dropdownDown} />
        </div>
      </div>
      <div className="dropdown__content">
        <p className="dropdown__content__text">{props.text}</p>
      </div>
    </div>
  );
}

export default Dropdown;
