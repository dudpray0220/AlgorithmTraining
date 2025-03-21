/**
 * [문제 요약]
 * - 게임 캐릭터가 맵 안에서 움직이는 시스템 개발
 * - N×M 크기의 직사각형 맵, 각 칸은 육지(0) 또는 바다(1)
 * - 캐릭터는 상하좌우로 움직일 수 있으며 바다로는 갈 수 없음
 * - 특정 규칙에 따라 움직이며 방문한 칸의 수를 출력
 *
 * [입력 조건]
 * - 맵의 세로 크기 N, 가로 크기 M (3 ≤ N, M ≤ 50)
 * - 캐릭터 위치 (A, B)와 바라보는 방향 d (0: 북, 1: 동, 2: 남, 3: 서)
 * - 맵 정보 (0: 육지, 1: 바다)
 *
 * [출력 조건]
 * - 게임 캐릭터가 방문한 칸의 수 출력
 *
 * [게임 캐릭터 움직임 메뉴얼]
 * 1. 현재 위치에서 현재 방향을 기준으로 왼쪽 방향(반시계 방향으로 90도 회전)부터 차례대로 갈 곳을 정함
 * 2. 캐릭터의 바로 왼쪽 방향에 아직 가보지 않은 칸이 존재한다면:
 *    - 왼쪽 방향으로 회전
 *    - 왼쪽으로 한 칸 전진
 *    - 1번으로 돌아감
 * 3. 왼쪽 방향에 가보지 않은 칸이 없다면:
 *    - 왼쪽 방향으로 회전만 수행
 *    - 1번으로 돌아감
 * 4. 만약 네 방향 모두 이미 가본 칸이거나 바다로 되어 있는 칸인 경우:
 *    - 바라보는 방향을 유지한 채로 한 칸 뒤로 가고 1번으로 돌아감
 *    - 단, 뒤쪽 방향이 바다인 칸이라 뒤로 갈 수 없는 경우에는 움직임을 멈춤
 *
 * @param {number} n - 맵의 세로 크기
 * @param {number} m - 맵의 가로 크기
 * @param {number} startX - 캐릭터 시작 위치 X
 * @param {number} startY - 캐릭터 시작 위치 Y
 * @param {number} direction - 캐릭터 시작 방향
 * @param {number[][]} map - 맵 정보
 * @return {number} - 방문한 칸의 수
 */

function simulateGameCharacter(n, m, startX, startY, direction, map) {
  // 방향 정의 (북, 동, 남, 서)
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  // 방문 기록용 맵 생성 및 초기화
  const visited = Array(n)
    .fill()
    .map(() => Array(m).fill(false));

  // 시작 위치 방문 처리
  let x = startX;
  let y = startY;
  let dir = direction;
  visited[x][y] = true;
  let count = 1; // 시작 위치도 포함
  let turnCount = 0; // 회전 횟수

  while (true) {
    // 왼쪽으로 회전 (반시계 방향 90도)
    dir = (dir + 3) % 4;

    // 회전한 방향으로 이동할 좌표 계산
    const nx = x + dx[dir];
    const ny = y + dy[dir];

    // 가보지 않은 칸이고 육지인 경우 이동
    if (!visited[nx][ny] && map[nx][ny] === 0) {
      visited[nx][ny] = true;
      x = nx;
      y = ny;
      count++;
      turnCount = 0;
      continue;
    } else {
      // 회전만 수행
      turnCount++;
    }

    // 네 방향 모두 이미 가본 칸이거나 바다인 경우
    if (turnCount === 4) {
      // 뒤로 이동할 좌표 계산 (현재 방향에서 180도 회전)
      const backDir = (dir + 2) % 4;
      const bx = x + dx[backDir];
      const by = y + dy[backDir];

      // 뒤가 바다면 움직임을 멈춤
      if (map[bx][by] === 1) {
        break;
      }

      // 뒤로 이동
      x = bx;
      y = by;
      turnCount = 0;

      // 뒤로 이동한 칸은 이미 방문한 칸이므로 count는 증가하지 않음
    }
  }

  return count;
}

// 예시 테스트 (문제의 예제 입력 가정)
// 4×4 맵에서 (1,1) 위치에 북쪽(0)을 바라보고 시작
const n = 4;
const m = 4;
const startX = 1;
const startY = 1;
const direction = 0;
const map = [
  [1, 1, 1, 1],
  [1, 0, 0, 1],
  [1, 1, 0, 1],
  [1, 1, 1, 1],
];

console.log(simulateGameCharacter(n, m, startX, startY, direction, map)); // 출력: 3
