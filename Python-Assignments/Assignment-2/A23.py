#program to sort the list of strings
str_list = input("Enter a list of strings, separated by spaces: ").split()
sorted_list = []
while str_list:        #iterate until the end of the list
    min_str= str_list[0]    #assigning the first string to min_str
    for str in str_list:
        if str < min_str:    #comparison
            min_str = str
    sorted_list.append(min_str)     #adding min_str to the sorted list
    str_list.remove(min_str)
print("The names in alphabetical order are:")  #result
for str in sorted_list:
    print(str)
