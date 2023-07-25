import Inventario from './components/Inventario'
import AddCarro from './components/PopUp/AddCarro'

export default function Home() {
  return (
    <div className='h-screen bg-black text-white flex flex-col justify-start items-center'>
      <div className='relative top-10'>
        <h1 className='text-center font-bold text-xl'>Inventario de Carros</h1><br />
        <Inventario />
      </div>
    </div>
  )
}
