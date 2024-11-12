#1
#This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
def multiply_number(number):
    if number % 2 == 0:
        return number * 8  # Even, multiply by 8
    else:
        return number * 9  # Odd, multiply by 9


