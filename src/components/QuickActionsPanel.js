import React from 'react';

function QuickActionsPanel() {
    const actions = [
      { icon: '📧', label: 'Email' },
      { icon: '🗓️', label: 'Calendar' },
      { icon: '📑', label: 'To-Do List' },
    ];
  
    return (
      <div className="quick-actions-panel">
        {actions.map((action) => (
          <button key={action.label} className="action-button">
            <span className="icon">{action.icon}</span>
            <span className="label">{action.label}</span>
          </button>
        ))}
      </div>
    );
  }

export default QuickActionsPanel;