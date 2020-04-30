import {LinkedList} from './linked-list'
import {EqualsFunction, defaultEquals} from './ds-helpers'

class Queue<T> {
    protected list: LinkedList<T>

    constructor(vals?: T[], compareFn?: EqualsFunction<T>) {
        this.list = new LinkedList(vals, compareFn)
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

    enqueue(val: T): void {
        this.list.addLast(val)
    }

    dequeue(): T {
        return this.list.removeFirst();
    }

    peekFirst(): T {
        return this.list.peekFirst();
    }

    peekLast(): T {
        return this.list.peekLast();
    }

    contains(val: T) {
        return this.list.contains(val);
    }

    [Symbol.iterator](): Iterator<T> {
        return this.list[Symbol.iterator]();
    }
}

export { Queue }