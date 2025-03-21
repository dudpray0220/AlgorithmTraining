/**
 * [문제 요약]
 * - 알파벳 대문자와 숫자(0~9)로만 구성된 문자열이 입력으로 주어짐
 * - 모든 알파벳을 오름차순으로 정렬하여 출력한 뒤, 모든 숫자를 더한 값을 이어서 출력
 * - 예시: 입력이 K1KA5CB7이면 출력은 ABCKK13
 *
 * [문제 해결 방법]
 * 1. 문자열을 한 글자씩 확인하며 알파벳과 숫자를 분리
 * 2. 알파벳은 배열에 넣고 오름차순 정렬
 * 3. 숫자는 모두 더해서 합계 계산
 * 4. 정렬된 알파벳과 숫자 합계를 이어 붙여 반환
 *
 * [제한 사항]
 * - 입력 문자열 S의 길이는 1 이상 10,000 이하
 *
 * @param {string} s - 입력 문자열
 * @return {string} - 재정렬된 결과
 */

// 핵심: 문자열 순회하며 알파벳과 숫자 분리 -> 차례대로 구현!
function reorderString(s) {
  // 알파벳을 저장할 배열과 숫자의 합을 저장할 변수
  let letters = [];
  let sum = 0;

  // 문자열을 순회하며 알파벳과 숫자 분리
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // 알파벳인 경우 배열에 추가
    if (isNaN(parseInt(char))) {
      letters.push(char);
    }
    // 숫자인 경우 합계에 더하기
    else {
      sum += parseInt(char);
    }
  }

  // 알파벳 오름차순 정렬 -> sort((a, b) => a - b) 숫자 오름차순 정렬 쓰면 안됨! 문자끼리 빼면 NaN(Not a Number)!
  letters.sort();

  // 결과 문자열 생성 (정렬된 알파벳 + 숫자의 합)
  let result = letters.join('');

  // 숫자 합이 0이 아닌 경우에만 추가
  if (sum > 0) {
    result += sum;
  }

  return result;
}

// 예시 테스트
console.log(reorderString('K1KA5CB7')); // 출력: ABCKK13
console.log(reorderString('AJKDLSI412K4JS9JD')); // 출력: ADDIJJJKLSS20
