# Reversed Strings

# Complete the solution so that it reverses the string passed into it.

# "world" --> "dlrow"
# "vampire" --> "eripmav"



# P: Will we be given strings? Will we be given floats? Will we be given integers? Will we be given uppercase letters? Will we be given lowercase letter? Will we be given special characters?



# R: Return a new string that is reversed from the given string parameter






def solution(string):
    return string[::-1]






def solution(string):
    temp = list(string)
    temp.reverse()
    return ''.join(temp)






def solution(string):
    return ''.join(i for i in reversed(string))