const axios = require('axios')

module.exports = async () => {
  try {
    const {data} = await axios({
      url : `${process.env.SERVER_TOOLS}/gempa`,
      method : 'GET'
    })
    
    let msgBody = ''
    data.data.forEach(el => {
      msgBody += `Waktu : ${el.waktu}\n`
      msgBody += `Lintang : ${el.lintang}\n`
      msgBody += `Bujur : ${el.bujur}\n`
      msgBody += `Dalam : ${el.dalam}KM\n`
      msgBody += `Mag : ${el.mag}SR\n`
      msgBody += `Area : ${el.area}\n`
      msgBody += "==========\n"
    });
    return msgBody
  } catch (error) {
    let err = 'Sebentar yaa Nelin Lagi Pusing.'
    console.log(err)
  }
}