#program for calculator
# Function to add two numbers
def add(a, b):
    return a + b

# Function to subtract two numbers
def subtract(a, b):
    return a - b

# Function to multiply two numbers
def multiply(a, b):
    return a * b

# Function to mod two numbers
def mod(a, b):
    return a % b

# Function to divide two numbers
def divide(a, b):
    if b == 0:
        print("Error: division by zero")
        return None
    return a / b



# Main loop for the calculator
while True:
    print("\nSelect an operation:")
    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Mod")
    print("5. Divide")
    print("6. Quit")
    choice = input("Enter your choice (1-6): ")
    if choice == "1":
        a = float(input("Enter n1: "))
        b = float(input("Enter n2: "))
        result = add(a, b)
        print("Sum: ", result)
    elif choice == "2":
        a = float(input("Enter n1: "))
        b = float(input("Enter n2: "))
        result = subtract(a, b)
        print("Difference: ", result)
    elif choice == "3":
        a = float(input("Enter n1: "))
        b = float(input("Enter n2: "))
        result = multiply(a, b)
        print("Product: ", result)

    elif choice== "4":
        a = float(input("Enter n1: "))
        b = float(input("enter n2: "))
        result = mod(a,b)
        print("Remainder:",result)

    elif choice == "5":
        a = float(input("Enter n1: "))
        b = float(input("Enter n2: "))
        result = divide(a, b)
        if result is not None:
            print("Quotient: ", result)
            
    elif choice == "6":
        print("End!")
        break
    else:
        print("Invalid choice!")
