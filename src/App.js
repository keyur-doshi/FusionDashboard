import React, { useState } from 'react';
import UserCard from './components/UserCard';
import NavigationBar from './components/NavigationBar';
import ModuleTiles from './components/ModuleTiles';
import DesignationDropdown from './components/DesignationDropdown';
import NotificationIcon from './components/NotificationIcon';
import './App.css';

function App() {
  const [currentDesignation, setCurrentDesignation] = useState('Student');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <UserCard />
        <NavigationBar closeSidebar={() => setIsSidebarOpen(false)} />
      </aside>
      <main className="main-content">
        <header className="top-bar">
          <button className="hamburger-menu" onClick={toggleSidebar}>
            ☰
          </button>
          <h1>Fusion Dashboard</h1>
          <div className="top-bar-right">
            <NotificationIcon />
            <DesignationDropdown 
              currentDesignation={currentDesignation}
              setCurrentDesignation={setCurrentDesignation}
            />
          </div>
        </header>
        <ModuleTiles designation={currentDesignation} />
      </main>
      {isSidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </div>
  );
}

export default App;
