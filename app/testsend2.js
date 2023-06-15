const axios = require('axios');
require('dotenv').config();

(async () => {
    let data = {
        line: process.env.test_channel,
        smskey: Math.floor(Math.random() * 99999999),
        action: 'SMS',
        telnum: process.env.tesh_number,
        smscontent: 'test456',
        send: "Send"
    }
    let send = await axios.get(`http://${process.env.goip_user}:${process.env.goip_password}@${process.env.goip_host}/default/en_US/sms_info.html?type=sms`, data, { headers: {Accept: '*/*', "Content-Type": "application/x-www-form-urlencoded" } }).catch((e) => { console.log(e); })
    console.log(send?.data);
})()