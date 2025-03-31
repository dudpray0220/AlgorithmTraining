/**
 * [문제 요약]
 * - 여행가 A는 N × N 크기의 정사각형 공간 위에 서 있음
 * - 가장 왼쪽 위 좌표는 (1, 1), 가장 오른쪽 아래 좌표는 (N, N)
 * - 여행가 A는 상, 하, 좌, 우 방향으로 이동할 수 있으며, 시작 좌표는 (1, 1)
 * - 계획서에는 L(왼쪽), R(오른쪽), U(위쪽), D(아래쪽) 중 하나의 문자가 적혀 있음
 * - 공간을 벗어나는 움직임은 무시됨
 *
 * [입력 조건]
 * - 첫째 줄: 공간의 크기를 나타내는 N (1 ≤ N ≤ 100)
 * - 둘째 줄: 여행가 A가 이동할 계획서 내용 (1 ≤ 이동 횟수 ≤ 100)
 *
 * [출력 조건]
 * - 여행가 A가 최종적으로 도착할 지점의 좌표 (X, Y)를 공백을 기준으로 구분하여 출력
 *
 * [예시]
 * - 입력: 5
 *        R R R U D D
 * - 출력: 3 4
 */

// input: 공간크기 N, 이동 계획서 내용 문자열
// output: 최종 도착 지점 좌표

function solution(N, plans) {
  // 시작 위치 초기화
  let x = 1;
  let y = 1;

  // 이동 방향에 따른 x, y 좌표 변화량
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];
  const moveTypes = ['L', 'R', 'U', 'D'];

  // 계획서 내용을 하나씩 확인
  const planArray = plans.split(' ');

  for (const plan of planArray) {
    // 이동 후 좌표 계산
    const idx = moveTypes.indexOf(plan);
    const nx = x + dx[idx];
    const ny = y + dy[idx];

    // 공간을 벗어나는 경우 무시
    if (nx < 1 || ny < 1 || nx > n || ny > n) continue;

    // 이동 실행
    x = nx;
    y = ny;
  }

  return `${x} ${y}`;
}

// 예시 테스트
const n = 5;
const plans = 'R R R U D D';
console.log(solution(n, plans)); // 출력: "3 4"
