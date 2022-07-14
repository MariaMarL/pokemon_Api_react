import axios from 'axios';
import * as React from 'react';
import { useState, useEffect } from 'react';

interface IPokeListProps {
}

const PokeList: React.FunctionComponent<IPokeListProps> = (props) => {

    const [pokemons, setPokemons] = useState([])

    const loadData = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=3&offset=0')
            .then(response => {
                for (let i = 0; i < response.data.results.length; i++) {
                    axios.get(response.data.results[i].url)
                        .then(result => {
                            setPokemons(previousArray => [...previousArray, result.data])
                        })
                }
            })
    }

    useEffect(loadData, [])

    return (
        <>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Find Your Pokemon</h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <div className=" lg:grid-cols-4 gap-2border-4 border-dashed border-gray-200 rounded-lg h-96">

                            {pokemons.map((pokemon, index) => {
                                //return <p key={index}> {pokemon.name}</p>
                                return <>
                            <div className="flex bg-indigo-50 px-4">
                                <div className="w-60 max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-100 hover:scale-105 hover:shadow-xl">
                                    <img src={pokemon.sprites.front_default} alt="plant" className="h-auto w-full" />
                                    <div className="p-5">
                                        <p className="text-medium mb-5 text-gray-700">{pokemon.name}</p>
                                        <div>
                                        <button className="w-19 rounded-md bg-indigo-600  py-1 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">{pokemon.name}</button>
                                        <button className="w-19 rounded-md bg-indigo-600  py-1 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">{pokemon.name}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </>    
                            })}





                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default PokeList;
