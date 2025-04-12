import React from 'react'

function Login({loginDialog, setLoginDialog}) {
  return (
    <div className='z-[99] bg-purple-900 rounded-md text-gray-100 max-w-[480px] w-full px-10 py-16 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <div className='flex flex-col text-center'>
        <h3 className='mb-5 font-semibold text-3xl'>Please Login Here</h3>
        <form className='flex flex-col space-y-5' onSubmit={(e) => {
          e.preventDefault();
        }}>
          <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder='example@gmail.com'
            className='border-none outline-none rounded-md px-5 py-3 text-gray-900'
          />
          <input 
            type="text" 
            name='name' 
            id='name' 
            placeholder='Enter your name'
            className='border-none outline-none rounded-md px-5 py-3 text-gray-900'
          />
          <button className='bg-orange-500 hover:bg-orange-700 transition-all py-3 rounded-md font-semibold text-lg'>Login</button>
        </form>
        <button
          onClick={() => setLoginDialog(false)}
          className='bg-purple-400 mt-5 rounded-md py-3 hover:bg-purple-500 transition-all font-semibold text-lg'
        >Close</button>
      </div>
    </div>
  )
}

export default Login