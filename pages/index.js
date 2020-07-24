import React from 'react'
import Link from 'next/link'

const Index = () => {
  return (

    <div>
      <p className='my-8 text-center font-medium'>O restaurante X sempre busca por atender melhor seus clientes.<br />
      Por isso, estamos sempre abertos a ouvir a sua opinião.
      </p>
      <div className=' text-center my-12'>
        <Link href='/pesquisa'>
          <a className=' bg-blue-400 px-16 p-4 rounded-md font-medium shadow-md '>Dar opinião ou sugestão.</a>
        </Link>
      </div>
      <p className='my-8 text-center font-medium'>Mensagem Desconto. 10% de Desconto.
      </p>

    </div>
  )
}

export default Index