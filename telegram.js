require('dotenv').config();
const axios = require('axios');

const SendMessage=(message)=>{
    chatId = process.env.telgramChatId;
    url = process.env.telgramBase_url;
    base_url = `${url}${chatId}&text="${message}"`
    axios.get(base_url)
};

module.exports={SendMessage}