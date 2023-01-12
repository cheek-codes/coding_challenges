// filtering even number (bug fixes)

// Fis the bug in filtering method

// The method is supposed to remove even numbers from the list and return a list that contains the odd numbers.

// However, there is a bug in the method that needs to be resolved.


// using System;
// using System.Collections.Generic;
// using System.Linq;

// public class Kata
//     {
//         public static List<int> FilterOddNumber(List<int> listOfNumbers)
//         {
//             for (int i = 0; i < listOfNumbers.Count; i++)
//             {
//                 if (listOfNumbers[i]%2 == 0)
//                 {
//                     listOfNumbers.RemoveAt(i);
//                 }
//             }
//             return listOfNumbers;
//         }
// }






using System;
using System.Collections.Generic;
using System.Linq;

public class Kata
    {
        public static List<int> FilterOddNumber(List<int> listOfNumbers)
        {
            for (int i = 0; i < listOfNumbers.Count; i++)
            {
                if (listOfNumbers[i] % 2 == 0)
                {
                    listOfNumbers.RemoveAt(i--);
                }
            }
            return listOfNumbers;
        }
    }






using System;
using System.Collections.Generic;
using System.Linq;

public class Kata
{
    public static List<int> FilterOddNumber(List<int> numbers)
    {
    return numbers.Where(n => n % 2 == 1).ToList();
    }
}






using System;
using System.Collections.Generic;
using System.Linq;

public class Kata
    {
        public static List<int> FilterOddNumber(List<int> listOfNumbers)
        {
            for (int i = listOfNumbers.Count-1; i >= 0; i--)
            {
                if (listOfNumbers[i]%2 == 0)
                {
                    listOfNumbers.RemoveAt(i);
                }
            }
            return listOfNumbers;
        }
    }