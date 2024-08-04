
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


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0NRa0hVdTl3cXNsR2d3WmZiWEVvSlVwOVNjOEhxTnEyNy9CMkFreUZFYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicDdhbU1RTE1kWHF5bWhsMHliSy96U0I3dTBpaFgrRXpHVURhVWxMUnZpST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlTXN6M2pSZ1VqQWNlWjZndnp2aEFyc01YckZrMDVNZUl4dXZla040SFhVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTQWM0c243c3hDY09ud1ZkbXBtdzlnKzdPSytVNGJzbjJldG1zYUhZUFdrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtQTTNvNk1ZWWJFM3BnSXdNbkpGdURTYWd0dmdqMWJqcTU4TjJOWGdPbkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBINHZHRDNBR25TUnplQVBFLzE3Z3VLNU9hYVo5ZVFUc0hxRUFjeWtLSE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0w2eFJZME1aQUduckorU3ZrK2JDUWo1ZkorQ2oySnV0T1VibWpwZnAyOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMHNpWHo5cHBqakNkYUJsY2hPNHRnWk1pK1QzNGNXOFFYWWxXc1JGNk9WST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik4vK1VTSTlwRDkvZjhvUVNJV3l6UUFMYzFrTzV5U2dqWHY5S0FFZ0hVWEtEVTBHZjd6TzRTZkVhOG8xUS81eWxHUDdBWnVzOWx3dHpqTEUvQWg2R0FRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQwLCJhZHZTZWNyZXRLZXkiOiJKNDZYVk9NNnZ3ekwvNFVuQlUySlV0bE41bUJTekczbHVtcHZnTU5CMTNRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwNzc3MTA3NTJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQ0YzQjlDNjYxOTc2NDQ4RUQyNzU3OURBREE5QTdCMDkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjc5MzcwNn0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzA3NzcxMDc1MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyNEU5NEE1NEE4QTBCRDRDMDBGMkRFRkU2MjEyODE2OSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyNzkzNzA2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJVSlJ1TmhmaFN5Nk52ZC1TSVJ4WXBBIiwicGhvbmVJZCI6ImI3NzBmNTg3LWJlZGItNGEyNC1hNmFlLTJiYzU1OTkwNjYxNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaRmsvRXdJRlBFejhjM3dsZnJ5K2tZb1E2TGM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUlpObmZZRmdBZ1o1ZFRNdXZ1WnRWdXlVWi9NPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlZERlNYV0E3IiwibWUiOnsiaWQiOiIyMzQ3MDc3NzEwNzUyOjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVGVydmVyIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMK045S1VERU5yOXZyVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJUUG54WWNoZ3FWVzhaWXVEcE1TcnBOYi9LLzBjUWdKczdsS2VmNVQwSGdFPSIsImFjY291bnRTaWduYXR1cmUiOiJVbkk3QlkxMGUrL2ZibGI4UytFT1Z6U3plbjZ0TzEvKzMwbnVWVjZtOENRbEdUcnJiUXQwd1BWSjErdm1ON2VsUjg5RHp0Z3B0a1dHQTNqLys2Mi9EZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSjNEWGVpNENIbDFQaG1SS0Q0dUNqVFdWa1dVWFNYeGJyUjdaRHJxU2s2bENCOVNrNHZrNFRnczV1cjB5TGl4K2J4bGI2UXBHMkM5UVpoZnNheE54RFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDc3NzEwNzUyOjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVXo1OFdISVlLbFZ2R1dMZzZURXE2VFcveXY5SEVJQ2JPNVNubitVOUI0QiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjc5MzcwNCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQZWsifQ==" //Make sure session id starts with Byte;;;



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
