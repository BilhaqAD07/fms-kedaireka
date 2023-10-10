import React, { useState } from 'react';
import './SidebarRight.css'; // Import file CSS yang digunakan untuk styling

const SidebarRight: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // State untuk mengontrol apakah sidebar terbuka atau tidak

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar-right ${isOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        Toggle Sidebar
      </button>
      <div className="sidebar-content">
        {/* Konten sidebar akan ditampilkan di sini */}
        <p>Sidebar Content</p>
      </div>
    </div>
  );
};

export default SidebarRight;
