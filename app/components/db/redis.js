var IORedis = require('ioredis');

exports.getConnection = function () {
    return new IORedis({
        port: process.env.rd_port ?? 6379, // Redis port
        host: process.env.rd_host ?? '127.0.0.1', // Redis host
        family: process.env.rd_ipfamily ?? 4, // 4 (IPv4) or 6 (IPv6)
        password: process.env.rd_pass ?? null,
        db: process.env.rd_database ?? 0,
        keyPrefix: process.env.rd_prefix ?? '',
    });
}