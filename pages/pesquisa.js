import React from 'react'
import Link from 'next/link'

const Pesquisa = () => {
  return (
    <div className='my-6'>
      <h1 className='text-center font-bold'>Críticas e Opniões</h1>
      <p className='text-center font-normal'>O restaurante X sempre busca por atender melhor seus clientes. <br />
      Por isso, estamos sempre abertos a ouvir a sua opinião.
      </p>
      <div className=' my-6 w-1/5 mx-auto'>
        <label className='font-medium'>Seu nome:</label>
        <input type='text' className=' bg-blue-100 px-6 p-4 rounded-md font-medium shadow-md mb-3'></input>
        <label className='font-medium'>Seu e-mail:</label>
        <input type='text' className=' bg-blue-100 px-6 p-4 rounded-md font-medium shadow-md mb-3'></input>
        <label className='font-medium'>Seu telefone:</label>
        <input type='text' className=' bg-blue-100 px-6 p-4 rounded-md font-medium shadow-md mb-3'></input>
        <label className='font-medium'>Sua opinião ou sugestão:</label>
        <input type='text' className=' bg-blue-100 px-6 p-4 rounded-md font-medium shadow-md mb-3'></input>
        <label className='font-medium'>Que nota daria para o estabelecimento?</label>
        <input type='text' className=' bg-blue-100 px-6 p-4 rounded-md font-medium shadow-md mb-3'></input>
        <label className='font-medium'>Indicaria para um amigo?</label>
        <input type='text' className=' bg-blue-100 px-6 p-4 rounded-md font-medium shadow-md mb-3'></input>
      </div>
      <div className=' text-center my-12'>
        <Link href='/pesquisa'>
          <a className=' bg-blue-400 px-10 p-4 rounded-md font-medium shadow-md '>Enviar opinião ou sugestão.</a>
        </Link>
      </div>
    </div>
  )
}

export default Pesquisa