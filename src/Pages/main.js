import React from 'react';
import Header from '../Components/Header'
import Menu from '../Components/menu'
import '../CSS/main.css'
import { Helmet } from 'react-helmet-async'

const Main = () => {
  return (
    <div className='main'>
      <Helmet>
        <title>القرآن الكريم</title>
      </Helmet>
      <Header />
      <Menu />
    </div>
  );
}

export default Main;
