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

function getFirstWrongElement(array) {
    var firstWrongElement;
    array.forEach(function (element, index, array) {

        if (array[index + 1] % element !== 0 && array[index + 1] !== undefined) {
            firstWrongElement = array[index + 1];
            return console.log(firstWrongElement);
        }
    });
    return console.log(null)
}

getFirstWrongElement([1, 5, 10, 14, 28, 84]);//=> 14
getFirstWrongElement([3, 5, 15, 45]);// => 5
getFirstWrongElement([1, 8, 32, 128, 1024]);// => null

function getFirstWrongElementCorrect(array) {
    let firstWrongElement;

    for (let i = 0; i < array.length; i++) {
        if (array[i + 1] % array[i] !== 0) {
            firstWrongElement = array[i + 1];
            if (firstWrongElement === undefined) {
                return console.log(null);
            } else {

                return console.log(firstWrongElement);
            }
        }
    }
}

console.log("Get firts wrong element some iteration");
getFirstWrongElementCorrect([1, 5, 10, 14, 28, 84]);
getFirstWrongElementCorrect([3, 5, 15, 45]);
getFirstWrongElementCorrect([1, 8, 32, 128, 1024]);


function getLastNumbers(number, array) {

    let arrayToReturn = [];
    if (number === undefined) {
        return console.log(arrayToReturn);
    }
    let reverse = array.reverse();
    for (let i = 0; i < number; i++) {
        arrayToReturn.push(reverse[i]);
    }
    return console.log(arrayToReturn.reverse());
}

getLastNumbers(2, [1, 2, 3, 4, 5, 6, 7]);// => [6, 7]
getLastNumbers(4, [6, 7, 8, 10, 11, 12, 13, 14, 15]);// => [12, 13, 14, 15]
getLastNumbers([-4, -3, -2, 0, 1, 2, 3, 4]);// => []
getLastNumbers('ala', [-4, -3, -2, 0, 1, 2, 3, 4]);// => []