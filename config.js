const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || "https://blockgames.app?referral_code=Danniemicks"  // put your app url here,
global.email ="danniekharo@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/Danniemicks/Danniemicks";
global.gurl  = process.env.GURL || "https://chat.whatsapp.com/IPSF9c7KTN7L1xYwOD1G93";
global.website= process.env.GURL|| "https://chat.whatsapp.com/IPSF9c7KTN7L1xYwOD1G93" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://images.app.goo.gl/uEgauCoMXBCQbkBb8" ; // SET LOGO FOR IMAGE 



global.devs = "2348060861382" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348060861382";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348060861382";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false", // disable bot in pm when public mode
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "https://images.app.goo.gl/yq7REG7YREvYeDcz9", // set IMAGE/VIDEO links here
global.waPresence= process.env.WAPRESENCE ||  "Speedbot is interacting, Chillax" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2348060861382,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348060861382, null";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_20_03_20_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwibUJNVW1YME9pRi94Vkl6eHZ4WGJjcmd0U0RhQmZsaURzZXBINm8xcG9IMD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIklKU01VNnNDMkRITnlJZjhESHBLWmtOZFc0dzJsdS9qSkErRWNCWW5oSFU9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwia0UxTzIvSU9xdkhGSlg5eTVQOGMvbE1kc1pramN4RmxXeTJqdC9mRWExbz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInFDU0ZyaWh5NXprQk5vK2l1YVFTdVhSL0JuY3lINEYzWnlhWVZaeTBHeVE9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwic0QrdU9WR1ZJLzNJNDJzempMc2lTeXF5U0MrakpBdWR4YkFVRWpTcldtYz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIk02eThuRTk3UU5rSHdnVkJOd3RTdzJQZXFpWStPbi9rOW1iK2MvUmF4bTA9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJBTERwR3FXdnJjUlZKRGpoc0Q3Q0NhYWJDMFJQV3R4OEJReTBEZ1lodWxjPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiR0Z1ZUJCd3dzVCsvK1paQk9nUU1vNGdtcnUrcERpdWlKOXJyUWU1ZGFuYz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJOQTZUZmw5UmozRkhkQnIzLzUxeWgvWFhhYTB6ZFdISzN4azZBTHdUUzVieTdTYi9xNnE1TTJJcTlid1IrQlNzZDN2SFN3dk52dENLYnByUCtZOWxEQT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTI1LFwiYWR2U2VjcmV0S2V5XCI6XCJVN0RSRHJpR3kwUjdVZ2ZFWmZjMW5ZaFlkTUpiUXdVUDlpUWZsaXM1aWFvPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjM0ODA2MDg2MTM4MkBzLndoYXRzYXBwLm5ldFwiLFwiZnJvbU1lXCI6dHJ1ZSxcImlkXCI6XCJFODQ0NkY2MEYwQUU3REFCOUQyNUVBRTIyQjgzQjBBNVwifSxcIm1lc3NhZ2VUaW1lc3RhbXBcIjoxNzEwOTE5MjM1fSx7XCJrZXlcIjp7XCJyZW1vdGVKaWRcIjpcIjIzNDgwNjA4NjEzODJAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiN0NBOERDOTBGNEU1NThDQkQ3NTZEMUNFODE2MUMwMDhcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcxMDkxOTIzNX1dLFwibmV4dFByZUtleUlkXCI6MzEsXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOjMxLFwiYWNjb3VudFN5bmNDb3VudGVyXCI6MSxcImFjY291bnRTZXR0aW5nc1wiOntcInVuYXJjaGl2ZUNoYXRzXCI6ZmFsc2V9LFwiZGV2aWNlSWRcIjpcIkNxTnFhMEZxUVZDTWVOWWFkMW1oMlFcIixcInBob25lSWRcIjpcIjZlZTNjNDE2LWE3MWQtNDI2OC1hOWNjLTg1MTBmYzBkNGYxMlwiLFwiaWRlbnRpdHlJZFwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwia0FPSnRPMFloYjdaRXMxTkxDdDFiOUNsUGo0PVwifSxcInJlZ2lzdGVyZWRcIjp0cnVlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkR5d2hlclFDWG9OT1dJSjhtYmVIaXEvM2U1VT1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcInBhaXJpbmdDb2RlXCI6XCJSVjRKVllRMVwiLFwibWVcIjp7XCJpZFwiOlwiMjM0ODA2MDg2MTM4Mjo4QHMud2hhdHNhcHAubmV0XCIsXCJuYW1lXCI6XCJEYW5pZWwgU21hcnRcIixcImxpZFwiOlwiMjgwMzMyNjE2MDg1NTQ0OjhAbGlkXCJ9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNQU3F4cW9HRUx5YzZxOEdHQUVnQUNnQVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwiRXdVZFNxNlEvSHRscWE3WVNSTlJDSlBVQlRrTFZSdVN4SWxzdEE3L0VtZz1cIixcImFjY291bnRTaWduYXR1cmVcIjpcIkN0bTZUT1NRV1d0T0lXZWYzaU5tbUZvSXdoQWVJa1JVNUFnQUlZanRoRHR6cG1SeVpKY0U4dEZDVC9HWlp1TTJ0eVVON2VLVDdTOVZDMXFRZzN0Q0RBPT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwibjRlbUFDRjk3SVRYU1dxUmduNFZuZVdqNndNeGxNbm1IcUZwRVVVRm0wRmNlL05nbWRLaDU0SzE0VU9XWHowb1F1ZDhvMFZxblBHazFGMk9GOHVQQmc9PVwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjIzNDgwNjA4NjEzODI6OEBzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJSTUZIVXF1a1B4N1phbXUyRWtUVVFpVDFBVTVDMVVia3NTSmJMUU8veEpvXCJ9fV0sXCJwbGF0Zm9ybVwiOlwic21iYVwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcxMDkxOTIzMixcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFLSTVcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLSTUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJTcmpNd0RYNEw4THRSS3Z2Mng3VXpIN01ESmljNGN1clFiSXVlZU1xSDFJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2OTk4NDU0OTIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxMDkxOTIzNTE5OVwifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "Speedbot ",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.0",
  caption : process.env.CAPTION || "©DANNIEMICKS²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "DANNIEMICKS",
  packname: process.env.PACK_NAME || "۝☬✪☞★★GÄM̄£Rẞ☉☉S★★☜✪☬۝",
  botname : process.env.BOT_NAME  || "SPEEDBOT",
  ownername:process.env.OWNER_NAME|| "DANNIEMICKS",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "۝☬✪☞★★GÄM̄£Rẞ☉☉S★★☜✪☬۝",



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
