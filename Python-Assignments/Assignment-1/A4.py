string = input("Enter a string: ")

length = len(string)
first_char = string[0]
last_char = string[-1]
reverse = string[::-1]


print("Length " +str(length))
print("First character " +str(first_char))
print("Last character " +str(last_char))
print("Reverse " +str(reverse))