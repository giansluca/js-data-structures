const { WeightedGraph } = require("../../src/graph/weightedGraph");

describe("weightedGraph", () => {
    it("should print the wei graph", () => {
        // given - when - then
        const graph = new WeightedGraph();

        graph.addNode("A");
        graph.addNode("B");
        graph.addNode("C");
        graph.addEdge("A", "B", 3);
        graph.addEdge("A", "C", 2);

        //graph.print();

        graph.removeNode("C");

        //graph.print();
    });
});
