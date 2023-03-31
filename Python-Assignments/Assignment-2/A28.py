# program to print letter count acc. to repetition
def count_letters(str):   #fun to count 
    l_counts = {}
    for l in str:        #iterate till end of the string
        if l.isalpha():
            l_counts[l] = l_counts.get(l, 0) + 1
    return l_counts

inp_str = input("Enter a string: ")
l_counts = count_letters(inp_str)
print("Letter counts:", l_counts)    #result
