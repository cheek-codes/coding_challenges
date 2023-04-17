# Unfinished Loop - Bug Fixing #1
# Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

# def create_array(n):
    # res=[]
    # i=1
    # while i<=n: res+=[i]
    # return res




# P: Will we be given an empty string? Will we be given strings? Will we be given special charaters? Will we be given floats? Will we be given integers?




# R: Return a new string where the infinite loop is fixed



# E: none






def create_array(n):
    res=[]
    i=1
    while i<=n:
        res+=[i]
        i+= 1
    return res