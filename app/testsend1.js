const axios = require('axios');
require('dotenv').config();

(async () => {
    let send = await axios.get(`http://${process.env.goip_host}/default/en_US/send.html?u=${process.env.goip_user}&p=${process.env.goip_password}&l=${process.env.test_channel}&n=${process.env.test_number}&m=test123`).catch((e) => { console.log(e); })
    console.log(send?.data);
})()