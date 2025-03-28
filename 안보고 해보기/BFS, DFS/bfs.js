/**
 * [문제 요약]
 * - BFS(너비 우선 탐색) 알고리즘 구현
 * - 주어진 그래프에서 시작 노드(1)부터 모든 노드를 방문
 * - 방문 기준: 현재 노드에서 가까운 노드부터 우선적으로 방문
 *
 * [그래프 구조]
 * - 노드: 1, 2, 3, 4, 5, 6, 7, 8
 * - 간선: (1-2), (1-3), (1-8), (2-7), (3-4), (3-5), (4-5), (7-6), (7-8)
 *
 * [구현 방식]
 * - 큐를 사용하여 BFS 구현
 *
 * [DFS와의 차이점]
 * BFS는 일반적으로 재귀적으로 구현하지 않습니다.
 * BFS의 핵심은 "레벨 단위"로 탐색하는 것입니다.
 * 즉, 현재 노드와 같은 레벨(깊이)에 있는 모든 노드들을 먼저 방문한 후에 다음 레벨로 넘어가야 합니다.
 * 재귀 함수는 기본적으로 호출 스택을 사용하기 때문에 깊이 우선 탐색(DFS)에 자연스럽게 맞습니다. 재귀 호출이 스택에 쌓이면서 깊이를 우선으로 탐색하게 됩니다.
 * 반면 BFS는: 현재 레벨의 모든 노드를 큐에서 꺼내고, 그 노드들의 자식들을 모두 큐에 추가하는 과정을 반복합니다
 * 이런 레벨 단위 처리는 반복문(while문)과 큐를 사용하여 구현하는 것이 자연스럽습니다.
 *
 * @param {number} startNode - 탐색 시작 노드
 * @param {Map<number, number[]>} graph - 그래프의 인접 리스트 표현
 * @return {number[]} - BFS 방문 순서
 */

// 그래프 생성 함수
function createGraph() {
  const graph = new Map();

  // 각 노드의 인접 노드 리스트 초기화 (번호가 낮은 순서로 정렬)
  graph.set(1, [2, 3, 8]);
  graph.set(2, [1, 7]);
  graph.set(3, [1, 4, 5]);
  graph.set(4, [3, 5]);
  graph.set(5, [3, 4]);
  graph.set(6, [7]);
  graph.set(7, [2, 6, 8]);
  graph.set(8, [1, 7]);

  return graph;
}

function bfs(graph, startNode) {
  const visited = new Set();
  const result = [];
  const queue = [startNode];

  visited.add(startNode);

  while (queue.length > 0) {
    const node = queue.shift();

    result.push(node);

    const neighbors = graph.get(node) || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return result;
}

// 그래프 생성
const graph = createGraph();

// 시작 노드 설정
const startNode = 1;

// BFS 실행
const bfsResult = bfs(graph, startNode);
console.log('BFS 방문 순서:', bfsResult.join(' -> '));
