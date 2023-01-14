import { useState } from 'react';
import dropdownDown from '../assets/dropdown-down.svg';
import dropdownUp from '../assets/dropdown-up.svg';
import './Dropdown.css';

function Dropdown(props) {
  const { title, content, isList, isDetailsDropdown, defaultStatus } = props;

  const [dropdownIcon, setDropdownIcon] = useState(defaultStatus === 'closed' ? dropdownDown : dropdownUp);

  const toggleDropdown = () => {
    const dropdown = document.getElementById(`dropdown-${props.title}`);

    if (dropdown.classList.contains('dropdown--closed')) {
      dropdown.classList.replace('dropdown--closed', 'dropdown--opened');
      setDropdownIcon(dropdownUp);
    } else {
      dropdown.classList.replace('dropdown--opened', 'dropdown--closed');
      setDropdownIcon(dropdownDown);
    }
  };

  return (
    <div
      id={`dropdown-${props.title}`}
      className={`${
        isDetailsDropdown ? 'details-dropdown ' : ''
      }dropdown dropdown--${defaultStatus}`}
    >
      <div className="dropdown__header" onClick={toggleDropdown}>
        <h2 className="dropdown__header__title">{title}</h2>
        <div className="dropdown__header__toggle">
          <img className="dropdown__header__toggle__icon" alt="dropdown icon" src={dropdownIcon} />
        </div>
      </div>
      <div className="dropdown__content">
        {isList ? (
          <ul className="dropdown__content__list">
            {content.map((equipement, index) => (
              <li key={index} className="dropdown__content__list__item">
                {equipement}
              </li>
            ))}
          </ul>
        ) : (
          <p className="dropdown__content__text">{content}</p>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
