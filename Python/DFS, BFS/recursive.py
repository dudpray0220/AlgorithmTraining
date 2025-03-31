# 재귀함수는 내부적으로 스택 자료구조와 동일!
def recursive_function(i):
    # 100번째 출력했을때 종료되도록 종료 조건 명시
    if i == 100:
        return

    print(i, "in recursive function", i + 1, "recursive function call")
    recursive_function(i + 1)
    print(i, "recursive function end")


recursive_function(1)


# 반복적으로 구현한 n!
def factorial_iterative(n):
    result = 1
    # 1부터 n 까지의 수를 차례대로 곱하기
    for i in range(1, n + 1):
        result *= i

    return result


# 재귀적으로 구현한 n!
def factorial_recursive(n):
    if n <= 1:  # n이 1이하인 경우 1을 반환
        return 1

    # n! = n * (n-1)! 를 그대로 코드로 작성하기
    return n * factorial_recursive(n - 1)


print("iterative:", factorial_iterative(5))
print("recursive:", factorial_recursive(5))
