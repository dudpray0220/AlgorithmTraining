/**
 * [문제 요약]
 * - 팩토리얼(n!) 함수를 반복문과 재귀로 구현
 * - n! = 1 × 2 × 3 × ... × (n-1) × n
 * - 수학적으로 0!과 1!의 값은 1
 *
 * [구현 방식]
 * 1. 반복적 방식 - for 루프 사용
 * 2. 재귀적 방식 - 함수가 자기 자신을 호출
 *
 * @param {number} n - 팩토리얼을 계산할 양의 정수
 * @return {number} - n!의 계산 결과
 */

// 반복적으로 구현한 팩토리얼
function factorialIterative(n) {
  // 입력값 유효성 검사
  if (n < 0 || !Number.isInteger(n)) {
    throw new Error('팩토리얼은 음수나 소수점이 있는 수에 대해 정의되지 않습니다.');
  }

  // 0!과 1!은 모두 1
  if (n <= 1) return 1;

  let result = 1;
  // 1부터 n까지 순차적으로 곱하기
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

// 재귀적으로 구현한 팩토리얼
function factorialRecursive(n) {
  // 입력값 유효성 검사
  if (n < 0 || !Number.isInteger(n)) {
    throw new Error('팩토리얼은 음수나 소수점이 있는 수에 대해 정의되지 않습니다.');
  }

  // 기저 조건(base case): 0!과 1!은 모두 1
  if (n <= 1) return 1;

  // 재귀 호출: n! = n * (n-1)!
  return n * factorialRecursive(n - 1);
}

// 각각의 방식으로 팩토리얼 계산 (예: n = 5)
console.log('반복적으로 구현:', factorialIterative(5)); // 출력: 120
console.log('재귀적으로 구현:', factorialRecursive(5)); // 출력: 120

// 성능 비교를 위한 큰 수 테스트 (재귀는 스택 오버플로우 위험 있음)
console.log('반복적으로 구현(15):', factorialIterative(15)); // 1307674368000
// console.log('재귀적으로 구현(15):', factorialRecursive(15)); // 같은 결과지만 스택 깊이 주의
