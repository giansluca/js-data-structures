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

    hasNode(dataToFind) {
        if (dataToFind === this.root.data) return true;

        return this._hasNode(this.root, dataToFind);
    }

    _hasNode(parent, dataToFind) {
        if (parent == null) return false;

        if (dataToFind == parent.data) return true;
        if (dataToFind > parent.data) return this._hasNode(parent.right, dataToFind);
        else if (dataToFind < parent.data) return this._hasNode(parent.left, dataToFind);
    }
}

module.exports = Tree;
