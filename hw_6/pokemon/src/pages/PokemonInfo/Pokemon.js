import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonByName } from '../../api/getPokemons';

const Pokemon = () => {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const fetchPokemon = async () => {
            const data = await getPokemonByName(name);
            setPokemon(data);
        };
        fetchPokemon();
    }, [name]);

    if (!pokemon) {
        return <div>Loading...</div>;
    }

    const { name: pokemonName, sprites, abilities, height, weight } = pokemon;

    return (
        <div>
            <h1>{pokemonName}</h1>
            <img src={sprites.front_default} alt={pokemonName} />
            <p>Abilities: {abilities.map((ability) => ability.ability.name).join(', ')}</p>
            <p>Height: {height}</p>
            <p>Weight: {weight}</p>
        </div>
    );
};

export default Pokemon;