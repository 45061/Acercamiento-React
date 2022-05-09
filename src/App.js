const Title = (props)=> <h1>Acercamiento a {props.title}</h1>
const Subtitle = (props) => <h2>Estamos probando el componente {props.subtitul}</h2>
const Button = (props) =>{
  return(
    <div>
      <button>
        {props.name}
      </button>

    </div>
  )
  
}

function App() {
  return (
    <div>
      <Title title="React"/>
      <Subtitle subtitul ='Subtitle'/>
      <Subtitle subtitul ='Title'/>
      <Subtitle subtitul ='Button'/>
      <Button name="Requst"/>
    </div>
  );
}

export default App;
