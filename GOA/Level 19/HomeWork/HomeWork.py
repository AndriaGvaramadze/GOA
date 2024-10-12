def simple_calculator(num1, num2, operation):
    if operation == "დამატება":
        return num1 + num2
    elif operation == "გამოკლება":
        return num1 - num2
    elif operation == "გამრავლება":
        return num1 * num2
    elif operation == "გაყოფა":
        if num2 == 0:
            return "შეცდომა: ნულზე გაყოფა შეუძლებელია"
        else:
            return num1 / num2
    else:
        return "შეცდომა: არასწორი ოპერაცია"
    
print(simple_calculator(5, 3, "დამატება"))  # Output: 8
print(simple_calculator(5, 3, "გამოკლება"))  # Output: 2
print(simple_calculator(5, 3, "გამრავლება"))  # Output: 15
print(simple_calculator(5, 3, "გაყოფა"))  # Output: 1.666666666666667
print(simple_calculator(5, 0, "გაყოფა"))  # Output: შეცდომა: ნულზე გაყოფა შეუძლებელია
print(simple_calculator(5, 3, "უცნობი ოპერაცია"))  # Output: შეცდომა: არასწორი ოპერაცია