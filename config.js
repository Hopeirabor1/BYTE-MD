
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "923072380380";
global.owner = process.env.OWNER_NUMBER || "923072380380";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkxibHg5eENTNUxYL09UeUVHa2IzMXlwRjVlUFZrRi85MVJERDJHQXkxTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUWowcnlQZGkrZ21lbWgzT2YwZUR3WXlWUXZuYS9zR3RlME94TXdVcVV3UT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJQmNvem85bHBhMnR1UmRKWW0xajd2SEphUmpvK1NEa2lBdDVUK0Ezd0hnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJablIweVpiWVBMdmt6ZGxSZkFYL3VxM1F2QzYzNmt1STh4a3NDMkMyY3lVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1JMWJuVGRCWlVwend2N3QvbytON0FHd2pieERaanh1ekRVZkdtczhxVWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxRZWZOWnorREdhZzdsdlNiWTA1UmRjM2NHSGJ1MmMvTDJleWovRHo3bFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0NPaklxNVc1MjRSdFFtbHZ0RG1kNmYzZDVRajd4MVB6Y3ZmRVpxYVBFND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibS9UNHI1ZENMQ0lTcmR3QzcxbHhub05XVS9FU3F0QmdNQk9xVXQ0SUpBdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkwvTFhrdWwvd0YvL2dLbzRPT2ZLRUtMUERjNUlUOW10WVZlUmYreWFCZEo0OWdUcTNaNW5TemtxLzVVZ2wwWThiYWQrRld1eEh5TUwzWXF6NklYQmh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAwLCJhZHZTZWNyZXRLZXkiOiJyckVsU2NhNGJTeE1COFkvejhnSGt6RWUxa05MVHFKaWNuZ1lRK0lCU3BNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgxNTg5NTQ1NDVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0E1Nzg0MTlDOTBBNDY2QTI1NTAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjc3OTQ0MX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODE1ODk1NDU0NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzQUY4MEU3MDVDNzJGREUxNUZBQyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyNzc5NDQyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ4MTU4OTU0NTQ1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBRjBCNDlDMjE3MUFFNUM4OUZCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI3Nzk0NDN9XSwibmV4dFByZUtleUlkIjo2MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjYxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IklRMnJyeDBLUWE2c0J3cDZVTkxWX3ciLCJwaG9uZUlkIjoiMTM2ZDk1YjEtNTI5Ny00ZTg5LWEwNmMtMGVjMWE3NmE0MjNiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlN1dmw1MnNGMlB0NTluRXNDYTAvWElUc05uOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuMjlsRXBTMEJLN2FjQ0NhemE2T2lzNHZBMGc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNTFEVEJESFciLCJtZSI6eyJpZCI6IjIzNDgxNTg5NTQ1NDU6MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJQcm9taXNlIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJRGsxNzhPRUtPT3ZyVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJiTG04QTA0Q1JYeDFabXFYSzlnV291YnJZQjVxQXM0ZjVyckxBL3dsM1RnPSIsImFjY291bnRTaWduYXR1cmUiOiJQbWEvZ09EL0VnNmhReURtcmxTdWVFZ2ZPemI1NE9UQjk3MUdJM0hsZ2RzclhMMkdGMklodEpDUXlUTWNndHczRnlCM0FROGl6b1VSOExsR25hY3FCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQlNNV3cxNXZOTlN1R0FuRzhuM1BkTm5aMzZxSXVUSVRVWERaNzdJOVFQMGtUa3g1TGgxUHJBTzZiN3JsaXpOeUdONk1GMFAzMGc2Yk1kUUo0RTFNaGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTU4OTU0NTQ1OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV3k1dkFOT0FrVjhkV1pxbHl2WUZxTG02MkFlYWdMT0grYTZ5d1A4SmQwNCJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNzc5NDQwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUk4QSJ9" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "BYTE-MD",
  ownername: process.env.OWNER_NAME || "TalkDrove",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
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
