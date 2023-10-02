// console.log(Math.min(50,80));

/* Math.min() - ni qo'lda yozilgani! */

function mathMin(a, b) {
    if (a <= b) {
        console.log(a);
    }else if( a >=b ){
        console.log(b);
    }
};

mathMin(140, -50);
mathMin(30, 50);
mathMin(60, 50);
mathMin(50, 40);

//===========================================================
// console.log(Math.max(45 , 96) );

/* Math.max() - ni qo'lda yozilgani! */

function mathMax(a, b) {
    if (a >= b) {
        console.log(a);
    }else if( a <=b ){
        console.log(b);
    }
};


mathMax(140, -50);
mathMax(30, 51);
mathMax(39, 88);
mathMax(10, 49);

//=========================================================== Math.sqrt()

console.log(Math.sqrt(25));

function customSqrt(number, epsilon = 1e-10) {
    if (number < 0) {
      return NaN;
    }
  
    let guess = number;
    while (Math.abs(guess * guess - number) > epsilon) {
      guess = 0.5 * (guess + number / guess);
    }
  
    return guess;
  }

  console.log(customSqrt(25));


//===========================================================   Math.cbrt()
console.log(Math.cbrt(64));


function customCbrt(number, epsilon = 1e-10) {
    let guess = number; // Начальное предположение
  
    while (Math.abs(guess * guess * guess - number) > epsilon) {
      guess = (2 * guess + number / (guess * guess)) / 3;
    }
  
    return guess;
}

console.log(Math.floor(customCbrt(64)));
  


//===========================================================  (Math.abs())

// console.log(Math.abs(-100));


function customAbs(number) {
  if (number < 0) {
    return -number;
  } else {
    return number;
  }
}


console.log(customAbs(-180));

//===========================================================  