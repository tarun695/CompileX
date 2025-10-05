const { createClient }  = require('redis');

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'redis-16926.c92.us-east-1-3.ec2.redns.redis-cloud.com',
        port: 16926
    }
});

module.exports = redisClient;