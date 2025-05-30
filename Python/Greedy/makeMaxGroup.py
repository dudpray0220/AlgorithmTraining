# [문제 요약]
# - 모험가 길드: N명의 모험가를 대상으로 '공포도'를 측정
# - 공포도가 X인 모험가는 반드시 X명 이상으로 구성한 모험가 그룹에 참여해야 여행 가능
# - 동빈이는 최대 몇 개의 모험가 그룹을 만들 수 있는지 궁금함
#
# [입력 조건]
# - 첫째 줄: 모험가의 수 N (1 ≤ N ≤ 100,000)
# - 둘째 줄: 각 모험가의 공포도 (N 이하의 자연수, 공백으로 구분)
#
# [예시]
# - 입력: 5
#        2 3 1 2 2
# - 출력: 2

# input: 모험가의 수 N, 공포도 배열
# output: 최대 모험가 그룹 수

# 모험가의 수 입력 받기
n = int(input())
fears = list(map(int, input().split()))
fears.sort()

result = 0  # 총 그룹의 수
group_member = 0  # 현재 그룹에 포함된 모험가의 수

for fear in fears:  # 공포도를 낮은 것부터 하나씩 확인하며
    group_member += 1  # 현재 그룹에 해당 모험가를 포함시키기

    # 현재 그룹에 포함된 모험가의 수가 현재의 공포도 이상이라면, 그룹 결성
    if group_member >= fear:
        result += 1  # 총 그룹의 수 증가시키기
        group_member = 0  # 현재 그룹에 포함된 모험가의 수 초기화


print(result)
