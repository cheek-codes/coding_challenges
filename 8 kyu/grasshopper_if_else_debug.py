# Grasshopper - If/else syntax debug

# While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.

# checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.

# The function receives one parameter health which will always be a whole number between -10 and 10.

# function checkAlive (health) {
#   if () {
#     health < 0
#     return false
#   } else () {
#     return true
#   }
# }




# P: Will we be given empty strings? Will we be given strings? Will we be given special characters? Will we be given floats? Will we be given integers? Will we be given negative numbers? Will we be given positive numbers?




# R: Return true if the player's health is greater than 0
# R: Return false if the player's health is less than or equal to 0




# E: 1. If we are given -9, should return false
# E: 2. If we are given 0, should return false
# E: 3. If we are given 2, should return true
# E: 4. If we are given 9, should return true