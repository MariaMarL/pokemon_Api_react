import React from 'react'
import { IPokemon } from '../pages/PokeList'
type Props = {
    pokemon: IPokemon,
    pokeClick: (name: string) => Promise<void>
}

export default function Card({ pokemon, pokeClick }: Props) {
    return (
        <div onClick={() => pokeClick(pokemon.name)} className="hover:scale-[1.1] transition duration-150 ease-in-out border-4 border-dashed border-gray-200 rounded-lg h-full">
            <img src={pokemon.sprites.other['official-artwork'].front_default} alt="plant" className="h-auto w-full" />
            <div className="p-5">
                <p className="flex justify-center text-medium mb-5 text-gray-700 ">{pokemon.name}</p>
                <div className="flex justify-center space-x-4">
                    {pokemon.types.map(pokeType => {
                        // @ts-ignore
                        return <button className="w-20 rounded-md bg-indigo-600  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">{pokeType.type.name}</button>
                    })}
                </div>
            </div>
        </div>

    )
}