import { useEffect, useState } from 'react';

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
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {!pokemon && !error && <p>Loading...</p>}
      {pokemon && (
        <>
          <h2 style={{ margin: 0 }}>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </h2>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            style={{ width: '60px', height: '60px' }}
          />
        </>
      )}
    </div>
  );
}

export default PokemonCard;
