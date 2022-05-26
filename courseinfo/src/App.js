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
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        exer1={exercises1}
        part2={part2}
        exer2={exercises2}
        part3={part3}
        exer3={exercises3}
      />
      <Total sum={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
