import React from 'react';
import './sidebarStyles.scss';

interface SidebarProps {
  items: string[];
  onItemSelect: (item: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ items, onItemSelect }) => {
  return (
    <div className="sidebar">
      <ul className="sidebar-items">
        {items.map((item, index) => (
          <li key={index} className="sidebar-item" onClick={() => onItemSelect(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
