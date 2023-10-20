function additionCalculator(...numbers) {
    return numbers.reduce((sum, item) => sum + item, 0);
}

function subCalculator(...numbers) {
    if (numbers.length === 0) {
      return 0;
    }
    return numbers.reduce((sum, item) => sum - item);
  }

function divCalculator(...numbers){
    if (numbers.length === 0){
        return 0
    }
    return numbers.reduce((sum,item)=> sum / item)
}

function divCalculator(...numbers){
    if (numbers.length === 0){
        return 0
    }
    return numbers.reduce((sum,item)=> sum / item)
}


module.exports = {
    additionCalculator,
    subCalculator,
    divCalculator
};
