def even_numbers(arr, n):
    # Step 1: Filter the even numbers
    even_numbers = [num for num in arr if num % 2 == 0]
    
    # Step 2: Return the last 'n' even numbers
    return even_numbers[-n:]
