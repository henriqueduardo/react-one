import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
        <main className='notfound-bg'>
            <div className='container h-full text-white flex flex-col justify-center'>
                <h1 className='text-9xl mb-3'>404</h1>
                <p className='text-2xl'>Página não encontrada</p>
                <span className='text-2xl'>Essa página não existe</span>
                <Link to="/">
                <button className='inline-block text-white w-60 my-5 bg-primary hover:bg-orange-600 py-2 px-4 rounded'>Voltar ao início</button>
                </Link>
            </div>
        </main>
    </>
  )
}

export default NotFound;