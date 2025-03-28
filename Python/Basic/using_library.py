# 표준 라이브러리: 특정한 프로그래밍 언어에서 자주 사용되는 표준 소스코드를 미리 구현해 놓은 라이브러리. 밑은 필수 6가지 라이브러리
# 1. 내장함수: print(), input(), sorted() 등 - 별도의 import 명령어 없이 바로 사용가능!
# 2. itertools: 반복되는 형태의 데이터를 처리하는 기능을 제공
# 3. heapq: Heap 기능을 제공, 우선순위 큐 구현 위해 사용
# 4. bisect: 이진탐색 기능을 제공
# 5. collections: 덱(deque), 카운터(Counter) 등의 유용한 자료구조 포함
# 6. math: 팩토리얼, 제곱근, 최대공약수(GCD), 삼각함수 관련 함수부터 pi와 같은 상수 포함

from itertools import permutations, combinations, product, combinations_with_replacement

# 내장함수
# sum(): 리스트와 같은 iterable 객체가 입력으로 주어지면 sum 반환
result = sum([1, 2, 3, 4, 5])
print(result)

result = min(7, 3, 5, 2)
print(result)

result = max(7, 3, 5, 2)
print(result)

# eval(): 수학 수식이 문자열 형식으로 들어오면 계산한 결과를 반환
result = eval("(3+5) * 7")
print(result)

# sorted(): iterable 객체가 들어오면 정렬된 결과 반환
result = sorted([9, 1, 8, 5, 4])
print(result)
result = sorted([9, 1, 8, 5, 4], reverse=True)
print(result)

result = sorted(
    [("Hong", 35), ("Lee", 75), ("Bae", 100)], key=lambda x: x[1], reverse=True
)
print(result)

# 리스트와 같은 iterable 객체는 기본으로 sort() 함수를 내장하고 있어서 굳이 sorted() 사용안해도 됨
data = [9, 1, 8, 5, 4]
data.sort()
print(data)


# itertools
data = ["A", "B", "C"]
result = list(permutations(data, 3))  # 모든 순열 구하기
print(result)

result = list(combinations(data, 2))  # 2개를 뽑는 모든 조합 구하기
print(result)

result = list(product(data, repeat=2))  # 2개를 뽑는 모든 순열 구하기 (중복 허용)
print(result)

result = list(
    combinations_with_replacement(data, 2)
)  # 2개를 뽑는 모든 조합 구하기 (중복 허용)
print(result)


# heapq
