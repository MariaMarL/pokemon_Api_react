import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logInInReducer } from '../state/LoggedInSlice';

interface INavBarOutProps {
}

const NavBarOut: React.FunctionComponent<INavBarOutProps> = (props) => {

    const dispatch = useDispatch();

    const logInButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault
        dispatch(logInInReducer())
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
                                    <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</a>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6">

                                <div className="ml-3 relative space-x-4">
                                    <div className="ml-10 flex items-baseline space-x-4">

                                        <button className="text-gray-300 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={(e) => logInButton(e)}>LogIn</button>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Home</a>


                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-700">

                        <div className="mt-3 px-2 space-y-1">
                            <button className="text-gray-300 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={(e) => logInButton(e)}>LogIn</button>
                        </div>
                    </div>
                </div>
            </nav>

            <main>
                <div className= " bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-5 shadow-md" role="alert">
                    <div className="flex">
                        <div className="py-1 px-4 py-3 " ><svg className=" h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
                        <div>
                            <p className="font-bold">Our privacy policy has changed</p>
                            <p className="text-sm">Please logIn to access the informarmation.</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>

    );
};

export default NavBarOut;
