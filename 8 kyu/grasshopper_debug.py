# Debug celsius converter

# Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.

# Find the errors in the code to get the celsius converter working properly.

# To convert fahrenheit to celsius:

# celsius = (fahrenheit - 32) * (5/9)
# Remember that typically temperatures in the current weather conditions are given in whole numbers. It is possible for temperature sensors to report temperatures with a higher accuracy such as to the nearest tenth. Instrument error though makes this sort of accuracy unreliable for many types of temperature measuring sensors.

# function weatherInfo (temp) {
#     var c : convert(temp)
#     if (c > 0)
#       return (c + " is freezing temperature")
#     else
#       return (c + " is above freezing temperature")
# }
  
#   function convertToCelsius (temperature) {
#     var celsius = (tempertur) - 32 + (5/9)
#     return temperature
# }



# P: Will we be given strings? Will we be given special characters? Will we be given floats? Will we be given integers? Will we be given negative numbers? Will we be given positive numbers?



# R: Return a string that works. fix the bugs.



# E: N/A






def weather_info (temp):
    c = (temp - 32) * (5/9)
    if (c < 0):
        return (f"{c} is freezing temperature")
    else:
        return (f"{c} is above freezing temperature")
    





def weather_info (temp):
    c = convertToCelsius(temp)
    if (c <= 0):
        return (str(c) + " is freezing temperature")
    else:
        return (str(c) + " is above freezing temperature")
    
def convertToCelsius (temperature):
  celsius = (temperature - 32) * (5.0/9.0)
  return celsius






def weather_info (t):
  c = (t - 32) * (5.0 /9)
  return str(c) + " is freezing temperature" if c <= 0 else str(c) + " is above freezing temperature"






