export const coalesce = (...args: any[]): any => {
    for (const arg of args) {
        if(arg) return arg
    }
}