import axios from "axios";

const BASE_URL = 'https://pokeapi.co/api/v2/'

export const fetchPokemons = async() => {
    try {
        const { data } = await axios.get(BASE_URL + 'pokemon?limit=20&offset=0')
        return data;
    }catch (error) {

    }
}
export default fetchPokemons
// export const getPokemonUrl = async(url) => {
//     try {
//         const { data } = await axios.get(BASE_URL + 'pokemon?limit=20&offset=0')
//         return data.sprites.other.dream_world.front_default;
//     }catch (error) {
//
//     }
// }
//
// export default getPokemonUrl
