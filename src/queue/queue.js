class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        if (this.isEmpty()) return;
        return this.items.shift();
    }

    peek() {
        if (this.isEmpty()) return;
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

exports.Queue = Queue;
