export interface DataNode<T> {
    data: T;
    next: DataNode<T> | null;
}

export interface IStack<T> {
    push(data: T): void;
    pop(): T | null;
    peek(): T | null;
    size(): number;
}

export class Stack<T> implements IStack<T> {
    private _size: number;
    private tail: DataNode<T> | null;

    constructor() {
        this._size = 0;
        this.tail = null;
    }

    size(): number {
        return this._size;
    }

    push(data: T): void {
        const node: DataNode<T> = {
            data,
            next: null,
        };
        if (this.tail === null) {
            this.tail = node;
        } else {
            node.next = this.tail;
        }
        ++this._size;
    }

    pop() {
        if (this._size == 0 || this.tail === null) {
            return null;
        }

        const item = this.tail.data;
        this.tail = this.tail.next;
        --this._size;
        return item;
    }

    peek(): T | null {

        if (this._size == 0 || this.tail === null) {
            return null;
        }
        return this.tail.data;
    }
}

const q = new Stack();
q.push('we can have strings');
q.push(1); //or ints
q.push(0); //or any object really
q.push(null); //or any object really incl null
console.log(q);

