
numbers = list(range(1, 11))

first_half = numbers[:5]
print("First half:", first_half)

second_half = numbers[5:]
print("Second half:", second_half)

squares = [x**2 for x in numbers]
print("Squares:", squares)

print("First half:", first_half)
print("Second half:", second_half)
print("Squares:", squares)