# [문제 요약]
# - 알파벳 대문자와 숫자(0~9)로만 구성된 문자열이 입력으로 주어짐
# - 모든 알파벳을 오름차순으로 정렬하여 출력한 뒤, 모든 숫자를 더한 값을 이어서 출력
# - 예시: 입력이 K1KA5CB7이면 출력은 ABCKK13
#
# [문제 해결 방법]
# 1. 문자열을 한 글자씩 확인하며 알파벳과 숫자를 분리
# 2. 알파벳은 배열에 넣고 오름차순 정렬
# 3. 숫자는 모두 더해서 합계 계산
# 4. 정렬된 알파벳과 숫자 합계를 이어 붙여 반환
#
# [제한 사항]
# - 입력 문자열 S의 길이는 1 이상 10,000 이하

s = input()

strings = []  # 알파벳 모음
total = 0  # 숫자 합계

for char in s:
    if char.isalpha():
        strings.append(char)
    else:
        total += int(char)

strings.sort()  # 알파벳 오름차순 정렬
result = "".join(strings)

# 숫자가 하나라도 있으면 뒤에 붙임
if total > 0:
    result += str(total)

print(result)
