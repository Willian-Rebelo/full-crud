import AddCar from "./components/Create/PopUp/AddCar"
import Inventario from './components/Read/Inventario'

export default function Home() {
  return (
    <main className='min-h-screen text-white'>
        < Inventario />
        {/* < AddCar /> */}
    </main>
    )
  }