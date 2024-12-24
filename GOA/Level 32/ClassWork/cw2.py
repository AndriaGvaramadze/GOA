def grow(arr):
    result = 1
    for num in arr:
        result *= num  # Multiply each element to the result
    return result
