import React, { useState } from 'react';

function DesignationDropdown({ currentDesignation, setCurrentDesignation }) {
  const [isOpen, setIsOpen] = useState(false);
  const designations = ['Student', 'Teacher', 'Admin'];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (designation) => {
    setCurrentDesignation(designation);
    setIsOpen(false);
  };

  return (
    <div className="designation-dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        {currentDesignation} ▼
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {designations.map((designation) => (
            <li 
              key={designation}
              className={designation === currentDesignation ? 'active' : ''}
              onClick={() => handleSelect(designation)}
            >
              {designation}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DesignationDropdown;