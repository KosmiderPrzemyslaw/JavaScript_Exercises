function createIdentityMatix(rows) {
    const array = [];

    for (let i = 0; i < rows; i++) {
        array[i] = []
        for (let j = 0; j < rows; j++) {
            if(array[i] === array[j]){
                array[i][j] = 1;
            }
            else array[i][j] = 0;
        }
    }
    const Tree = function (type) {
        this.type = type;
    }

    const dab = new Tree("dąb")
    const klon = new Tree('klon')
    Tree.prototype.bloom = function () {
        
    }
}