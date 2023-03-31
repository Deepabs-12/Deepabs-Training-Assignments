num_list = input("Enter a list of numbers, separated by spaces: ").split()
sum_even = 0
for num in num_list:
    if int(num) % 2 == 0:
        sum_even += int(num)
print("The sum of even numbers in the list is:", sum_even)
