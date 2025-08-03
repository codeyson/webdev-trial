import { useState } from 'react';
import PokemonCard from './Card';
import '../styles/Pokemon.css';

const allPokemonNames = [
  'pikachu', 'bulbasaur', 'charmander', 'squirtle', 'eevee',
  'jigglypuff', 'meowth', 'psyduck', 'snorlax', 'ditto'
];

function MemoryGame() {
  const [selected, setSelected] = useState([]);
  const [cards, setCards] = useState([
    'pikachu',
    'bulbasaur',
    'charmander',
    'squirtle',
  ]);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('Click a card to start!');

  function handleCardClick(currentName) {
    if (selected.includes(currentName)) {
      // Already selected - Game Over!
      setMessage(`Oops! You already clicked ${currentName}. Game reset.`);
      setSelected([]);
      setScore(0);
      setCards(generateRandomCards());
    } else {
      // New selection
      const newSelected = [...selected, currentName];
      setSelected(newSelected);
      setScore(newSelected.length);
      setMessage(`Good! Score: ${newSelected.length}`);

      setCards(generateRandomCards());
    }
  }

  function generateRandomCards() {
    const shuffled = allPokemonNames
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);
    return shuffled;
  }

  return (
    <>
      <h1 className="game-title">Memory Game</h1>
      <p className="game-message">{message}</p>
      <p className="game-score">Score: {score}</p>

      <div className="pokemon-card-container">
        {cards.map((name) => (
          <div
            key={name}
            onClick={() => handleCardClick(name)}
            className="pokemon-card-wrapper"
            style={{ cursor: 'pointer' }}
          >
            <PokemonCard name={name} />
          </div>
        ))}
      </div>
    </>
  );
}

export default MemoryGame;
