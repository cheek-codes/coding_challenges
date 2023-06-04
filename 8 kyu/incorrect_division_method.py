# incorrect division method

# This method, which is supposed to return the result of dividing its first argument by its second, isn't always returning correct values. Fix it

# const solve = (x, y) => x // y






def divide_numbers(x,y):
    return x / y






def divide_numbers(x,y):
    return float(x) / y






def divide_numbers(x,y):
    return float(x) / float(y)






# Works for Python 2 and Python 3
from operator import truediv as divide_numbers