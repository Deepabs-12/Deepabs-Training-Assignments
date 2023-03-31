#program to find the palindromes
def find_pal(strings):   #function to find palindrome
    pal = []
    for str in strings:     #iterate till end of the string
        if str == str[::-1]:
            pal.append(str)
    return pal

inp_list = input("Enter a list of strings separated by space: ").split()
pal= find_pal(inp_list)
print("Palindromes:", pal)   #result
