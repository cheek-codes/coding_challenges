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