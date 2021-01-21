console.log(typeof null);
console.log(typeof undefined);
console.log(typeof 2);
console.log(typeof 0);
console.log(typeof 'A');
console.log(typeof "ALA");


var Car = function (mark, model) {
    this.mark = mark;
    this.model = model;
};

function Animal(type) {
    this.type = type;
}
Animal.prototype.sayVoice = function (voice) {
    console.log(voice);
};

var toyota = Object.create(Car);
toyota.mark = "toyota";
toyota.model = "avensis";

var elephant = new Animal("elephant");

var ford = new Car("ford", "mustang");
console.log(typeof ford);

var id = setInterval(function () {
    console.log("jestem  wywoływany co 2 sekundy");
}, 2000);

clearInterval(id);