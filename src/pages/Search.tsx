import axios from 'axios';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

interface ISearchProps {
}
interface IPokemon{
    name: string,
    sprites: string,
    types: string[]
    id: number
    type:string
}
const Search: React.FunctionComponent<ISearchProps> = (props) => {
    const [pokemons, setPokemons] = useState<IPokemon[]>([])
    const [search, setSearch] = useState("")
    const [state, setState] = useState(false)
    const [notFound, setNotFound] = useState(false)
    const navigate = useNavigate()

    const loadData = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
            .then(response => {
                for (let i = 0; i < response.data.results.length; i++) {
                    axios.get(response.data.results[i].url)
                        .then(result => {
                            setPokemons(previousArray => [...previousArray, result.data])
                        })
                }
            })
    }

      const onSearch = async (pokeSearch:any) => {
        const result = await searchPokemon(pokeSearch)
        setState(true)
        if(!result){
            return setNotFound(true)
        }
        return setPokemons([result])

    }
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)

    }
    const onClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        onSearch(search);
        setSearch('')
        ///console.log(search);


    }
    const searchPokemon = async (pokeSearch:any) => {
        try {
            let url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`
            const response = await fetch(url)
            const data = await response.json()
            setState(true)
            return data
        } catch (err) { }
    }

    const pokeClick = async (name:any) => {
        const pokemonClicked = await searchPokemon(name)
        return setPokemons([pokemonClicked])

    }
    const closeButton = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setState(false)
        navigate('/list')
        return loadData()
        
    }

    return (
        <>

            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-blue-900">Find Your Pokemon</h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-2 sm:px-6 lg:px-3">
                    <div className="px-4 py-6 sm:px-0">
                        <div className="p-8 border-4 border-solid border-gray-200 rounded-lg h-full">
                            <div className="flex justify-left space-x-4 relative z-0 w-full mb-6  ">
                                <input type="text" value={search} onChange={(e) => onChange(e)} id="searchPokemon" className="block py-2.5 px-0 w-60 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Find a pokemon</label>
                                <button onClick={(e) => onClick(e)} className="w-20 rounded-md bg-indigo-600  py-1 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">search</button>
                            </div>
                            {notFound? <div>Pokemon not found</div>:
                            <div className="grid grid-cols-2 gap-1">
                                {pokemons.map((pokemon, index) => {
                                    //return <p key={index}> {pokemon.name}</p>
                                    return <>

                                        <div onClick={() => pokeClick(pokemon.name)} className="border-4 border-dashed border-gray-200 rounded-lg h-full">
                                            <img src={pokemon.sprites.other['official-artwork'].front_default} alt="plant" className="h-auto w-full" />
                                            <div className="p-5">
                                                <p className="flex justify-center text-medium mb-5 text-gray-700 ">{pokemon.name}</p>
                                                <div className="flex justify-center space-x-4">
                                                    {pokemon.types.map(pokeType => <button className="w-20 rounded-md bg-indigo-600  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">{pokeType.type.name}</button>)}
                                                </div>
                                            </div>
                                        </div>

                                    </>
                                })}
                            </div>}
                                {state ? <button onClick={(e) => closeButton(e)} className="mt-8 w-20 rounded-md bg-indigo-600  py-1 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">Return</button> : <></>}
                        </div>
                    </div>
                </div>
            </main>

        </>
    );
};

export default Search;