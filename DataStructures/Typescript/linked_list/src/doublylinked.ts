export interface DataNode<T> {
    data: T;
    next: DataNode<T> | null;
    prev: DataNode<T> | null;
}

export interface IDoublyLinked<T> {
    enqueue(data: T): void; // O(1)
    dequeue(): T | null; // O(1)
    push(data: T): void; // O(1)
    pop(): T | null; // O(1)
    getAt(index: number): DataNode<T> | null; // O(n)
    insertAt(index: number, data: T): void; // O(n)
    removeAt(index: number): T | null; // O(n)
    peekHead(): T | null; // O(1)
    peekTail(): T | null; // O(1)
    size(): number; //O(1)
    cur: number;
}

export class DoublyLinked<T> implements IDoublyLinked<T> {
    private _size: number;
    private head: DataNode<T> | null;
    private tail: DataNode<T> | null;


    constructor() {
        this._size = 0;
        this.head = this.tail = null;
    }

    enqueue(data: T) {
        const node: DataNode<T> = {
            data,
            next: null,
            prev: this.tail
        };

        if (this.tail === null) {
            this.head = this.tail = node
        } else if (this.tail !== null) {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = this.tail.next;

        }
        ++this._size;
    }


    joinLeft(node: DataNode<T>) { //for later use
        if (this.tail !== null) {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = this.tail.next;
        }

    }


    dequeue(): T | null {
        if (this._size === 0 || this.head === null) {
            return null;
        }

        const item = this.head.data;
        this.head = this.head.next;
        if (this.head !== null) {
            this.head.prev = null;
        }
        --this._size;

        return item
    }


    push(data: T) {
        const node: DataNode<T> = {
            data,
            next: null,
            prev: this.head
        }


        if (this.tail === null) {
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail = node.prev;
        }
        ++this._size;
    }

    pop() {
        if (this._size === 0 || this.tail === null) {
            return null;
        }

        const item = this.tail.data;
        this.tail = this.tail.next;
        if (this.tail !== null) {
            this.tail.next = null;
        }
        return item;

    }


    peekHead(): T | null {
        if (this._size === 0 || this.head === null) {
            return null;
        }
        return this.head.data;
    }

    peekTail(): T | null {
        if (this._size === 0 || this.tail === null) {
            return null;
        }
        return this.tail.data;
    }

    getAt(index: number): DataNode<T> | null { //index starts from head.
        let curNode: DataNode<T> | null;

        if (index == 0) { //O(1)
            return this.head;
        }

        if (index === this._size) { //O(1)
            return this.tail;
        }

        if (index < this._size / 2) {
            curNode = this.head;
            for (let i = 0; i < index; ++i) {
                if (curNode !== null) {
                    curNode = curNode.next;
                }
            }

        } else {
            curNode = this.tail;
            for (let i = 0; i > index; --i) {
                if (curNode !== null) {
                    curNode = curNode.prev;
                }
            }

        }
        return curNode;
    }

    insertAt(index: number, data: T): void {
        let node = this.getAt(index)



    }

    removeAt() { }

    size(): number {
        return this._size;
    }


}
