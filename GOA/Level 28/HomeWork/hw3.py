def area_or_perimeter(length, width):
    if length == width:
        # If it is a square, return the area
        return length * width
    else:
        # If it is a rectangle, return the perimeter
        return 2 * (length + width)
