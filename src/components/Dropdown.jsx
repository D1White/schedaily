import { useState, useEffect, useRef } from "react";

import arrow from '../assets/img/arrow.svg';

const groups = ['ИПЗ-32', 'ИПТБ-31'];

function Dropdown() {

  const dropdownRef = useRef();

  const [visible, setVisible] = useState(false);
  const [activeGroup, setActiveGroup] = useState(groups[0]);

  const DropdownClick = () => {
    setVisible(!visible);
  }

  const DropdownCompClick = (obj) => {
    setActiveGroup(obj);
    setVisible(false);
  }

  const handleOutsideClick = (event) => { 
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(dropdownRef.current)) {
      setVisible(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdownbtn" onClick={DropdownClick} >
        <span className="dropdownbtn__text">{activeGroup}</span>
        <img src={arrow} alt="arrow" className={`dropdownbtn__ico ${!visible ? 'invert' : ''}`} />
      </div>
      <ul className={`dropdown-content ${visible ? 'visible' : ''}`}>
        { groups && groups.map((obj, index) => (
          <li
            className={`dropdown__component ${activeGroup === obj ? 'active' : ''}`}
            key={`${obj}_${index}`}
            onClick={() => DropdownCompClick(obj)}
          >{obj}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown;
