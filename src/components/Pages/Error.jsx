import React from 'react'

function Error() {
  return (
    <div className='h-screen w-screen bg-emerald-700  min-w-full flex justify-center items-center text-center select-none'>
        <div className='grid justify-center'>
            <h1 className='text-8xl font-mono'>404 Error</h1>
            <p className='text-5xl'>Page Not Found</p>
        </div>
    </div>
  )
}

export default Error