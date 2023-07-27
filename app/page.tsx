import Inventario from './components/Read/Inventario'
import AddCar from './components/Create/PopUp/AddCar'
// import EditCar from './components/Update/editCar'

export default function Home() {
  return (
    <main className='min-h-screen flex justify-center items-center bg-black text-white'>
      <div className='flex gap-20 '>
        < Inventario />
        < AddCar />
      </div>
      
    </main>
    )
  }