import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='flex flex-col pt-20 sm:p-[0.4rem] items-center justify-center h-screen mt-[-5rem] sm:-mt-20'>
      <h1 className='text-3xl text-center mb-8 font-bold'>Sorry, the page you were looking for is not not found.</h1>
      <Link to='/'>
        <button className="w-72 sm:w-[46rem] lg:w-[48rem] h-[3.4375rem] mt-4 px-4 py-2 bg-black text-white rounded">
          <span className='font-bold'>Return to home</span>
        </button>
      </Link>
    </div>
  )
}

export default ErrorPage