const Tree = require("../../src/tree/Tree");

describe("tree", () => {
    const tree = new Tree();

    it("should should have a root after adding a node ", () => {
        // Given - When
        tree.addNode(5);

        //Then
        expect(tree.root.data).toBe(5);
    });

    it("should have add a left to the root after adding a lesser node ", () => {
        // Given - When

        tree.addNode(3);

        //Then
        expect(tree.root.data).toBe(5);
        expect(tree.root.left.data).toBe(3);
    });

    it("should have add to the left node after adding another lesser node ", () => {
        // Given - When

        tree.addNode(2);

        //Then
        expect(tree.root.data).toBe(5);
        expect(tree.root.left.left.data).toBe(2);
    });

    it("should have add to the left node after adding again another lesser node ", () => {
        // Given - When

        tree.addNode(4);

        //Then
        expect(tree.root.data).toBe(5);
        expect(tree.root.left.right.data).toBe(4);
    });

    it("should have add a right to the root after adding a grater node ", () => {
        // Given - When

        tree.addNode(7);

        //Then
        expect(tree.root.data).toBe(5);
        expect(tree.root.right.data).toBe(7);
    });
});
