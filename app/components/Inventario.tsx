import sql from '../db.js'

export default async function Inventario () {
  const cars = await sql`select id, brand, model from cars`;
    
  return (
    <ul>
        {cars.map((c) => (
            <li key={c.id} className='text-lg'>
                {c.id} - {c.brand} ({c.model})
          </li>
        ))}
        <button className='"bg-slate-800 rounded-md p-1'>Adicionar Carro</button>
    </ul>
  )
}
