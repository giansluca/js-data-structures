const { Queue } = require("../../src/queue/Queue");

describe("queue", () => {
    it("should add and remove elements", () => {
        // given
        const queue = new Queue();
        queue.enqueue(10);
        queue.enqueue(130);
        queue.enqueue(-400);
        queue.enqueue(2500);

        // when add
        const contains1 = queue.contains(2500);
        const contains2 = queue.contains(2501);

        // then
        expect(contains1).toBeTruthy();
        expect(contains2).toBeFalsy();
        expect(queue.isEmpty()).toBeFalsy();

        // when peek
        const peek = queue.peek();

        // then
        expect(peek).toBe(10);

        // when remove
        const dequeue1 = queue.dequeue();
        const dequeue2 = queue.dequeue();
        const dequeue3 = queue.dequeue();
        const dequeue4 = queue.dequeue();

        // then
        expect(dequeue1).toBe(10);
        expect(dequeue2).toBe(130);
        expect(dequeue3).toBe(-400);
        expect(dequeue4).toBe(2500);
        expect(queue.isEmpty()).toBeTruthy();
    });
});
