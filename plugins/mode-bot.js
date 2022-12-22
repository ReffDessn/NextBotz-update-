import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
  const ultah = new Date('Februari 2 2023 00:0:01')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `*Hai Ngab*
ɪᴍ ʀʏᴀɴ-ʙᴏᴛᴢ ʏᴀɴɢ ᴅɪʙᴜᴀᴛ ɢᴀᴋ ɴɪᴀᴛ ᴏʟᴇʜ ʀʏᴀɴ-ꜱᴛᴏʀᴇ ᴋᴀʀᴇɴᴀ ᴍᴀʟᴇꜱ ʀᴇᴄᴏᴅᴇ ᴅᴀɴ ꜱɪʙᴜᴋ ɴɢᴇᴊʙ ᴊᴀᴅɪ ᴘᴀᴋᴇ ꜰɪᴛᴜʀ ʏᴀɴɢ ᴡᴏʀᴋ ᴀᴊᴀ ʏᴀ,ɴᴀɴᴛɪ ᴋᴀʟᴀᴜ ᴜᴅʜ ɢᴋ ᴛᴇʀʟᴀʟᴜ ꜱɪʙᴜᴋ ᴏᴡɴᴇʀ ʙᴀᴋᴀʟᴀɴ ꜰɪx ᴇʀʀᴏʀ ᴅᴀɴ ᴀᴅᴅ ꜰɪᴛᴜʀ,ᴊᴀᴅɪ ᴘᴀᴋᴇ ꜰɪᴛᴜʀ ʏᴀɴɢ ᴀᴅᴀ ᴅᴜʟᴜ.
ᴋᴀʟᴀᴜ ᴀᴅᴀ ʏᴀɴɢ ᴇʀʀᴏʀ ʙɪꜱᴀ ʟᴀᴘᴏʀ ᴏᴡɴᴇʀ (ʀʏᴀɴ ꜱᴛᴏʀᴇ) ᴀɢᴀʀ ᴅɪ ɴᴏᴛᴇᴅ !!

ᴊᴀɴɢᴀɴ ꜱᴘᴀᴍ ʙᴏᴛ ʏᴀ\ɴʙᴇʀɪ ᴊᴇᴅᴀ 3 ᴅᴇᴛɪᴋ ᴀɢᴀʀ ᴛɪᴅᴀᴋ ᴅᴇʟᴀʏ\ɴᴊᴀɴɢᴀɴ ᴛᴇʟᴘᴏɴ/ᴠᴄ ᴋᴀʀɴᴀ ᴀᴋᴀɴ ᴍᴇɴɢɢᴀɴɢɢᴜ ꜱɪꜱᴛᴇᴍ ʙᴏᴛ\ɴᴛᴇʀɪᴍᴀ ᴋᴀꜱɪʜ\n`,wm + '\n\n' + botdate, thumbdoc, [['ᴀʟʟ ᴍᴇɴᴜ','.? all'],['ʟɪꜱᴛ ᴍᴇɴᴜ','.siuuu']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: `RYAN-STORE 🎧 : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`,
                        body: `Join Grup`,          previewType: 0,
                        thumbnail: await (await fetch(`https://telegra.ph/file/330ecb8e0d7867dbea7fe.jpg`)).buffer(),
                        sourceUrl: 'https://chat.whatsapp.com/I47cTfEwzIC391KPBjbTPq'
                      }}
})
}


handler.help = ['menu']
handler.tags = ['group']
handler.command = /^(menu|help|co)$/i
handler.register = false

export default handler
