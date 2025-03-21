/**
 * [문제 요약]
 * - 문제: 숫자 문자열 S가 주어질 때, 숫자 사이에 '+' 또는 'x' 연산자를 넣어 만들 수 있는 가장 큰 수 구하기
 * - 조건:
 *   1. 각 자리는 0부터 9로만 이루어진 문자열 S가 주어짐 (1 ≤ S의 길이 ≤ 20)
 *   2. 모든 연산은 왼쪽에서부터 순서대로 이루어짐 (괄호 없음)
 *   3. +보다 ×를 먼저 계산하는 일반적인 방식과 달리, 모든 연산은 왼쪽에서부터 순서대로 진행
 * - 예시:
 *   - 입력: "02984" → 출력: 576 (((0+2)×9)×8)×4 = 576
 *   - 입력: "567" → 출력: 210
 * - 출력: 만들어질 수 있는 가장 큰 수
 */

// input: string S
// output: 가장 큰 수
// 핵심: 0, 1일땐 +, 나머지 경우엔 x 가 더 큰 결과를 만든다!

function solution(S) {
  // 문자열을 숫자 배열로 변환
  const nums = S.split('').map((char) => parseInt(char));

  // 연산 결과를 저장할 변수 초기화
  let result = nums[0];

  // 첫번째 숫자부터 순서대로 연산 (result가 nums[0] 이므로 nums[1] 부터터)
  for (let i = 1; i < nums.length; i++) {
    const currentNum = nums[i];

    // 현재 숫자나 결과가 0 또는 1이면 더하기가 더 큰 결과를 만듦
    // 0과의 곱셈은 항상 0, 1과의 곱셈은 변화 없음
    if (currentNum <= 1 || result <= 1) {
      result += currentNum;
    } else {
      result *= currentNum;
    }
  }

  return result;
}

console.log(solution('02984')); // 예상 결과: 576
console.log(solution('567')); // 예상 결과: 210
