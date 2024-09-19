
def insertAtBottom(stack, item):
    if not stack:
        stack.append(item)
    else:
        temp = stack.pop()
        insertAtBottom(stack, item)
        stack.append(temp)

# Function to reverse the stack
def reverseStack(stack):
    # Base case: if the stack is empty, do nothing
    if not stack:
        return
    temp = stack.pop()
    reverseStack(stack)
    insertAtBottom(stack, temp)

# Example usage
stack = [1, 2, 3, 4, 5]
reverseStack(stack)
print(stack) 
