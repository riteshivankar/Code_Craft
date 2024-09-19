# Depth First Search (DFS) using recursion

def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()  
        
    # Mark the current node as visited
    visited.add(start)
    print(start, end=" ")  # Process the node (in this case, just print it)
    
    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)
    
    return visited


# The graph is represented as an adjacency list
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

# Start DFS traversal from vertex 'A'
dfs(graph, 'A') #change the place of 'A' to change start vertices

