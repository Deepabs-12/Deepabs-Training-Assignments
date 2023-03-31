#program to find the longest word
def find_longest_word(ws):         #function
    l = ""
    for word in ws:                #iterate the list of words
        if len(word) > len(l):       #compare
            l = word
    return l

inp_list = input("Enter a list of words separated by spaces: ").split()
l = find_longest_word(inp_list)
print("The longest word is:", l)         #result
