import React from 'react';
import Course from './Course'

const Curriculum = ({ courses }) => {
  return (
    <>
      <h1>Web development curriculum</h1>
      {courses.map(course => {
        return (
          <Course course={course} key={course.id}/>
        )
      })}
    </>
  );
};

export default Curriculum;