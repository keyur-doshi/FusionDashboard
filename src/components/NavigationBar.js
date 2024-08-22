import React from 'react';

function NavigationBar({ closeSidebar }) {
  const navItems = [
    { icon: '🏠', label: 'Home' },
    { icon: '📅', label: 'Timetable' },
    { icon: '📄', label: 'Profile' },
    { icon: '✉️', label: 'Get help' },
    { icon: '❌', label: 'Logout' },
  ];

  return (
    <nav className="navigation-bar">
      {navItems.map((item) => (
        <button 
          key={item.label} 
          className="nav-button" 
          onClick={closeSidebar} // Close the sidebar when an item is clicked
        >
          <span className="icon">{item.icon}</span>
          <span className="label">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}

export default NavigationBar;
