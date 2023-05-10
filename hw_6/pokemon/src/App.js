import { useState, useEffect} from 'react';
import './App.css';
import { fetchPokemons } from './api/getPokemons';
import { Pagination, PokemonCard } from './components';
import AboutUs from './pages/AboutUs/AboutUs';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import Pokemon from './pages/PokemonInfo/Pokemon';

function App() {
    const [ theme, setTheme ] = useState('light');
    const [ pokemonList, setPokemonList ] = useState([])
    const [ offset, setOFfset ] = useState(1);

    const [ count, setCount ] = useState(1);

    const [ page, setPage ] = useState(1);



    const limit = 10;

    const toggleTheme  = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }


    useEffect(() => {
        fetchPokemons({ limit, offset}).then((data) => {
            setPokemonList([...data.results])
            const pageCount = Math.ceil(data.count / limit)
            setCount(pageCount)
        })
    }, [ offset ])


    const handleNext  = ( ) => {
        if(page === count) return
        setOFfset(prev => prev + limit);
        setPage(prev => prev + 1)
    }

    const handlePrev = () => {
        if(page === 1) return
        setOFfset(prev =>  prev - limit);
        setPage(prev => prev - 1)
    }
    return (
        <div className={`app ${theme}`}>
            Pokemon project
            <button onClick={toggleTheme}>Change theme</button>
            <div className='container'>
                <Routes>
                    <Route path='/' element={<MainPage />}  />
                    <Route path='/about-us' element={<AboutUs />}  />
                    <Route path='/pokemon/:name' element={<Pokemon />} />
                </Routes>
                <Pagination
                    page={page}
                    count={count}
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                />
                <div className='pokemonList'>
                    {pokemonList.map(pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon} />)}
                </div>
            </div>
        </div>
    );
}

export default App;