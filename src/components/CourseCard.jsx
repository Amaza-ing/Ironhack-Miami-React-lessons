import { Link } from "react-router-dom";

function CourseCard(props) {
  const { course } = props;

  return (
    <article>
      <h3>{course.course}</h3>
      <p>Hours: {course.hours}</p>
      <p>Class: {course.classroom}</p>
      <p>Teacher: {course.teacher.teacher}</p>
    </article>
  );
}

export default CourseCard;
