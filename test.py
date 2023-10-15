def calculator():
    first_number =float(input("Enter the first number: "))
    second_number =float(input("Enter the second number: "))
    operator =input("Enter the operator: ")

    if operator == "+":
        result = first_number + second_number
    elif operator == "-":
        result = first_number - second_number
    elif operator == "*":
        result = first_number * second_number
    elif operator == "/":
        result = first_number / second_number
    elif operator == "%":
        result = first_number % second_number
    elif operator == "**":
        result = first_number ** second_number
    elif operator == "//":
        result = first_number // second_number
    else:
        print("Invalid operator")
        return
        
        print(f"{first_number} {operator} {second_number} ={result}")


        while True:
            calculator()
        repeat = input("Do you to continue? (Y/N): ")
    if repeat.upper() =="N":
        break
