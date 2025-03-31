#
# [문제 요약]
# - 다양한 수로 이루어진 배열이 있을 때, 주어진 수들을 M번 더하여 가장 큰 수를 만드는 법칙
# - 배열의 특정 인덱스(번호)에 해당하는 수가 연속해서 K번을 초과하여 더해질 수 없음
# - 배열의 크기 N, 숫자가 더해지는 횟수 M, 그리고 K가 주어질 때 결과 계산
#
# [입력 조건]
# - 첫째 줄에 N(2 ≤ N ≤ 1,000), M(1 ≤ M ≤ 10,000), K(1 ≤ K ≤ 10,000)의 자연수가 주어짐
# - 둘째 줄에 N개의 자연수가 주어짐 (각 자연수는 공백으로 구분, 1 이상 10,000 이하)
# - 입력으로 주어지는 K는 항상 M보다 작거나 같음
#
# [출력 조건]
# - 첫째 줄에 동빈이의 큰 수의 법칙에 따라 더해진 답을 출력
#
# @param {number} n - 배열의 크기
# @param {number} m - 숫자가 더해지는 횟수
# @param {number} k - 연속해서 더할 수 있는 최대 횟수
# @param {number[]} numbers - N개의 자연수가 담긴 배열
# @return {number} - 큰 수의 법칙에 따른 결과

# 방법 1: 단순 구현 (실제로 숫자를 더하기)
n, m, k = map(int, input().split())
data = list(map(int, input().split()))

count = k
result = 0

data.sort(reverse=True)  # 내림차순 정렬

for _ in range(m):
    if count > 0:
        result += data[0]
        count -= 1
    else:
        result += data[1]
        count = k

print(result)


# 방법 2: 수학적 방식
data.sort(reverse=True)
first = data[0]
second = data[1]

# 패턴 반복 횟수
pattern_count = m // (k + 1)

# 가장 큰 수가 더해지는 횟수 = 패턴 내 k번 + 나머지
first_count = pattern_count * k + (m % (k + 1))
second_count = m - first_count

result = first_count * first + second_count * second
