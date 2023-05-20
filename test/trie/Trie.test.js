const Trie = require("../../src/trie/Trie");
const TrieNode = require("../../src/trie/TrieNode");

describe("Trie", () => {
    it("should have a root trie node", () => {
        // Given - When
        const trie = new Trie("A");

        // Then
        expect(trie.root).toBeInstanceOf(TrieNode);
    });

    describe("with a single word", () => {
        it("should connect the root to the first letter", () => {
            // Given
            const trie = new Trie();
            trie.insert("HEY");

            // When
            const firstNode = trie.root.children["H"];

            // Then
            expect(firstNode.key).toBe("H");
            expect(firstNode.children["E"]).toBeDefined();
            expect(firstNode.isWord).toBeFalsy();
        });

        it("should connect the root to the second letter", () => {
            // Given
            const trie = new Trie();
            trie.insert("HEY");

            // When
            const firstNode = trie.root.children["H"];
            const secondNode = firstNode.children["E"];

            // Then
            expect(secondNode.key).toBe("E");
            expect(secondNode.children["Y"]).toBeDefined();
            expect(secondNode.isWord).toBeFalsy();
        });

        it("should connect the root to the third letter", () => {
            // Given
            const trie = new Trie();
            trie.insert("HEY");

            // When
            const firstNode = trie.root.children["H"];
            const secondNode = firstNode.children["E"];
            const thirdNode = secondNode.children["Y"];

            // Then
            expect(thirdNode.key).toBe("Y");
            expect(Object.keys(thirdNode.children).length).toBe(0);
            expect(thirdNode.isWord).toBeTruthy();
        });
    });

    describe("with three words", () => {
        // Given
        let trie = new Trie();
        let words = ["helipad", "hello", "hermit"];

        trie.insert("helipad");
        trie.insert("hello");
        trie.insert("hermit");

        // When
        words.forEach((word) => {
            describe(`for ${word}`, () => {
                it("should connect to the final letter", () => {
                    const splitWord = word.split("");
                    const finalNode = splitWord.reduce((node, letter) => node.children[letter], trie.root);

                    // Then
                    expect(finalNode).toBeDefined();
                    expect(finalNode.isWord).toBeTruthy();
                });
            });
        });
    });

    describe("with a single word, searching", () => {
        it("should properly detect words that are contained", () => {
            // Given - When
            const trie = new Trie();
            trie.insert("hey");

            // Then
            expect(trie.contains("hey")).toBeTruthy();
        });

        it("should properly detect words that are not contained", () => {
            // Given - When
            const trie = new Trie();
            trie.insert("hey");

            // Then
            expect(trie.contains("hello")).toBeFalsy();
            expect(trie.contains("he")).toBeFalsy();
            expect(trie.contains("hi")).toBeFalsy();
            expect(trie.contains("heya")).toBeFalsy();
        });
    });
});
