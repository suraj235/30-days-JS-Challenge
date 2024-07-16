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
