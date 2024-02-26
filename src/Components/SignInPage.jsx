import { useFormik } from "formik";
import { useState } from 'react';

const SignInPage = () => {
  const [signInSuccess, setSignInSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      setTimeout(() => {
        setSignInSuccess('');
      }, 2500);
      setSignInSuccess(true);
      formik.resetForm();
    },
  });

  return (
    <div className='h-[98vh] sm:min-h-screen -mt-16 sm:-mt-20 flex flex-col justify-center items-center'>
      <h1 className='text-2xl sm:text-3xl font-bold mb-8 text-center'>Sign in to your account</h1>

      {signInSuccess && <div className="text-green-700 text-2xl font-bold p-2 rounded mb-4">Sign In Successful!</div>}

      <form onSubmit={formik.handleSubmit} action="" method="post" className="max-w-md w-full px-4">
        <input onChange={formik.handleChange} className="w-full px-4 py-3 focus:bg-gray-100 outline-none" type="email" name="email" placeholder="Email address" required value={formik.values.email} />
        <input onChange={formik.handleChange} className="w-full px-4 py-3 focus:bg-gray-100 outline-none" type="password" name="password" placeholder="Password" required value={formik.values.password} />
        <button className="w-full mt-4 h-12 bg-orange-400 text-white rounded hover:bg-orange-500 transition duration-300" type="submit">
          <span className="text-base font-medium">Sign in</span>
        </button>
      </form>

      <div className='text-center mt-8 -mb-40 sm:-mb-24'>
        <span className='text-lg font-medium'>Don’t have an account?</span>
        <span className='text-orange-400 font-bold text-lg'> Create one now</span>
      </div>
    </div>
  )
}

export default SignInPage;