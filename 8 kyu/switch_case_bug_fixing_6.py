# Switch/Case - Bug Fixing #6

# oh no! timmy's evalObject function doesn't work. He uses Swithc/Cases to evaluate the given properties of an objec, can you fix timmy's function?

"""def eval_object(v):
    match "operation":
        case "+":
            return v["a"] + v["b"]
        case "-":
            return v["a"] - v["b"]
        case "/":
            return v["a"] / v["b"]
        case "*":
            return v["a"] * v["b"]
        case "%":
            return v["a"] % v["b"]
        case "**":
            return v["a"] ** v["b"]
        case _:
            return 1
"""






def eval_object(v):
    if v["operation"] == "+":
        return v["a"] + v["b"]
    elif v["operation"] == "-":
        return v["a"] - v["b"]
    elif v["operation"] == "/":
        return v["a"] / v["b"]
    elif v["operation"] == "*":
        return v["a"] * v["b"]
    elif v["operation"] == "%":
        return v["a"] % v["b"]
    elif v["operation"] == "**":
        return v["a"] ** v["b"]
    





def eval_object(v):
    return {"+": v['a']+v['b'],
            "-": v['a']-v['b'],
            "/": v['a']/v['b'],
            "*": v['a']*v['b'],
            "%": v['a']%v['b'],
           "**": v['a']**v['b'], }.get(v['operation'])






def eval_object(v):
    return eval("{a}{operation}{b}".format(**v))






def eval_object(v):
    return eval(str(v['a'])+v['operation']+str(v['b']))