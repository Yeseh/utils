export const set = <T, K extends keyof T>(obj: T, prop: K, value: T[K]): T[K] =>  {
    return obj[prop] = value;
}