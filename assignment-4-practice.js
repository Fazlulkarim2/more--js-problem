// test one

// var name = 'karim';


//  test two

// let myNumber = 5;
// const dadiName = ' karima'
// myNumber = myNumber + 2;
//  console.log(myNumber)
// console.log(myNumber);

// test three 

// var num1 = 8;
// var num2 = 7;
// var sum = num1 % num2;
// console.log(sum);

// test four

// var potatoPrice = 30;
// var orangePrice = 30;
// var comparisonPrice = potatoPrice >= orangePrice;
// console.log(comparisonPrice);

// test five

// var x = 2;
// var y = 5;
// console.log(x < 9 && y > 4);
// console.log(x == 2 || y != 8);

// test six 

// var isRaining = true;
// if (isRaining == true) {
//     console.log('office a jabo na');
// }
// else {
//     console.log('office a jabo ');
// }

// test seven 


// var i = 7;
// while (i <= 19) {
//     console.log(i);
//     i += 2;
// }

// test 8 

// var numbers = [4, 5, 9, 1, 3];
// var totalElement = numbers.length;
// console.log(numbers);
// numbers[4] = 45;
// console.log(numbers);
// numbers.push(19, 20);
// console.log(numbers);
// numbers.pop()
// console.log(numbers);

// test 9 
// for (i = 0; i <= 20; i++) {
//     console.log(i);
// }
// const numbers = [5, 7, 9, 9, 3, 5, 8];
// for (myNumbers of numbers);
// console.log(myNumbers);



// self assesment

// first ssesment 

// conver feetToinch use function 

// function feetToinch(feet) {
//     inch = feet * 12
//     return inch
// }
// var myInch = feetToinch(466);
// console.log(myInch);

//  second assesment 

// function centimeterToMeter(centimeter) {
//     meter = centimeter / 100;
//     return meter;
// }
// var myMeter = centimeterToMeter(466);
// console.log(myMeter);

// third assesment 

// function paperRequirments(firstBooksQuantity, secondBooksQuantity, thirdBooksQuantity) {

//     const firstBooksPages = 100;
//     const secondBooksPages = 200;
//     const thirdBooksPages = 300;
//     const firstBooksPagesQuantity = firstBooksQuantity * firstBooksPages;
//     const secondBooksPagesQuantity = secondBooksQuantity * secondBooksPages;
//     const thirdBooksPagesQuantity = thirdBooksQuantity * thirdBooksPages;
//     const totalPages = firstBooksPagesQuantity + secondBooksPagesQuantity + thirdBooksPagesQuantity;
//     return totalPages;

// }

// const allBookPages = paperRequirments(10, 5, 3);
// console.log('total pages number', allBookPages);

// fourth assesment

// function bestfriend(friends) {
//     let largest = friends[0];
//     for (const friend of friends) {
//         if (friend.length > largest.length) {
//             largest = friend;
//         }
//     }
//     return largest;
// }

// const allFriends = bestfriend(['alamin', 'rasel howlader', 'jala', 'fazlul', 'fazlul karim afnan']);
// console.log('my best friend', allFriends);

// assesment 5 


function positveNumbers(number) {
    let unique = [];
    for (i = 0; i < numbers.length; i++) {
        const Positive = numbers[i];
        if (Positive > 0) {
            unique.push(Positive);
        }
    }
    return unique;
}
const numbers = [4, 8, -12, 7, -8, 19, -3];
const myPositive = positveNumbers(numbers);
console.log('this is positive number', myPositive);
