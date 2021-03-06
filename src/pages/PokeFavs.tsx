import * as React from 'react';

interface IPokeFavsProps {
}

const PokeFavs: React.FunctionComponent<IPokeFavsProps> = (props) => {
  return (
    <>
                <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-blue-900">Here your favs pokemons</h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                            <h1 className="mt-4 ml-5 text-2xl text-gray-900">You do not have favorites pokemon yet</h1>
                        </div>
                    </div>
                </div>
            </main>
    </>
  );
};

export default PokeFavs;
