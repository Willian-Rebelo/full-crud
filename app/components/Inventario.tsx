import sql from '../db.js'

export default async function Inventario () {
  const cars = await sql`SELECT id, brand, model from cars`;
    
  return (
    <div className='flex justify-center items-center'>
      <ul className='h-72 bg-blue-950 p-5 rounded-lg font'>
          {cars.map((c) => (
              <li key={c.id} className='text-lg'>
                  {c.id} - {c.brand} ({c.model})
            </li>
          ))}
          <button className=' relative left-36 top-24 bg-slate-500 rounded-md p-2'>Adicionar Carro</button>
      </ul>
    </div>
  )
}
