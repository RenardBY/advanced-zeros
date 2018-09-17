module.exports = function getZerosCount(number, base) {

  function isPrimeNumber(number) {
    let result = true;
    for (let index = 2; index < number; index++) {
      if ( number % index == 0) result = false;
            
    }
    return result;
  }
  
  function countZeros(number, base, degreeOf) {
    let result = 0;
    while(number > 0)
    {
      number = Math.floor(number/base);
      result += number;
    }
    return Math.floor(result/degreeOf);  
  }

  function createArrayOfPrimeNumber(base){
    let arrayOfPrimeNumber = [];
    let baseTemp = base;
    while (baseTemp > 1) {
      if ( (baseTemp % 2) == 0 ) {
        arrayOfPrimeNumber.push(2);
        baseTemp = baseTemp / 2;
      }
      else
        for (let index = 3; index < base; index = index+2 ) {
          if ( (baseTemp % index) == 0 ) {
            arrayOfPrimeNumber.push(index);
            baseTemp = baseTemp / index;            
            break;
          } 
      }
  }
  arrayOfPrimeNumber.sort((a, b) => b - a);
  return arrayOfPrimeNumber;
  }

  // your implementation
  if (isPrimeNumber(base)) return countZeros(number, base, 1); 
  else {

    let array = createArrayOfPrimeNumber(base);
    numberFirst = array[0];
    numberSecond = array[array.length-1];
    degreeFirst = array.join('').split(numberFirst).length - 1;
    degreeSecond = array.join('').split(numberSecond).length - 1; 
    bestNumber = degreeSecond > 4 ? numberSecond : numberFirst;
    degreeOf = degreeSecond > 4 ? degreeSecond : degreeFirst;
    if(degreeSecond > 4 ){
      bestNumber = Math.pow(numberSecond,degreeSecond)>Math.pow(numberFirst,numberSecond) ? numberSecond : numberFirst;
      degreeOf = Math.pow(numberSecond,degreeSecond)>Math.pow(numberFirst,numberSecond) ? degreeSecond : degreeFirst;        
    }    
    return countZeros(number, bestNumber, degreeOf);
  }

}