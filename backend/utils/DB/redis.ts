import Redis from 'ioredis';

const redis = new Redis("rediss://:fc46e167cc3e4936bb9556cedf53662e@gusc1-dear-dane-31683.upstash.io:31683");

export default redis;