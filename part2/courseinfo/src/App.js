function App() {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  const displayCourses = (courseList) => {
    let jsxCourseList = courseList.map((courseSegment) => {
      return <Course course={courseSegment} key={courseSegment.id} />
    });

    return jsxCourseList
  }

  return (
    <div>
      <h1>Web development curriculum</h1>
      {displayCourses(courses)}
    </div>
  );
}

const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total exercises={course.parts} />
    </div>
  )
}

function Header(props) {
  return <h2>{props.course}</h2>;
}

function Content(props) {
  const displayPart = (parts) => {
    let jsxPartList = parts.map(section => {
      return <Part part={section.name} key={section.id} exercises={section.exercises} />
    });

    return jsxPartList
  }

  return (
    <>
      {displayPart(props.parts)}
    </>
  );
}

function Part(props) {
  return <p>{props.part} {props.exercises}</p>;
}

function Total(props) {
  let totalExercise = props.exercises.reduce((prev, part) => prev + part.exercises, 0)

  return <p><strong>Number of exercises {totalExercise}</strong></p>;
}

export default App;
