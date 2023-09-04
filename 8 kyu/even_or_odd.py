# Even or odd

# Create a function that takes an integer as an argument and returns "Even" for even numbers of "Odd" for odd numbers.




# Will we be given an empty string? Will we be given a string? Will we be given any special characters? Will we be given a float? Will we be given an integer? Will we be given a negative number? Will we be given a positive number?





# R: Return "Even" if the given integer is an even number (if the given number is divisible by 2 and has no remainders)
# R: Return "Odd" if the given integer is an odd number (if the given number is not divisible by 2 and has remainders)





# E: 1. If we were given 2, should return "Even"
# E: 2. If we were given 7, should return "Odd"
# E: 3. If we were given -42, should return "Even"
# E: 4. If we were given -7, should return "Odd"
# E: 5. If we were given 0, should return "Even"



def even_or_odd(number):
    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"
    





def even_or_odd(number):
	return 'Odd' if number % 2 else 'Even'






def even_or_odd(number):
  return 'Even' if number % 2 == 0 else 'Odd'






def even_or_odd(number):
  return ["Even", "Odd"][number % 2]