import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-full flex justify-between py-4 items-center lg:gap-1'>
        <h1 className='font-bold text-blue-800 text-0.5xl lg:text-3xl'>
          <Link to={'/'}>ShoppingCart</Link>
        </h1>

        <div className='flex gap-1 items-center'>
          <Link className=' text-white-900 px-3 py-1 rounded-md text-blue-500 border border-blue-500 hover:underline' to={'/login'}>Log In</Link>
          <span className='text-sm text-slate-300'>or</span>
          <Link className=' bg-blue-500 text-white px-3 py-1 rounded-md hover:underline' to={'/signup'}>Sign Up</Link>
        </div>

    </div>
  )
}

export default Header;