import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/PageTitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
  const { data, error } = useSWR('/api/get-promo', fetcher)

  return (
    <div>
      <PageTitle title='Home' />
      <p className='my-8 text-center font-medium'>O restaurante X sempre busca por atender melhor seus clientes.<br />
      Por isso, estamos sempre abertos a ouvir a sua opinião.
      </p>
      <div className=' text-center my-12'>
        <Link href='/pesquisa'>
          <button className=' hover:bg-blue-600 bg-blue-400 px-16 p-4 rounded-md font-medium shadow-md '>Dar opinião ou sugestão.</button>
        </Link>
      </div>
      {!data && <p>Carregando...</p>}
      {!error && data && data.showCupom &&
        <p className='my-8 text-center font-medium'>{data.message}</p>
      }
    </div>
  )
}

export default Index