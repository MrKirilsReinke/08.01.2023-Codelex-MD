/* 

TS UZDEVUMI

Define all functions as arrow functions like in the example. 
Each function has a unique title. 
Name functions in camelCase and with descriptive titles. 
Define types for all arguments passed to the function and add a return type.

EXAMPLE
 
Write a function that takes two numbers (a and b) as argument
Subtract b from a
Return the result

myFunction(1,2)
Expected
-1

myFunction(10,5)
Expected
5

myFunction(99,1)
Expected
98

ANSWER

const subtract = (a: number, b: number): number => a - b;


LONGER ANSWER EXAMPLE (FOR OTHER TASKS THAT HAVE MULTIPLE ACTIONS)

const subtract = (a: number, b: number): number => {
 return a - b;
};


VERIFY ANSWER

console.log(subtract(1, 2)); // -1
console.log(subtract(10, 5)); // 5
console.log(subtract(99, 1)); // 98

------------------------------------------------------------------

*/

/*

1)

Write a function that takes two numbers (a and b) as argument
Sum a and b
Return the result

myFunction(1,2)
Expected
3

myFunction(1,10)
Expected
11

myFunction(99,1)
Expected
100

*/

console.log('Exercise 1'.toUpperCase());


const sum = (a: number, b: number): number => a + b;

console.log(
    sum(1, 2), 
    sum(1, 10), 
    sum(99, 1)
);


/*any

2)

Write a function that takes a value as argument
Return the type of the value

myFunction(1)
Expected
'number'

myFunction(false)
Expected
'boolean'

myFunction({})
Expected
'object'

myFunction(null)
Expected
'object'

myFunction('string')
Expected
'string'

myFunction(['array'])
Expected
'object'

*/

console.log('Exercise 2'.toUpperCase());

const inputType = (a: unknown): string => typeof(a);

console.log(
    inputType(1),
    inputType(false),
    inputType({}),
    inputType(null),
    inputType('string'),
    inputType(['array'])
);

/*

3)

Write a function that takes two values, say a and b, as arguments
Return true if the two values are equal and of the same type

myFunction(2, 3)
Expected
false 

myFunction(3, 3)
Expected
true 

myFunction(1, '1')
Expected
false 

myFunction('10', '10')
Expected
true

*/

console.log('Exercise 3'.toUpperCase());

const ifEqual = (a: number | string, b: number | string): boolean => a === b ? true: false;

console.log(
    ifEqual(2, 3),
    ifEqual(3, 3),
    ifEqual(1, '1'),
    ifEqual('10', '10')
);

/*

4)

Write a function that takes a string (a) and a number (n) as arguments
Return the nth character of 'a'

myFunction('abcd',1)
Expected
'a'

myFunction('zyxbwpl',5)
Expected
'w'

myFunction('gfedcba',3)
Expected
'e'

*/

console.log('Exercise 4'.toUpperCase());

const nthChar = (a: string, b: number): string => a.charAt(b - 1);

console.log(
    nthChar('abcd',1),
    nthChar('zyxbwpl',5),
    nthChar('gfedcba',3)
);

/*

5)

Write a function that takes a string (a) as argument
Remove the first 3 characters of a
Return the result

myFunction('abcdefg')
Expected
'defg'

myFunction('1234')
Expected
'4'

myFunction('fgedcba')
Expected
'dcba'

*/

console.log('Exercise 5'.toUpperCase());

const removeFirstThree = (a: string): string => a.slice(3);

console.log(
    removeFirstThree('abcdefg'),
    removeFirstThree('1234'),
    removeFirstThree('fgedcba')
);

/*

6)

Write a function that takes a string as argument
Extract the last 3 characters from the string
Return the result

myFunction('abcdefg')
Expected
'efg'

myFunction('1234')
Expected
'234'

myFunction('fgedcba')
Expected
'cba'

*/

console.log('Exercise 6'.toUpperCase());

const removeLastThree = (a: string): string => a.slice(-3);

console.log(
    removeLastThree('abcdefg'),
    removeLastThree('1234'),
    removeLastThree('fgedcba')
);

/*

7)

Write a function that takes a string (a) as argument
Get the first 3 characters of a
Return the result

myFunction('abcdefg')
Expected
'abc'

myFunction('1234')
Expected
'123'

myFunction('fgedcba')
Expected
'fge'

*/

console.log('Exercise 7'.toUpperCase());

const getFirstThree = (a: string): string => a.slice(0, 3);

console.log(
    getFirstThree('abcdefg'),
    getFirstThree('1234'),
    getFirstThree('fgedcba')
);

/*

8)

Write a function that takes a string (a) as argument
Extract the first half a
Return the result

myFunction('abcdefgh')
Expected
'abcd'

myFunction('1234')
Expected
'12'

myFunction('gedcba')
Expected
'ged'

*/

console.log('Exercise 8'.toUpperCase());

const getFirstHalf = (a: string): string => a.slice(0, a.length/2);

console.log(
    getFirstHalf('abcdefgh'),
    getFirstHalf('1234'),
    getFirstHalf('gedcba')
);

/*

9)

Write a function that takes a string (a) as argument
Remove the last 3 characters of a
Return the result

myFunction('abcdefg')
Expected
'abcd'

myFunction('1234')
Expected
'1'

myFunction('fgedcba')
Expected
'fged'

*/

console.log('Exercise 9'.toUpperCase());

const getLastThree = (a: string): string => a.slice(0, -3);

console.log(
    getLastThree('abcdefg'),
    getLastThree('1234'),
    getLastThree('fgedcba')
);

/*

10)

Write a function that takes two numbers (a and b) as argument
Return b percent of a

myFunction(100,50)
Expected
50

myFunction(10,1)
Expected
0.1

myFunction(500,25)
Expected
125

*/

console.log('Exercise 10'.toUpperCase());

const getpercent = (a: number, b: number): number => a * b / 100;

console.log(
    getpercent(100,50),
    getpercent(10,1),
    getpercent(500,25)
);

/*

11)

Write a function that takes 6 values (a,b,c,d,e,f) as arguments
Sum a and b
Then substract by c
Then multiply by d and divide by e
Finally raise to the power of f and return the result
Tip: mind the order

myFunction(6,5,4,3,2,1)
Expected
10.5

myFunction(6,2,1,4,2,3)
Expected
2744

myFunction(2,3,6,4,2,3)
Expected
-8

*/

console.log('Exercise 11'.toUpperCase());

const getMath = (a: number, b: number, c: number, d: number, e: number, f: number): number => ((a + b - c) * d / e) ** f;

console.log(
    getMath(6,5,4,3,2,1),
    getMath(6,2,1,4,2,3),
    getMath(2,3,6,4,2,3)
);

/*

12)

Write a function that takes a number as argument
If the number is even, return true
Otherwise, return false

myFunction(10)
Expected
true

myFunction(-4)
Expected
true

myFunction(5)
Expected
false

myFunction(-111)
Expected
false

*/

console.log('Exercise 12'.toUpperCase());

const isEven = (a: number): boolean => a % 2 === 0 ? true : false;

console.log(
    isEven(10),
    isEven(-4),
    isEven(5),
    isEven(-111)
);

/*

13)

Write a function that takes two strings (a and b) as arguments
Return the number of times a occurs in b


myFunction('m', 'how many times does the character occur in this sentence?')
Expected
2

myFunction('h', 'how many times does the character occur in this sentence?')
Expected
4

myFunction('?', 'how many times does the character occur in this sentence?')
Expected
1

myFunction('z', 'how many times does the character occur in this sentence?')
Expected
0

*/

console.log('Exercise 13'.toUpperCase());

const timesOccur = (a: string, b: string): number => b.split(a).length - 1;

console.log(
    timesOccur('m', 'how many times does the character occur in this sentence?'),
    timesOccur('h', 'how many times does the character occur in this sentence?'),
    timesOccur('?', 'how many times does the character occur in this sentence?'),
    timesOccur('z', 'how many times does the character occur in this sentence?')
);


/*

14)

Write a function that takes a number (a) as argument
If a is a whole number (has no decimal place), return true
Otherwise, return false

myFunction(4)
Expected
true 

myFunction(1.123)
Expected
false 

myFunction(1048)
Expected
true 

myFunction(10.48)
Expected
false

*/

console.log('Exercise 14'.toUpperCase());

const isFloat = (a: number): boolean => Number.isInteger(a) ? true : false;

console.log(
    isFloat(4),
    isFloat(1.123),
    isFloat(1048),
    isFloat(10.48)
);

/*

15)

Write a function that takes two numbers (a and b) as arguments
If a is smaller than b, divide a by b
Otherwise, multiply both numbers
Return the resulting value

myFunction(10, 100)
Expected
0.1

myFunction(90, 45)
Expected
4050

myFunction(8, 20)
Expected
0.4

myFunction(2, 0.5)
Expected
1

*/

console.log('Exercise 15'.toUpperCase());

const isSmallerA = (a: number, b: number): number => a < b ? a / b : a * b;

console.log(
    isSmallerA(10, 100),
    isSmallerA(90, 45),
    isSmallerA(8, 20),
    isSmallerA(2, 0.5)
);

/*

16)

Write a function that takes two strings (a and b) as arguments
If a contains b, append b to the beginning of a
If not, append it to the end
Return the concatenation

myFunction('cheese', 'cake')
Expected
'cheesecake'

myFunction('lips', 's')
Expected
'slips'

myFunction('Java', 'script')
Expected
'Javascript'

myFunction(' think, therefore I am', 'I')
Expected
'I think, therefore I am'

*/

console.log('Exercise 16'.toUpperCase());

const isAContainsB = (a: string, b: string): string => a.match(b) ? `${b}${a}` : `${a}${b}`;

console.log(
    isAContainsB('cheese', 'cake'),
    isAContainsB('lips', 's'),
    isAContainsB('Java', 'script'),
    isAContainsB(' think, therefore I am', 'I')
);

/*

17)

Write a function that takes a number (a) as argument
Round a to the 2nd digit after the comma
Return the rounded number

myFunction(2.12397)
Expected
2.12

myFunction(3.136)
Expected
3.14

myFunction(1.12397)
Expected
1.12

myFunction(26.1379)
Expected
26.14

*/

console.log('Exercise 17'.toUpperCase());

const roundedNum = (a: number): string => (a).toFixed(2);

console.log(
    roundedNum(2.12397),
    roundedNum(3.136),
    roundedNum(1.12397),
    roundedNum(26.1379)
);

/*

18)

Write a function that takes a number (a) as argument
Split a into its individual digits and return them in an array
Tip: you might want to change the type of the number for the splitting

myFunction(10)
Expected
[1,0]

myFunction(931)
Expected
[9,3,1]

myFunction(193278)
Expected
[1,9,3,2,7,8]

*/

console.log('Exercise 18'.toUpperCase());

const arr = (a: number): string[] => a.toString().split('');

console.log(
    arr(10),
    arr(931),
    arr(193278)
);

/*

19)

It seems like something happened to these strings
Can you figure out how to clear up the chaos?
Write a function that joins these strings together such that they form the following words:
'Javascript', 'Countryside', and 'Downtown'
You might want to apply basic JS string methods such as replace(), split(), slice() etc.

myFunction('java', 'tpi%rcs')
Expected
'Javascript'

myFunction('c%ountry', 'edis')
Expected
'Countryside'

myFunction('down', 'nw%ot')
Expected
'Downtown'

*/

console.log('Exercise 19'.toUpperCase());

const clearString = (a: string, b: string): string => `${a[0].toUpperCase()}${a.replace('%', '').slice(1)}${b.replace('%', '').split('').reverse().join('')}`;

console.log(
    clearString('java', 'tpi%rcs'),
    clearString('c%ountry', 'edis'),
    clearString('down', 'nw%ot')
);

/*

20)

This challenge is a little bit more complex
Write a function that takes a number (a) as argument
If a is prime, return a
If not, return the next higher prime number

myFunction(38)
Expected
41

myFunction(7)
Expected
7

myFunction(115)
Expected
127

myFunction(2000)
Expected
2003

*/

console.log('Exercise 20'.toUpperCase());

const whichIsPrime = (a: number): number => {
    if (isPrime(a)) {
        return a;
    } else {
        return nextPrime(a);
    }
};

const isPrime = (n: number): boolean => {
    if (n <= 1) {
        return false;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
};

const nextPrime = (n: number): number => {
    let next = n;

    while (!isPrime(next)) {
        next++;
    }

    return next;
};

console.log(
    whichIsPrime(38),
    whichIsPrime(7),
    whichIsPrime(115),
    whichIsPrime(2000)
);

/*

21)

Write a function that takes two numbers, say x and y, as arguments
Check if x is divisible by y
If yes, return x
If not, return the next higher natural number that is divisible by y

myFunction(1, 23)
Expected
23

myFunction(23, 23)
Expected
23

myFunction(7, 3)
Expected
9

myFunction(-5, 7)
Expected
0

*/

console.log('Exercise 21'.toUpperCase());

const IsDivisible = (x: number, y: number): number => {
    if (x % y === 0) {
        return x;
    }

    while (x % y !== 0) {
        x++;
    }

    return x;
}

console.log(
    IsDivisible(1, 23),
    IsDivisible(23, 23),
    IsDivisible(7, 3),
    IsDivisible(-5, 7)
);

/*

22)

Write a function that takes two strings (a and b) as arguments
Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
Return the resulting string

myFunction('1234567','.')
Expected
'1.234.567'

myFunction('abcde','$')
Expected
'ab$cde'

myFunction('zxyzxyzxyzxyzxyz','w')
Expected
'zwxyzwxyzwxyzwxyzwxyz'

*/

console.log('Exercise 22'.toUpperCase());

const insertStrBAfterEach3rdLetter = (a: string, b: string): string => {    
    let c: string[] = a.split('').reverse();

    for (let i = 0; i < c.length; i+= 4) {
        c.splice(i, 0, b);
    }

    return c.reverse().join('').substring(0, c.length - 1);
}

console.log(
    insertStrBAfterEach3rdLetter('1234567','.'),
    insertStrBAfterEach3rdLetter('abcde','$'),
    insertStrBAfterEach3rdLetter('zxyzxyzxyzxyzxyz','w')
);

/*

23)

Write a function that takes a string as argument
As it is, the string has no meaning
Increment each letter to the next letter in the alphabet
Return the correct word

myFunction('bnchmf')
Expected
'coding'

myFunction('bgddrd')
Expected
'cheese'

myFunction('sdrshmf')
Expected
'testing'

*/

console.log('Exercise 23'.toUpperCase());

const incrementEachLetterBy1 = (a: string): string => {    
    let alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
    let arr: string[] = a.split('');
    let newArr: string[] = [];

    for (let i = 0; i < arr.length; i++) {
        let char: string = arr[i];
        
        if (alphabet.indexOf(char) !== -1) {
            newArr.push(alphabet[alphabet.indexOf(char) + 1])
        }
    }

    return newArr.join('');
}

console.log(
    incrementEachLetterBy1('bnchmf'),
    incrementEachLetterBy1('bgddrd'),
    incrementEachLetterBy1('sdrshmf')
);

/*

24)

Write a function that takes an array (a) and a value (n) as argument
Return the nth element of 'a'

myFunction([1,2,3,4,5],3)
Expected
3

myFunction([10,9,8,7,6],5)
Expected
6

myFunction([7,2,1,6,3],1)
Expected
7

*/

console.log('Exercise 24'.toUpperCase());

const nthCharAt = (a: number[], b: number): number => a[(b - 1)];

console.log(
    nthCharAt([1,2,3,4,5],3),
    nthCharAt([10,9,8,7,6],5),
    nthCharAt([7,2,1,6,3],1)
);

/*

25)

Write a function that takes an array (a) as argument
Remove the first 3 elements of 'a'
Return the result

myFunction([1,2,3,4])
Expected
[4]

myFunction([5,4,3,2,1,0])
Expected
[2,1,0]

myFunction([99,1,1])
Expected
[]

*/

console.log('Exercise 25'.toUpperCase());

const removeFirstThreee = (a: number[]): number[] => a.slice(3);

console.log(
    removeFirstThreee([1,2,3,4]),
    removeFirstThreee([5,4,3,2,1,0]),
    removeFirstThreee([99,1,1])
);

/*

26)

Write a function that takes an array (a) as argument
Extract the last 3 elements of a
Return the resulting array

myFunction([1,2,3,4])
Expected
[2,3,4]

myFunction([5,4,3,2,1,0])
Expected
[2,1,0]

myFunction([99,1,1])
Expected
[99,1,1]

*/

console.log('Exercise 26'.toUpperCase());

const extractLastThree = (a: number[]): number[] => [...a.slice(-3)];

console.log(
    extractLastThree([1,2,3,4]),
    extractLastThree([5,4,3,2,1,0]),
    extractLastThree([99,1,1])
);

/*

27)

Write a function that takes an array (a) as argument
Extract the first 3 elements of a
Return the resulting array

myFunction([1,2,3,4])
Expected
[1,2,3]

myFunction([5,4,3,2,1,0])
Expected
[5,4,3]

myFunction([99,1,1])
Expected
[99,1,1]

*/

console.log('Exercise 27'.toUpperCase());

const extractFirstThree = (a: number[]): number[] => [...a.slice(0, 3)];

console.log(
    extractFirstThree([1,2,3,4]),
    extractFirstThree([5,4,3,2,1,0]),
    extractFirstThree([99,1,1])
);

/*

28)

Write a function that takes an array (a) and a number (n) as arguments
It should return the last n elements of a

myFunction([1, 2, 3, 4, 5], 2)
Expected
[ 4, 5 ]

myFunction([1, 2, 3], 6)
Expected
[ 1, 2, 3 ]

myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3)
Expected
[ 6, 7, 8 ]

*/

console.log('Exercise 28'.toUpperCase());

const lastNofA = (a: number[], n: number): number[] => a.slice(-n);

console.log(
    lastNofA([1, 2, 3, 4, 5], 2),
    lastNofA([1, 2, 3], 6),
    lastNofA([1, 2, 3, 4, 5, 6, 7, 8], 3)
);

/*

29)

Write a function that takes an array (a) and a value (b) as argument
The function should clean a from all occurrences of b
Return the filtered array

myFunction([1,2,3], 2)
Expected
[1, 3]

myFunction([1,2,'2'], '2')
Expected
[1, 2]

myFunction([false,'2',1], false)
Expected
['2', 1]

myFunction([1,2,'2',1], 1)
Expected
[2, '2']

*/

console.log('Exercise 29'.toUpperCase());

const cleanAfromB = (a: (number | boolean | string)[], n: number | boolean | string): (number | string | boolean)[] => a.filter(x => x !== n);

console.log(
    cleanAfromB([1,2,3], 2),
    cleanAfromB([1,2,'2'], '2'),
    cleanAfromB([false,'2',1], false),
    cleanAfromB([1,2,'2',1], 1)
);

/*

30)

Write a function that takes an array (a) as argument
Return the number of elements in a

myFunction([1,2,2,4])
Expected
4

myFunction([9,9,9])
Expected
3

myFunction([4,3,2,1,0])
Expected
5

*/

console.log('Exercise 30'.toUpperCase());

const qtyOfElements = (a: number[]): number => a.length;

console.log(
    qtyOfElements([1,2,2,4]),
    qtyOfElements([9,9,9]),
    qtyOfElements([4,3,2,1,0])
);

/*

31)

Write a function that takes an array of numbers as argument
Return the number of negative values in the array

myFunction([1,-2,2,-4])
Expected
2

myFunction([0,9,1])
Expected
0

myFunction([4,-3,2,1,0])
Expected
1

*/

console.log('Exercise 31'.toUpperCase());

const negativeNum = (a: number[]): number => (a.filter(x => (x < 0))).length;

console.log(
    negativeNum([1,-2,2,-4]),
    negativeNum([0,9,1]),
    negativeNum([4,-3,2,1,0])
);

/*

32)

Write a function that takes an array of numbers as argument
It should return an array with the numbers sorted in descending order

myFunction([1,3,2])
Expected
[3,2,1]

myFunction([4,2,3,1])
Expected
[4,3,2,1]

*/

console.log('Exercise 32'.toUpperCase());

const sortedNumFromEnd = (a: number[]): number[] => a.sort((a, b) => b - a);

console.log(
    sortedNumFromEnd([1,3,2]),
    sortedNumFromEnd([4,2,3,1])
);

/*

33)

Write a function that takes an array of strings as argument
Sort the array elements alphabetically
Return the result

myFunction(['b', 'c', 'd', 'a'])
Expected
['a', 'b', 'c', 'd']

myFunction(['z', 'c', 'd', 'a', 'y', 'a', 'w'])
Expected
['a', 'a', 'c', 'd', 'w', 'y', 'z']

*/

console.log('Exercise 33'.toUpperCase());

const sortedStringFromStart = (a: string[]): string[] => a.sort();

console.log(
    sortedStringFromStart(['b', 'c', 'd', 'a']),
    sortedStringFromStart(['z', 'c', 'd', 'a', 'y', 'a', 'w']),
);

/*

34)

Write a function that takes an array of numbers as argument
It should return the average of the numbers

myFunction([10,100,40])
Expected
50

myFunction([10,100,1000])
Expected
370

myFunction([-50,0,50,200])
Expected
50

*/

console.log('Exercise 34'.toUpperCase());

const averageNum = (a: number[]): number => a.reduce ((a, b) => a + b) / a.length;

console.log(
    averageNum([10,100,40]),
    averageNum([10,100,1000]),
    averageNum([-50,0,50,200])
);

/*

35)

Write a function that takes an array of strings as argument
Return the longest string

myFunction(['help', 'me'])
Expected
'help'

myFunction(['I', 'need', 'candy'])
Expected
'candy'

*/

console.log('Exercise 35'.toUpperCase());

const longestString = (a: string[]): string => {
    let longestString: string = a[0];

    for (let i = 0; i < a.length; i++) {
        if (a[i].length > longestString.length) {
            longestString = a[i];
        } 
    }

    return longestString;
}

console.log(
    longestString(['help', 'me']),
    longestString(['I', 'need', 'candy'])
);

/*

36)

Write a function that takes an array as argument
It should return true if all elements in the array are equal
It should return false otherwise

myFunction([true, true, true, true])
Expected
true 

myFunction(['test', 'test', 'test'])
Expected
true 

myFunction([1,1,1,2])
Expected
false 

myFunction(['10',10,10,10])
Expected
false

*/

console.log('Exercise 36'.toUpperCase());

const isEqualElements = (a: (boolean | string | number)[]): boolean => {
    let firstElem: boolean | string | number = a[0];
    let result: boolean = true;

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== firstElem) {
            result = false;
        }
    }

    return result;
}

console.log(
    isEqualElements([true, true, true, true]),
    isEqualElements(['test', 'test', 'test']),
    isEqualElements([1,1,1,2]),
    isEqualElements(['10',10,10,10])
);

/*

37)

Write a function that takes arguments an arbitrary number of arrays
It should return an array containing the values of all arrays

myFunction([1, 2, 3], [4, 5, 6])
Expected
[1, 2, 3, 4, 5, 6]

myFunction(['a', 'b', 'c'], [4, 5, 6])
Expected
['a', 'b', 'c', 4, 5, 6]

myFunction([true, true], [1, 2], ['a', 'b'])
Expected
[true, true, 1, 2, 'a', 'b']

*/

console.log('Exercise 37'.toUpperCase());

const totalArr = (a: (number | string | boolean)[], b: (number | string | boolean)[], c?: (number | string | boolean)[]): (number | string | boolean)[] => a.concat(b, c || []);

console.log(
    totalArr([1, 2, 3], [4, 5, 6]),
    totalArr(['a', 'b', 'c'], [4, 5, 6]),
    totalArr([true, true], [1, 2], ['a', 'b'])
);

/*

38)

Write a function that takes an array of objects as argument
Sort the array by property b in ascending order
Return the sorted array

myFunction([{a:1,b:2},{a:5,b:4}])
Expected
[{a:1,b:2},{a:5,b:4}]

myFunction([{a:2,b:10},{a:5,b:4}])
Expected
[{a:5,b:4},{a:2,b:10}]

myFunction([{a:1,b:7},{a:2,b:1}])
Expected
[{a:2,b:1},{a:1,b:7}]

*/

console.log('Exercise 38'.toUpperCase());

interface newObj {
    a: number;
    b: number;
}

const sortedArrOfObjects = (a: newObj[]): newObj[] => a.sort((a, b) => a.b - b.b);

console.log(
    sortedArrOfObjects([{a:1,b:2},{a:5,b:4}]),
    sortedArrOfObjects([{a:2,b:10},{a:5,b:4}]),
    sortedArrOfObjects([{a:1,b:7},{a:2,b:1}])
);

/*

39)

Write a function that takes two arrays as arguments
Merge both arrays and remove duplicate values
Sort the merge result in ascending order
Return the resulting array

myFunction([1, 2, 3], [3, 4, 5])
Expected
[ 1, 2, 3, 4, 5 ]

myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42])
Expected
[ -11, -10, 5, 22, 41,  42, 333]

*/

console.log('Exercise 39'.toUpperCase());

const mergedArrWithNoDup = (a: number[], b: number[]): number[] => {
    let newArr: number[] = [...a, ...b];
    
    for (let i = 0; i < newArr.length; i++) {
        for (let j = i + 1; j < newArr.length; j++) {
            if (newArr[i] === newArr[j]) {
                newArr.splice(j, 1);
            }
        }
    }

    return newArr.sort((a, b) => a - b);
}

console.log(
    mergedArrWithNoDup([1, 2, 3], [3, 4, 5]),
    mergedArrWithNoDup([-10, 22, 333, 42], [-11, 5, 22, 41, 42])
);

/*

40)

Write a function that takes an array (a) and a number (b) as arguments
Sum up all array elements with a value greater than b
Return the sum

myFunction([1, 2, 3, 4, 5, 6, 7], 2)
Expected
25

myFunction([-10, -11, -3, 1, -4], -3)
Expected
1

myFunction([78, 99, 100, 101, 401], 99)
Expected
602

*/

console.log('Exercise 40'.toUpperCase());

const ElemSumWithB = (a: number[], b: number): number => {
    return a.reduce((accumulator, current) => {
        if (current > b) {
            accumulator += current;
        }

        return accumulator;
    }, 0);
}

console.log(
    ElemSumWithB([1, 2, 3, 4, 5, 6, 7], 2),
    ElemSumWithB([-10, -11, -3, 1, -4], -3),
    ElemSumWithB([78, 99, 100, 101, 401], 99)
);

/*

41)

Write a function that takes two numbers (min and max) as arguments
Return an array of numbers in the range min to max

myFunction(2, 10)
Expected
[2, 3, 4, 5, 6, 7, 8, 9, 10]

myFunction(1, 3)
Expected
[1, 2, 3]

myFunction(-5, 5)
Expected
[-5, -4, -3, -2, -1, 0,  1,  2,  3,  4, 5]

myFunction(2, 7)
Expected
[2, 3, 4, 5, 6, 7]

*/

console.log('Exercise 41'.toUpperCase());

const minMax = (min: number, max: number): number[] => {
    let newArr: number[] = [];

    for (let i = min; i <= max; i++) {
        newArr.push(i);
    }

    return newArr;
}

console.log(
    minMax(2, 10),
    minMax(1, 3),
    minMax(-5, 5),
    minMax(2, 7)
);

/*

42)

Write a function that takes an array of strings as argument
Group those strings by their first letter
Return an object that contains properties with keys representing first letters
The values should be arrays of strings containing only the corresponding strings
For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
{ a: ['Alf', 'Alice'], b: ['Ben']}

myFunction(['Alf', 'Alice', 'Ben'])
Expected
{ a: ['Alf', 'Alice'], b: ['Ben']}

myFunction(['Ant', 'Bear', 'Bird'])
Expected
{ a: ['Ant'], b: ['Bear', 'Bird']}

myFunction(['Berlin', 'Paris', 'Prague'])
Expected
{ b: ['Berlin'], p: ['Paris', 'Prague']}

*/

console.log('Exercise 42'.toUpperCase());

interface newObj17 {
    [key: string]: string[];
}

const propEqualToFirstLetter = (a: string[]): newObj17 => {
    let result: newObj17 = {};

    for (let i = 0; i < a.length; i++) {
        const eachElem = a[i];
        if(eachElem){
            const firstLetter = eachElem[0].toLowerCase();
            if (!result[firstLetter]) {
                result[firstLetter] = [];
            }
            result[firstLetter].push(eachElem);
        }
    }

    return result;
}

console.log(
    propEqualToFirstLetter(['Alf', 'Alice', 'Ben']),
    propEqualToFirstLetter(['Ant', 'Bear', 'Bird']),
    propEqualToFirstLetter(['Berlin', 'Paris', 'Prague'])
);

/*

43)

Write a function that takes an array with arbitrary elements and a number as arguments
Return a new array, the first element should be either the given number itself
or zero if the number is smaller than 6
The other elements should be the elements of the original array
Try not to mutate the original array

myFunction([1,2,3], 6)
Expected
[6,1,2,3]

myFunction(['a','b'], 2)
Expected
[0,'a','b']

myFunction([null,false], 11)
Expected
[11,null,false]

*/

console.log('Exercise 43'.toUpperCase());

const arbitraryArr = (a: (number | string | boolean)[], b: number): (number | string | boolean)[] => {
    let newArr: (number | string | boolean)[] = [...a];

    const isBSmaller = (b: number): number => b >= 6 ? b : 0;
    
    newArr.unshift(isBSmaller(b));

    return newArr;
}

console.log(
    arbitraryArr([1,2,3], 6),
    arbitraryArr(['a','b'], 2),
    arbitraryArr([null,false], 11)
);

/*

44)

Write a function that takes an array (a) and a value (n) as arguments
Save every nth element in a new array
Return the new array

myFunction([1,2,3,4,5,6,7,8,9,10],3)
Expected
[3,6,9]

myFunction([10,9,8,7,6,5,4,3,2,1],5)
Expected
[6,1]

myFunction([7,2,1,6,3,4,5,8,9,10],2)
Expected
[2,6,4,8,10]

*/

console.log('Exercise 44'.toUpperCase());

const everyNthElem = (a: number[], n: number): number[] => {
    let newArr: number[] = [];

    for (let i = 0; i < a.length; i++) {
        if (i % n === n - 1) {
            newArr.push(a[i]);
        }
    }

    return newArr;
}

console.log(
    everyNthElem([1,2,3,4,5,6,7,8,9,10],3),
    everyNthElem([10,9,8,7,6,5,4,3,2,1],5),
    everyNthElem([7,2,1,6,3,4,5,8,9,10],2)
);

/*

45)

Write a function that takes an object with two properties as argument
It should return the value of the property with key country

myFunction({  continent: 'Asia',  country: 'Japan'})
Expected
'Japan'

myFunction({  country: 'Sweden',  continent: 'Europe'})
Expected
'Sweden'

*/

console.log('Exercise 45'.toUpperCase());

interface newObj1 {
    continent: string;
    country: string;
}

const keyCountry = (a: newObj1): string => a.country;

console.log(
    keyCountry({  continent: 'Asia',  country: 'Japan'}),
    keyCountry({  country: 'Sweden',  continent: 'Europe'})
);

/*

46)

Write a function that takes an object with two properties as argument
It should return the value of the property with key 'prop-2'
Tip: you might want to use the square brackets property accessor

myFunction({  one: 1,  'prop-2': 2})
Expected
2

myFunction({  'prop-2': 'two',  prop: 'test'})
Expected
'two'

*/

console.log('Exercise 46'.toUpperCase());

interface newObj2 {
    one?: number;
    'prop-2'?: number | string;
    prop?: string;
}

const prop2 = (a: newObj2): number | string => a['prop-2'];

console.log(
    prop2({  one: 1,  'prop-2': 2}),
    prop2({  'prop-2': 'two',  prop: 'test'})
);

/*

47)

Write a function that takes an object with two properties and a string as arguments
It should return the value of the property with key equal to the value of the string

myFunction({  continent: 'Asia',  country: 'Japan'}, 'continent')
Expected
'Asia'

myFunction({  country: 'Sweden',  continent: 'Europe'}, 'country')
Expected
'Sweden'

*/

console.log('Exercise 47'.toUpperCase());

interface newObj3 {
    continent: string;
    country: string;
    [key: string]: string;
}

const propEqualToString = (a: newObj3, b: string): string | undefined => b in a ? a[b] : undefined;

console.log(
    propEqualToString({  continent: 'Asia',  country: 'Japan'}, 'continent'),
    propEqualToString({  country: 'Sweden',  continent: 'Europe'}, 'country')
);

/*

48)

Write a function that takes an object (a) and a string (b) as argument
Return true if a has a property with key b
Return false otherwise

myFunction({a:1,b:2,c:3},'b')
Expected
true

myFunction({x:'a',y:'b',z:'c'},'a')
Expected
false

myFunction({x:'a',y:'b',z:'c'},'z')
Expected
true

*/

console.log('Exercise 48'.toUpperCase());

interface newObj4 {
    a?: number;
    b?: number;
    c?: number;
    x?: string;
    y?: string;
    z?: string;
    [key: string]: string | number;
}

const isPropEqualToB = (a: newObj4, b: string): boolean | undefined => b in a ? true : false;

console.log(
    isPropEqualToB({a:1,b:2,c:3},'b'),
    isPropEqualToB({x:'a',y:'b',z:'c'},'a'),
    isPropEqualToB({x:'a',y:'b',z:'c'},'z')
);

/*

49)

Write a function that a string (a) as argument
Create an object that has a property with key 'key' and a value of a
Return the object

myFunction('a')
Expected
{key:'a'}

myFunction('z')
Expected
{key:'z'}

myFunction('b')
Expected
{key:'b'}

*/

console.log('Exercise 49'.toUpperCase());

interface newObj16 {
    [key: string]: string | undefined;
}

const ObjWithNewKey = (a: string): newObj16 => {
    return {key: a};
}

console.log(
    ObjWithNewKey('a'),
    ObjWithNewKey('z'),
    ObjWithNewKey('b')
);

/*

50)

Write a function that takes two strings (a and b) as arguments
Create an object that has a property with key 'a' and a value of 'b'
Return the object

myFunction('a','b')
Expected
{a:'b'}

myFunction('z','x')
Expected
{z:'x'}

myFunction('b','w')
Expected
{b:'w'}

*/

console.log('Exercise 50'.toUpperCase());

interface newObj5 {
    [key: string]: string | number;
}

const ObjWithNewKeyAndValue = (a: string, b: string): newObj5 => {
    return {[a]: b};
}

console.log(
    ObjWithNewKeyAndValue('a','b'),
    ObjWithNewKeyAndValue('z','x'),
    ObjWithNewKeyAndValue('b','w')
);

/*

51)

Write a function that takes two arrays (a and b) as arguments
Create an object that has properties with keys 'a' and corresponding values 'b'
Return the object

myFunction(['a','b','c'],[1,2,3])
Expected
{a:1,b:2,c:3}

myFunction(['w','x','y','z'],[10,9,5,2])
Expected
{w:10,x:9,y:5,z:2}

myFunction([1,'b'],['a',2])
Expected
{1:'a',b:2}

*/

console.log('Exercise 51'.toUpperCase());

interface newObj6 {
    [key: string]: string | number;
}

const ObjWithNewKeyAndValueFromArr = (a: (string | number)[], b: (string | number)[]): newObj6 => {
    const result: newObj6 = {};

    for (let i = 0; i < a.length; i++) {
        result[a[i]] = b[i];
    }

    return result;
}

console.log(
    ObjWithNewKeyAndValueFromArr(['a','b','c'],[1,2,3]),
    ObjWithNewKeyAndValueFromArr(['w','x','y','z'],[10,9,5,2]),
    ObjWithNewKeyAndValueFromArr([1,'b'],['a',2])
);

/*

52)

Write a function that takes an object (a) as argument
Return an array with all object keys

myFunction({a:1,b:2,c:3})
Expected
['a','b','c']

myFunction({j:9,i:2,x:3,z:4})
Expected
['j','i','x','z']

myFunction({w:15,x:22,y:13})
Expected
['w','x','y']

*/

console.log('Exercise 52'.toUpperCase());

interface newObj7 {
    [key: string]: number;
}

const ArrWithObjKeys = (a: newObj7): string[] => {
    const keys: string[] = [];

    for (const key in a) {
        keys.push(key);
    }

    return keys;
}

console.log(
    ArrWithObjKeys({a:1,b:2,c:3}),
    ArrWithObjKeys({j:9,i:2,x:3,z:4}),
    ArrWithObjKeys({w:15,x:22,y:13})
);

/*

53)

Write a function that takes an object (a) as argument
Return the sum of all object values

myFunction({a:1,b:2,c:3})
Expected
6

myFunction({j:9,i:2,x:3,z:4})
Expected
18

myFunction({w:15,x:22,y:13})
Expected
50

*/

console.log('Exercise 53'.toUpperCase());

// interface newObj8 {
//     [key: string]: number;
// }

const sumOfAllObjValues = (a: object): string[] => {
    return Object.values(a).reduce((a, b) => a + b);
}

console.log(
    sumOfAllObjValues({a:1,b:2,c:3}),
    sumOfAllObjValues({j:9,i:2,x:3,z:4}),
    sumOfAllObjValues({w:15,x:22,y:13})
);

/*

54)

Write a function that takes an object as argument
It should return an object with all original object properties
except for the property with key 'b'

myFunction({ a: 1, b: 7, c: 3 })
Expected
{ a: 1, c: 3 }

myFunction({ b: 0, a: 7, d: 8 })
Expected
{ a: 7, d: 8 }

myFunction({ e: 6, f: 4, b: 5, a: 3 })
Expected
{ e: 6, f: 4, a: 3 }

*/

console.log('Exercise 54'.toUpperCase());

interface newObj8 {
    [key: string]: number;
}

const allPropWithoutB = (a: newObj8) => {
    const {b, ...rest} = a;
    return rest;
}

console.log(
    allPropWithoutB({ a: 1, b: 7, c: 3 }),
    allPropWithoutB({ b: 0, a: 7, d: 8 }),
    allPropWithoutB({ e: 6, f: 4, b: 5, a: 3 })
);

/*

55)

Write a function that takes two objects as arguments
Unfortunately, the property 'b' in the second object has the wrong key
should be named 'd' instead
Merge both objects and correct the wrong property name
Return the resulting object
It should have the properties 'a', 'b', 'c', 'd', and 'e'

myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })
Expected
{ a: 1, b: 2, c: 3, e: 5, d: 4}

myFunction({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 })
Expected
{ a: 5, b: 4, c: 3, e: 2, d: 1}

????????????????????????????????????????????????????????????????????????????????????????????????????????? How to set an order??????
*/


console.log('Exercise 55'.toUpperCase());

interface newObj9 {
    [key: string]: number;
}

const correctPropertyName = (a: newObj9, b: newObj9): newObj9 => {
    const {b: d, ...rest} = b;
    return {...a, d, ...rest};
}

console.log(
    correctPropertyName({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }),
    correctPropertyName({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }),
);

/*

56)

Write a function that takes an object (a) and a number (b) as arguments
Multiply all values of 'a' by 'b'
Return the resulting object

myFunction({a:1,b:2,c:3},3)
Expected
{a:3,b:6,c:9}

myFunction({j:9,i:2,x:3,z:4},10)
Expected
{j:90,i:20,x:30,z:40}

myFunction({w:15,x:22,y:13},6)
Expected
{w:90,x:132,y:78}

*/ 

console.log('Exercise 56'.toUpperCase());

interface newObj10 {
    [key: string]: number;
}

const multiplyValues = (a: newObj10, b: number): newObj10 => {
    const result: newObj10 = {};

    for (const key in a) {
        result [a[key]] = a[key] * b;
    }

    return result;
}

console.log(
    multiplyValues({a:1,b:2,c:3},3),
    multiplyValues({j:9,i:2,x:3,z:4},10),
    multiplyValues({w:15,x:22,y:13},6)
);

/*

57)

Write a function that takes an object as argument
Somehow, the properties and keys of the object got mixed up
Swap the Javascript object's key with its values and return the resulting object

myFunction({z:'a',y:'b',x:'c',w:'d'})
Expected
{a:'z',b:'y',c:'x',d:'w'}

myFunction({2:'a',4:'b',6:'c',8:'d'})
Expected
{a:'2',b:'4',c:'6',d:'8'}

myFunction({a:1,z:24})
Expected
{1:'a',24:'z'}

*/ 

console.log('Exercise 57'.toUpperCase());

interface newObj11 {
    [key: string | number]: string | number;
}

const swapKeys = (a: newObj11): newObj11 => {
    const result: newObj11 = {}; 

    for (const key in a) {
        result[a[key]] = key;
    }

    return result;
}

console.log(
    swapKeys({z:'a',y:'b',x:'c',w:'d'}),
    swapKeys({2:'a',4:'b',6:'c',8:'d'}),
    swapKeys({a:1, z:24})
);

/*

58)

Write a function that takes an object as argument
Some of the property values contain empty strings
Replace empty strings and strings that contain only whitespace with null values
Return the resulting object

myFunction({ a: 'a', b: 'b', c: '' })
Expected
{ a: 'a', b: 'b', c: null }

myFunction({ a: '', b: 'b', c: ' ', d: 'd' })
Expected
{ a: null, b: 'b', c: null, d: 'd' }

myFunction({ a: 'a', b: 'b ', c: ' ', d: '' })
Expected
{ a: 'a', b: 'b ', c: null, d: null }

*/ 

console.log('Exercise 58'.toUpperCase());

interface newObj12 {
    [key: string]: string;
}

const replaceProps = (a: newObj12): newObj12 => {
    const result: newObj12 = {};

    for (let prop in a) {
        if (a.hasOwnProperty(prop) && a[prop].trim() === '') {
            result[prop] = null;
        }
        else {
            result[prop] = a[prop]
        }

    }

    return result;
}

console.log(
    replaceProps({ a: 'a', b: 'b', c: '' }),
    replaceProps({ a: '', b: 'b', c: ' ', d: 'd' }),
    replaceProps({ a: 'a', b: 'b ', c: ' ', d: '' })
);

/*

59)

Write a function that takes an object as argument containing properties with personal information
Extract firstName, lastName, size, and weight if available
If size or weight is given transform the value to a string
Attach the unit cm to the size
Attach the unit kg to the weight
Return a new object with all available properties that we are interested in

myFunction({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67})
Expected
{fn: 'Lisa', ln: 'Müller', size: '175cm', weight: '67kg'}

myFunction({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102})
Expected
{fn: 'Martin', ln: 'Harper', weight: '102kg'}

myFunction({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71})
Expected
{fn: 'Andrew', ln: 'Harper', size: '175cm', weight: '71kg'}

myFunction({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'})
Expected
{fn: 'Matthew', ln: 'Müller'}

*/ 

console.log('Exercise 59'.toUpperCase());


interface newObj13 {
    [key: string]: string | number;
}

const transofrmWeightAndSize = (a: newObj13): newObj13 => {
    let result: newObj13 = {};

    for (let key in a) {
        if (key === 'weight') {
            result[key] = `${a[key]}kg`;
        } else if (key === 'size') {
            result[key] = `${a[key]}cm`;
        } else {
            result[key] = a[key];
        }
    }

    return result;
}

console.log(
    transofrmWeightAndSize({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67}),
    transofrmWeightAndSize({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102}),
    transofrmWeightAndSize({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71}),
    transofrmWeightAndSize({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'})
);

/*

60)

Write a function that takes an array of objects and a string as arguments
Add a property with key 'continent' and value equal to the string to each of the objects
Return the new array of objects
Tip: try not to mutate the original array

myFunction([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia')
Expected
[{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]

myFunction([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe')
Expected
[{ city: 'Stockholm', country: 'Sweden', continent: 'Europe' }, { city: 'Paris', country: 'France', continent: 'Europe' }]

*/ 

console.log('Exercise 60'.toUpperCase());


// interface newObj14 {
//     city: string;
//     country: string;
//     continent?: string;
// }

// const keyWithValueOfString = (a: newObj14[] | (b: newObj14, c: newObj14), d: string): newObj14[] => {

// }

// console.log(
//     keyWithValueOfString([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'),
//     keyWithValueOfString({ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }),
//     keyWithValueOfString([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe'),
//     keyWithValueOfString({ city: 'Stockholm', country: 'Sweden', continent: 'Europe' }, { city: 'Paris', country: 'France', continent: 'Europe' })
// );

/*

61)

Write a function that takes an array of numbers as argument
Convert the array to an object
It should have a key for each unique value of the array
The corresponding object value should be the number of times the key occurs within the array

myFunction([1,2,2,3])
Expected
{1:1,2:2,3:1}

myFunction([9,9,9,99])
Expected
{9:3,99:1}

myFunction([4,3,2,1])
Expected
{1:1,2:1,3:1,4:1}

*/ 

console.log('Exercise 61'.toUpperCase());

interface newObj18 {
    [key: number]: number;
}

const qtyOfcopiedKeysFromArray = (a: number[]): newObj18 => {
    let result: newObj18 = {};

    for (let i = 0; i < a.length; i++) {
        if (!result[a[i]]) {
            result[a[i]] = 1;
        } else {
            result[a[i]]++;
        }
    }
    return result;
}

console.log(
    qtyOfcopiedKeysFromArray([1,2,2,3]),
    qtyOfcopiedKeysFromArray([9,9,9,99]),
    qtyOfcopiedKeysFromArray([4,3,2,1])
);

/*

62)

Write a function that takes two date instances as arguments
It should return true if the dates are equal
It should return false otherwise

myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))
Expected
false

myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))
Expected
true

myFunction(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))
Expected
false

*/ 

console.log('Exercise 62'.toUpperCase());

const areDatesEqual = (a: Date, b: Date): boolean => {
    if (a.getTime() === b.getTime()) {
        return true;
    }
    else {
        return false;
    }
}

console.log(
    areDatesEqual(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')),
    areDatesEqual(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')),
    areDatesEqual(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))
);

/*

63)

Write a function that takes two date instances as argument
It should return the number of days that lies between those dates

myFunction(new Date('2020-06-11'), new Date('2020-06-01'))
Expected
10

myFunction(new Date('2000-01-01'), new Date('2020-06-01'))
Expected
7457

*/ 

console.log('Exercise 63'.toUpperCase());

const numOfDaysBetween = (a: Date, b: Date): number => {
    if (a.getTime() > b.getTime()) {
        return Math.floor((a.getTime() - b.getTime()) / (24*60*60*1000));
    }
    else {
        return Math.floor((b.getTime() - a.getTime()) / (24*60*60*1000));
    }

}

console.log(
    numOfDaysBetween(new Date('2020-06-11'), new Date('2020-06-01')),
    numOfDaysBetween(new Date('2000-01-01'), new Date('2020-06-01'))
);

/*

64)

Write a function that takes two date instances as argument
It should return true if they fall on the exact same day
It should return false otherwise

myFunction(new Date('2000/01/01'), new Date('2000/01/01'))
Expected
true 

myFunction(new Date('2000/01/01'), new Date('2000/01/02'))
Expected
false 

myFunction(new Date('2001/01/01'), new Date('2000/01/01'))
Expected
false 

myFunction(new Date('2000/11/01'), new Date('2000/01/01'))
Expected
false

*/ 

console.log('Exercise 64'.toUpperCase());

const isSameDay = (a: Date, b: Date): boolean => {
    if (a.getTime() >= b.getTime()) {
        if (a.getTime() - b.getTime() === 0) {
            return true;
        }
        else {
            return false; 
        }
    }
    if (a.getTime() <= b.getTime()) {
        if (b.getTime() - a.getTime() === 0) {
            return true;
        }
        else {
            return false; 
        }
    }
}

console.log(
    isSameDay(new Date('2000/01/01'), new Date('2000/01/01')),
    isSameDay(new Date('2000/01/01'), new Date('2000/01/02')),
    isSameDay(new Date('2001/01/01'), new Date('2000/01/01')),
    isSameDay(new Date('2000/11/01'), new Date('2000/01/01'))
);

/*

65)

SPREAD OPERATOR 
Use spread operator in all tasks

Write a function that takes two number arrays as parameters 
and return an array which contains elements from both 
arrays

myFunction([1, 2], [3, 4]) 
Expected
[1, 2, 3, 4]

myFunction([1, 2], [3, 4, 5, 6]) 
Expected
[1, 2, 3, 4, 5, 6]

*/ 

console.log('Exercise 65'.toUpperCase());

const allElemsInOneArray = (a: number[], b: number[]): number[] => {
    return [...a, ...b];
}

console.log(
    allElemsInOneArray([1, 2], [3, 4]),
    allElemsInOneArray([1, 2], [3, 4, 5, 6])
);

/*

66)

Write a function that takes an array and a string as parameters 
and return an array which contains all elements from the given array
and the given string as the last element

myFunction(['Apple', 'Orange', 'Banana'], 'Kiwi'); 
Expected
['Apple', 'Orange', 'Banana', 'Kiwi']

*/ 

console.log('Exercise 66'.toUpperCase());

const allElemsInOneArrayWithString = (a: string[], b: string): string[] => {
    return [...a, b];
}

console.log(
    allElemsInOneArrayWithString(['Apple', 'Orange', 'Banana'], 'Kiwi')
);

/*

67)

Write a function that takes an array and a string as parameters 
and return an array which contains all elements from the given array
and the given string as the first element

myFunction(['Apple', 'Orange', 'Banana'], 'Kiwi'); 
Expected
['Kiwi', 'Apple', 'Orange', 'Banana']

*/ 

console.log('Exercise 67'.toUpperCase());

const allElemsInOneArrayWithStringFirst = (a: string[], b: string): string[] => {
    return [b, ...a];
}

console.log(
    allElemsInOneArrayWithStringFirst(['Apple', 'Orange', 'Banana'], 'Kiwi')
);

/*

68)

Write a function that takes two objects as parameters 
and return an object which contains properties from both 
objects

myFunction({ a:1, b:2 }, { c:3, d:4 }) 
Expected
{ a:1, b:2, c:3, d:4 }

myFunction({ a:1, b:2 }, { c:3, d:4, e:5, f:6 }) 
Expected
{ a:1, b:2, c:3, d:4, e:5, f:6 }

*/ 

console.log('Exercise 68'.toUpperCase());

interface newObj19 {
    [key: string]: number;
}

const allElemsInOneObj = (a: newObj19, b: newObj19): newObj19 => {
    return {...a, ...b};
}

console.log(
    allElemsInOneObj({ a:1, b:2 }, { c:3, d:4 }),
    allElemsInOneObj({ a:1, b:2 }, { c:3, d:4, e:5, f:6 })
);

/*

69)

Write a function that takes an object and a string as parameters 
and return an object which contains properties from the given object
and a new property favoriteMovie with the value equal to the given string

myFunction({ eyeColor: 'green', age: 10 }, 'Garfield') 
Expected
{ eyeColor: 'green', age: 10, favoriteMovie:  'Garfield' }

myFunction({ eyeColor: 'blue', age: 15 }, 'Twilight') 
Expected
{ eyeColor: 'blue', age: 15, favoriteMovie:  'Twilight' }

*/ 

console.log('Exercise 69'.toUpperCase());

interface newObj20 {
    [key: string]: number | string;
}

const addPropInObj = (a: newObj20, b: string): newObj20 => {
    let result = {...a};

    for (const key in a) {
        if (key !== 'favoriteMovie') {
            result.favoriteMovie = b;
        }
    }

    return result;
}

console.log(
    addPropInObj({ eyeColor: 'green', age: 10 }, 'Garfield'),
    addPropInObj({ eyeColor: 'blue', age: 15 }, 'Twilight')
);

/*
*/