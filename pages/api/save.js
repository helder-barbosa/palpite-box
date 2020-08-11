
import { GoogleSpreadsheet } from 'google-spreadsheet'
import moment from 'moment'
import { fromBase64 } from '../../utils/base64'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

const genCupom = () => {
  const code = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase()
  return code.substr(0, 4) + '-' + code.substr(4, 4) + '-' + code.substr(8, 4)
}

export default async (req, res) => {

  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)

    })
    await doc.loadInfo()
    console.log(doc.title)

    const data = JSON.parse(req.body)

    const sheet = doc.sheetsByIndex[2]

    const sheetConfig = doc.sheetsByIndex[1]
    await sheetConfig.loadCells('A2:B2')

    const MostrarPromoCell = sheetConfig.getCell(1, 0)
    const TextoPromoCell = sheetConfig.getCell(1, 1)

    let Cupom = ''
    let Promo = ''

    if (MostrarPromoCell.value === 'Verdadeiro') {
      // gerar cupom
      Cupom = genCupom()
      Promo = TextoPromoCell.value
    }

    await sheet.addRow({
      Nome: data.Nome,
      Email: data.Email,
      Telefone: data.Telefone,
      Cupom,
      Promo,
      'Data': moment().format('DD-MM-YY, HH:mm:ss'),
      Nota: parseInt(data.Nota),
      Opiniao: data.Opiniao,
      Indicaria: data.Indicaria
    })
    res.end(JSON.stringify({
      showCupom: Cupom !== '',
      Cupom,
      Promo
    }))
  }
  catch (err) {
    console.log(err)
    res.end('error')
  }
} 