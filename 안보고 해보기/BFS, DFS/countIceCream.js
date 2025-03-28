/**
 * [문제 요약]
 * - N×M 크기의 얼음 틀이 있음
 * - 구멍이 뚫려 있는 부분은 0, 칸막이가 존재하는 부분은 1로 표시
 * - 구멍이 뚫려 있는 부분끼리 상, 하, 좌, 우로 붙어 있는 경우 서로 연결되어 있다고 간주
 * - 얼음 틀의 모양이 주어졌을 때 생성되는 총 아이스크림의 개수를 구하는 프로그램
 *
 * [입력 조건]
 * - 첫 번째 줄에 얼음 틀의 세로 길이 N과 가로 길이 M이 주어짐 (1 ≤ N, M ≤ 1,000)
 * - 두 번째 줄부터 N+1번째 줄까지 얼음 틀의 형태가 주어짐
 * - 구멍이 뚫려있는 부분은 0, 그렇지 않은 부분은 1
 *
 * [출력 조건]
 * - 한 번에 만들 수 있는 아이스크림의 개수를 출력
 *
 * [핵심 로직]
 * 0. 2차원 배열을 이용하고 있으므로 2차원 배열 형식을 이용해야 한다.
 * 1. 얼음틀 정보를 2차원 배열로 바꾼다.
 * 2. 방문여부 체크할 배열을 2차원 배열로 만든다.
 * 3. 좌표계에서 사용할 상, 하, 좌, 우 방향 벡터를 만든다.
 * 4. 유효한 좌표인지 확인하는 함수를 만든다.
 * 5. nx = x + dx[i]를 이용하여 dfs를 만든다.
 * 6. n, m을 이용하여 순회하며 dfs를 재귀적으로 이용한다.
 *
 * @param {number} n - 얼음 틀의 세로 길이
 * @param {number} m - 얼음 틀의 가로 길이
 * @param {string[]} grid - 얼음 틀 정보가 담긴 문자열 배열
 * @return {number} - 생성되는 아이스크림의 총 개수
 */

function countIceCream(n, m, grid) {
  const iceFrame = [];
  for (let i = 0; i < n; i++) {
    iceFrame.push(grid[i].split('').map(Number));
  }

  const visited = Array(n)
    .fill()
    .map(() => Array(m).fill(false));

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  function isValid(x, y) {
    return x >= 0 && x < n && y >= 0 && y < m;
  }

  function dfs(x, y) {
    visited[x][y] = true;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (isValid(nx, ny) && !visited[nx][ny] && iceFrame[nx][ny] === 0) {
        dfs(nx, ny);
      }
    }
  }

  let iceCreamCount = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!visited[i][j] && iceFrame[i][j] === 0) {
        dfs(i, j);
        iceCreamCount++;
      }
    }
  }

  return iceCreamCount;
}

// 예시 테스트
const n = 4;
const m = 5;
const grid = ['00110', '00011', '11111', '00000'];

console.log('DFS 결과:', countIceCream(n, m, grid)); // 출력: 3
