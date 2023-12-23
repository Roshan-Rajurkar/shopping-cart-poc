import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div className='w-full p-4 h-screen m-auto lg:w-3/4 lg:p-0'>
    <Header/>
    <main className='mt-11 flex justify-center'>
        <Outlet/>
    </main>
    </div>
  )
}

export default AppLayout;