import sys

# 데이터의 개수 입력
n = int(input())

# 각 데이터를 공백으로 구분하여 입력
data = list(map(int, input().split()))

data.sort(reverse=True)
print(data)


# n, m, k를 공백으로 구분하여 입력 (공백으로 구분된 데이터의 개수가 많지 않다면 -> map만 사용하므로 return은 list가 아님?)
n, m, k = map(int, input().split())

print(n, m, k)


# 입력 개수가 많으면 input()은 동작 속도가 느림
# 문자열 입력받기 (관행이니 외워서 사용)
data = sys.stdin.readline().rstrip()
print(data)


# 출력
# 1. print()는 각 변수를 콤마로 구분하여 매개변수로 넣을 수 있음 -> 각 변수가 띄어쓰기 구분되어 출력됨
# 2. print()는 기본적으로 출력 이후에 줄 바꿈을 수행
a, b = 1, 2
print(a, b)
print(a)
print(b)

# 오류 발생 예: 문자열 자료형끼리만 더하기 연산이 가능
answer = 7
print("answer is " + answer + "done")

# 변수를 문자열로 바꿈
print("answer is " + str(answer) + "done")

# 각 변수를 콤마로 구분하여 출력: 변수의 값 사이에 의도치 않은 공백이 삽입될 수 있다
print("answer is", answer, "done")

# f-string: JS의 템플릿리터럴과 비슷 -> 문자열 앞에 접두사 f를 붙임으로써 사용
print(f"answer is {answer} done")
