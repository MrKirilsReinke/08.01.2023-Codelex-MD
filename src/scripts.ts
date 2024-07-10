
const arrayOfNumbers: number[] = [1, 1, 2, 2, 2, 3, 4, 4, 4, 4, 5, 6, 6, 6, 7, 6, 6]

console.log('Option 1 - to use includes() method'.toUpperCase());

const removeDuplicates1 = (arrayOfNumbers: number[]): number[] => {
    const arrayOfUniqueNumbers: number[] = []

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const currentValue = arrayOfNumbers[i]
        if (arrayOfUniqueNumbers.length === 0) {
            arrayOfUniqueNumbers.push(currentValue)
        } else {
           if (!arrayOfUniqueNumbers.includes(currentValue)) {
            arrayOfUniqueNumbers.push(currentValue)
           } else {
            continue;
           }
        }
    }

    return arrayOfUniqueNumbers;
}

console.log(removeDuplicates1(arrayOfNumbers))

console.log('Option 2 - to use find() method'.toUpperCase());

const removeDuplicates2 = (arrayOfNumbers: number[]): number[] => {
    const arrayOfUniqueNumbers: number[] = []

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const currentValue = arrayOfNumbers[i]

        if (arrayOfUniqueNumbers.length === 0) {
            arrayOfUniqueNumbers.push(currentValue)
        } else {
            for (let j = 0; j < arrayOfNumbers.length; j++) {
                if (arrayOfUniqueNumbers.find(currentUniqueValue => currentUniqueValue === currentValue)) {
                    continue
                } else {
                    arrayOfUniqueNumbers.push(currentValue)
                }
            }
        }

    }

    return arrayOfUniqueNumbers;
}

console.log(removeDuplicates2(arrayOfNumbers))

console.log('Option 3 - to use filter() method'.toUpperCase()); 

const removeDuplicates3 = (arrayOfNumbers: number[]): number[] => {
    const filteredArrayOfNumbers = arrayOfNumbers.filter((value, index) => arrayOfNumbers.indexOf(value) === index)

    return filteredArrayOfNumbers;
}

console.log(removeDuplicates3(arrayOfNumbers))

