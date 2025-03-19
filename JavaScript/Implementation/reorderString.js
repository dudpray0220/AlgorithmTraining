/**
 * [문제 요약]
 * - 알파벳 대문자와 숫자(0~9)로만 구성된 문자열이 입력으로 주어짐
 * - 모든 알파벳을 오름차순으로 정렬하여 출력한 뒤, 모든 숫자를 더한 값을 이어서 출력
 * - 예: K1KA5CB7 -> ABCKK13
 *
 * [입력 조건]
 * - 첫째 줄에 하나의 문자열 S가 주어짐 (1 ≤ S의 길이 ≤ 10,000)
 *
 * [출력 조건]
 * - 첫째 줄에 문제에서 요구하는 정답을 출력
 *
 * [예시]
 * - 입력 1: K1KA5CB7
 * - 출력 1: ABCKK13
 * - 입력 2: AJKDLSI412K4JS9JD
 * - 출력 2: ADDIJJJKLSS20
 *
 * @param {string} s - 입력 문자열
 * @return {string} - 정렬 후 출력 문자열
 */

// 핵심: 문자열 순회하며 알파벳과 숫자 분리 -> 차례대로 구현!

function reorderString(s) {
  let alphabets = [];
  let sum = 0;

  // 문자열을 순회하며 알파벳과 숫자 분리
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // 알파벳인 경우 배열에 추가
    if (isNaN(parseInt(char))) {
      alphabets.push(char);
    }
    // 숫자인 경우 합계에 더하기
    else {
      sum += parseInt(char);
    }
  }

  // 알파벳 오름차순 정렬 -> sort((a, b) => a - b) 숫자 오름차순 정렬 쓰면 안됨! 문자끼리 빼면 NaN(Not a Number)!
  alphabets.sort();

  // 결과 문자열 생성 (정렬된 알파벳 + 숫자의 합)
  let result = alphabets.join('');

  // 숫자 합이 0이 아닌 경우에만 추가
  if (sum > 0) {
    result += sum;
  }

  return result;
}

// 예시 테스트
console.log(reorderString('K1KA5CB7')); // 출력: ABCKK13
console.log(reorderString('AJKDLSI412K4JS9JD')); // 출력: ADDIJJJKLSS20
