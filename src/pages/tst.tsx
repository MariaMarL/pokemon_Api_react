import * as React from 'react';

interface ItstProps {
}

const tst: React.FunctionComponent<ItstProps> = (props) => {
  return (
    <>
<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
            <div className="mb-8">
            </div>
            <div className="text-center">
                <p className="text-xl text-gray-700 font-bold mb-2">Dany Bailey</p>
                <p className="text-base text-gray-400 font-normal">Software Engineer</p>
            </div>
        </div>
    </div>
</section>
    </>
  );
};

export default tst;
