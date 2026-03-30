// DSA Roadmap Data - Organized by weeks and days
const roadmapData = [
    {
        week: 1,
        title: "Week 1: Foundations",
        days: [
            {
                day: 1,
                topics: ["Big-O Notation", "Time Complexity", "Space Complexity"],
                difficulty: "easy",
                resources: "https://www.youtube.com/watch?v=Z0bH0cMY0mE"
            },
            {
                day: 2,
                topics: ["Arrays Basics", "List operations (insert, delete, search)"],
                difficulty: "easy",
                resources: "https://www.youtube.com/watch?v=A6XzLkc3NQs"
            },
            {
                day: 3,
                topics: ["Strings", "String manipulations", "2-pointer technique"],
                difficulty: "easy",
                resources: "https://www.youtube.com/watch?v=CfZkUJzXNA4"
            },
            {
                day: 4,
                topics: ["Linked Lists", "Singly Linked List", "Node creation"],
                difficulty: "medium",
                resources: "https://www.youtube.com/watch?v=58YbpRDc4o4"
            },
            {
                day: 5,
                topics: ["Linked List Operations", "Insertion, Deletion, Traversal"],
                difficulty: "medium",
                resources: "https://www.youtube.com/watch?v=3p7pWKDmWOk"
            },
            {
                day: 6,
                topics: ["Stack and Queue", "Implementation using arrays/lists"],
                difficulty: "medium",
                resources: "https://www.youtube.com/watch?v=jV1mYtL1YSQ"
            },
            {
                day: 7,
                topics: ["Week 1 Review", "Practice problems", "Mock tests"],
                difficulty: "medium",
                resources: "https://www.leetcode.com"
            }
        ]
    },
    {
        week: 2,
        title: "Week 2: Advanced Data Structures",
        days: [
            {
                day: 8,
                topics: ["Trees", "Binary Trees", "Tree Traversals"],
                difficulty: "medium",
                resources: "https://www.youtube.com/watch?v=81dNvKwWsYM"
            },
            {
                day: 9,
                topics: ["Binary Search Tree", "BST properties", "Operations"],
                difficulty: "medium",
                resources: "https://www.youtube.com/watch?v=qvzWvzWw63c"
            },
            {
                day: 10,
                topics: ["AVL Trees", "Balancing", "Rotations"],
                difficulty: "hard",
                resources: "https://www.youtube.com/watch?v=TbvhGcf6UJU"
            },
            {
                day: 11,
                topics: ["Heaps", "Min/Max Heap", "Heap operations"],
                difficulty: "medium",
                resources: "https://www.youtube.com/watch?v=t0Cf8wnyK1c"
            },
            {
                day: 12,
                topics: ["Hash Tables", "Hashing", "Collision handling"],
                difficulty: "medium",
                resources: "https://www.youtube.com/watch?v=shs0KM3wKv8"
            },
            {
                day: 13,
                topics: ["Graphs", "Graph representation", "Adjacency list/matrix"],
                difficulty: "medium",
                resources: "https://www.youtube.com/watch?v=gXgEDyodOJU"
            },
            {
                day: 14,
                topics: ["Week 2 Review", "Data structure comparison", "Problem solving"],
                difficulty: "medium",
                resources: "https://www.leetcode.com"
            }
        ]
    },
    {
        week: 3,
        title: "Week 3: Searching & Sorting",
        days: [
            {
                day: 15,
                topics: ["Linear Search", "Binary Search", "Complexity analysis"],
                difficulty: "easy",
                resources: "https://www.youtube.com/watch?v=qOK7uFEHoxI"
            },
            {
                day: 16,
                topics: ["Bubble Sort", "Selection Sort", "Insertion Sort"],
                difficulty: "easy",
                resources: "https://www.youtube.com/watch?v=7h1s4JthdQQ"
            },
            {
                day: 17,
                topics: ["Merge Sort", "Analysis", "Implementation"],
                difficulty: "medium",
                resources: "https://www.youtube.com/watch?v=JSceD-viHkE"
            },
            {
                day: 18,
                topics: ["Quick Sort", "Partition", "Quickselect"],
                difficulty: "medium",
                resources: "https://www.youtube.com/watch?v=Vtckgz38QHs"
            },
            {
                day: 19,
                topics: ["Heap Sort", "Counting Sort", "Radix Sort"],
                difficulty: "medium",
                resources: "https://www.youtube.com/watch?v=2DmK_H7IdTo"
            },
            {
                day: 20,
                topics: ["Sorting application problems", "Custom comparators"],
                difficulty: "medium",
                resources: "https://www.youtube.com/watch?v=ER_YHN8SLCo"
            },
            {
                day: 21,
                topics: ["Week 3 Review", "Sorting algorithms comparison", "Optimization"],
                difficulty: "medium",
                resources: "https://www.leetcode.com"
            }
        ]
    },
    {
        week: 4,
        title: "Week 4: Graph Algorithms I",
        days: [
            {
                day: 22,
                topics: ["DFS (Depth First Search)", "Implementation", "Applications"],
                difficulty: "medium",
                resources: "https://www.youtube.com/watch?v=PMMc4VsIvB8"
            },
            {
                day: 23,
                topics: ["BFS (Breadth First Search)", "Level-order traversal"],
                difficulty: "medium",
                resources: "https://www.youtube.com/watch?v=xlVX7dXLS64"
            },
            {
                day: 24,
                topics: ["Connected Components", "Cycle detection", "Bipartite graphs"],
                difficulty: "medium",
                resources: "https://www.youtube.com/watch?v=tWVWeAqZ0WU"
            },
            {
                day: 25,
                topics: ["Topological Sorting", "Kahn's algorithm", "DFS-based"],
                difficulty: "medium",
                resources: "https://www.youtube.com/watch?v=ddTC4Zovtbc"
            },
            {
                day: 26,
                topics: ["Dijkstra's Algorithm", "Shortest path single source"],
                difficulty: "hard",
                resources: "https://www.youtube.com/watch?v=_zia5mbNPYI"
            },
            {
                day: 27,
                topics: ["Bellman-Ford Algorithm", "Handling negative edges"],
                difficulty: "hard",
                resources: "https://www.youtube.com/watch?v=9PHkk0T4tel"
            },
            {
                day: 28,
                topics: ["Week 4 Review", "Graph problems practice", "Complexity analysis"],
                difficulty: "hard",
                resources: "https://www.leetcode.com"
            }
        ]
    },
    {
        week: 5,
        title: "Week 5: Graph Algorithms II & Dynamic Programming Intro",
        days: [
            {
                day: 29,
                topics: ["Floyd-Warshall Algorithm", "All-pairs shortest path"],
                difficulty: "hard",
                resources: "https://www.youtube.com/watch?v=UYVMSwoeyL8"
            },
            {
                day: 30,
                topics: ["MST - Kruskal's Algorithm", "Union-Find"],
                difficulty: "hard",
                resources: "https://www.youtube.com/watch?v=-Pkh0G6kW50"
            },
            {
                day: 31,
                topics: ["MST - Prim's Algorithm", "Graph edge selection"],
                difficulty: "hard",
                resources: "https://www.youtube.com/watch?v=0Xx3Zs-KwN0"
            },
            {
                day: 32,
                topics: ["DP Concepts", "Overlapping subproblems", "Optimal substructure"],
                difficulty: "medium",
                resources: "https://www.youtube.com/watch?v=aPQY__2H3tE"
            },
            {
                day: 33,
                topics: ["Fibonacci DP", "Memoization", "Tabulation"],
                difficulty: "medium",
                resources: "https://www.youtube.com/watch?v=5dRGRueKU1M"
            },
            {
                day: 34,
                topics: ["0/1 Knapsack Problem", "DP approach"],
                difficulty: "hard",
                resources: "https://www.youtube.com/watch?v=nLmNB9K-S58"
            },
            {
                day: 35,
                topics: ["Week 5 Review", "Graph + DP problems", "Integration"],
                difficulty: "hard",
                resources: "https://www.leetcode.com"
            }
        ]
    },
    {
        week: 6,
        title: "Week 6: Dynamic Programming Advanced",
        days: [
            {
                day: 36,
                topics: ["Coin Change Problem", "Unbounded knapsack"],
                difficulty: "hard",
                resources: "https://www.youtube.com/watch?v=mVg9GW0oJZk"
            },
            {
                day: 37,
                topics: ["LCS - Longest Common Subsequence", "Edit distance"],
                difficulty: "hard",
                resources: "https://www.youtube.com/watch?v=6AbgEDEqXVo"
            },
            {
                day: 38,
                topics: ["Matrix Chain Multiplication", "Catalan number problems"],
                difficulty: "hard",
                resources: "https://www.youtube.com/watch?v=kvKJrqFJe5M"
            },
            {
                day: 39,
                topics: ["DP on Grids", "Unique paths", "Min path sum"],
                difficulty: "hard",
                resources: "https://www.youtube.com/watch?v=tdCIgvY2gKc"
            },
            {
                day: 40,
                topics: ["DP on Trees", "Tree DP patterns"],
                difficulty: "hard",
                resources: "https://www.youtube.com/watch?v=qNXLG2BzEE0"
            },
            {
                day: 41,
                topics: ["Advanced DP problems", "State optimization"],
                difficulty: "hard",
                resources: "https://www.leetcode.com"
            },
            {
                day: 42,
                topics: ["Week 6 Review", "DP practice marathon", "Problem patterns"],
                difficulty: "hard",
                resources: "https://www.leetcode.com"
            }
        ]
    },
    {
        week: 7,
        title: "Week 7: Greedy Algorithms & Advanced Topics",
        days: [
            {
                day: 43,
                topics: ["Greedy Algorithm Basics", "Activity selection", "Proof techniques"],
                difficulty: "medium",
                resources: "https://www.youtube.com/watch?v=2DnNj1pKd3o"
            },
            {
                day: 44,
                topics: ["Huffman Coding", "Interval scheduling", "Job sequencing"],
                difficulty: "hard",
                resources: "https://www.youtube.com/watch?v=fWq0KF5J1nU"
            },
            {
                day: 45,
                topics: ["Divide and Conquer", "Master theorem", "Problem solving"],
                difficulty: "hard",
                resources: "https://www.youtube.com/watch?v=g0ySE5S0pTc"
            },
            {
                day: 46,
                topics: ["Backtracking basics", "N-Queens problem", "Sudoku solver"],
                difficulty: "hard",
                resources: "https://www.youtube.com/watch?v=OKVB4uqCh1M"
            },
            {
                day: 47,
                topics: ["Advanced Backtracking", "Permutations, Combinations"],
                difficulty: "hard",
                resources: "https://www.youtube.com/watch?v=7qTPnLi8LqI"
            },
            {
                day: 48,
                topics: ["Bit Manipulation", "Bitwise operations", "Problems"],
                difficulty: "medium",
                resources: "https://www.youtube.com/watch?v=xXlhHkhorTE"
            },
            {
                day: 49,
                topics: ["Week 7 Review", "Mixed algorithm problems", "Optimization"],
                difficulty: "hard",
                resources: "https://www.leetcode.com"
            }
        ]
    },
    {
        week: 8,
        title: "Week 8: Final Review & Practice",
        days: [
            {
                day: 50,
                topics: ["Competitive programming tips", "Interview prep"],
                difficulty: "hard",
                resources: "https://www.youtube.com/watch?v=7h1s4JthdQQ"
            },
            {
                day: 51,
                topics: ["Mock interviews", "System design basics", "Problem solving"],
                difficulty: "hard",
                resources: "https://www.youtube.com/watch?v=RdZSGkuQo3s"
            },
            {
                day: 52,
                topics: ["Full practice test", "Time management", "Debugging skills"],
                difficulty: "hard",
                resources: "https://www.leetcode.com"
            },
            {
                day: 53,
                topics: ["Review weak areas", "Reinforcement learning"],
                difficulty: "medium",
                resources: "https://www.youtube.com/watch?v=aMG0qKw0sXs"
            },
            {
                day: 54,
                topics: ["Practice mediums", "Real interview questions"],
                difficulty: "hard",
                resources: "https://www.leetcode.com"
            },
            {
                day: 55,
                topics: ["Advanced problem solving", "Edge case handling"],
                difficulty: "hard",
                resources: "https://www.youtube.com/watch?v=7h1s4JthdQQ"
            },
            {
                day: 56,
                topics: ["Final review", "Consolidation", "Celebration! 🎉"],
                difficulty: "easy",
                resources: "https://www.youtube.com/watch?v=LoOlvLlfV4k"
            }
        ]
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = roadmapData;
}
