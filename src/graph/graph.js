const { Queue } = require("../queue/Queue");

class _Node {
    constructor(label) {
        this.label = label;
    }
}

class Graph {
    constructor() {
        this.nodes = new Map();
        this.adjacencyList = new Map();
    }

    addNode(label) {
        const node = new _Node(label);
        this.nodes.set(label, node);
        this.adjacencyList.set(node, []);
    }

    removeNode(label) {
        const node = this.nodes.get(label);
        if (!node) {
            console.log(`Warning, node [${label}] not present.`);
            return;
        }

        for (const n of this.adjacencyList.keys()) {
            const targetList = this.adjacencyList.get(n);
            const indexToRemove = targetList.indexOf(node);
            if (indexToRemove > -1) targetList.splice(indexToRemove, 1);
        }

        this.adjacencyList.delete(node);
        this.nodes.delete(label);
    }

    addEdge(from, to) {
        const fromNode = this.nodes.get(from);
        if (!fromNode) throw new Error(`node [${from}] not found`);

        const toNode = this.nodes.get(to);
        if (!toNode) throw new Error(`node [${to}] not found`);

        this.adjacencyList.get(fromNode).push(toNode);
        this.adjacencyList.get(toNode).push(fromNode);
    }

    removeEdge(from, to) {
        const fromNode = this.nodes.get(from);
        const toNode = this.nodes.get(to);

        if (!fromNode || !toNode) {
            console.log("Warning, node not found");
            return;
        }

        const fromTargetList = this.adjacencyList.get(fromNode);
        const toIndex = fromTargetList.indexOf(toNode);
        if (toIndex > -1) fromTargetList.splice(toIndex, 1);

        const toTargetList = this.adjacencyList.get(toNode);
        const fromIndex = toTargetList.indexOf(fromNode);
        if (fromIndex > -1) toTargetList.splice(fromIndex, 1);
    }

    traverseDepthFirst(startingNodeLabel) {
        const startingNode = this.nodes.get(startingNodeLabel);
        if (!startingNode) {
            console.log("DFS Warning, starting node not present");
            return;
        }

        const visited = new Set();
        this._traverseDepthFirst(startingNode, visited);
    }

    _traverseDepthFirst(root, visited) {
        console.log(root);
        visited.add(root);

        for (const node of this.adjacencyList.get(root))
            if (!visited.has(node)) this._traverseDepthFirst(node, visited);
    }

    traverseBreadthFirst(startingNodeLabel) {
        const startingNode = this.nodes.get(startingNodeLabel);
        if (!startingNode) {
            console.log("BFS Warning, starting node not present");
            return;
        }

        const visited = new Set();

        const queue = new Queue();
        queue.enqueue(startingNode);

        while (!queue.isEmpty()) {
            const current = queue.dequeue();

            if (visited.has(current)) continue;

            console.log(current);
            visited.add(current);

            for (const neighbour of this.adjacencyList.get(current))
                if (!visited.has(neighbour)) queue.enqueue(neighbour);
        }
    }

    print() {
        for (const source of this.adjacencyList.keys()) {
            const targets = this.adjacencyList.get(source);
            console.log(
                source.label,
                " -> ",
                targets.map((n) => n.label)
            );
        }
    }
}

exports.Graph = Graph;
