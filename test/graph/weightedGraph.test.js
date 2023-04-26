const { WeightedGraph } = require("../../src/graph/weightedGraph");

describe("weightedGraph", () => {
    it("should print the wei graph", () => {
        // Given - When - Then
        const graph = new WeightedGraph();

        graph.addNode("A");
        graph.addNode("B");
        graph.addNode("C");
        graph.addEdge("A", "B", 3);
        graph.addEdge("A", "C", 2);

        graph.removeNode("C");

        //graph.print();
    });
});
