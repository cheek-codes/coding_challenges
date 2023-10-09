# 101 Dalmatians - squash the bugs, not the dogs!

# Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!

# By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.

# The number of dogs will always be a number and there will always be at least 1 dog.

# Good luck!




"""function howManyDalmations(numer :
  
  var dogs ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"];
  
  var respond = number <= 10 ? dogs[0] (number <= 50 ? dogs[1] : (number = 101  dogs[3] : dogs[2]
  
return respond
"""






def how_many_dalmatians(n):
    dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"]
    if n <= 10:
        return dogs[0]
    elif n <= 50:
        return dogs[1]
    elif n == 101: 
          return dogs[3]
    else:
        return dogs[2]
    





def how_many_dalmatians(n):
    dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"]
    return dogs[0] if n <= 10 else dogs[1] if n <=50 else dogs[3] if n == 101 else dogs[2]






def how_many_dalmatians(n):
    return "Hardly any" if n <= 10 else("More than a handful!" if n <= 50 else("101 DALMATIONS!!!"if n == 101 else "Woah that's a lot of dogs!"))






how_many_dalmatians=lambda n: ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"][sum([n>10, n>50, n>=101])]






def how_many_dalmatians(n):
    dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!","101 DALMATIONS!!!"];
    return dogs[(n>10)+(n>50)+(n==101)+(n>101)]