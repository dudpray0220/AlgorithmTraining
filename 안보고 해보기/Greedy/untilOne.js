// 문제: 1이 될 때까지
// N이 1이 될 때까지 다음의 두 과정 중 하나를 반복적으로 선택하여 수행합니다. 단, 두 번째 연산은 N이 K로 나누어 떨어질 때만 선택할 수 있습니다.
// 1. N에서 1을 뺍니다.
// 2. N을 K로 나눕니다.
// N과 K가 주어질 때 N이 1이 될 때까지 1번 혹은 2번의 과정을 수행해야 하는 최소 횟수를 구하는 프로그램을 작성하세요.
// 첫째 줄에 N(1 <= N <= 100,000)과 K(2 <= K <= 100,000)가 공백을 기준으로 하여 각각 자연수로 주어집니다.

// input: N, K
// output: N이 1이 되는 최소 횟수
// 핵심: 나눌 수 있으면 최대한 나눈다!

function solution(n, k) {
  let count = 0;

  while (n > 1) {
    if (n % k === 0) {
      n /= k;
    } else {
      n -= 1;
    }
    count++;
  }

  return count;
}

function optimizeSolution(n, k) {
  let count = 0;

  while (n > 1) {
    if (n < k) {
      count += n - 1;
      break;
    }

    const target = Math.floor(n / k) * k;
    n = target;

    n /= k;
    count++;
  }

  return count;
}
