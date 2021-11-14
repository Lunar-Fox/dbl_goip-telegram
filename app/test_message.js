require('dotenv').config();
const udp = require('dgram');

const client = udp.createSocket('udp4');

let data = [Buffer.from(`RECEIVE:1111111111;id:goip1;password:${process.env.password};srcnum:1111111111;msg:Test message received ${Math.random()}`)];
let goip_port = 44444;
let goip_password = 44444;

for(let i = 0; i < data.length;i++) {
    client.send(data[i].toString(), process.env.goip_port ?? 44444, '127.0.0.1', function(error) {
        if(error) {
            client.close();
            console.log(error);
        } else {
            console.log('Data sent !!!');
        }
    });
}

setTimeout(() => {
    process.exit(0);
}, 500)
