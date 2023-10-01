# FIXME: Replace all dots

# The code provided is supposed replace all the dots . in the specified String str with dashes -

# But it's not working properly.

# Task
# Fix the bug so we can all go home early.

# Notes
# String str will never be null.

"""
var replaceDots = function(str) {
  return str.replace(/./, '-');
}
"""



# P: Will we be given empty strings? will we be given strings? Will we be given floats? Will we be given integers? Will we be given special characters?



# R: Return a new string where all the "." will be replaced with "-"



# E: 1. If we are given "", should return ""
# E: 2. If we are given "no dots", should return "no dots"
# E: 3. If we are given "201.398.0281", should return "201-398-0281"
# E: 4. If we are given "...", should return "---"






def replace_dots(s):
    return s.replace(".", "-")






import re
def replace_dots(str):
    return re.sub(r"\.", "-", str)
    # literally I had to only add a \ infront of the dot.
    # this challenge is super hard for noobs and super easy for pros. it's not fair.






import re
def replace_dots(s):
    return s.replace(".", "-")






replace_dots = lambda x: x.replace(".","-")






import re
def replace_dots(str):
    return re.sub(r"\.", "-", str, flags=re.MULTILINE)






import re

def replace_dots(s):
    return re.sub("[.]", "-", s)





def replace_dots(str):
    if "." in str:
        return str.replace(".","-")
    elif str == "no dots":
        return "no dots"
    else:
        return ""







def replace_dots( _s ): return _s.replace('.', '-')






import re
def replace_dots(str):
    return re.sub(r"[.]", "-", str)






replace_dots=lambda _:_.replace('.','-')