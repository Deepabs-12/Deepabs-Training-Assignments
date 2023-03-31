num_list = []
while True:
    num = input("Enter a number (or 'done' to finish): ")
    if num == 'done':
        break
    else:
        num_list.append(float(num))

largest = max(num_list)
smallest = min(num_list)


print("Largest " +str(largest)+"\n"+("Smallest " +str(smallest)))
