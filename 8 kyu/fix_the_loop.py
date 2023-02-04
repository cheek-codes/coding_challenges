# fix the loop!

# Your collegue wrote a simple loop to list his favorite animals. But there seems to be a minor mistake in the grammar, which prevents the program to work. Fix it!

# If you pass the list of your favorite animals to the function, you should get the list of the animals with orderings and newlines added. 

# for example, passing in:
# animals = [ 'dog', 'cat', 'elephant' ]
# will result in:

# list_animals(animals) == '1. dog\n2. cat\n3. elephant\n'


# def list_animals(animals):
#     list = ''
#     for i in range(animals):
#         list += str(i + 1) + '. ' + animals[i] + '\n'
#     return list






def list_animals(animals):
    ani_list = ''
    for i in range(len(animals)):
        ani_list += str(+i+1) + '. ' + animals[i] + '\n'
    return ani_list






def list_animals(animals):
    return ''.join('{}. {}\n'.format(i, x) for (i, x) in enumerate(animals, 1))






def list_animals(animals):
    list = ''
    for i,animal in enumerate(animals):
        list += str(i + 1) + '. ' + animal + '\n'
    return list






def list_animals(animals):
    res = ''
    for i in range(len(animals)):
        res += str(i + 1) + '. ' + "".join(animals[i]) + '\n'
    return res






def list_animals(arr):
    out = ''
    for i in range(len(arr)):
        out += str(i + 1) + '. ' + arr[i] + '\n'
    return out 






def list_animals(animals):
    return ''.join('{0}. {1}\n'.format(i + 1, x) for i, x in enumerate(animals))






list_animals = lambda a: "".join("{0}. {1}\n".format(i+1, v) for i, v in enumerate(a))