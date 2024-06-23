//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://hassanaliarain036:<password>@cluster0.tt9fwbq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923177112183@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://hassanaliarain036:<password>@cluster0.tt9fwbq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923069197719";
global.sudo = process.env.SUDO || "923069197719,923161581842";
global.owner = process.env.OWNER_NUMBER || "923069197719";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID 
 "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFB5dTZucTZCTlRZZU96OVF0NHFKK3MwaUZSNU5sa2VOSkpNcDZmQjBVQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT1U4REpCWTFmZGZqMnFaTXNua2Nlam5wZzdFTlRqQXZKL3F3YmZ5Q29pMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPSjR0bitITnQxSWR5WkZxUDROemdrdkQxMnVXaFFNUTlONEZpN1M1azF3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGZ21qYit2MkQydWlXWkVKbTZ4SnlETWRKT01aS0FiYWtxRFQ1djdNUVRrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldJOVAyVUkyZHk0eStyaElCMVc0UWVDRjgvYkM1RnlTMkIyclQ4SExLVUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJxNUZiOGNIYXBRU0c2R3BxOCtYSmpkZE04a3pRYndvNTU1TDBGTkc2MG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0htRGg0MDV3S0ZwRFBzTFgvRG15RWo4alFDaEQrejdwaWlIV1FHM3dYaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUEQ2bmgvOG9jbUE0VjBTMndYTmoxa3Ntd283anp0cXhRWVdWZlJYQ2J4QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZTZ3UyTHNtSHluVEJ4K3ptV2FLQ0JJTzVTSk9DelU2RzRIQTVZa2NSWVdzVHBqcUxpQzRicHVpNGZiSzBpT2JWeFNGaUxhU2FmU3ZOeENrU3QxTmpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUyLCJhZHZTZWNyZXRLZXkiOiJOa1h5S2k3eEVXL0duSW5Cc1BhellIS2ZUQU8vdjA3NUhBWG9obWg5RTVrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjMzNjQ0NjI4NDY0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkU0QUY5NTQ1MEE4QzA5REZEMDQ2RUIxOUI3NkNFOEYyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTkxMzQ2NTd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjMzNjQ0NjI4NDY0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkIxMjYzQjY3QUFERTI0NTFENTYxOTA1OTAzN0VBRDI0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTkxMzQ2NTd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjMzNjQ0NjI4NDY0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjBEQzU5NEY2MTM1QjcyNTA1MTE5QkUwMUNDMkY5MzhFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTkxMzQ2NTh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjMzNjQ0NjI4NDY0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjlBNzYxMDAyMjYyNkRCQTJBNzk0MERENjYyREFFNkRFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTkxMzQ2NTh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjlwaFI0VlJ0VE0yUk02VTJHNHp1MVEiLCJwaG9uZUlkIjoiMGUzODlhMTQtOGY3Mi00MTIzLWJjNjAtOWJmYjdjOGY2OWI2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZhT3ZCRDRaWTl4T3QyVXliNXJmb0V4S25KQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNVThaK29zdEdMcURjN2N1VldFa1hnYThsVmM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNk1IOEhFUUgiLCJtZSI6eyJpZCI6IjMzNjQ0NjI4NDY0OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSGFzc2FuLkFyYWluIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQK0lnS1VIRUxQVDM3TUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJBckl6Y2lEQnU1UjJUcFN6RWpHQW9kM21QMHdwWUlEajA2ZUcvQ0V4dFZnPSIsImFjY291bnRTaWduYXR1cmUiOiJDbk54Mm9LenVrb1BYREVjUFpIWjBEcnZHeVpoVVBoN1RSdmtVOEpnWkxKMFRkdzlyOVBocjZpNFI2cnlQcGUzZmhReTNMby90YnQ5RDh6b0FsY3dDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZjU0TXNEMDc5L2ZFaTNpZ0Y2d0Q2WkNIVk9kSkx3VnZTbll0OXF4N1BJYTZMR05ZQzRmOVFnQ0htQVhXRTU4K1Q0clZkbk4wR2FENXJYak03dkdFaEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIzMzY0NDYyODQ2NDoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFLeU0zSWd3YnVVZGs2VXN4SXhnS0hkNWo5TUtXQ0E0OU9uaHZ3aE1iVlkifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTkxMzQ2NTUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTjR2In0= module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-HASSAN-𝐌𝐃-𝐕11😍",
  author: process.env.PACK_AUTHER || "H.A",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "HASSAN-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "HASSAN",
  errorChat: process.env.ERROR_CHAT || "923069197719",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
