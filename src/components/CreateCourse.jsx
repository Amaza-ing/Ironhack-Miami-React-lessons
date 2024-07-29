import { useState } from "react";

function CreateCourse(props) {
  const { createCourse } = props;

  const [course, setCourse] = useState("");
  const [hours, setHours] = useState(0);
  const [classroom, setClassroom] = useState("");
  const [vacations, setVacations] = useState("");
  const [teacherId, setTeacherId] = useState(0);


  const handleCourseInput = (e) => {
    setCourse(e.target.value);
  };

  const handleHoursInput = (e) => {
    setHours(e.target.value);
  };

  const handleClassroomInput = (e) => {
    setClassroom(e.target.value);
  };

  const handleVacationsInput = (e) => {
    setVacations(e.target.value);
  }

  const handleTeacherIdInput = (e) => {
    setTeacherId(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCourse = {
      course: course,
      hours: hours,
      classroom: classroom,
      vacations: vacations,
      teacher: {
        id: teacherId
      }
    }

    if (!newCourse.course) {
      console.log("Course name shouldn't be empty");
      return;
    }
    createCourse(newCourse);

    setCourse("");
    setHours(0);
    setClassroom("");
    setVacations("");
    setTeacherId(0);
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="course">Course: </label>
        <input
          type="text"
          id="course"
          onChange={handleCourseInput}
          value={course}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="course-hours">Hours: </label>
        <input
          type="number"
          id="course-hours"
          onChange={handleHoursInput}
          value={hours}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="course-classroom">Classroom: </label>
        <input
          type="text"
          id="course-classroom"
          onChange={handleClassroomInput}
          value={classroom}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="course-vacations">Vacations: </label>
        <input
          type="text"
          id="course-vacations"
          onChange={handleVacationsInput}
          value={vacations}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="course-teacher">Teacher: </label>
        <input
          type="number"
          id="course-teacher"
          onChange={handleTeacherIdInput}
          value={teacherId}
        />
      </fieldset>
      <button>Create Course</button>
    </form>
  );
}

export default CreateCourse;
