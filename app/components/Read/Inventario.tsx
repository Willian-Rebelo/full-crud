import sql from '../../db.js'

export default async function Inventario () {
  const cars = await sql`SELECT id, brand, model, release_date from cars`;
  
  // function Modal (){
  //   .document.getElementById("modal").classList.remove('none')
  // }

  return (
    <div className='flex justify-center items-center'>
      <ul className='h-72 bg-blue-950 p-5 rounded-lg font'>
          {cars.map((c) => (
              <li key={c.id} className='text-lg'>
                  {c.id} - {c.brand} ({c.model}) : ({c.release_date})
            </li>
          ))}
      <button className='relative left-52 top-24 bg-slate-500 rounded-md p-2'>
        Adicionar Carro
      </button>
      </ul>
    </div>
  )
}
