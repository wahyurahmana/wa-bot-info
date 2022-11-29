module.exports = (msg) => {
  let msgBody = `Hello ${msg._data.notifyName} Ada Yang Bisa Nelin Bantu ?\n`
  msgBody += 'Berikut Daftar Layanan Yang Kami Sediakan, Bisa Ditulis Sesuai Perintah Ya\n'
  msgBody += '*#help* - Melihat Bantuan\n'
  msgBody += '*#gempa* - Informasi Gempa Realtime\n'
  msgBody += '*#cuaca _<nama_provinsi>_* - Informasi Cuaca (Suhu, Arah Angin, Kelembaban, Keadaan Cuaca, Kecepatan Angin)\n'
  msgBody += '*#emas* - Informasi Harga Emas, Sumber : logammulia\n'
  msg.reply(msgBody);
}