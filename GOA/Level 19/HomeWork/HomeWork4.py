def is_odd_or_even(N):
    if N % 2 == 0:
        return f"{N} is even"
    else:
        return f"{N} is odd"
print(is_odd_or_even(4))  
print(is_odd_or_even(3))