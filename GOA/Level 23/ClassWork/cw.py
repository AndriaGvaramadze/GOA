def check_number():
 
    number = float(input("შეიყვანეთ რიცხვი: "))

    if number > 0:
        print("შეყვანილი რიცხვი არის დადებითი.")
    elif number < 0:
        print("შეყვანილი რიცხვი არის უარყოფითი.")
    else:
        print("შეყვანილი რიცხვი არის ნულოვანი.")


check_number()