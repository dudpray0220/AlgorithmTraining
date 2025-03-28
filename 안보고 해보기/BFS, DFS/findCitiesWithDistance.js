/**
 * [문제 요약]
 * - N개의 도시와, M개의 단방향 도로가 있음
 * - 특정 도시 X에서 출발하여 최단 거리가 정확히 K인 모든 도시를 찾아야 함
 * - 모든 도로의 거리는 1
 * - K 거리의 도시가 없으면 -1 출력
 *
 * [문제 해결 방법]
 * 1. 단방향 그래프 구축
 * 2. BFS로 X에서 각 도시까지의 최단 거리 계산
 * 3. 최단 거리가 K인 도시들만 오름차순으로 출력
 *
 * @param {number} n - 도시의 개수
 * @param {number} m - 도로의 개수
 * @param {number} k - 찾고자 하는 거리
 * @param {number} x - 출발 도시
 * @param {number[][]} roads - 도로 정보 [a, b] (a에서 b로 가는 도로)
 * @return {number[]} - K 거리에 있는 모든 도시 번호 (오름차순) 또는 [-1]
 */

function findCitiesWithDistance(n, m, k, x, roads) {
  const graph = Array.from({ length: n + 1 }, () => []);

  for (const [from, to] of roads) {
    graph[from].push(to);
  }

  const distances = Array(n + 1).fill(-1);
  distances[x] = 0;

  const queue = [x];

  while (queue.length > 0) {
    const currentCity = queue.shift();

    for (const nextCity of graph[currentCity]) {
      if (distances[nextCity] === -1) {
        distances[nextCity] = distances[currentCity] + 1;
        queue.push(nextCity);
      }
    }
  }

  const result = [];
  for (let i = 1; i <= n; i++) {
    if (distances[i] === k) result.push(i);
  }

  return result.length === 0 ? [-1] : result;
}

// 예시 테스트
// 입력 예시 1: 도시 개수 4, 도로 개수 4, 거리 2, 출발 도시 1
const n1 = 4,
  m1 = 4,
  k1 = 2,
  x1 = 1;
const roads1 = [
  [1, 2],
  [1, 3],
  [2, 3],
  [2, 4],
];
console.log(findCitiesWithDistance(n1, m1, k1, x1, roads1)); // 출력: [4]

// 입력 예시 2: 도시 개수 4, 도로 개수 3, 거리 2, 출발 도시 1
const n2 = 4,
  m2 = 3,
  k2 = 2,
  x2 = 1;
const roads2 = [
  [1, 2],
  [1, 3],
  [1, 4],
];
console.log(findCitiesWithDistance(n2, m2, k2, x2, roads2)); // 출력: [-1]

// 입력 예시 3: 도시 개수 4, 도로 개수 4, 거리 1, 출발 도시 1
const n3 = 4,
  m3 = 4,
  k3 = 1,
  x3 = 1;
const roads3 = [
  [1, 2],
  [1, 3],
  [2, 3],
  [2, 4],
];
console.log(findCitiesWithDistance(n3, m3, k3, x3, roads3)); // 출력: [2, 3]
