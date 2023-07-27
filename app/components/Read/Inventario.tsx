import sql from '../../db.js'

export default async function Inventario () {
  const cars = await sql`SELECT id, brand, model, release_date from cars`;

  return (
      <main className='flex flex-col justify-center items-center'>
          <h1 className='text-2xl p-2'>Lista de Carros</h1>
          <div className='h-auto rounded-lg bg-slate-500'>
            <ul className='h-72 rounded-lg overflow-y-scroll mt-2'>
                {cars.map((c) => (
                  <li key={c.id} className='text-lg text-gray-200 pt-2 px-5'>
                        {c.id} - {c.brand} ({c.model}) : ({c.release_date})
                  </li>
                ))}
                <div className='flex justify-start mt-5 ml-5'>
                  <button className='bg-slate-800 rounded-md p-2'>Adicionar Carro</button>
                </div> 
            </ul>
        </div>
      </main>
  )
}
