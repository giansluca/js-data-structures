class _Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    addNode(data) {
        const node = new _Node(data);

        if (this.root == null) {
            this.root = node;
            return;
        }

        if (node.data < this.root.data) this.root.left = node;
        else if (node.data > this.root.data) this.root.right = node;
    }

    _addNode(parent, child) {}
}

module.exports = Tree;
