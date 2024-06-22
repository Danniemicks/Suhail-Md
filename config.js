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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_09_06_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDc2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTI4LFxuICAgICAgICA5NixcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDgyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjExLFxuICAgICAgICAxNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg4LFxuICAgICAgICA5NixcbiAgICAgICAgMjM0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjIzLFxuICAgICAgICA2NixcbiAgICAgICAgMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNSxcbiAgICAgICAgNDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgODUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDksXG4gICAgICAgIDExNCxcbiAgICAgICAgNzksXG4gICAgICAgIDY2LFxuICAgICAgICAyNDksXG4gICAgICAgIDY2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTU4LFxuICAgICAgICA4NCxcbiAgICAgICAgODYsXG4gICAgICAgIDMsXG4gICAgICAgIDE4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDM0LFxuICAgICAgICAxNixcbiAgICAgICAgMTE2LFxuICAgICAgICA3NCxcbiAgICAgICAgMjUwLFxuICAgICAgICA0OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDMyLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTM2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMxLFxuICAgICAgICAxODYsXG4gICAgICAgIDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTgzLFxuICAgICAgICA0MyxcbiAgICAgICAgODgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAzMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjksXG4gICAgICAgIDQyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDcyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAyLFxuICAgICAgICA3OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTcyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDk2LFxuICAgICAgICAwLFxuICAgICAgICA3MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTUwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTIyLFxuICAgICAgICA0MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTMwLFxuICAgICAgICAzMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDM0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDMzLFxuICAgICAgICA1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY1LFxuICAgICAgICA2NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI0LFxuICAgICAgICA3MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDczLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTczLFxuICAgICAgICAzMixcbiAgICAgICAgNjUsXG4gICAgICAgIDY5LFxuICAgICAgICAzNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQxLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQStvNmxZeGMxNjU5VzdHQnNOZlNpRUZyTWFJZkxzS0ljSFFYS0syNHBYST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDYwODYxMzgyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJENzJGMEE4QUU5QzAxMjk0OTJDNjFBRTM3MDk2QkREOVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTkwMzY1NzZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRGljNWd4V0hURE9PQzFXUElZMzctQVwiLFxuICBcInBob25lSWRcIjogXCJjNDA2ZThjOC1jMzA5LTQ4NTAtOTIwNS00YTIyNGZhY2VjNDRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAxLFxuICAgICAgMTYsXG4gICAgICAxOTgsXG4gICAgICAyMTIsXG4gICAgICAyMzIsXG4gICAgICAxOSxcbiAgICAgIDE4MixcbiAgICAgIDIzLFxuICAgICAgNDYsXG4gICAgICAxMzIsXG4gICAgICAxNjYsXG4gICAgICAyMDYsXG4gICAgICA1NyxcbiAgICAgIDI1NSxcbiAgICAgIDIxOSxcbiAgICAgIDE1NyxcbiAgICAgIDEyLFxuICAgICAgNDQsXG4gICAgICAyMzMsXG4gICAgICAyMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI1LFxuICAgICAgNTksXG4gICAgICAyMzAsXG4gICAgICAxMDUsXG4gICAgICA5NCxcbiAgICAgIDIzNyxcbiAgICAgIDgxLFxuICAgICAgMjMwLFxuICAgICAgMjMyLFxuICAgICAgMTc2LFxuICAgICAgOTUsXG4gICAgICA3MixcbiAgICAgIDE3NCxcbiAgICAgIDIwNCxcbiAgICAgIDQ2LFxuICAgICAgNjEsXG4gICAgICAyMSxcbiAgICAgIDExMCxcbiAgICAgIDE5NCxcbiAgICAgIDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiM01BS0o4Q01cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNjA4NjEzODI6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJEYW5pZWwgU21hcnRcIixcbiAgICBcImxpZFwiOiBcIjI4MDMzMjYxNjA4NTU0NDoxMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKTFFyNFFIRUpmVjJiTUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInU2dlplSVNtYlY0K2hxSldSYmQ2cnUxRWwyL2ZYTHo5Y05RWTZkRHRXUm89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidkdCamRORHFYK1dsUlBBM3VZeGtuT0RYaDd6NmRneEdvV01JT2VGbTFFeHRZM1Y4YStmUG0yc25jWmFJYzF6eUkyajlRNU91Q2VEeGRmZ0VKc0g0QWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZWpyTG0xU2dCZEN0aXpSeE1mYzY3bFZJRjRWM0piZ0JKSlk0cEQ2clVOL0pZbUN0eitSUlpTek9Ic1BhS3RtSDJIci84bzgyS29jQlIwV0RmTFFqRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA2MDg2MTM4MjoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTAzNjU3MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU52UFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTnZQLmpzb24iOiAie1wia2V5RGF0YVwiOlwidHVQSWNaNzVnTEJLQzBLM09vVm5kYyt6UXJZaE1tdVlwUFBBcytNMHRubz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODg4MjE3MTA2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkwMzM4ODk2MjhcIn0iCn0=" ;


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
 
