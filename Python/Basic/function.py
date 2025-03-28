# 함수에서 매개변수나 return 문은 존재하지 않을 수도 있다
def add(a, b):
    return a + b


print(add(3, 7))


def add2(a, b):
    print("result:", a + b)


add2(b=10, a=5)


# global 키워드로 변수를 지정하면 해당 함수에서는 지역 변수를 만들지 않고, 함수 외부에 선언된 변수를 바로 참조하게 된다
a = 0


def func():
    global a
    a += 1


for i in range(10):
    func()

print(a)


# 람다 표현식 : 함수를 매우 간단하게 작성하여 적용할 수 있다
# 정렬 라이브러리 사용 시 정렬 기준 (Key)를 설정할 때에도 자주 사용됨
def add(a, b):
    return a + b


# 일반적인 add() 메서드 사용
print(add(3, 7))

# 람다 표현식으로 구현한 add() 메서드
print((lambda a, b: a + b)(5, 7))
