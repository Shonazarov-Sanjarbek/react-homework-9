import React from 'react'

const Login = () => {
  return (
    <form className='w-full flex justify-center py-10'>
        <div className='w-[300px] border flex flex-col rounded-2xl justify-start items-center gap-5'>
            <h2 className=''>Login</h2>
            <input type="text" className='w-full bg-gray-100 rounded-md' />
            <input type="text" className='w-full bg-gray-100 rounded-md' />
        </div>
    </form>
  )
}

export default Login
