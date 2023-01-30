# How do I compare numbers?

# What could be easier than comparing integer numbers? However, the given piece of code doesn't recognize some of the numbers for a reason to be found. Your task is to find the bug and eliminate it.




def what_is(x):
    if x is 42:
        return 'everything'
    elif x is 42 * 42:
        return 'everything squared'
    else:
        return 'nothing'





def what_is(x):
    if x == 42:
        return 'everything'
    elif x == 42 * 42:
        return 'everything squared'
    else:
        return 'nothing'






def what_is(x):
  return { 42: 'everything', 1764: 'everything squared' }.get(x, 'nothing')






def what_is(x):
    if x is 42:
        return 'everything'
    elif x == 42 * 42: #wtf
        return 'everything squared'
    else:
        return 'nothing'
    





def what_is(x): return 'everything' if x == 42 else 'everything squared' if x == 1764 else 'nothing'