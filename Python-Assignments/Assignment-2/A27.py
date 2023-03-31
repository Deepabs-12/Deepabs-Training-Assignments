#program to find prime numbers from the list of numbers
def is_prime(num):          #function to check prime no.
    if num <= 1:            #if no. is less than 1
        return False
    for i in range(2, int(num ** 0.5) + 1):    #iterates from 2
        if num % i == 0:
            return False
    return True

def find_prime_numbers(numbers):         #fun to find prime no. from list
    prime_numbers = []
    for number in numbers:
        if is_prime(number):
            prime_numbers.append(number)
    return prime_numbers

input_list = input("Enter a list of numbers separated by spaces: ").split()
numbers = [int(num) for num in input_list]
prime_numbers = find_prime_numbers(numbers)
print("The prime numbers are:", prime_numbers)   #result
