import  redis  from "./redis"

 const fetch = async <T>(key: string, fetcher: () => T, expires: number) => {
    const existing = await get<T>(key);
    if (existing !== null) return existing;
    return  set(key, fetcher, expires);
};

const get = async <T>(key: string): Promise<T> => {
    const value = await redis.get(key);
    console.log(value, "from redis")
    if (value === null) return null as any;
    return JSON.parse(value)
};

const set = async <T>(key:string, fetcher: () => T, expires: number) => {
    const value = await fetcher();
    console.log(value)
    await redis.set(key, JSON.stringify(value), "EX", expires)
    return value
}

const exportedObject = {
    fetch,
    set,
    get
};

export default exportedObject
