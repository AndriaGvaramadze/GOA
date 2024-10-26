# 1. Create a list named fruits
fruits = ["apple", "banana", "cherry", "date", "elderberry"]


print("Fruits List:", fruits)


print("First fruit:", fruits[0])
print("Last fruit:", fruits[-1])


fruits.append("fig")
print("After adding 'fig':", fruits)


fruits.remove("banana")
print("After removing 'banana':", fruits)

fruits[1] = "blueberry"
print("After changing second item to 'blueberry':", fruits)


print("Length of the fruits list:", len(fruits))