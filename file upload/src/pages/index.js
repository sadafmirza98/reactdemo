import React from "react"

export default function Home() {
  return <div>Hello world!</div>
}

function Button (){
  const[counter,setCounter] = useState(5);
  return <button onClick= {() => setCounter(counter+counter)}> {counter} </button>
}

ReactDOM.render(
  <Button/>,
  document.getElementById('mountNode'),
);

