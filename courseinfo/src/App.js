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
      <Part part={props.parts[0].name} exer={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exer={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exer={props.parts[2].exercises} />
    </div>
  );
};
// renders the total number of excercises
const Total = (props) => {
  console.log(props);
  return (
    <div>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
 
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;


