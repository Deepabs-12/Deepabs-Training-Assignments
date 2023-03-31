# sum of even numbers
num_list = input("Enter a list of numbers, separated by spaces: ").split()
sum_even = 0
for num in num_list:  #iterating the num_list
    if int(num) % 2 == 0:         #finds the even numbers in list
        sum_even += int(num)       #sum
print("The sum of even numbers in the list is:", sum_even)  #result
