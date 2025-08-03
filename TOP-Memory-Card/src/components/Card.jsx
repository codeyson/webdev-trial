import { useEffect, useState } from 'react';
import '../styles/Card.css';

function PokemonCard({ name = 'ditto' }) {
    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState(null);
  useEffect (() => {
      async function fetchPokemon() {
      setPokemon(null);  // Clear old data
      setError(null);
      try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

          if(!response.ok){
            throw new Error(`Pokemon not Found: ${response.status}`)
          }
          const pokeData = await response.json();
          setPokemon(pokeData);
      } catch (err) {
      setError(err.message);
    }
  }
  fetchPokemon();
  }, [name]);
  return (
<div className="pokemon-card">
  {error && <p className="error-message">Error: {error}</p>}
  {!pokemon && !error && <p className="loading-message">Loading...</p>}
  {pokemon && (
    <>
      <h2 className="pokemon-name">
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </h2>
      <img
        className="pokemon-image"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
    </>
  )}
</div>

  );
}



export default PokemonCard;
