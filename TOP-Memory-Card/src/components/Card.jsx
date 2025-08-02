import { useEffect, useState } from 'react';
import '../styles/Card.css';

function PokemonCard({ name = 'ditto' }) {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPokemon() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!res.ok) throw new Error('Pokémon not found');

        const data = await res.json();
        setPokemon(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPokemon();
  }, [name]);

  if (loading) return <p>Loading Pokémon...</p>;
  if (error) return <p>Error: {error}</p>;

return (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between', // aligns content evenly
      gap: '1rem',                   // adds spacing between items
      border: '1px solid #ccc',
      padding: '1rem',
      borderRadius: '10px',
      width: '300px'                   // enough width for both items
    }}
  >
    <h2 style={{ margin: 0 }}>
      {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
    </h2>
    <img
      src={pokemon.sprites.front_default}
      alt={pokemon.name}
      style={{ width: '60px', height: '60px' }}
    />
  </div>
);

}

export default PokemonCard;
