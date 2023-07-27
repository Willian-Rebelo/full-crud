import Inventario from './components/Read/Inventario'
import AddCar from './components/Create/PopUp/AddCar'
// import EditCar from './components/Update/editCar'

export default function Home() {
  return (
    <div className='h-screen bg-black text-white flex flex-col justify-start items-center'>
      <div className='relative top-10'>
        <h1 className='text-center font-bold text-xl'>Inventario de Carros</h1><br />
        <Inventario />
        <AddCar />
        {/* <EditCar /> */}
      </div>
    </div>
  )
}
