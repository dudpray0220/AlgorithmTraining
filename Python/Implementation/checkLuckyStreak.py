# [문제 요약]
# - 게임 캐릭터의 점수 N이 주어졌을 때, 럭키 스트레이트 기술 사용 가능 여부 판단
# - 점수 N을 반으로 나누어 왼쪽 부분의 자릿수 합과 오른쪽 부분의 자릿수 합이 같으면 사용 가능
# - 가능하면 "LUCKY", 불가능하면 "READY" 출력
#
# [문제 해결 방법]
# 1. 점수 N을 문자열로 변환하여 각 자릿수에 쉽게 접근
# 2. 문자열을 반으로 나눔
# 3. 왼쪽 부분과 오른쪽 부분의 각 자릿수 합을 계산하여 비교
#
# [제한 사항]
# - 점수 N은 정수 (10 ≤ N ≤ 99,999,999)
# - 점수 N의 자릿수는 항상 짝수 형태

# 슬라이싱 => : 기준으로 왼쪽은 포함, 오른쪽은 미포함
# s[0:3]	"ABC"	0부터 2까지 (3은 포함 X)
# s[:3]	"ABC"	앞에서부터 3 전까지
# s[3:]	"DEFG"	3부터 끝까지
# s[-3:]	"EFG"	뒤에서 3개
# s[::2]	"ACEG"	2칸씩 건너뛰기


n = input()
length = len(n)

# 왼쪽, 오른쪽 부분 나누기
left = n[: length // 2]
right = n[length // 2 :]

# 자릿수 합 계산
left_sum = sum(map(int, left))
right_sum = sum(map(int, right))

# 결과 출력
if left_sum == right_sum:
    print("LUCKY")
else:
    print("READY")
