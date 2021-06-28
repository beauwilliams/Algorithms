"use strict";
exports.__esModule = true;
exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue() {
        this._size = 0;
        this.head = this.tail = null;
    }
    Queue.prototype.size = function () {
        return this._size;
    };
    Queue.prototype.enqueue = function (data) {
        var node = {
            data: data,
            next: null
        };
        if (this.head === null) {
            this.head = this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = this.tail.next;
        }
        ++this._size;
    };
    Queue.prototype.dequeue = function () {
        if (this._size == 0) {
            return null;
        }
        var item = this.head.data;
        this.head = this.head.next;
        --this._size;
        return item;
    };
    Queue.prototype.peek = function () {
        if (this._size == 0) {
            return null;
        }
        return this.head.data;
    };
    return Queue;
}());
exports.Queue = Queue;
var t = new Queue();
t.enqueue('asd'); // Works fine
t.enqueue(1);
t.enqueue(0);
console.log(t); // LinkedList
console.log("Result");
