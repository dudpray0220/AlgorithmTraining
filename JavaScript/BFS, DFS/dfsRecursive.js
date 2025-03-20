/**
 * [문제 요약]
 * - DFS(깊이 우선 탐색) 알고리즘 구현
 * - 주어진 그래프에서 시작 노드(1)부터 모든 노드를 방문
 * - 방문 기준: 번호가 낮은 인접 노드부터 방문
 *
 * [그래프 구조]
 * - 노드: 1, 2, 3, 4, 5, 6, 7, 8
 * - 간선: (1-2), (1-3), (1-8), (2-7), (3-4), (3-5), (4-5), (7-6), (7-8)
 *
 * [구현 방식]
 * 1. 인접 리스트로 그래프 표현
 * 2. 재귀적 DFS 구현
 * 3. 스택을 활용한 반복적 DFS 구현
 *
 * [핵심]
 * 1. 탐색 시작 노드를 스택에 삽입하고 방문 처리를 한다.
 * 2. 스택의 최상단 노드에 방문하지 않은 인접 노드가 있으면 그 인접 노드를 스택에 넣고 방문 처리
 * 방문하지 않은 인접 노드가 없으면 스택에서 최상단 노드를 꺼낸다.
 * 3. 2번의 과정을 더 이상 수행할 수 없을때까지 반복한다.
 *
 * [재귀 알고리즘]
 * 예를들어, explore(6) 이후엔 더 이상 방문할 이웃이 없으므로 explore(6) 함수 종료
 * 여기서 핵심은 재귀 호출 스택! 함수가 종료되면 어디로 돌아가나요? 바로 이전에 호출한 함수로 돌아갑니다.
 * explore(6)는 누가 호출했나요? explore(7)의 for 루프에서 호출했습니다.
 * explore(6) 종료 후 explore(7)의 for 루프로 돌아감 -> 7의 다음 인접 노드인 8 검사
 * 재귀 함수에서 이 "되돌아가기"는 자동으로 이루어집니다. 함수가 종료되면 이전에 호출된 함수로 자연스럽게 돌아가기 때문!
 *
 * @param {number} startNode - 탐색 시작 노드
 * @param {Map<number, number[]>} graph - 그래프의 인접 리스트 표현
 * @return {number[]} - DFS 방문 순서
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

// 재귀적 DFS 구현
function dfsRecursive(graph, startNode) {
  const visited = new Set(); // 방문한 노드 추적
  const result = []; // 방문 순서 저장

  function explore(node) {
    // 현재 노드를 방문 처리
    visited.add(node);
    result.push(node);

    // 인접 노드를 방문 (이미 낮은 번호 순으로 정렬되어 있음)
    const neighbors = graph.get(node) || [];
    for (const neighbor of neighbors) {
      // 아직 방문하지 않은 노드만 방문
      if (!visited.has(neighbor)) {
        explore(neighbor);
      }
    }
  }

  // 시작 노드부터 탐색 시작
  explore(startNode);
  return result;
}

// 스택을 활용한 반복적 DFS 구현
function dfsIterative(graph, startNode) {
  const visited = new Set(); // 방문한 노드 추적
  const result = []; // 방문 순서 저장
  const stack = [startNode]; // 방문할 노드를 저장하는 스택

  while (stack.length > 0) {
    // 스택에서 노드 꺼내기
    const node = stack.pop();

    // 이미 방문한 노드는 건너뛰기
    if (visited.has(node)) continue;

    // 현재 노드를 방문 처리
    visited.add(node);
    result.push(node);

    // 인접 노드를 스택에 추가 (번호가 낮은 노드를 나중에 처리하도록 역순으로 추가)
    // 스택 = 후입선출 이므로
    const neighbors = [...(graph.get(node) || [])]; // 인접 노드 배열 복사
    // 마지막 요소부터 첫 요소까지 역순으로
    for (let i = neighbors.length - 1; i >= 0; i--) {
      const neighbor = neighbors[i];
      if (!visited.has(neighbor)) {
        // 방문하지 않은 노드만
        stack.push(neighbor); // 스택에 추가
      }
    }
  }

  return result;
}

// 그래프 생성
const graph = createGraph();

// 시작 노드 설정
const startNode = 1;

// 재귀적 DFS 실행
const recursiveResult = dfsRecursive(graph, startNode);
console.log('재귀적 DFS 방문 순서:', recursiveResult.join(' -> '));

// 반복적 DFS 실행
const iterativeResult = dfsIterative(graph, startNode);
console.log('반복적 DFS 방문 순서:', iterativeResult.join(' -> '));
