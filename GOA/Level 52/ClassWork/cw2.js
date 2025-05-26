def printer_error(s):
    total_length = len(s)
    error_count = 0
    for char in s:
        if char < 'a' or char > 'm':
            error_count += 1
    result = str(error_count) + "/" + str(total_length)
    return result