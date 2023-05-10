import React, { useEffect, useState } from 'react'
import { getPokemonByName } from '../../api/getPokemons';
const PokemonCard = ({ pokemon }) => {
    const [pokemonInfo, setPokemonInfo] = useState();

    useEffect(() => {
        getPokemonByName(pokemon.name)
            .then((data) => {
                setPokemonInfo(data)
            })
    }, [ pokemon.name ])
    return (
        <div className='pokemonCard'>
            {pokemon.name}
            <img src={pokemonInfo &&  pokemonInfo.sprites.other.dream_world.front_default} alt="" />
        </div>
    )
}

export default PokemonCard