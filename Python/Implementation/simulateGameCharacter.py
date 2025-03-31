# [문제 요약]
# - 게임 캐릭터가 맵 안에서 움직이는 시스템 개발
# - N×M 크기의 직사각형 맵, 각 칸은 육지(0) 또는 바다(1)
# - 캐릭터는 상하좌우로 움직일 수 있으며 바다로는 갈 수 없음
# - 특정 규칙에 따라 움직이며 방문한 칸의 수를 출력
#
# [입력 조건]
# - 맵의 세로 크기 N, 가로 크기 M (3 ≤ N, M ≤ 50)
# - 캐릭터 위치 (A, B)와 바라보는 방향 d (0: 북, 1: 동, 2: 남, 3: 서)
# - 맵 정보 (0: 육지, 1: 바다)
#
# [출력 조건]
# - 게임 캐릭터가 방문한 칸의 수 출력
#
# [게임 캐릭터 움직임 메뉴얼]
# 1. 현재 위치에서 현재 방향을 기준으로 왼쪽 방향(반시계 방향으로 90도 회전)부터 차례대로 갈 곳을 정함
# 2. 캐릭터의 바로 왼쪽 방향에 아직 가보지 않은 칸이 존재한다면:
#    - 왼쪽 방향으로 회전
#    - 왼쪽으로 한 칸 전진
#    - 1번으로 돌아감
# 3. 왼쪽 방향에 가보지 않은 칸이 없다면:
#    - 왼쪽 방향으로 회전만 수행
#    - 1번으로 돌아감
# 4. 만약 네 방향 모두 이미 가본 칸이거나 바다로 되어 있는 칸인 경우:
#    - 바라보는 방향을 유지한 채로 한 칸 뒤로 가고 1번으로 돌아감
#    - 단, 뒤쪽 방향이 바다인 칸이라 뒤로 갈 수 없는 경우에는 움직임을 멈춤

# n, m을 공백으로 구분하여 입력받기
n, m = map(int, input().split())

# 방문한 위치를 저장하기 위한 맵을 생성하여 0으로 초기화 (2차원 배열) (육지, 바다 맵과는 다름!)
d = [[0] * m for _ in range(n)]

# 현재 캐릭터의 x, y좌표, 방향을 입력받기
x, y, direction = map(int, input().split())
d[x][y] = 1  # 현재 좌표 방문처리

# 전체 맵 정보를 입력받기
array = []
for i in range(n):
    array.append(list(map(int, input().split())))

# 북, 동, 남, 서 방향 정의
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]


# 왼쪽으로 회전
def turn_left():
    global direction
    direction -= 1

    if direction == -1:
        direction = 3


# 시뮬레이션 시작
count = 1  # 현재 좌표는 방문했음
turn_time = 0

while True:
    # 왼쪽으로 회전 (nx, ny: 이동할지 말지 판단하기 위해 미리 좌표만 구해보는 것)
    turn_left()
    nx = x + dx[direction]
    ny = y + dy[direction]

    # 회전한 이후 정면에 가보지 않은 칸이 존재하고 육지인 경우 이동
    if d[nx][ny] == 0 and array[nx][ny] == 0:
        d[nx][ny] = 1  # 방문 카운트
        x, y = nx, ny
        count += 1
        turn_time = 0
        continue
    # 회전한 이후 정면에 가보지 않은 칸이 없거나 바다인 경우
    else:
        turn_time += 1

    # 네 방향 모두 갈 수 없는 경우
    if turn_time == 4:
        # 한 칸 뒤로 가기
        nx = x - dx[direction]
        ny = y - dy[direction]

        # 뒤로 갈 수 있다면 이동하기 (육지라면)
        if array[nx][ny] == 0:
            x, y = nx, ny
        # 뒤가 바다로 막혀있는 경우
        else:
            break

        turn_time = 0

print(count)
