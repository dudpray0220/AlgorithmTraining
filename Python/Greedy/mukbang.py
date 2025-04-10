# https://school.programmers.co.kr/learn/courses/30/lessons/42891?language=python3

# [문제 요약]
# - 무지는 N개의 음식을 회전판에서 1초씩 먹는 먹방 라이브 중
# - K초 후 네트워크 장애 발생, 복구 후 몇 번 음식부터 먹어야 하는지 구하기
# - 각 음식을 먹는데 걸리는 시간이 주어짐
# - 더 먹을 음식이 없으면 -1 반환
#
# [문제 해결 방법]
# 1. 음식을 [인덱스, 먹는 시간] 형태로 관리
# 2. 시간이 적게 걸리는 음식부터 처리하는 그리디 접근
# 3. 각 단계에서 현재 남은 음식 개수로 한 번에 처리할 수 있는 시간 계산
# 4. K초에 먹어야 할 음식 찾기
#
# [핵심 아이디어] (효율성 통과 핵심 로직)
# 가장 적게 걸리는 음식부터 차례대로 제거하면서 k를 줄여나간다
# 시간당 한 바퀴 도는 비용 = 남은 음식 개수 * (현재 음식 - 이전 음식)
# "모든 음식을 한 입씩 먹는 걸 반복하지 말고, 가장 적은 음식 시간 기준으로 여러 입을 한 번에 먹자!"
#
# [제한 사항]
# - food_times는 각 음식을 모두 먹는데 필요한 시간이 담긴 배열
# - K는 방송 중단 시간
# - 더 섭취해야 할 음식이 없다면 -1 반환


# input 예 : ([3, 1, 2], k=5)
def solution(food_times, k):
    # 전체 음식을 먹는 시간보다 k가 크거나 같다면
    if sum(food_times) <= k:
        return -1

    # (음식시간, 음식번호)로 구성된 리스트 생성 (enumerate = 리스트 또는 반복 가능한 객체)를 순회할 때, 인덱스 + 값을 튜플 형태로 반환해주는 함수)
    # enumerate(food_times) => (0, 3), (1, 1), (2, 2)
    food = [(time, idx + 1) for idx, time in enumerate(food_times)]

    # 가장 작은 시간부터 정렬 ([(1, 2), (2, 3), (3, 1)])
    food.sort()

    # 핵심 아이디어를 코드로 옮기기 (시간당 한 바퀴 도는 비용 = 남은 음식 개수 * (현재 음식 - 이전 음식))
    previous = 0
    n = len(food)

    for i, (time, _) in enumerate(food):
        # 현재 음식 시간 - 이전 음식 시간 만큼 회차 비용 계산
        spend = (time - previous) * (n - i)

        if spend <= k:
            k -= spend
            previous = time
        else:
            # 더 못 뺌 → 남은 음식들 중 인덱스순 정렬 후 k번째 리턴 (람다 = 한 줄 짜리 함수 = lambda 인자: 리턴값)
            # 아직 안 먹은 음식들을 음식 번호 순으로 정렬
            rest = sorted(food[i:], key=lambda x: x[1])
            # 그 중에서 k초 후에 먹을 음식 번호를 리턴
            return rest[k % len(rest)][1]

    return -1
