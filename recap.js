function largestElement(numbers) {
    let max = numbers[0];
    for (i = 0; i < numbers.lenght; i++) {
        const element = numbers[i];
        if (element > max) {
            max = element;
        }
    }

}


function smallestElement(numbers) {
    let max = numbers[0];
    for (i = 0; i < numbers.lenght; i++) {
        const element = numbers[i];
        if (element < min) {
            min = element;
        }
    }
    return element;
}

const smallestNumber = smallestElement([3, 4, 6, 7, 8, 9]);
console.log('this is number', smallestNumber);