const axios = require('axios')

module.exports = async () => {
  try {
    const {data} = await axios({
      url : `${process.env.SERVER_TOOLS}/emas`,
      method : 'GET'
    })
    
    let msgBody = ''
    data.data.forEach(el => {
      msgBody += `Berat : ${el.berat}\n`
      msgBody += `Harga Dasar : ${el.hargaDasar}\n`
      msgBody += `Harga NPWP : ${el.hargaNPWP}\n`
      msgBody += `Harga Non NPWP : ${el.hargaNonNPWP}\n`
      msgBody += "==========\n"
    });
    msgBody += `${data.message}`
    return msgBody
  } catch (error) {
    let err = 'Sebentar yaa Nelin Lagi Pusing'
    console.log(err)
  }
}