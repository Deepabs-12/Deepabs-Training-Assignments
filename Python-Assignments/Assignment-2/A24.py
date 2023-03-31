#program to calculate the median
def cal_med(numbers):        #function to calculate the median
    sorted_numbers = sorted(numbers)     #sorted numbers
    n = len(sorted_numbers)
    if n % 2 == 0:             #for even no. of numbers
        median = (sorted_numbers[n//2 - 1] + sorted_numbers[n//2]) / 2
    else:
        median = sorted_numbers[n//2]    #for odd no. of numbers
    return median

inp = input("Enter a list of numbers separated by spaces: ").split()
inp = [float(num) for num in inp]
median = cal_med(inp)
print("The median value is:", median)  #result
