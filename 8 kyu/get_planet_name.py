# Get Planet Name By ID

# The function is not returning the correct values. Can you figure out why?

# Example (Input --> Output ):
# 3 --> "Earth"

# def get_planet_name(id):
#     # This doesn't work; Fix it!
#     name=""
#     switch id:
#         case 1: name = "Mercury"
#         case 2: name = "Venus"
#         case 3: name = "Earth"
#         case 4: name = "Mars"
#         case 5: name = "Jupiter"
#         case 6: name = "Saturn"
#         case 7: name = "Uranus"  
#         case 8: name = "Neptune"
#     return name






def get_planet_name(id):
    # This doesn't work; Fix it!
    name=""
    match id:
        case 1: name = "Mercury"
        case 2: name = "Venus"
        case 3: name = "Earth"
        case 4: name = "Mars"
        case 5: name = "Jupiter"
        case 6: name = "Saturn"
        case 7: name = "Uranus"  
        case 8: name = "Neptune"
    return name






def get_planet_name(id):
    return {
        1: "Mercury",
        2: "Venus",
        3: "Earth",
        4: "Mars",
        5: "Jupiter",
        6: "Saturn",
        7: "Uranus",
        8: "Neptune",
    }.get(id, None)






def get_planet_name(id):
    planets = {
        1: "Mercury",
        2: "Venus",
        3: "Earth",
        4: "Mars",
        5: "Jupiter",
        6: "Saturn",
        7: "Uranus", 
        8: "Neptune",
    }
    return planets[id]






def get_planet_name(id):
    return ["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"][id-1]






def get_planet_name(id):
    name=""
    return{
        1:"Mercury",
        2:"Venus",
        3:"Earth",
        4:"Mars",
        5:"Jupiter",
        6:"Saturn",
        7:"Uranus" , 
        8:"Neptune"
       }[id]






def get_planet_name(id):
    return ("Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus",
        "Neptune")[id - 1]






get_planet_name=lambda id: ["Kypton","Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"][id]






def get_planet_name(id):
    switcher = {
        1:"Mercury",
        2:"Venus",
        3:"Earth",
        4:"Mars",
        5:"Jupiter",
        6:"Saturn",
        7:"Uranus",  
        8:"Neptune"}
    return(switcher.get(id, "Invalid ID"))






def get_planet_name(id):
    if id == 1: return "Mercury"
    elif id == 2: return "Venus"
    elif id == 3: return "Earth"
    elif id == 4: return "Mars"
    elif id == 5: return "Jupiter"
    elif id == 6: return "Saturn"
    elif id == 7: return "Uranus"  
    elif id == 8: return "Neptune"
    else: raise Exception()