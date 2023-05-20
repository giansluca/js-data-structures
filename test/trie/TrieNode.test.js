const TrieNode = require("../../src/trie/TrieNode");

describe("TrieNode", () => {
    it("should have store a key", () => {
        // given - when
        const node = new TrieNode("a");

        // then
        expect(node.key).toBe("a");
    });
    it("should have store an object `children`", () => {
        // given - when
        const node = new TrieNode();

        // then
        expect(typeof node.children === "object").toBeTruthy();
    });
    it("should have store a property `isWord`", () => {
        // given - when
        const node = new TrieNode();

        // then
        expect(node.isWord).toBeFalsy();
    });
});
