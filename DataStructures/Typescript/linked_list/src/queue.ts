export interface DataNode<T> {
    data: T;
    next: DataNode<T> | null;
}

export interface IQueue<T> {
    enqueue(data: T): void;
    dequeue(): T | null;
    peek(): T | null;
    size(): number;
}

export class Queue<T> implements IQueue<T> {
    private _size: number;
    private head: DataNode<T> | null;
    private tail: DataNode<T> | null;

    constructor() {
        this._size = 0;
        this.head = this.tail = null;
    }

    size(): number {
        return this._size;
    }

    enqueue(data: T): void {
        const node: DataNode<T> = {
            data,
            next: null,
        };
        if (this.head === null) {
            this.head = this.tail = node;
        } else if (this.tail !== null) {
            this.tail.next = node;
            this.tail = this.tail.next;
        }
        ++this._size;
    }

    dequeue(): T | null {
        if (this._size == 0 || this.head === null) {
            return null;
        }

        const item = this.head.data;
        this.head = this.head.next;
        --this._size;
        return item;
    }

    peek(): T | null {
        if (this._size == 0 || this.head === null) {
            return null;
        }
        return this.head.data;
    }
}

const q = new Queue();
q.enqueue('we can have strings');
q.enqueue(1); //or ints
q.enqueue(0); //or any object really
q.enqueue(null); //or any object really incl null
console.log(q);

