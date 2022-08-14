import React from "react";
import Part from "./Part";

const TotalExercises = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <p>
      <b>Total of {totalExercises} exercises</b>
    </p>
  );
};

const Course = ({ course }) => {
  return (
    <>
      <h1>{course.name}</h1>
      {course.parts.map((part) => (
        <Part name={part.name} exercises={part.exercises} key={part.id} />
      ))}
      <TotalExercises parts={course.parts} />
    </>
  );
};

export default Course;
