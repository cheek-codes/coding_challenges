# Capitalization and Mutability

# Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

# Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

# Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

# def capitalize_word(word):
    # return "".join(char.upper() for char in word)






def capitalize_word(word):
    return word.capitalize()






def capitalizeWord(s):
    return s.title()






capitalizeWord = str.capitalize






def capitalizeWord(word):
    return word[0].upper() + word[1:]






def capitalize_word(word):

    return "".join(char.capitalize() for char in word.split())







def capitalizeWord(word):
    # return ' '.join( w[0].upper()+w[1:] if w[0].isalpha() else w for w in word.split(' ') )
    return word[0].upper()+word[1:] if word[0].isalpha() else word






def capitalize_word(word):
    return "".join(word[0].upper() + word[1:])






def capitalize_word(word):
    return word.replace(word[0], word[0].upper())
