/**
 * [문제 요약]
 * - A, B 두 사람이 서로 다른 무게의 볼링공을 고르는 경우의 수 구하기
 * - 총 N개의 볼링공이 있고, 각 볼링공의 무게는 1부터 M까지의 자연수
 * - 두 사람은 서로 다른 공을 선택해야 함
 *
 * [문제 해결 방법]
 * 1. 무게별로 볼링공 개수를 카운트
 * 2. 각 무게마다 해당 무게의 공 개수 * 다른 무게의 공 개수의 합을 구함
 * 3. 중복 계산을 피하기 위해 총 경우의 수를 2로 나눔
 *
 * [예시]
 * N=5, M=3, 공의 무게=[1,3,2,3,2]
 * - 1무게 공: 1개
 * - 2무게 공: 2개
 * - 3무게 공: 2개
 * 서로 다른 무게의 공을 고르는 경우의 수 = 1*2 + 1*2 + 2*1 + 2*1 + 2*2 = 8
 *
 * @param {number} n - 볼링공의 개수
 * @param {number} m - 볼링공의 최대 무게
 * @param {number[]} weights - 각 볼링공의 무게 배열
 * @return {number} - 두 사람이 볼링공을 고르는 경우의 수
 */

function countBowlingBallPairs(n, m, weights) {
  // 무게별 볼링공 개수를 저장할 배열 (1부터 M까지)
  // 무게를 배열의 인덱스로 직접 사용하려면, 0번 인덱스는 사용하지 않고 1번부터 M번 인덱스까지 사용
  const weightCounts = Array(m + 1).fill(0);

  // 각 볼링공의 무게 카운트
  for (let i = 0; i < n; i++) {
    weightCounts[weights[i]]++;
  }

  let totalCount = 0;

  // 모든 무게 조합에 대해 경우의 수 계산
  // 첫 번째 사람이 선택할 공의 무게를 의미합니다 (1부터 m까지)
  for (let i = 1; i <= m; i++) {
    // 두 번째 사람이 선택할 공의 무게를 의미합니다 (i+1부터 m까지)
    // j = i + 1부터 시작! = "서로 다른 무게"의 공만 고려
    for (let j = i + 1; j <= m; j++) {
      // i무게 공 개수 * j무게 공 개수 = 두 무게를 선택하는 경우의 수
      totalCount += weightCounts[i] * weightCounts[j];
    }
  }

  return totalCount;
}

// 예시 테스트
console.log(countBowlingBallPairs(5, 3, [1, 3, 2, 3, 2])); // 출력: 8
console.log(countBowlingBallPairs(8, 5, [1, 5, 4, 3, 2, 4, 5, 2])); // 출력: 25
