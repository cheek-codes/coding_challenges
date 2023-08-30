# Jenny's secret message

# Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

# Can you help her?

# def greet(name):
#     return "Hello, {name}!".format(name=name)
#     if name == "Johnny":
#         return "Hello, my love!"




# P: Will we be given floats? Will we be given integers? Will we be given strings? Will we be given empty strings? Will we be given special characters? Will we be given uppercase characters? Will we be given lowercase characters?




# R: Return "Hello, my love" if given name is "Johnny"
# R: Return "Hello (name)" if given name is not "Johnny"



# E: 1. If we are given a name of "James", should return "Hello, James!"
# E: 2. If we are given a name of "Sally", should return "Hello, Sally!"
# E: 3. If we are given a name of "Chris", should return "Hello, Chris!"
# E: 4. If we are given a name of "Johnny", should return "Hello, my love!"




def greet(name):
    if name == "Johnny":
        return "Hello, my love!"
    else:
        return "Hello, {name}!".format(name=name)