import BotonUno from "./components/Button.jsx"

function App() {
  const Click = () => 
    {
      console.log("Hola")
    };

  return (
    <>
       <BotonUno onClick={Click}>Presionar</BotonUno>
     
    </>
  )
}

export default App

