/**
 * [문제 요약]
 * - 문자열을 1개 이상의 단위로 잘라 압축했을 때 가장 짧은 문자열 길이 구하기
 * - 반복되는 문자열은 반복 횟수+문자열 형태로 압축
 * - 다양한 단위(1개, 2개, 3개 등)로 잘라볼 수 있음
 *
 * [문제 해결 방법]
 * 1. 1부터 문자열 길이의 절반까지 모든 단위를 시도
 * 2. 각 단위마다 압축 후 길이 계산
 * 3. 가장 짧은 압축 결과 반환
 *
 * @param {string} s - 압축할 문자열
 * @return {number} - 압축 후 가장 짧은 문자열의 길이
 */

function solution(s) {
  // 문자열 길이가 1이면 압축할 수 없으므로 그대로 1 반환
  if (s.length === 1) return 1;

  // 최소 길이 초기화 (압축 안 했을 때 길이로 시작)
  let minLength = s.length;

  // 1개부터 문자열 길이의 절반까지 모든 압축 단위 시도
  for (let unit = 1; unit <= Math.floor(s.length / 2); unit++) {
    // 압축 결과를 저장할 변수
    let compressed = '';
    // 반복 횟수
    let count = 1;
    // 이전 문자열 패턴
    let prev = s.substring(0, unit);

    // 문자열을 단위 크기만큼 자르면서 순회
    for (let i = unit; i <= s.length; i += unit) {
      // 현재 단위만큼의 문자열
      const current = s.substring(i, i + unit);

      // 이전 문자열과 현재 문자열이 같으면 카운트 증가
      if (prev === current) {
        count++;
      } else {
        // 이전 문자열과 현재 문자열이 다르면 압축 결과에 추가
        compressed += (count > 1 ? count : '') + prev;
        prev = current;
        count = 1;
      }
    }

    // 마지막 문자열 처리
    compressed += (count > 1 ? count : '') + prev;

    // 압축 결과 길이가 더 짧으면 최소 길이 업데이트
    minLength = Math.min(minLength, compressed.length);
  }

  return minLength;
}

// 테스트 케이스
console.log(solution('aabbaccc')); // 출력: 7 ("2a2ba3c")
console.log(solution('ababcdcdababcdcd')); // 출력: 9 ("2ababcdcd")
console.log(solution('abcabcdede')); // 출력: 8 ("2abcdede")
console.log(solution('abcabcabcabcdededededede')); // 출력: 14 ("2abcabc2dedede")
console.log(solution('xababcdcdababcdcd')); // 출력: 17 (압축 효과 없음)
