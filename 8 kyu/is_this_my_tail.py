# is this my tail?

# Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument(body) - other wise the tail won't fit!

# If the tail is right return true, else return false.

# The arguments will always be non empty strings, and normal letters.


"""function correctTail(bod, tail ;
  
  sub = body.substr(bodylength-(tail.length)
  
  if sub = tail) ;
    return true
  }
  else 
    return false
"""




# P: Will we be given floats? wWill we be given integers? Will we be given special characters? Will we be given strings? Will we be given empty strings?





# R: Return true if the argument(tail) is the same letter as the last letter of the argument(body)
# R: Return false if the argument(tail) is a different letter as the last letter of the argument(body)





# E: 1. If we are given a body of "fox", and tail of "x", should return true
# E: 2. If we are given a body of "rhino", and tail of "o", should return true
# E: 3. If we are given a body of "meerkat", and tail of "t", should return true
# E: 4. If we are given a body of "fox", and tail of "o", should return false
# E: 5. If we are given a body of "rhino", and tail of "x", should return false
# E: 6. If we are given a body of "meerkat", and tail of "o", should return false






def correct_tail(body, tail):
    if body[-1] == tail:
        return True
    else:
        return False
    





def correct_tail(body, tail):
    return body.endswith(tail)






def correct_tail(body, tail):
    return body[-1] == tail






def correct_tail(body, tail):
    sub = body[len(body)-len(tail)]
    if sub == tail:
        return True
    else:
        return False
    





def correct_tail(body, tail):
    return True if body[-1]==tail else False






correct_tail = str.endswith






correct_tail = lambda a,t: a[-1]==t






def correct_tail(body, tail):
    return body[-1:] == tail






def correct_tail(body, tail):
    b = body[-1:].lower() 
    c = tail[0].lower()
    if b == c:
        return True
    else: 
        return False
    





def correct_tail(body, tail):
    n = len(body)
    if body[n-1] == tail[0]:
        return True
    else:
        return False