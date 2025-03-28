/**
 * [문제 요약]
 * - 두 문자열이 주어질 때, 하나의 문자열이 다른 문자열의 애너그램인지 확인
 * - 애너그램이란 글자의 배열 순서는 다르지만 구성이 같은 단어를 의미함
 * - 대소문자를 구분하며, 공백과 특수문자도 포함해서 비교
 *
 * [문제 해결 방법]
 * 1. 두 문자열의 길이가 다르면 바로 false 반환
 * 2. 첫 번째 문자열의 각 문자 빈도수를 객체에 저장
 * 3. 두 번째 문자열을 순회하며 빈도수 객체와 비교
 * 4. 모든 문자가 동일한 빈도수로 존재하는지 확인
 *
 * @param {string} str1 - 첫 번째 문자열
 * @param {string} str2 - 두 번째 문자열
 * @return {boolean} - 애너그램이면 true, 아니면 false
 */

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const frequencyCounter = {};

  for (const char of str1) {
    frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
  }

  for (const char of str2) {
    if (!frequencyCounter[char]) return false;

    frequencyCounter[char] -= 1;
  }

  return true;
}

// 테스트 케이스
console.log(isAnagram('anagram', 'nagaram')); // 출력: true
console.log(isAnagram('hello', 'world')); // 출력: false
console.log(isAnagram('rail safety', 'fairy tales')); // 출력: true
console.log(isAnagram('listen', 'silent')); // 출력: true
console.log(isAnagram('aaz', 'zza')); // 출력: false
