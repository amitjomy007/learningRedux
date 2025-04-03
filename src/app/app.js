

"use client";

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementVava, decrementVava, loginAakkeda, logoutAakkeda } from './actions';

const AppComp = () => {
  const dispatch = useDispatch();

  const counterVava = useSelector((state) => state.counterVava.count);
  const isLoggedAanonnuNokkeda = useSelector((state) => state.loggedAanonnuNokkeda.isLogged);

  return (
    <div>
      <h1>Counter value   : {counterVava}</h1>
      <button 
        onClick={() => dispatch(incrementVava())}
        className={`block bg-[#b71c1c] p-2 m-2 mx-5`}
        >Increment Vava</button>
      <button 
        onClick={() => dispatch(decrementVava())}
        className={`block bg-[#b71c1c] p-2 m-2 mx-5`}
      >Decrement Vava</button>

      <h1>Login Status:  {isLoggedAanonnuNokkeda ? 'Logged In' : 'Logged Out'}</h1>
      <button 
        onClick={() => dispatch(loginAakkeda())}
        className={`block bg-[#b71c1c] p-2 m-2 mx-5`}
      >Sign In </button>
      <button 
        onClick={() => dispatch(logoutAakkeda())}
        className={`block bg-[#b71c1c] p-2 m-2 mx-5`}  
      >Logout </button>
    </div>
  );
};

export default AppComp;
