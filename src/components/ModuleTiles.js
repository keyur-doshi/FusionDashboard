import React from 'react';

function ModuleTiles({ designation }) {
  const modules = [
    { icon: '📚', label: 'Academics' },
    { icon: '📝', label: 'Programme & Curriculum' },
    { icon: '🧪', label: 'Mess Management' },
    { icon: '📅', label: 'Visitor\'s Hostel' },
    { icon: '📊', label: 'Healthcare Centre' },
    { icon: '👥', label: 'Scholarship Portal' },
    { icon: '📚', label: 'Complaint System' },
    { icon: '🏆', label: 'Placement Cell' },
    { icon: '📣', label: 'Department Portal' },
    { icon: '⚙️', label: 'Gymkhana' },
    { icon: '⚙️', label: 'Hostel Management' },
    { icon: '⚙️', label: 'Other Academic Procedure' },
  ];

  return (
    <div className="module-tiles">
      {modules.map((module) => (
        <div 
          key={module.label} 
          className="module-tile"
        >
          <span className="icon">{module.icon}</span>
          <span className="label">{module.label}</span>
        </div>
      ))}
    </div>
  );
}

export default ModuleTiles;