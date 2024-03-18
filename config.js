const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""  // put your app url here,
global.email ="danniekharo@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  = process.env.GURL || "https://chat.whatsapp.com/JWdI0Sppwib0YDqnHoFPOW";
global.website= process.env.GURL|| "https://chat.whatsapp.com/JWdI0Sppwib0YDqnHoFPOW" ; 
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
global.userImages= process.env.USER_IMAGES|| "text", // set IMAGE/VIDEO links here
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2348060861382,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348060861382, null";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_50_03_17_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwic0RRVm9TNjdOV1d5T0daWWZLdFE1ajJ0RTJLOVc4azVlM2dtTW9PbHBWST1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlZMbVBRQTFseTYvYzdwNWpaVWxxdFA1NHVaOFZ0OTVTM1RvVGtqVnU3akk9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwia1BSUzFGWmVYZ21YUk9VdFZvckx6anA3ZU9OSVhkcXUwVys4Z0thdy9FND1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkZvbFRYVE85Si9pblN6SVZDdmptNmJuYlpVaFhEaFhhQVF1OU00VW1iZ0k9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiYUsrcHNvSG1zczVhYThkRE1hdVYvN2VBWjBLdDhUUTBWR0NVWllWWk0zYz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIk45L2w5ZlNtaVROZU9acjhBSW8rbEV0Y0JwSlVYYlBtWWUycFRrOXVIQVU9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJnT2RycnE3dGJjQkMvUUQwN2k5VzFlNDZJY3UvTUp6S0lFNWU5OEpPQ2xJPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiYlpKOUxVTVBjc28wUVJ6V0ptOGNpVkFnSklDR0RKdndzSUpvYzlaSEFCYz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJPZ3NVb2xVZSswQnlDSFNEQTZ6WVJCdHIrMWZ1QmpyRmRHVi9xREZDSWxSS3RQVGozRzJabExrRkRQd1B6eTBhWE1iYnNHVXpPMUt1UE9Od0IyNnBnQT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6NixcImFkdlNlY3JldEtleVwiOlwiQzNxR0ZYTkRPb2tEY1ViZkMxcXVFblp0Q3pqSTBmaFNJNHFROU50MzFaZz1cIixcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOlt7XCJrZXlcIjp7XCJyZW1vdGVKaWRcIjpcIjIzNDgwNjA4NjEzODJAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiNThBRDY2MjVFRjFDOEE4RDBCMjlGRDI0RUUwODA1MENcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcxMDcxOTM5Nn0se1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCIyMzQ4MDYwODYxMzgyQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjczQjM3QTMwODczNjMzNjA5RDg3RDFEQTFFMzA2QTlFXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTA3MTkzOTd9XSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjEsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJFd1hjUlE0RFEycUlvLVdQRTI3cENRXCIsXCJwaG9uZUlkXCI6XCIxYzQ5NTUxNy1iYWQxLTRlYTItYjU1Zi0xYmJlNWZhODk2ZjVcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInV0dDZVYjFmZ2pUSWtGSW9KRVZtbzQzdjg1Zz1cIn0sXCJyZWdpc3RlcmVkXCI6dHJ1ZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJ5bjladEJmZnNJaEIxd1FzQnVzL1RJV1VNTE09XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJwYWlyaW5nQ29kZVwiOlwiTUVTVFBEQkhcIixcIm1lXCI6e1wiaWRcIjpcIjIzNDgwNjA4NjEzODI6NkBzLndoYXRzYXBwLm5ldFwiLFwibmFtZVwiOlwiRGFuaWVsIFNtYXJ0XCIsXCJsaWRcIjpcIjI4MDMzMjYxNjA4NTU0NDo2QGxpZFwifSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDUE9xeHFvR0VKNkQzcThHR0FNZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIkV3VWRTcTZRL0h0bHFhN1lTUk5SQ0pQVUJUa0xWUnVTeElsc3RBNy9FbWc9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJReVBSdVhxRlZlbzB1ekhzZzZTR2ZjblltaGd0d01LY21BTVpYUWVMYmxLV20rKzREdnlIdDkvZ2t3NHc4V2J4SzR3MHlmVlhKQUxHeG1GQzhHMlFBZz09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcIm02UUsrdWt3WHlLUVQ2TGNKVWkyaDZLbUQzdGlVeUx2RTljd1cydWk0MUs0TnVNV0lJWURySzdOZVBpNXhqNzBYWmNQck1RV1ZqMERhd2FMUWtibmhBPT1cIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCIyMzQ4MDYwODYxMzgyOjZAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCUk1GSFVxdWtQeDdaYW11MkVrVFVRaVQxQVU1QzFVYmtzU0piTFFPL3hKb1wifX1dLFwicGxhdGZvcm1cIjpcInNtYmFcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MTA3MTkzOTIsXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBS0kwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS0kwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRFhMSlNYQXNIRVBOTTdkbENEdllYajR0bHdLZi8yMlI4NnZHYTZ0Q1ErST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjk5ODQ1NDkxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTA3MDg5OTc1NDlcIn0iCn0=" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.0",
  caption : process.env.CAPTION || "©DANNIEMICKS²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "DANNIEMICKS",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "SPEEDBOT",
  ownername:process.env.OWNER_NAME|| "DANNIEMICKS",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



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
 
