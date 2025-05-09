# BFS 알고리즘 정확한 동작 방식
# 1. 탐색 시작 노드를 큐에 삽입하고 방문처리를 한다
# 2. 큐에서 노드를 꺼내 해당 노드의 인접 노드 중에서 방문하지 않은 노드를 모두 큐에 삽입하고 방문 처리를 한다.
# 3. 2번의 과정을 더 이상 수행할 수 없을 때까지 반복한다.
# 일반적인 경우 실제 수행 시간은 DFS 보다 좋은 편 (조금 더 빠르게 동작함)

# 문제 유형
# "최단 거리"를 묻는 문제
# "한 번에 모든 노드 탐색", "가장 가까운 노드부터 탐색"
# 미로에서 최소 칸 수로 탈출, 바이러스 퍼짐 시뮬레이션

from collections import deque


# BFS 메서드 정의
def bfs(graph, start, visited):
    # Queue 구현을 위해 deque 라이브러리 이용
    queue = deque([start])

    # 현재 노드를 방문처리
    visited[start] = True

    # Queue가 빌 때까지 반복
    while queue:
        # 큐에서 하나의 원소를 뽑아 출력
        v = queue.popleft()
        print(v, end=" ")

        # 해당 원소와 연결된, 아직 방문하지 않은 원소들을 큐에 삽입
        for i in graph[v]:
            if not visited[i]:
                queue.append(i)
                visited[i] = True


# 각 노드가 연결된 정보를 리스트 자료형으로 표현 (2차원 리스트)
graph = [[], [2, 3, 8], [1, 7], [1, 4, 5], [3, 5], [3, 4], [7], [2, 6, 8], [1, 7]]

# 각 노드가 방문된 정보를 리스트 자료형으로 표현 (1차원 리스트)
visited = [False] * 9  # 노드 개수만큼 (0번은 무시)

# 정의된 BFS 함수 호출
bfs(graph, 1, visited)
