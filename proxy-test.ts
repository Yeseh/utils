import {historyProxy} from "./src/proxies/history-preserved";


const obj = {
    one: 1,
    string: "Hello World"
}

const hist = historyProxy(obj);

hist.one = 2;
hist.one = 3;

console.log(hist.history?.operations)
console.log(hist.one);

hist.undo!();
console.log(hist.history?.operations)
console.log(hist.one);

hist.undo!();

console.log(hist.history?.operations)
console.log(hist.one);