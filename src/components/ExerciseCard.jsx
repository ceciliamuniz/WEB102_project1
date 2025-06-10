import React from 'react';


const ExerciseCard = ({ name, image, muscle }) => {
    return (
      <div className="exercise-card">
        <img src={image} alt={name} className="exercise-image" />
        <h2 className="exercise-title">{name}</h2>
        <p className="muscle-group">{muscle}</p>
      </div>
    );
  };

export default ExerciseCard;  

