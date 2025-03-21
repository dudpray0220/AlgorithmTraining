/**
 * [문제 요약]
 * - 무지는 N개의 음식을 회전판에서 1초씩 먹는 먹방 라이브 중
 * - K초 후 네트워크 장애 발생, 복구 후 몇 번 음식부터 먹어야 하는지 구하기
 * - 각 음식을 먹는데 걸리는 시간이 주어짐
 * - 더 먹을 음식이 없으면 -1 반환
 *
 * [문제 해결 방법]
 * 1. 음식을 [인덱스, 먹는 시간] 형태로 관리
 * 2. 시간이 적게 걸리는 음식부터 처리하는 그리디 접근
 * 3. 각 단계에서 현재 남은 음식 개수로 한 번에 처리할 수 있는 시간 계산
 * 4. K초에 먹어야 할 음식 찾기
 *
 * [핵심 아이디어]
 * canEat으로 한 번에 여러 초를 건너뛴다!
 * 
 * [제한 사항]
 * - food_times는 각 음식을 모두 먹는데 필요한 시간이 담긴 배열
 * - K는 방송 중단 시간
 * - 더 섭취해야 할 음식이 없다면 -1 반환
 *
 * @param {number[]} food_times - 각 음식을 먹는데 필요한 시간 배열
 * @param {number} k - 네트워크 장애가 발생한 시간(초)
 * @return {number} - 다음에 먹어야 할 음식의 번호(1부터 시작), 없으면 -1
 */

function solution(food_times, k) {
  // 음식 정보 [인덱스, 먹는 시간] 형태로 저장
  let foods = food_times.map((time, idx) => [idx + 1, time]);

  // 먹는 시간 기준으로 오름차순 정렬
  foods.sort((a, b) => a[1] - b[1]);

  let totalFoods = foods.length; // 남은 음식 개수
  let prevTime = 0; // 이전 단계에서 처리한 시간

  // 각 음식을 순회하며 처리
  for (let i = 0; i < foods.length; i++) {
    // 현재 음식의 먹는 시간
    const curruentTime = foods[i][1];

    // 이전 단계와의 시간 차이
    const diff = curruentTime - prevTime;

    // 현재 단계에서 처리할 수 있는 음식 수
    const canEat = diff * totalFoods;

    // 현재 단계에서 k초를 초과하지 않으면 계속 진행
    if (k >= canEat) {
      k -= canEat;
      prevTime = curruentTime;
      totalFoods--;
    } else {
      // k초 이내에 먹어야 할 음식 찾기
      // 남은 음식들을 인덱스 기준으로 정렬
      // foods.slice(i)는 foods 배열의 i번째 요소부터 끝까지를 새 배열로 추출
      // 이제 remainingFoods는 남은 음식들의 번호가 순서대로 담긴 배열
      const remainingFoods = foods
        .slice(i)
        .map((food) => food[0])
        .sort((a, b) => a - b);

      // k를 남은 음식 개수로 나눈 나머지 위치의 음식 반환
      return remainingFoods[k % remainingFoods.length];
    }
  }

  return -1;
}

// 예시 테스트
console.log(solution([3, 1, 2], 5)); // 출력: 1
