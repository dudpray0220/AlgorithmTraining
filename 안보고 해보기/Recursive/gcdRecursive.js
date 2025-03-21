/**
 * [문제 요약]
 * - 유클리드 호제법을 사용하여 두 정수의 최대공약수(GCD)를 구하는 함수 구현
 * - 유클리드 호제법 원리: 두 자연수 A, B에 대해 A를 B로 나눈 나머지를 R이라 할 때,
 *   A와 B의 최대공약수는 B와 R의 최대공약수와 같다
 *
 * [알고리즘 원리]
 * 1. A를 B로 나눈 나머지를 계산 (A % B = R)
 * 2. 나머지가 0이면 B가 최대공약수
 * 3. 나머지가 0이 아니면, B와 R(A % B)의 최대공약수를 구하기 위해 재귀적으로 함수 호출
 *
 * 두 수 A와 B의 최대공약수는 B와 (A를 B로 나눈 나머지)의 최대공약수와 같다
 * 이 과정을 나머지가 0이 될 때까지 반복하면, 그 때의 나누는 수가 최대공약수가 된다
 *
 * @param {number} a - 첫 번째 정수
 * @param {number} b - 두 번째 정수
 * @return {number} - 두 수의 최대공약수
 */

// 재귀적 방식으로 구현한 유클리드 호제법
function gcdRecursive(a, b) {
  // 입력값 절댓값 처리 (음수 입력 대응)
  a = Math.abs(a);
  b = Math.abs(b);

  // 두 수의 순서 정리 (a >= b로 만들기)
  if (a < b) {
    [a, b] = [b, a]; // 구조 분해 할당으로 swap
  }

  // 기저 조건: b가 0이면 a가 최대공약수
  if (b === 0) return a;

  // 유클리드 호제법 재귀 호출: gcd(a, b) = gcd(b, a % b)
  return gcdRecursive(b, a % b);
}

// 반복적 방식으로 구현한 유클리드 호제법 (스택 오버플로우 방지)
function gcdIterative(a, b) {
  // 입력값 절댓값 처리 (음수 입력 대응)
  a = Math.abs(a);
  b = Math.abs(b);

  // 두 수의 순서는 중요하지 않지만, a >= b로 시작하는 것이 일반적
  if (a < b) {
    [a, b] = [b, a];
  }

  // b가 0이 될 때까지 반복
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}

// 예시 테스트
console.log('재귀적 방식 GCD(192, 162):', gcdRecursive(192, 162)); // 출력: 6
console.log('반복적 방식 GCD(192, 162):', gcdIterative(192, 162)); // 출력: 6

// 다양한 케이스 테스트
console.log('GCD(48, 18):', gcdRecursive(48, 18)); // 출력: 6
console.log('GCD(0, 10):', gcdRecursive(0, 10)); // 출력: 10
console.log('GCD(17, 13):', gcdRecursive(17, 13)); // 출력: 1 (서로소)
console.log('GCD(-30, 45):', gcdRecursive(-30, 45)); // 출력: 15 (음수 처리)
