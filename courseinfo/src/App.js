//renders the name of the course
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};
//Individual parts of courses
const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exer}
      </p>
    </div>
  );
};
// renders the parts and their number of excercises
const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exer={props.exer1} />
      <Part part={props.part2} exer={props.exer2} />
      <Part part={props.part3} exer={props.exer3} />
    </div>
  );
};
// renders the total number of excercises
const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.sum}</p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1.name}
        exer1={part1.exercises}
        part2={part2.name}
        exer2={part2.exercises}
        part3={part3.name}
        exer3={part3.exercises}
      />
      <Total sum={part1.exercises + part2.exercises + part2.exercises} />
    </div>
  );
};

export default App;

/**
 *   const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
 */