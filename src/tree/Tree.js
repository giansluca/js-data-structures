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

        this._addNode(this.root, node);
    }

    _addNode(parent, child) {
        if (child.data > parent.data) {
            if (parent.right == null) {
                parent.right = child;
                return;
            } else {
                return this._addNode(parent.right, child);
            }
        } else if (child.data < parent.data) {
            if (parent.left == null) {
                parent.left = child;
                return;
            } else {
                return this._addNode(parent.left, child);
            }
        }
    }

    hasNode(data) {
        // TODO
    }
}

module.exports = Tree;
