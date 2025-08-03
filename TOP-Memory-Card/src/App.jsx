import './App.css'
import PokemonCard from './components/Card'

function App() {
  return (
    <>
      <div className="App" >
        <h1>Top Memory Card</h1>
      </div>
      <div className='pokemon-card-container'>
        <PokemonCard name="pikachu" />
        <PokemonCard name="pikachu" />
        <PokemonCard name="pikachu" />
        <PokemonCard name="pikachu" />
      </div>
    </>
  )
}

export default App
