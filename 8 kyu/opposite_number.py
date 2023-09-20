# Opposite number
# Very simple, given an integer or a floating-point number, find its opposite.
# Examples:
# 1 : -1
# 14 : -14
# -43 : 43
# -10 : 10




# P: Will we be given empty strings? Will we be given strings? Will we be given special characters? Will we be given floats? Will we be given integers? Will we be given negative numbers? Will we be given positive numbers?




# R: Return a new integer or float that is the opposite sign of the given parameter.




# E: 1. If we were given 1, should return -1
# E: 2. If we were given 14, should return -14
# E: 3. If we were given -29, should return 29
# E: 4. If we were given -7, should return 7




def opposite(number):
    return number * -1






def opposite(number):
    return -number






def opposite(number):
    return number - number * 2 






from operator import neg as opposite
