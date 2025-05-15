import React from 'react';
import tickCheckBox from '../assets/Icons/tickCheckBox.svg';

const Qualities = ({ image = tickCheckBox, title = "Default Title", className}) => {
  return (
    <div className={`flex items-center space-x-2  bg-[#C9E0FE] p-2 rounded-md ${className}`}> 
      <img src={image} alt={title} className="w-8 h-8" /> 
      <h2 className="text-lg font-medium text-[rgba(83, 143, 223, 1)]">{title}</h2> 
    </div>
  );
};

export default Qualities;