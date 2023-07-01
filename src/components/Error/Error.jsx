import React from 'react';
import E from '../../assets/img/fuck_you.gif'

const Error = () => {
  return (
    <>
      <div className="flex h-[calc(100vh-80px)] items-center justify-center p-5 bg-white w-full">
        <div className="text-center items-center -webkit-center">
          <img className="justify-center items-center" src={E} alt="" />
          <h1 className="mt-5 text-[36px] font-bold text-slate-800 lg:text-[50px]">
            ¡Wubba lubba dub dub!
          </h1>
          <p className="text-slate-600 mt-5 lg:text-lg">
            "Eat shit, fuck you."
          </p>
        </div>
      </div>
    </>
  );
};

export default Error;