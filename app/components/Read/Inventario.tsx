
// import { useState } from 'react';
import sql from '../../db.js'
// import PopUp from '../Create/PopUp/PopUp.jsx';

export default async function Inventario () {
  const cars = await sql`SELECT id, brand, model, release_date from cars`;

  // const [modalIsOpen, setmodalIsPen] = useState(false);
  // function handleOpenModal () {
  //   setmodalIsPen(!modalIsOpen)
  // }

  return (
    <main className='h-screen bg-slate-950 flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center'>
          <h1 className='text-2xl p-2'>Lista de Carros</h1>
          <div className='h-auto rounded-lg bg-slate-500'>
            <ul className='h-72 rounded-lg overflow-y-scroll mt-2'>
                {cars.map((c) => (
                  <li key={c.id} className='text-lg text-gray-200 pt-2 px-5'>
                        {c.id} - {c.brand} ({c.model}) : ({c.release_date})
                  </li>
                ))}
                <div className='flex justify-start mt-5 ml-5'>
                  {/* <button onClick={handleOpenModal} className='bg-slate-800 rounded-md p-2 hover:bg-gray-900'>Adicionar Carro</button>
                  <PopUp isOpen={modalIsOpen} onClose={handleOpenModal}/> */}
                </div>
            </ul>
        </div>
      </div>
    </main>
  )
}
