import { Fragment } from "react";

const title = "Bonjour le monde !";
const style = {
  color: "red",
  backgroundColor: "black",
};
const showTitle = false;
const todos = [
  "Apprendre React",
  "Apprendre le JSX",
  "Créer une application React",
]

function App() {
  const handleClick = () => {
    alert("J'ai cliqué !");
  };

  return <>
    {showTitle ? 
      <h1 onClick={handleClick} id="title" className="title" style={style}>{title}</h1> : 
      null
    }
    <Title color="green" id="monid" className="demo">Bonjour les gens</Title>

    <input type="text" />

    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis assumenda aliquid aperiam, repudiandae quasi optio error dolor ipsum eaque dignissimos expedita est. Est nostrum ut distinctio vero iure, voluptate hic?
    </p>

    <ul>
      {todos.map(todo => (<li key={todo}>{todo}</li>))}
    </ul>
  </>;
}

function Title({color, children, hidden, ...props}) {

  if (hidden) {
    return null;
  }

  return <>
    <h1 style={{color : color}} {...props}>{children}</h1>
  </>;
}

export default App
