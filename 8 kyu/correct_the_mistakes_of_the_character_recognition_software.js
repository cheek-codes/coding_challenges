// Correct the mistakes of the character recognition software

// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents(especially pretty old ones written with a typewriter), are digitized character recognition softwares often make mistakes.

// Your task is correct the errors in the digitized text. You only have to handle the following mistakes:
// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1

// The test cases contain numbers only by mistake




// Will we be given an empty string? Will we be given strings? will we be given special characters? Will we be given floats? Will we be given integers?




// Return a new string where all the "5", "0", and "1" are replaced with "S", "O", and "I" respectfully.




// 1. If we were given "L0ND0N", should return "LONDON"
// 2. If we were given "DUBL1N", should return "DUBLIN"
// 3. If we were given "51NGAP0RE", should return "SINGAPORE"
// 4. If we were given "BUDAPE5T", should return "BUDAPEST"
// 5. If we were given "PAR15", should return "PARIS"





function correct(string){
    return string.replace(/5/g, "S").replace(/0/g, "O").replace(/1/g, "I")
}