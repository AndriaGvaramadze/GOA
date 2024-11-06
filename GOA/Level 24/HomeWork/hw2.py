#Find Mean
#Find the mean (average) of a list of numbers in an array.

#Information
#To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

#For an example list of 1, 3, 5, 7

#1+3+5+7 = 16
def find_mean(numbers):
    if len(numbers) == 0:
        return None  # or some other value to indicate no numbers were provided
    return sum(numbers) / len(numbers)
