/**
 * [문제 요약]
 * - 다양한 수로 이루어진 배열이 있을 때, 주어진 수들을 M번 더하여 가장 큰 수를 만드는 법칙
 * - 배열의 특정 인덱스(번호)에 해당하는 수가 연속해서 K번을 초과하여 더해질 수 없음
 * - 배열의 크기 N, 숫자가 더해지는 횟수 M, 그리고 K가 주어질 때 결과 계산
 *
 * [입력 조건]
 * - 첫째 줄에 N(2 ≤ N ≤ 1,000), M(1 ≤ M ≤ 10,000), K(1 ≤ K ≤ 10,000)의 자연수가 주어짐
 * - 둘째 줄에 N개의 자연수가 주어짐 (각 자연수는 공백으로 구분, 1 이상 10,000 이하)
 * - 입력으로 주어지는 K는 항상 M보다 작거나 같음
 *
 * [출력 조건]
 * - 첫째 줄에 동빈이의 큰 수의 법칙에 따라 더해진 답을 출력
 *
 * @param {number} n - 배열의 크기
 * @param {number} m - 숫자가 더해지는 횟수
 * @param {number} k - 연속해서 더할 수 있는 최대 횟수
 * @param {number[]} numbers - N개의 자연수가 담긴 배열
 * @return {number} - 큰 수의 법칙에 따른 결과
 */

// 방법 1: 단순 구현 (실제로 숫자를 더하기)
function getMaxSum1(n, m, k, numbers) {
  // 입력 배열을 내림차순으로 정렬
  numbers.sort((a, b) => b - a);

  let result = 0;
  let count = 0;

  // M번 반복하여 숫자 더하기
  for (let i = 0; i < m; i++) {
    // 가장 큰 수를 K번까지 더할 수 있음
    if (count < k) {
      result += numbers[0];
      count++;
    } else {
      // K번 연속으로 더했다면 두 번째로 큰 수를 한 번 더함
      result += numbers[1];
      count = 0; // 카운트 초기화
    }
  }

  return result;
}

// 방법 2: 수학적 접근 (효율적인 계산)??
function getMaxSum2(n, m, k, numbers) {
  // 입력 배열을 내림차순으로 정렬
  numbers.sort((a, b) => b - a);

  const first = numbers[0]; // 가장 큰 수
  const second = numbers[1]; // 두 번째로 큰 수

  // 가장 큰 수가 더해지는 횟수 계산
  // 반복되는 수열의 길이: K+1 (K번의 가장 큰 수 + 1번의 두 번째로 큰 수)
  const countOfSequence = Math.floor(m / (k + 1));

  // 나머지 연산으로 가장 큰 수가 추가로 더해지는 횟수
  const remainder = m % (k + 1);

  // 가장 큰 수가 더해지는 총 횟수: (K * 수열 반복 횟수) + 나머지
  const countOfFirst = k * countOfSequence + remainder;

  // 두 번째로 큰 수가 더해지는 횟수: 전체 횟수 - 가장 큰 수가 더해지는 횟수
  const countOfSecond = m - countOfFirst;

  // 결과 계산
  return first * countOfFirst + second * countOfSecond;
}

// 예시 테스트
const n = 5;
const m = 8;
const k = 3;
const numbers = [2, 4, 5, 4, 6];

console.log('방법 1 결과:', getMaxSum1(n, m, k, numbers)); // 출력: 46
console.log('방법 2 결과:', getMaxSum2(n, m, k, numbers)); // 출력: 46
