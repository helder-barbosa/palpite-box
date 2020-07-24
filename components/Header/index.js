import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
      <div className='bg-gray-300 p-4 shadow-md'>
        <div className='container mx-auto'>
          <Link href='/'>
            <a><img className=' mx-auto' src='/logo.png'></img></a>
          </Link>
        </div>
      </div>
      <div className='bg-gray-400 p-4 shadow-md text-center font-semibold'>

        <Link href='/sobre'>
          <a className='px-3 hover:underline'>Sobre</a>
        </Link>
        <Link href='/contato'>
          <a className='px-3 hover:underline'>Contato</a>
        </Link>
        <Link href='/pesquisa'>
          <a className='px-3 hover:underline'>Pesquisa</a>
        </Link>
      </div>
    </div>
  )
}

export default Header