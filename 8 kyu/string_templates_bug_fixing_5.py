# string templates - bug fixing #5

# oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature. Help Timmy with his string tmeplate so it works as he expects!

"""
function buildString(...template){
    return `I like #{template.join(',')}!`;
}"""




# Will we be given string? Will we be given empty string? Will we be given special characters? Will we be given an array? Will we be given floats? Will we be given integers?




# Return a new string where it takes in a parameter using string template.




# 1. If we were given 'Cheese','Milk','Chocolate'), should return 'I like Cheese, Milk, Chocolate!'






def build_string(*args):
    return f"I like {', '.join(args)}!"






def build_string(*args):
    return "I like {0}!".format(", ".join(args))