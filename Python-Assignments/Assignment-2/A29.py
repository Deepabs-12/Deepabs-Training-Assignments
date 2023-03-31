#program to give the square of list of no.
def square_li(numbers):          #function for squaring
    squared_li = [num**2 for num in numbers]
    return squared_li

inp_list = input("Enter a list of numbers separated by space: ").split()
inp_list = [int(num) for num in inp_list]
squared_li = square_li(inp_list)
print("Squared list:", squared_li)      #result
