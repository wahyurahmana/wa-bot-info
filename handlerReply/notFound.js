module.exports = (msg) => {
  let msgBody = `Hello ${msg._data.notifyName} Silahakan Ketika *#help* Untuk Melihat Bantuannya Ya`
  msg.reply(msgBody);
}