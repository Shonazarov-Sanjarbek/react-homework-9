import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotDFound = () => {
    const navigate = useNavigate()

  return (
    <div className='w-full h-[40vh] flex flex-col gap-5 justify-center items-center'>
        <h2 className='mt-40 text-9xl text-orange-400'>404</h2>
        <p className=' text-3xl'>Not Found</p>
        <button onClick={() => navigate("/")} className='border px-5 py-2 rounded-lg font-bold bg-orange-400'>Go Home</button>
    </div>
  )
}

export default NotDFound
