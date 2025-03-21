/**
 * [문제 요약]
 * - 게임 캐릭터의 점수 N이 주어졌을 때, 럭키 스트레이트 기술 사용 가능 여부 판단
 * - 점수 N을 반으로 나누어 왼쪽 부분의 자릿수 합과 오른쪽 부분의 자릿수 합이 같으면 사용 가능
 * - 가능하면 "LUCKY", 불가능하면 "READY" 출력
 *
 * [문제 해결 방법]
 * 1. 점수 N을 문자열로 변환하여 각 자릿수에 쉽게 접근
 * 2. 문자열을 반으로 나눔
 * 3. 왼쪽 부분과 오른쪽 부분의 각 자릿수 합을 계산하여 비교
 *
 * [제한 사항]
 * - 점수 N은 정수 (10 ≤ N ≤ 99,999,999)
 * - 점수 N의 자릿수는 항상 짝수 형태
 *
 * @param {number} n - 게임 캐릭터의 점수
 * @return {string} - "LUCKY" 또는 "READY"
 */

function checkLuckyStreak(n) {
  // 점수를 문자열로 변환
  const scoreStr = n.toString();

  // 문자열 길이의 절반 계산
  const halfLength = scoreStr.length / 2;

  // 왼쪽 부분과 오른쪽 부분 나누기
  const leftHalf = scoreStr.substring(0, halfLength);
  const rightHalf = scoreStr.substring(halfLength);

  // 왼쪽 부분의 자릿수 합 계산
  let leftSum = 0;
  for (let i = 0; i < leftHalf.length; i++) {
    leftSum += parseInt(leftHalf[i]);
  }

  // 오른쪽 부분의 자릿수 합 계산
  let rightSum = 0;
  for (let i = 0; i < rightHalf.length; i++) {
    rightSum += parseInt(rightHalf[i]);
  }

  // 두 합이 같은지 비교하여 결과 반환
  return leftSum === rightSum ? 'LUCKY' : 'READY';
}

// 예시 테스트
console.log(checkLuckyStreak(123402)); // 출력: "LUCKY"
console.log(checkLuckyStreak(7755)); // 출력: "READY"
