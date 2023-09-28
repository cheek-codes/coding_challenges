# Sum of positive

# You get an array of numbers, return the sum of all of the positives ones.

# Example:
# [1,-4,7,12] => 1 + 7 + 12 = 20

# Note if there is nothing to sum, the sum is default to 0.



# P: Will we be given a string? Will we be given an empty string? Will we be given a float? Will we be given a negative number? Will we be given an empty array?



# R: Return a sum of all only the positive numbers from the given array.



# E: 1. If we are given the array [1,-4,7,12], should return 20 because 1 + 7 + 12 = 20
# E: 2. If we are given the array [2,4,6,0], should return 12 because 2 + 4 + 6 + 0 = 12
# E: 3. If we are given the array [-9393,5,2,3], should return 10 because 5 + 2 + 3 = 10 






def positive_sum(arr):
    total_sum = 0
    for num in arr:
        if num > 0:
            total_sum += num
    return total_sum






def positive_sum(arr):
    return sum(x for x in arr if x > 0)