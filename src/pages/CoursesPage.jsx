import { useEffect, useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import CourseCard from "../components/CourseCard";
import CreateCourse from "../components/CreateCourse";

function CoursesPage() {
  const [courses, setCourses] = useState([]);

  const getCourses = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/courses");
      const data = await response.json();
      console.log(data);
      setCourses(data);
    } catch (e) {
      console.log(e);
    }
  };

  const createCourse = async (newCourse) => {
    try {
      console.log(JSON.stringify(newCourse));
      await fetch("http://localhost:8080/api/courses", {
        method: "POST",
        body: JSON.stringify(newCourse),
        headers: {
          "Content-Type": "application/json",
        }
      })

      getCourses();
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getCourses();
  }, []);

  const courseCards = courses.map((course) => {
    return (
      <li key={course.course}>
        <CourseCard course={course}></CourseCard>
      </li>
    );
  });

  return (
    <>
      <HeaderComponent></HeaderComponent>

      <section>
        <h2>Courses</h2>

        <CreateCourse createCourse={createCourse}></CreateCourse>

        <ul>{courseCards}</ul>
      </section>
    </>
  );
}

export default CoursesPage;
