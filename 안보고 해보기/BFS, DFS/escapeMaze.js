/**
 * [문제 요약]
 * - N × M 크기의 직사각형 미로에 갇힌 동빈이가 탈출하기 위한 최소 이동 칸 수 계산
 * - 동빈이 위치는 (1, 1), 출구는 (N, M)
 * - 괴물이 있는 부분은 0, 괴물이 없는 부분은 1로 표시됨
 * - 동빈이는 1로 표시된 부분만 이동 가능
 * - 인접한 칸으로 한 번에 한 칸씩 이동 가능 (상하좌우)
 * - 시작 칸과 마지막 칸도 카운트에 포함
 *
 * [입력 조건]
 * - 첫째 줄에 두 정수 N, M(4 ≤ N, M ≤ 200)이 주어집니다.
 * - 다음 N개의 줄에는 각각 M개의 정수(0 또는 1)로 미로의 정보가 주어짐
 * - 시작 칸과 마지막 칸은 항상 1
 *
 * [출력 조건]
 * - 첫째 줄에 최소 이동 칸의 개수를 출력
 *
 * [핵심 아이디어]
 * 1. 이차원 배열을 이용하므로 미로정보를 이차원배열로 전환!
 * 2. 방문 거리 저장할 이차원 배열 생성!
 * 즉, 두 개의 2차원 배열을 사용!
 *
 * @param {number} n - 미로의 세로 길이
 * @param {number} m - 미로의 가로 길이
 * @param {string[]} maze - 미로 정보가 담긴 문자열 배열
 * @return {number} - 탈출하기 위한 최소 이동 칸 수
 */

function escapeMaze(n, m, maze) {
  const grid = [];
  for (let i = 0; i < n; i++) {
    grid.push(maze[i].split('').map(Number));
  }

  const distance = Array(n)
    .fill()
    .map(() => Array(m).fill(0));

  const startX = 0;
  const startY = 0;
  distance[startX][startY] = 1;

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const queue = [[startX, startY]];

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;

      if (grid[nx][ny] === 0 || distance[nx][ny] !== 0) continue;

      distance[nx][ny] = distance[x][y] + 1;
      queue.push([nx, ny]);
    }
  }

  return distance[n - 1][m - 1];
}

// 예시 테스트
const n = 5;
const m = 6;
const maze = ['101010', '111111', '000001', '111111', '111111'];

console.log('미로 탈출 최소 이동 칸 수:', escapeMaze(n, m, maze)); // 출력: 10
