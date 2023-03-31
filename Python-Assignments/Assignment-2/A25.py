#program to display common elements of the string in two lists
def find_common_elements(l1, l2):       #function for common elements
    comm= []
    for el in l1:                       #iterate list1
        if el in l2 and el not in comm:     #check list2
            comm.append(el)
    return comm

inp_l1 = input("Enter the first list of numbers separated by spaces: ").split()
inp_l2 = input("Enter the second list of numbers separated by spaces: ").split()
l1 = [int(num) for num in inp_l1]
l2 = [int(num) for num in inp_l2]
comm = find_common_elements(l1, l2)
print("The common elements are:", comm)      #result 
