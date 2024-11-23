import React from 'react'

function Error503() {
  return (
    <div className='h-screen w-screen bg-emerald-700  min-w-full flex justify-center items-center text-center select-none'>
        <div className='grid justify-center'>
            <h1 className='text-8xl font-mono'>503 Error</h1>
            <p className='text-5xl'>Page Under Construction</p>
        </div>
    </div>
  )
}

export default Error503