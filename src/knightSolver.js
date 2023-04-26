const { Queue } = require("./data-structure/queue");

class Node {
    constructor(x, y, dist) {
        this.x = x;
        this.y = y;
        this.dist = dist;
    }
}

const boardLimit = 8;
const knightMovement = 8;

const row = [2, 2, -2, -2, 1, 1, -1, -1];
const col = [-1, 1, 1, -1, 2, -2, 2, -2];

const xMapping = new Map([
    ["a", "1"],
    ["b", "2"],
    ["c", "3"],
    ["d", "4"],
    ["e", "5"],
    ["f", "6"],
    ["g", "7"],
    ["h", "8"],
]);

const toNode = (position) => {
    const x = parseInt(xMapping.get(position.charAt(0)));
    const y = parseInt(position.charAt(1));
    const node = new Node(x, y, 0);
    return node;
};

const isValidBoardPosition = (x, y) => {
    if (x < 1 || y < 1 || x > boardLimit || y > boardLimit) return false;

    return true;
};

const BFSSolver = (startNode, finishNode) => {
    const visited = new Set();

    const queue = new Queue();
    queue.enqueue(startNode);

    while (!queue.isEmpty()) {
        const current = queue.dequeue();

        const x = current.x;
        const y = current.y;
        const dist = current.dist;

        if (x === finishNode.x && y === finishNode.y) return dist;

        if (visited.has(current)) continue;

        visited.add(current);

        // check for all 8 possible movements for a knight
        // and enqueue each valid movement into the queue
        for (let i = 0; i < knightMovement; i++) {
            const x1 = x + row[i];
            const y1 = y + col[i];

            if (isValidBoardPosition(x1, y1)) queue.enqueue(new Node(x1, y1, dist + 1));
        }
    }
};

const solveKnightShortestPath = (start, finish) => {
    const startNode = toNode(start);
    const finishNode = toNode(finish);

    const distance = BFSSolver(startNode, finishNode);
    console.log(distance);
};

solveKnightShortestPath("g2", "h1");
