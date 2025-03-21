/**
 * [문제 요약]
 * - N × M 형태의 카드가 놓여 있음 (N: 행의 개수, M: 열의 개수)
 * - 카드 선택 규칙:
 *   1. 행을 선택
 *   2. 선택된 행에서 가장 숫자가 낮은 카드를 뽑아야 함
 * - 최종 목표: 가장 높은 숫자의 카드를 뽑는 것
 *
 * [문제 해설]
 * 1. N행 × M열로 카드가 놓여 있습니다. 즉, 표 형태로 카드가 배치되어 있습니다.
 * 2. 플레이어는 먼저 카드가 놓인 행을 하나 선택합니다.
 * 3. 그런 다음, 선택한 행에서 가장 숫자가 낮은 카드를 뽑아야 합니다. 즉, 행을 선택하면 그 행에서 가장 작은 숫자를 뽑게 됩니다.
 * 4. 최종 목표는 뽑은 카드의 숫자가 가능한 한 크도록 하는 것입니다.
 *
 * [예시]
 * 3 1 2
 * 4 1 4
 * 2 2 2
 * 1행을 선택하면 → 가장 작은 숫자는 1
 * 2행을 선택하면 → 가장 작은 숫자는 1
 * 3행을 선택하면 → 가장 작은 숫자는 2
 * 각 행에서 가장 작은 숫자 중 가장 큰 값은 2입니다. 따라서 최적의 전략은 3행을 선택하는 것입니다.
 *
 * [입력 조건]
 * - 첫째 줄에 카드 행의 개수 N과 열의 개수 M이 공백으로 구분되어 주어짐 (1 ≤ N, M ≤ 100)
 * - 둘째 줄부터 N개의 줄에 걸쳐 각 카드에 적힌 숫자가 주어짐 (각 숫자는 1 이상 10,000 이하)
 *
 * [출력 조건]
 * - 첫째 줄에 게임의 룰에 맞게 선택한 카드의 숫자를 출력
 *
 * @param {number} n - 행의 개수
 * @param {number} m - 열의 개수
 * @param {number[][]} cards - 카드 배열
 * @return {number} - 게임 규칙에 따라 뽑은 카드의 숫자
 */

// 단순 구현 방식
function cardGame(n, m, cards) {
  // 각 행에서 가장 작은 카드 찾기
  const minValues = [];

  for (let i = 0; i < n; i++) {
    // 현재 행에서 가장 작은 값 찾기
    let minValue = cards[i][0]; // 현재 행의 첫 번째 원소로 초기화

    for (let j = 0; j < m; j++) {
      minValue = Math.min(minValue, cards[i][j]);
    }

    // 현재 행의 최소값을 배열에 추가
    minValues.push(minValue);
  }

  // 각 행의 최소값 중 가장 큰 값 찾기
  let result = minValues[0];
  for (let i = 1; i < minValues.length; i++) {
    result = Math.max(result, minValues[i]);
  }

  return result;
}

// 최적화된 방식
function cardGameOptimized(n, m, cards) {
  let result = 0;

  // 각 행마다 반복
  for (let i = 0; i < n; i++) {
    // 현재 행에서 가장 작은 카드 찾기
    // 예: Math.min(...[3, 1, 2]) → Math.min(3, 1, 2) → 1
    let minInRow = Math.min(...cards[i]);

    // 이전에 찾은 행의 최소값보다 현재 행의 최소값이 크면 갱신
    result = Math.max(result, minInRow);
  }

  return result;
}

// 예시 테스트 1
const n1 = 3;
const m1 = 3;
const cards1 = [
  [3, 1, 2],
  [4, 1, 4],
  [2, 2, 2],
];

// 예시 테스트 2
const n2 = 4;
const m2 = 4;
const cards2 = [
  [2, 4, 0, 0],
  [7, 3, 1, 8],
  [3, 3, 3, 4],
  [0, 0, 0, 0],
];

console.log('예시 1 결과:', cardGame(n1, m1, cards1)); // 출력: 2
console.log('예시 2 결과:', cardGameOptimized(n2, m2, cards2)); // 출력: 3
