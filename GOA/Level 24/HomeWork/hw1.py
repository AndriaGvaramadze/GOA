#Create a function with two arguments that will return an array of the first n multiples of x.

#Assume both the given number and the number of times to count will be positive numbers greater than 0.
def get_multiples(x, n):
    return [x * i for i in range(1, n + 1)]

# Example usage:
print(get_multiples(1, 10))  # Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(get_multiples(2, 5))   # Output: [2, 4, 6, 8, 10]
