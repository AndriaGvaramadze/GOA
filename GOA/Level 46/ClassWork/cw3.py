def replace_exclamation(st):
    vowels = "aeiouAEIOU"  
    result = ""  
    
    for i in st:
        if i in vowels:
            result += "!"  
        else:
            result += i  
    
    return result

    