import {LinkedList} from './linked-list'
import {EqualsFunction, defaultEquals} from './ds-helpers'

class Stack<T> implements Iterable<T> {
    protected list: LinkedList<T>

    constructor(vals?: T[], compareFn?: EqualsFunction<T>) {
        this.list = new LinkedList(vals, compareFn);
    }

    size(): number {
        return this.list.size();
    }

    isEmpty(): boolean {
        return this.list.isEmpty();
    }

    clear(): void {
        this.list.clear();
    }

    push(element: T): void {
        this.list.addLast(element)
    }

    pop(): T {
        return this.list.removeLast();
    }

    peek(): T {
        return this.list.peekLast();
    }

    contains(element: T) {
        return this.list.contains(element)
    }

    arrayFromTail() {
        return this.list.toAscArray();
    }

    [Symbol.iterator](): Iterator<T> {
        return this.list[Symbol.iterator]();
    }
}

export { Stack }