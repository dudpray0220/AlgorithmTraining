# [문제 요약]
# - 0과 1로만 이루어진 문자열 S가 주어짐
# - 연속된 하나 이상의 숫자를 잡고 모두 뒤집기(0→1, 1→0) 가능
# - 모든 숫자를 같게 만들기 위한 최소 행동 횟수 구하기
#
# [문제 해결 방법]
# 1. 모든 숫자를 0으로 바꾸는 경우: 연속된 1의 그룹 수를 세기
# 2. 모든 숫자를 1로 바꾸는 경우: 연속된 0의 그룹 수를 세기
# 3. 두 경우 중 최소값이 정답
#
# [예시]
# S = "0001100"
# - 모든 숫자를 0으로: 연속된 1의 그룹은 1개 -> 1번 뒤집기
# - 모든 숫자를 1로: 연속된 0의 그룹은 2개 -> 2번 뒤집기
# 따라서 최소 행동 횟수는 1

data = input()

count0 = 0  # 0으로 바꾸는 경우 → 1 그룹 개수 세기
count1 = 0  # 1로 바꾸는 경우 → 0 그룹 개수 세기

# 첫 번째 문자 기준으로 시작
if data[0] == "0":
    count0 += 1
else:
    count1 += 1

# 앞 숫자와 현재 숫자가 다르면 그룹이 바뀐 거니까 카운트!
for i in range(1, len(data)):
    if data[i] != data[i - 1]:
        if data[i] == "0":
            count0 += 1
        else:
            count1 += 1

print(min(count0, count1))
