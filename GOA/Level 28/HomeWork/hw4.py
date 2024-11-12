def find_mean(numbers):
    # Step 1: Find the sum of all the numbers in the list
    total_sum = sum(numbers)
    
    # Step 2: Find the number of values in the list
    count = len(numbers)
    
    # Step 3: Calculate the mean
    mean = total_sum / count
    
    return mean
