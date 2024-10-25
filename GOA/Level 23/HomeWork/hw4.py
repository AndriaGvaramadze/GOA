def separate_even_odd(numbers):
    even_numbers = []  
    odd_numbers = []   

    for number in numbers:
        if number % 2 == 0:
            even_numbers.append(number) 
        else:
            odd_numbers.append(number)    

    return even_numbers, odd_numbers  

numbers_list = [45, 12, 133, 92, 102, 231, 293, 14, 172, 911]
even, odd = separate_even_odd(numbers_list)

print("ლუწი რიცხვები:", even)
print("კენტი რიცხვები:", odd)