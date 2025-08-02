import './App.css'
import PokemonCard from './components/Card'

function App() {
  return (
    <>
    <div className="App" >
      <h1>Top Memory Card</h1>
    </div>
      <PokemonCard name="pikachu" />
      <PokemonCard name="charmander" />
      <PokemonCard name="squirtle" /> 

    </>
  )
}

export default App
