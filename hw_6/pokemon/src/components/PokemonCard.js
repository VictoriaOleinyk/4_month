
import React, { useState, useEffect } from "react";

const PokemonCard = ({ pokemon }) => {
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(pokemon.url);
            const data = await response.json();
            setPokemonData(data);
        };

        fetchData();
    }, [pokemon.url]);

    return (
        <div className="pokemonCard">
            {pokemonData && (
                <>
                    <h2>{pokemonData.name}</h2>
                    <img className='pokemonImg'
                        src={pokemonData.sprites.other.dream_world.front_default}
                        alt={pokemonData.name}
                    />
                </>
            )}
        </div>
    );
};

export default PokemonCard;