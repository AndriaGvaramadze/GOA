def sum_of_n(n):
    # Create a list to store the sequence
    result = []
    
    # Generate the sequence for positive or negative n
    for i in range(abs(n) + 1):
        sum_value = (i * (i + 1)) // 2  # This is the sum of numbers from 0 to i
        # If n is negative, make the sum negative
        if n < 0:
            sum_value = -sum_value
        result.append(sum_value)
    
    return result
