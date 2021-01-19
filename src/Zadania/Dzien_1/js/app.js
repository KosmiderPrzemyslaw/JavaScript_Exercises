var number = 2;
var array = [2, 3, 4];

function getAllElementsFromArray() {
    array.forEach(function (value, index, array) {
        console.log("Element :" + value)
    });
}

getAllElementsFromArray();

function getNumber(array, number) {
    const anyNumber = array.some(function (value) {
        return value === number;
    });
    console.log(anyNumber)
}

getNumber(array, number);
getNumber([33, 54, 2, 1, 4, 199], 5);


array.some(function (value, index, array) {
    return value === number;
});


function createIdentityMatrix(rows) {
    const array = [];
    for (let i = 0; i < rows; i++) {
        array[i] = [];
        for (let j = 0; j < rows; j++) {
            if (array[i] === array[j]) {
                array[i][j] = 1;
            } else array[i][j] = 0;
        }
    }
    return print2DArray(array);
}

function print2DArray(array) {
    let row = "";
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            row += array[i][j] + " ";
        }
        console.log("[" + [i] + "] = [" + row + "]");
        row = "";
    }
}

createIdentityMatrix(4);

const Tree = function (type) {
    this.type = type;

};

Tree.prototype.bloom = function () {
    console.log("I'm blooming say " + this.type);
};


const oak = new Tree("oak");
const ash = new Tree("ash");
const beech = new Tree("beech");

console.log(oak.hasOwnProperty(oak.bloom));
console.log(ash.hasOwnProperty(ash.bloom));
console.log(beech.hasOwnProperty(beech.bloom));
oak.bloom();
ash.bloom();
beech.bloom();

