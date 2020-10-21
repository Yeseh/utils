export const ifThenElse = (cond: boolean, then: any, els: any): any => {
    if (cond) return then
    else return els;
}