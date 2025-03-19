// 음식점의 계산을 도와주는 점원입니다.
// 카운터에는 500원, 100원, 50원, 10원짜리 동전이 무한히 존재합니다.
// 손님에게 거슬러 줘야 할 돈이 N원일 때, 거슬러 줘야 할 동전의 최소 개수를 구해야 합니다.
// 거슬러 줘야 할 돈 N은 항상 10의 배수입니다.

// input: N
// output: 동전 최소 개수
function solution(n) {
  const coins = [500, 100, 50, 10];

  // 필요한 총 동전 갯수
  let coinCount = 0;

  // 각 동전 단위마다 필요한 갯수 계산
  for (const coin of coins) {
    // 몫으로 갯수 + (소수점 버림)
    coinCount += Math.floor(n / coin);

    // 나머지로 거스름돈 업데이트
    n %= coin;
  }

  return coinCount;
}

console.log(solution(1260));
