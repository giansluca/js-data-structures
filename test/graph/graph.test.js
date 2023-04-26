const { Graph } = require("../../src/graph/graph");

describe("graph", () => {
    it("should print the graph", () => {
        // Given - When - Then
        const graph = new Graph();

        const labels = ["A", "B", "C", "D", "E", "F", "Z"];
        for (const label of labels) graph.addNode(label);

        graph.addEdge("A", "B");
        graph.addEdge("A", "D");
        graph.addEdge("A", "E");
        graph.addEdge("B", "C");
        graph.addEdge("D", "E");
        graph.addEdge("E", "F");
        graph.addEdge("E", "C");
        graph.addEdge("C", "F");

        graph.removeEdge("A", "B");
        graph.removeNode("B");

        graph.print();
    });
});
