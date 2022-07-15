import axios from 'axios';
import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '../components/Card';

interface IPokeListProps {
}
export interface IPokemon {
    name: string,
    sprites: {
        other: {
            'official-artwork': {
                front_default: string
            }
        }
    },
    types: [
        type: {
            name: string
        }
    ]
    id: number

}

const PokeList: React.FunctionComponent<IPokeListProps> = (props) => {

    const [pokemons, setPokemons] = useState<IPokemon[]>([])
    const [state, setState] = useState(false)

    const loadData = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0')
            .then(response => {
                for (let i = 0; i < response.data.results.length; i++) {
                    axios.get(response.data.results[i].url)
                        .then(result => {
                            setPokemons(previousArray => [...previousArray, result.data])
                            
                        })
                }
            })
    }

    useEffect(() => { loadData() }, [])

    const searchPokemon = async (pokeSearch: string) => {
        try {
            let url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`
            const response = await fetch(url)
            const data = await response.json()
            setState(true)
            return data
        } catch (err) { }
    }

    const pokeClick = async (name: string) => {
        const pokemonClicked = await searchPokemon(name)
        return setPokemons([pokemonClicked])

    }
    const closeButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setState(false)
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

                            <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
                                {pokemons.map((pokemon, index) => {
                                    //return <p key={index}> {pokemon.name}</p>
                                    return <>

                                        <Card pokemon={pokemon} pokeClick={pokeClick} />
                                    </>
                                })}
                            </div>
                            {state ? <button onClick={(e) => closeButton(e)} className="w-20 rounded-md bg-indigo-600  py-1 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">Return</button> : <></>}
                        </div>
                    </div>
                </div>
            </main>

        </>
    );
};

export default PokeList;
