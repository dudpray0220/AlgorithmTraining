/**
 * [문제 요약]
 * - 행복 왕국의 왕실 정원은 체스판과 같은 8 × 8 좌표 평면
 * - 나이트(Knight)는 특정한 한 칸에 서 있음
 * - 나이트는 L자 형태로만 이동할 수 있고 정원 밖으로는 나갈 수 없음
 * - 나이트는 다음과 같은 2가지 경우로 이동 가능:
 *   1. 수평으로 두 칸 이동한 뒤에 수직으로 한 칸 이동하기
 *   2. 수직으로 두 칸 이동한 뒤에 수평으로 한 칸 이동하기
 * - 8×8 좌표 평면상에서 나이트의 위치가 주어졌을 때 나이트가 이동할 수 있는 경우의 수를 구하기
 * - 왕실의 정원에서 행 위치를 표현할 때는 1부터 8로 표현하며, 열 위치를 표현할 때는 a부터 h로 표현
 *
 * [입력 조건]
 * - 첫째 줄에 8 × 8 좌표 평면상에서 현재 나이트가 위치한 곳의 좌표를 나타내는 두 문자로 구성된 문자열이 입력됨
 * - 입력 문자는 a1처럼 열과 행으로 이루어짐
 *
 * [출력 조건]
 * - 첫째 줄에 나이트가 이동할 수 있는 경우의 수를 출력하시오.
 *
 * [예시]
 * - 입력: a1
 * - 출력: 2
 * - 설명: a1에 있을 때 이동할 수 있는 경우는 2가지
 *
 * @param {string} position - 나이트의 위치 (예: "a1", "c2")
 * @return {number} - 나이트가 이동할 수 있는 경우의 수
 */

// 핵심: position -> 열, 행 분리 -> 숫자로 변환! -> 방향에 대해 차례차례 구현!

function countKnightMoves(position) {
  // 위치를 열(col)과 행(row)으로 분리 (예: position = a1)
  const col = position.charAt(0); // 'a'부터 'h'까지의 문자
  const row = parseInt(position.charAt(1)); // 1부터 8까지의 숫자 (// 문자열 '1'을 숫자 1로 변환!)

  // 열을 숫자로 변환 (a=1, b=2, ..., h=8)
  // charCodeAt(0) 메서드는 문자열의 지정된 인덱스(여기서는 0, 즉 첫 번째 문자)에 있는 문자의 Unicode 코드 포인트(숫자 값)를 반환

  // col.charCodeAt(0): 현재 열 문자의 Unicode 값을 가져옵니다.
  // 'a'.charCodeAt(0): 'a'의 Unicode 값(97)을 가져옵니다.
  // col.charCodeAt(0) - 'a'.charCodeAt(0): 두 값의 차이를 계산합니다. 이렇게 하면 'a'는 0, 'b'는 1, ... 'h'는 7이 됩니다.
  // + 1: 체스판은 1부터 시작하므로 1을 더해 'a'는 1, 'b'는 2, ... 'h'는 8이 되도록 합니다.
  const colNum = col.charCodeAt(0) - 'a'.charCodeAt(0) + 1;

  // 나이트가 이동할 수 있는 8가지 방향
  const dx = [2, 2, -2, -2, 1, 1, -1, -1];
  const dy = [1, -1, 1, -1, 2, -2, 2, -2];

  let count = 0;

  // 8가지 방향에 대해 이동 가능한지 확인
  for (let i = 0; i < 8; i++) {
    const nextRow = row + dx[i];
    const nextCol = colNum + dy[i];

    // 이동 가능한 위치인지 확인 (체스판 범위 내에 있는지)
    if (nextRow >= 1 && nextRow <= 8 && nextCol >= 1 && nextCol <= 8) {
      count++;
    }
  }

  return count;
}

// 예시 테스트
console.log(countKnightMoves('a1')); // 출력: 2
console.log(countKnightMoves('c2')); // 출력: 6
