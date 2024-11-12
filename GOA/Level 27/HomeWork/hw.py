# Create the initial list
numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90]

# Use append() to add the number 100 to the end of the list
numbers.append(100)

# Use insert() to add the number 5 at the beginning of the list
numbers.insert(0, 5)

# Use remove() to remove the number 30 from the list
numbers.remove(30)

# Use reverse() to reverse the order of the list
numbers.reverse()

# Use index() to find the index of the number 50
index_of_50 = numbers.index(50)

# Use count() to count how many times 20 appears in the list
count_of_20 = numbers.count(20)

# Output the results
print("List after modifications:", numbers)
print("Index of 50:", index_of_50)
print("Count of 20:", count_of_20)
