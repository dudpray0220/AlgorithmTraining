# 키와 값의 쌍을 데이터로 가지는 자료형 (변경 불가능한 데이터를 키로 사용할 수 있음)
# 내부적으로 해시 테이블 이용 -> 데이터 검색 및 수정에 O(1) = 리스트보다 훨씬 빠름

# 리스트, 문자열, 튜플 등 원소들을 차례대로 반복할 수 있는 자료형 = Iterable 자료형
# Iterable 자료형들은 그 내부에 원소들을 포함하는 컨테이너 역할도 하는 것이 대부분이기에 in 문법도 사용 가능!
data = dict()
data["사과"] = "Apple"
data["바나나"] = "Banana"
data["코코넛"] = "Coconut"

print(data)

if "사과" in data:
    print("exist")

# 사전자료형 관련 함수
# 키 데이터만 담은 리스트
key_list = data.keys()

# 값 데이터만 담은 리스트
value_list = data.values()

print(key_list)
print(value_list)

# 각 키에 따른 값을 하나씩 출력
for key in key_list:
    print(data[key])
