import React, { useState } from 'react';

const MenuToggle = ({ onToggle }) => {
  return (
    <button onClick={onToggle} className='menu-toggle-button'>
      Toggle Menu
    </button>
  );
};

export default MenuToggle;
