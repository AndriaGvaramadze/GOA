def check_age():
    age = int(input("შეიყვანეთ თქვენი ასაკი: "))

    if age < 0:
        print("ასაკი არ შეიძლება იყოს უარყოფითი.")
    elif age <= 12:
        print("თქვენ ხართ ბავშვი.")
    elif age <= 19:
        print("თქვენ ხართ teenager.")
    elif age <= 64:
        print("თქვენ ხართ ზრდასრული.")
    else:
        print("თქვენ ხართ მოხუცი.")

check_age()