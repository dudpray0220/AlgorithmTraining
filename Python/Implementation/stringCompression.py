# https://school.programmers.co.kr/learn/courses/30/lessons/60057

# [문제 요약]
# - 문자열을 1개 이상의 단위로 잘라 압축했을 때 가장 짧은 문자열 길이 구하기
# - 반복되는 문자열은 반복 횟수+문자열 형태로 압축
# - 다양한 단위(1개, 2개, 3개 등)로 잘라볼 수 있음
#
# [문제 해결 방법]
# 1. 1부터 문자열 길이의 절반까지 모든 단위를 시도
# 2. 각 단위마다 압축 후 길이 계산
# 3. 가장 짧은 압축 결과 반환

# [핵심 아이디어]
# 단위 길이를 1부터 s 길이의 절반까지 돌려가며 압축 시뮬레이션 해보고, 가장 짧은 길이 저장
# 왜 절반까지만 돌리냐? → 단위가 len(s)//2를 넘으면 무조건 반복이 안 되기 때문


def solution(s):
    answer = len(s)  # 최소 길이는 처음엔 원래 길이

    # 1개 단위(step) 부터 압축 단위를 늘려가며 계산
    for step in range(1, len(s) // 2 + 1):
        compressed = ""
        prev = s[0:step]  # 앞에서부터 step 만큼의 문자열 추출
        count = 1

        # step 간격으로 비교 시작 (step 크기만큼 증가시키며 이전 문자열과 비교) -> range(시작, 끝, 간격)
        for i in range(step, len(s), step):
            next_sub = s[i : i + step]

            # 이전 상태와 동일하다면 압축 횟수 (count) 증가
            if prev == next_sub:
                count += 1
            # 다른 문자열이 나왔다면 (더 이상 압축하지 못하는 경우라면) 압축된 문자열 조립
            else:
                compressed += (str(count) + prev) if count >= 2 else prev
                prev = next_sub
                count = 1

        # 루프 후 마지막 남은 문자열 처리
        compressed += (str(count) + prev) if count >= 2 else prev

        # 최소 길이 갱신
        answer = min(answer, len(compressed))

    return answer
