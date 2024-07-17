/**
 * Activity1: If-Else Statements
 */
// Program to check whether a number is positive, negative or Zero.
function task1(num) {
    if(num == 0) {
        console.log('Number is Zero');
    } else if(num > 0) {
        console.log('Number is Positive');
    } else if( num < 0) {
        console.log('Number is Negative')
    } else {
        console.log('Invalid Input')
    }
}
task1(-1)


/**
 * Activity 2: Nested if-else Statements
 */
function task3(num1, num2, num3) {
    if( num2 > num3 ) {
        if( num1 > num2 ) {
            console.log(num1+' is largest!');
        } else {
            console.log(num2+ ' is largest!');
        }
    } else if(num3 > num2) {
        if(num1 > num3) {
            console.log(num1+' is largest!');
        } else {
            console.log(num3+' is largest!');
        }
    } else {
        console.log('All are same')
    }
}
task3(5,5,2)


/**
 * Activity3: Switch Case
 */
// Give Grade based on the marks out of 5
function task4(marks) {
    switch(marks) {
        case 5 :
            console.log('A Grade')
            break;
        case 4 :
            console.log('B Grade')
            break;
        case 3:
            console.log('C Grade')
            break;
        case 2:
            console.log('D Grade')
            break;
        case 1:
            console.log('E Grade')
            break;
        case 0:
            console.log('F Grade')
            break;
        default:
            console.log('Invalid marks')
            break;
    }
}
task4(3)


/**
 * Activity5: Combinig Conditions
 */
function task7(year) {
    if( typeof year !== 'number' ) {
        console.log('Please Enter a valid year!')
        return
    }

    if( year % 4 === 0 ) {
        console.log(year+ ' is a leap year')
    } else {
        console.log(year+ ' is not a leap year')
    }
}
task7(2024)