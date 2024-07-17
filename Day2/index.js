/**
 * Activity 1: Arithmetic Operations
 * Task 1 - 4
 */
const ArithmeticOperationsHandler = ( num1, num2, operator ) => {
    let result ;
    switch(operator) {
        case '+':
            result = num1 + num2
            break;
        case '-':
            // Ternary Operator
            result = num1 > num2 ? num1 - num2 : num2 - num1
            break;
        case '*':
            result = num1 * num2
            break;
        case '/':
            result = num1 / num2
            break;
        default:
            result = 'Invalid operator'
            break;
    }
    return result;
}

// Addition
console.log(ArithmeticOperationsHandler(10, 12, '+'));
// Substraction
console.log(ArithmeticOperationsHandler(10, 12, '-'));
// Multiplication
console.log(ArithmeticOperationsHandler(10, 12, '*'));
// Division
console.log(ArithmeticOperationsHandler(10, 12, '/'));

// Task 5 - Find remainder
function getReminder( num1, num2 ) {
    return num1 % num2
}
console.log(getReminder(8, 3))


/**
 * Activity2: Assignment Operator.
 */
let number1 = 10
console.log(number1)
console.log(number1 +=5)
console.log(number1 -=5)


/**
 * Activity3: Comparision Operator.
 */
// Task 8
function task8(num1, num2) {
    // Ternary Operator
    num1 > num2 ? console.log(num1+' is greater than '+num2) : console.log(num2+' is greater than '+num1)
    num1 < num2 ? console.log(num1+' is lesser than '+num2) : console.log(num2+' is lesser than '+num1)
}
task8(9, 7);

// Task 9
function task9(num1, num2) {
    // Ternary Operator
    num1 >= num2 ? console.log(num1+' is greater than or equal '+num2) : console.log(num2+' is greater than or equal '+num1)
    num1 < num2 ? console.log(num1+' is lesser than or equal '+num2) : console.log(num2+' is lesser than or equal '+num1)
}
task9(5, 6);

// Task 10
function task10(num1, num2) {
    // Ternary Operator
    num1 == num2 ? console.log(num1+' is equal to '+num2) : console.log(num2+' is not equal to '+num1)
    num1 === num2 ? console.log(num1+' is equal to '+num2) : console.log(num2+' is not equal to '+num1) // === checks the type also.
}
task10(5, '5');


/**
 * Activity4: Logical Operators.
 */
// Task 11
function task11() {
    const array = [2, 4, 6];
    if( typeof array === 'object' && array.length > 0 ) {
        console.log('Length of array is: '+ array.length)
    } else {
        console.log('Not an array!')
    }
}
task11()

// Task 12
function task12(array) {
    if( typeof array === 'object' || typeof array === 'number' ) {
        console.log('Type of array is: '+ typeof array)
    } else {
        console.log('Invalid Input!')
    }
}
task12(3)

// Task 13 
function task13(input) {
    console.log(!input)
}
task13(true)


/**
 * Activity 5: Ternary Operator - ALREADY COVERED IN ABOVE ACTIVITIES.
 */