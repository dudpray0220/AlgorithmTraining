# 19 x 19 바둑판에 좌표 입력받아 1로 표시하는 문제

# 1. 19x19 바둑판 0으로 초기화 (0~18까지 인덱스니까 19개)
board = [[0 for j in range(19)] for i in range(19)]

# 2. 흰 돌 개수 입력
n = int(input())

# 3. 좌표 입력받아 1로 표시
for _ in range(n):
    x, y = map(int, input().split())
    board[x - 1][y - 1] = 1  # 입력은 1부터 시작하므로 인덱스는 -1

# 4. 바둑판 출력
for row in board:
    print(*row)


# ----------------------------------------
# 2차원 배열 관련 주요 패턴 정리
cols, rows = 20, 20
i, j = 5

# 1) 전체 초기화
matrix = [[0 for _ in range(cols)] for _ in range(rows)]

# 2) 값 접근 및 설정
matrix[i][j] = 5  # i행 j열에 값 할당

# 3) 전체 순회 (값만)
for row in matrix:
    for cell in row:
        print(cell)

# 4) 전체 순회 (인덱스까지 필요할 때)
for i in range(len(matrix)):
    for j in range(len(matrix[0])):
        print(matrix[i][j])

# 5) 리스트 출력 시 공백 구분
for row in matrix:
    print(*row)

# 6) 입력 좌표 처리 시 주의 (1-based 입력이면 -1 필요)
x, y = map(int, input().split())
matrix[x - 1][y - 1] = 1
