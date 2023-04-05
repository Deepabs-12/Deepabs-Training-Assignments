import React from 'react';

function Course({ course, onEnroll, onCancel, enrolled }) {
  return (
    <div className="course">
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <p>Price: ${course.price}</p>
      {enrolled ? (
        <button onClick={onCancel}>Cancel</button>
      ) : (
        <button onClick={onEnroll}>Take Course</button>
      )}
    </div>
  );
}

export default Course;
