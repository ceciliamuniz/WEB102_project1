import React from 'react';
import ExerciseCard from './components/ExerciseCard';
import exercises from './data/exercises';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>Welcome to GymBuddy</h1>
      <p>Get ready to crush your goals</p>
      <div className="exercise-grid">
        {exercises.map((exercise, index) => (
          <ExerciseCard
            key={index}
            name={exercise.name}
            image={exercise.image}
            muscle={exercise.muscle}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
