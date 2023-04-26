class _Node {
    constructor(label) {
        this.label = label;
        this.edges = [];
    }

    addEdge(toNode, weight) {
        this.edges.push(new _Edge(this, toNode, weight));
    }

    removeEdge(toNode) {
        const indexToRemove = this.edges.findIndex((e) => e.toNode === toNode);
        if (indexToRemove > -1) this.edges.splice(indexToRemove, 1);
    }
}

class _Edge {
    constructor(fromNode, toNode, weight) {
        this.fromNode = fromNode;
        this.toNode = toNode;
        this.weight = weight;
    }
}

class WeightedGraph {
    constructor() {
        this.nodes = new Map();
    }

    addNode(label) {
        this.nodes.set(label, new _Node(label));
    }

    removeNode(label) {
        const node = this.nodes.get(label);
        if (!node) {
            console.log(`Warning, node [${label}] not present.`);
            return;
        }

        for (const n of this.nodes.values()) n.removeEdge(node);

        this.nodes.delete(label);
    }

    addEdge(from, to, weight) {
        const fromNode = this.nodes.get(from);
        if (!fromNode) throw new Error(`node [${from}] not found`);

        const toNode = this.nodes.get(to);
        if (!toNode) throw new Error(`node [${to}] not found`);

        fromNode.addEdge(toNode, weight);
        toNode.addEdge(fromNode, weight);
    }

    removeEdge(from, to) {
        const fromNode = this.nodes.get(from);
        if (!fromNode) throw new Error(`node [${from}] not found`);

        const toNode = this.nodes.get(to);
        if (!toNode) throw new Error(`node [${to}] not found`);

        fromNode.removeEdge(toNode);
        toNode.removeEdge(fromNode);
    }

    print() {
        for (const node of this.nodes.values()) {
            const edges = node.edges;

            console.log(
                node.label,
                " -> ",
                edges.map((e) => `${e.fromNode.label} => ${e.toNode.label} - ${e.weight}`)
            );
        }
    }
}

exports.WeightedGraph = WeightedGraph;
