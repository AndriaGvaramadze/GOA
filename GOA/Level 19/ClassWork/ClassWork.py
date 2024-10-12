def sum_numbers(N):
 return sum(range(1, N + 1))

N = int(input("Enter your number: "))
sum=sum_numbers(N)
print("The sum of numbers 1 to", N, "is", sum)