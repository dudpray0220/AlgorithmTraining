/**
 * [문제 요약]
 * - N개의 동전이 주어졌을 때, 이 동전들로 만들 수 없는 양의 정수 금액 중 최솟값 구하기
 *
 * [문제 해결 방법]
 * 1. 동전을 오름차순으로 정렬
 * 2. 현재까지 만들 수 있는 금액의 최댓값(target)을 1로 초기화
 * 3. 각 동전을 순회하면서:
 *    - 만약 현재 동전이 target보다 크다면, target이 만들 수 없는 최소 금액
 *    - 그렇지 않다면, target에 현재 동전의 값을 더함
 *
 * [동전 아이디어]
 * 동전은 더하기(+)만 가능합니다 (1원 + 2원 = 3원)
 * 뺄셈(-)은 허용되지 않습니다 (5원 - 1원 = 4원은 불가능)
 * 각 동전은 사용하거나 사용하지 않거나 둘 중 하나입니다 (부분적으로 사용 불가)
 *
 * [핵심 원리]
 * - target 이전의 모든 금액은 만들 수 있다고 가정할 때
 * - 현재 동전이 target보다 크면 target 금액을 만들 수 없음
 * - 현재 동전이 target 이하라면, target + 현재 동전 금액까지 모든 금액을 만들 수 있음
 *
 * @param {number} n - 동전의 개수
 * @param {number[]} coins - 각 동전의 화폐 단위를 담은 배열
 * @return {number} - 만들 수 없는 양의 정수 금액 중 최솟값
 */

function findMinimumImpossibleAmount(n, coins) {
  // 동전을 오름차순으로 정렬
  coins.sort((a, b) => a - b);

  // 현재까지 만들 수 있는 금액의 최댓값
  let target = 1;

  // 각 동전을 순회
  for (let i = 0; i < n; i++) {
    // 현재 동전이 target보다 크면 target을 만들 수 없음
    if (coins[i] > target) {
      break;
    }

    // target에 현재 동전 값을 더해 만들 수 있는 최댓값 갱신
    target += coins[i];
  }

  return target;
}

// 예시 테스트
console.log(findMinimumImpossibleAmount(5, [3, 2, 1, 1, 9])); // 출력: 8
console.log(findMinimumImpossibleAmount(3, [3, 5, 7])); // 출력: 1
