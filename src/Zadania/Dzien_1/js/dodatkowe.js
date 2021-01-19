function addTheSameNumbers(number, array) {
    let sum = 0;

    const check = array.some(function (element) {
        return element === number;
    });

    if (check === true) {
        array.filter(function (element) {
            if (element === number) {
                sum += element;
            }
        });
        return console.log(sum);
    } else {
        return console.log(null);
    }
}

addTheSameNumbers(7, [4, 7, 24, 7, 0, 10]);
addTheSameNumbers(9, [33, 54, 2, 1, 9, 100]);// => 9
addTheSameNumbers(0, [33, 0, 2, 0, 9, 0]);// => 0
addTheSameNumbers(43, [6, 0, 2, 2, 3, 46]);// => null


function powers(number) {
    if (number <= 0) {

    }
}