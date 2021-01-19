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
    const array = [];
    let pow = 0;
    let number1 = 0;
    if (number <= 0) {
        return array;
    } else {
        while (number1 < 200) {
            number1 = Math.pow(number, pow);
            pow += 1;
            if (number1 < 200) {
                array.push(number1);
            }
        }
    }
    return console.log(array.reverse());
}

powers(2);
powers(5);