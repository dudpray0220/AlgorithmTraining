# while
i = 1
result = 0

# i가 9보다 작거나 같을 때 아래 코드를 반보적으로 실행
while i <= 9:
    result += i
    i += 1
print(result)

i = 1
result = 0

while i <= 9:
    if i % 2 == 1:
        result += i
    i += 1
print(result)


# for
result = 0

# i는 1부터 9까지의 모든 값을 순회
for i in range(1, 10):
    result += i
print(result)

scores = [90, 85, 77, 65, 97]
cheating_list = {2, 4}

for i in range(5):
    if i + 1 in cheating_list:
        continue

    if scores[i] >= 80:
        print(i + 1, " student is good")


# 중첩 반복문
for i in range(2, 10):
    for j in range(1, 10):
        print(i, "X", j, "=", i * j)
    print()
