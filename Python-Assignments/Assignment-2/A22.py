# program to print string 2/o vowels
def remove_vowels(str):         #function to remove vowels
    vowels = "aeiouAEIOU"
    new = ""
    for char in str:
        if char not in vowels:  
            new += char
    return new

inp = input("Enter a string: ")
ou = remove_vowels(inp)
print("Original string:", inp)     
print("New string with vowels removed:", ou)   #result
