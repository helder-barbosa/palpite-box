import React, { useState } from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Pesquisa = () => {
  const [form, setForm] = useState({
    Nome: '',
    Email: '',
    Telefone: '',
    Opiniao: '',
    Nota: 0,
    Indicaria: ''
  })

  const notas = [0, 1, 2, 3, 4, 5]
  const [sucess, setSucess] = useState(false)
  const [retorno, setRetorno] = useState({})

  const save = async () => {
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      })
      const data = await response.json()
      setSucess(true)
      setRetorno(data)
    } catch (err) {
    }
  }
  const onChange = evt => {
    const value = evt.target.value
    const key = evt.target.name
    setForm(old => ({
      ...old,
      [key]: value
    }))
  }
  return (

    <div className='my-6'>
      <PageTitle title='Pesquisa' />
      <h1 className='text-center font-bold'>Críticas e Opniões</h1>
      <p className='text-center font-normal'>O restaurante X sempre busca por atender melhor seus clientes. <br />
      Por isso, estamos sempre abertos a ouvir a sua opinião.
      </p>
      {!sucess && <div className='my-6'>
        <div className='text-center'>
          <label className='font-medium'>Nome:</label><br />
          <input type='text' className=' bg-blue-100 px-6 p-4 rounded-md font-medium shadow-md mb-3' onChange={onChange} name='Nome' value={form.Nome}></input>
        </div>
        <div className='text-center'>
          <label className='font-medium'>Email:</label><br />
          <input type='text' className=' bg-blue-100 px-6 p-4 rounded-md font-medium shadow-md mb-3' onChange={onChange} name='Email' value={form.Email}></input>
        </div>
        <div className='text-center'>
          <label className='font-medium'>Telefone:</label><br />
          <input type='text' className=' bg-blue-100 px-6 p-4 rounded-md font-medium shadow-md mb-3' onChange={onChange} name='Telefone' value={form.Telefone}></input>
        </div>
        <div className='text-center'>
          <label className='font-medium'>Sua opinião ou sugestão:</label><br />
          <input type='text' className=' bg-blue-100 px-6 p-4 rounded-md font-medium shadow-md mb-3' onChange={onChange} name='Opiniao' value={form.Opiniao}></input>
        </div>
        <div className=' text-center'>
          <label className='font-medium'>Nota para o estabelecimento:</label><br />
          {notas.map(nota => {
            return (
              <label className=' inline-block m-4'>{nota}<br />
                <input type='radio' name='Nota' value={nota} onChange={onChange} /></label>)
          })}
        </div>
        <div className='text-center'>
          <label className='font-medium'>Indicaria para um amigo?</label><br />
          <label className=' inline-block m-3'>Sim<br />
            <input type='radio' onChange={onChange} name='Indicaria' value='Sim' />
          </label>
          <label className=' inline-block m-3'>Não<br />
            <input type='radio' onChange={onChange} name='Indicaria' value='Nao' />
          </label>

        </div>
        <div className=' text-center my-12'>
          <Link href='/pesquisa'>
            <button onClick={save} className=' hover:bg-blue-600 bg-blue-400 px-10 p-4 rounded-md font-medium shadow-md '>Enviar opinião ou sugestão.</button>
          </Link>
        </div>
      </div>
      }
      {sucess && <div className='my-6'>
        <p className=" m-4 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3">Obrigado por constribuir com a sua sugestão ou crítica.</p>
        {
          retorno.showCupom && <div className=' m-4 p-4 border text-center' >
            Seu Cupom: <br />
            <span className=' text-2xl font-bold'>{retorno.Cupom}</span>
          </div>
        }
        {
          retorno.showCupom && <div className=' m-4 p-4 border text-center' >
            Promoção: <br />
            <span className=' text-xl font-bold block'>{retorno.Promo}</span><br />
            <span className=' p-4 italic'>Tire um print ou foto desta tela e apresente no caixa.</span>
          </div>
        }
      </div>}
    </div>
  )
}

export default Pesquisa