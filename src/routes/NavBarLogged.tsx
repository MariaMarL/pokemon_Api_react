import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom';
import PokeFavs from '../pages/PokeFavs';
import PokeList from '../pages/PokeList';
import { logOutInReducer } from '../state/LoggedInSlice';
import { stateTypeRedux } from '../state/Store';

interface INavBarLoggedProps {
}

const NavBarLogged: React.FunctionComponent<INavBarLoggedProps> = (props) => {

    const dispatch = useDispatch();

    const logOutButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault
        dispatch(logOutInReducer())
    }

    return (
        <div className="min-h-full">
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img className="h-8 w-8" src="https://www.pngplay.com/wp-content/uploads/2/Pokeball-PNG-Pic-Background.png" alt="Workflow" />
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Link to="/list" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">PokeList</Link>
                                    <Link to="/favorites" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Favorites</Link>

                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6">

                                <div className="ml-3 relative space-x-4">
                                    <div className="ml-10 flex items-baseline space-x-4">
                                        <div className="flex-shrink-0">
                                            <img className="h-10 w-10 rounded-full" src="https://avatars.githubusercontent.com/u/63623324?s=400&u=e3196f8b2eb87f74b55fd1d24b6a44151240616e&v=4" alt="" />
                                        </div>
                                        <h1 className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Maria del Mar Lamilla</h1>
                                        <button onClick={(e) => logOutButton(e)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">SignOut</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/list" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">PokeList</Link>
                        <Link to="/favorites" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Favorites</Link>

                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-700">
                        <div className="flex items-center px-5">
                            <div className="flex-shrink-0">
                                <img className="h-10 w-10 rounded-full" src="https://avatars.githubusercontent.com/u/63623324?s=400&u=e3196f8b2eb87f74b55fd1d24b6a44151240616e&v=4" alt="" />
                            </div>
                            <div className="ml-3">
                                <div className="text-base font-medium leading-none text-white">Maria del Mar Lamilla</div>
                                <div className="text-sm font-medium leading-nstroke-widthone text-gray-400">maria.lamilla@sofka.com.co</div>
                            </div>

                        </div>
                        <div className="mt-3 px-2 space-y-1">
                            <button onClick={(e) => logOutButton(e)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">SignOut</button>
                        </div>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<PokeList />} />
                <Route path="/list" element={<PokeList />} />
                <Route path="/favorites" element={<PokeFavs />} />

            </Routes>

        </div>

    );
};

export default NavBarLogged;
