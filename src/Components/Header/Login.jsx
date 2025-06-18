import React from 'react'

function Login({ loginDialog, setLoginDialog }) {
  return (
    <div className='z-[99] bg-white rounded-lg shadow-2xl text-gray-800 max-w-[400px] w-full px-8 py-12 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <div className='flex flex-col items-center'>
        <h3 className='mb-6 font-bold text-2xl text-gray-700'>Login to Your Account</h3>
        <form
          className='flex flex-col space-y-4 w-full'
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="email"
            name="email"
            id="email"
            placeholder='Email address'
            className='border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-md px-4 py-2 outline-none'
          />
          <input
            type="text"
            name="name"
            id="name"
            placeholder='Your name'
            className='border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-md px-4 py-2 outline-none'
          />
          <button
            type="submit"
            className='bg-blue-500 hover:bg-blue-600 transition-all text-white py-2 rounded-md font-medium'
          >
            Login
          </button>
        </form>
        <button
          onClick={() => setLoginDialog(false)}
          className='mt-4 text-sm text-blue-500 hover:underline'
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default Login
