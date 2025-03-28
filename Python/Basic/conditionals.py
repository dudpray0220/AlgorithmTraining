x = 15
if x >= 10:
    print(x)

score = 95

if score >= 90:
    pass  # 나중에 작성할 소스코드
    print("A")
elif score >= 80:
    print("B")
elif score >= 70:
    print("C")
else:
    print("F")

score = 85

# 조건부 표현식
result = "Success" if score >= 80 else "Fail"
print(result)

a = [1, 2, 3, 4, 5, 5, 5]
remove_set = {3, 5}

result = [i for i in a if i not in remove_set]
print(result)
