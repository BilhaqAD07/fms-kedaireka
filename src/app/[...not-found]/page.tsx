import React from 'react'

function NotFound() {
  return (
    <>
      <div className='bg-primary_blue relative text-white dark:bg-darkmode_grey min-h-screen flex justify-center items-center'>
          <div className='text-center my-aut font-bold text-8xl'>
              <p>404</p> 
              <p className='text-3xl'>NOT FOUND</p>
          </div>



        <footer className='absolute bottom-10'>Copyright &copy;2023 FMS-KEDAIREKA </footer>
      </div>
    </>
  )
}

export default NotFound