import React from 'react';
import './SkillsInfoCard.css';

const SkillsInfoCard = ({ heading, skills }) => {  // Destructure props correctly
  return (
    <div className='skills-info-card'>
      <h6>{heading}</h6>
      
    </div>
  );
};

export default SkillsInfoCard;
