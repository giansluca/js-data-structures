const Tree = require("../../src/tree/Tree");

describe("tree", () => {
    const tree = new Tree();

    it("should should have add a root node ", () => {
        // Given - When
        tree.addNode(5);

        //Then
        expect(tree.root.data).toBe(5);
        expect(tree.hasNode(5)).toBeTruthy();
        expect(tree.hasNode(4)).toBeFalsy();
    });

    describe("after adding a lesser node", () => {
        it("should have add a left node to the root", () => {
            // Given - When
            tree.addNode(3);

            //Then
            expect(tree.root.left.data).toBe(3);
            expect(tree.hasNode(3)).toBeTruthy();
            expect(tree.hasNode(4)).toBeFalsy();
        });

        it("should have add to the left node", () => {
            // Given - When
            tree.addNode(2);

            //Then
            expect(tree.root.left.left.data).toBe(2);
            expect(tree.hasNode(2)).toBeTruthy();
            expect(tree.hasNode(4)).toBeFalsy();
        });

        it("should have add again to the left node", () => {
            // Given - Whe
            tree.addNode(4);

            //Then
            expect(tree.root.left.right.data).toBe(4);
            expect(tree.hasNode(4)).toBeTruthy();
        });
    });

    describe("after adding a greater node", () => {
        it("should have add a right node to the root", () => {
            // Given - When
            tree.addNode(7);

            //Then
            expect(tree.root.right.data).toBe(7);
            expect(tree.hasNode(7)).toBeTruthy();
        });

        it("should have add to the left node", () => {
            // Given - When
            tree.addNode(6);

            //Then
            expect(tree.root.right.left.data).toBe(6);
            expect(tree.hasNode(6)).toBeTruthy();
        });

        it("should have add to the right node", () => {
            // Given - When
            tree.addNode(8);

            //Then
            expect(tree.root.right.right.data).toBe(8);
            expect(tree.hasNode(8)).toBeTruthy();
        });
    });
});
