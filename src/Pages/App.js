import React from 'react';
import { Helmet } from 'react-helmet-async';
import {  } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons';
import {  } from "react-router-dom";
import Down from '../Components/downIcon'


const App = () => {
  return (
    <div className='app'>
      <Helmet>
        <title>404</title>
      </Helmet>      

      <h1>App Page</h1>

      <Down />
    </div>
  );
}

export default App;