import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";  

export const Route = createFileRoute("/pokemon")({
  component: PokemonPage,
});

function PokemonPage() {
  const [pokemon, setPokemon] = useState<{name: string, image: string} | null>(null); 
    
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto/")
      .then((response) => response.json())
      .then((data) => setPokemon({
        name: data.name,
        image: data.sprites.front_default,
      }))
      .catch((error) => console.error(error));
  }, []);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-2">
      <div>
        <h3>{pokemon.name}</h3>
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
    </div>
  );
}