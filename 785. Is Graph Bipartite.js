// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=785 lang=javascript
 *
 * [785]  Is Graph Bipartite?
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {boolean}
 */

var isBipartite = function (graph) {
  const visited = {};
  for (let i = 0; i < graph.length; i++) {
    if (!visited[i]) {
      const result = bsf(graph, visited, (queue = [i]));
      if (!result) return result;
    }
  }
  return true;
};

function bsf(graph, visited, queue) {
  let result = true;
  while (queue.length > 0) {
    const vertex = queue.shift();
    if (!visited[vertex]) visited[vertex] = 'red';
    graph[vertex].map((value) => {
      if (visited[value] === visited[vertex]) {
        result = false;
        return;
      }
      if (!visited[value]) {
        visited[value] = visited[vertex] === 'red' ? 'blue' : 'red';
        queue.push(value);
      }
    });
    if (!result) return result;
  }
  return result;
}

// @lc code=end
