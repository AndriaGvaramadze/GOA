import math

def find_next_square(sq):
    
    root = math.sqrt(sq)
    
    
    if root.is_integer():
    
        next_root = int(root) + 1
        return next_root * next_root
    else:
        
        return -1

