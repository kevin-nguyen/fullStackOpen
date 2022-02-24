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

  export default Course