#program for todo-list
# Define the file name to store the to-do list items
file_name = "todo.txt"

# Define the function to read the existing to-do list items
def read_todo_list():
    try:
        with open(file_name, "r") as f:
            todo_list = f.readlines()
        # Remove any extra spaces or newlines from the items
        todo_list = [item.strip() for item in todo_list]
        return todo_list
    except FileNotFoundError:
        # If the file doesn't exist, return an empty list
        return []

# Define the function to add a new item to the to-do list
def add_todo_item(item):
    with open(file_name, "a") as f:
        f.write(item + "\n")
    print(f"Added item: {item}")

# Define the function to update an existing item in the to-do list
def update_todo_item(old_item, new_item):
    todo_list = read_todo_list()
    try:
        index = todo_list.index(old_item)
        todo_list[index] = new_item
        with open(file_name, "w") as f:
            f.writelines([item + "\n" for item in todo_list])
        print(f"Updated item: {old_item} -> {new_item}")
    except ValueError:
        print(f"Item '{old_item}' not found in the to-do list")

# Define the function to remove an item from the to-do list
def remove_todo_item(item):
    todo_list = read_todo_list()
    try:
        todo_list.remove(item)
        with open(file_name, "w") as f:
            f.writelines([item + "\n" for item in todo_list])
        print(f"Removed item: {item}")
    except ValueError:
        print(f"Item '{item}' not found in the to-do list")

# Define the function to display the current to-do list items
def display_todo_list():
    todo_list = read_todo_list()
    if todo_list:
        print("To-Do List:")
        for i, item in enumerate(todo_list, start=1):
            print(f"{i}. {item}")
    else:
        print("Your to-do list is empty.")

# Define the main function to run the application
def main():
    
    while True:
        print("\nPlease choose an option:")
        print("1. View the to-do list")
        print("2. Add a new item ")
        print("3. Update an existing item ")
        print("4. Remove an item")
        print("5. Exit")

        choice = input("> ")

        if choice == "1":
            display_todo_list()
        elif choice == "2":
            item = input("Please enter the new item: ")
            add_todo_item(item)
        elif choice == "3":
            old_item = input("Please enter the item you want to update: ")
            new_item = input("Please enter the new item: ")
            update_todo_item(old_item, new_item)
        elif choice == "4":
            item = input("Please enter the item you want to remove: ")
            remove_todo_item(item)
        elif choice == "5":
            print("End!")
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
