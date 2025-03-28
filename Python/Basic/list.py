a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
print(a)

print(a[4])

# 빈 리스트 선언 방법 1
a = list()
print(a)

# 빈 리스트 선언 방법 2
a = []
print(a)

# 크기가 N이고, 모든 값이 0인 1차원 리스트 초기화
n = 10
a = [0] * n
print(a)

a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
# 뒤에서 첫번째 원소 출력
print(a[-1])

# 뒤에서 세번째 원소 출력
print(a[-3])

# 네 번째 원소 값 변경
a[3] = 7
print(a)

# 두 번째 원소부터 네 번째 원소까지
print(a[1:4])

# 리스트 컴프리헨션
# 0부터 19까지의 수 중에서 홀수만 포함하는 리스트
array = [i for i in range(20) if i % 2 == 1]
print(array)

# 1부터 9까지의 수의 제곱 값을 포함하는 리스트
array = [i * i for i in range(1, 10)]
print(array)

# N x M 크기의 2차원 리스트 초기화 (특정 크기의 2차원 리스트를 초기화 할때는 반드시 리스트 컴프리헨션 이용!)
# _ : 반복을 수행하되 반복을 위한 변수의 값을 무시하고자 할 때
n, m = 3, 4
array = [[0] * m for _ in range(n)]
print(array)

# 리스트 메서드
a = [1, 4, 3, 1]
print("List: ", a)

# 리스트에 원소 삽입
a.append(2)
print("insert :", a)

# 특정 값 데이터 삭제 (여러 개면 앞에것 하나만 제거)
a.remove(1)
print("remove 1 :", a)

# 오름차순 정렬
a.sort()
print("sort :", a)

# 내림차순 정렬
a.sort(reverse=True)
print("reverse sort :", a)

# 리스트 원소 뒤집기
a.reverse()
print("reverse :", a)

# 특정 인덱스에 데이터 추가
a.insert(2, 7)
print("insert :", a)

# 특정 값인 데이터 개수 세시
print("count 3 :", a.count(3))

# 특정한 값의 원소를 모두 제거
a = [1, 2, 3, 4, 5, 5, 5]
removeSet = {3, 5}

# removeSet에 포함되지 않은 값만을 저장
result = [i for i in a if i not in removeSet]
print(result)
